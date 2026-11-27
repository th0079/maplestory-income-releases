import { createHash } from 'node:crypto'
import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const FORBIDDEN_LITERALS = [
  '카카오페이',
  '후원 QR',
  'donation-kakaopay-qr',
  'kakaopay',
  'DevAdmin',
  'NoticeFetcher',
  'ImpactAnalyzer'
]

const FORBIDDEN_PATTERNS = [
  {
    label: '공식 앱/프로그램 오인 표현',
    regex: /(?<!메이플스토리\s+)공식\s+(프로그램|앱|애플리케이션|클라이언트|도구|배포)(?![^\n.]*아닙니다)/
  },
  {
    label: '넥슨 공식 오인 표현',
    regex: /넥슨\s+공식(?!\s+(?:프로그램이\s+아닙니다|안내|홈페이지|문서|API|데이터))/
  },
  {
    label: '정식 버전/출시 오인 표현',
    regex: /정식\s+(버전|프로그램|앱|클라이언트|출시|지원)/
  }
]

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])

function normalizeTag(tag) {
  const trimmed = String(tag ?? '').trim()
  if (!trimmed) return ''
  return trimmed.startsWith('v') ? trimmed : `v${trimmed}`
}

function stripVersion(tag) {
  return String(tag ?? '')
    .trim()
    .replace(/^v/i, '')
}

function isRestrictedLine(text) {
  const lower = text.toLowerCase()
  return (
    FORBIDDEN_LITERALS.some((term) => lower.includes(term.toLowerCase())) ||
    /\bnpm run\b/i.test(text)
  )
}

function parseBulletText(raw) {
  const boldPrefixMatch = raw.match(/^\*\*(.+?)\*\*:\s*(.+)$/)
  if (boldPrefixMatch) {
    return {
      title: boldPrefixMatch[1].trim(),
      description: boldPrefixMatch[2].trim(),
      raw: raw.trim()
    }
  }
  const boldOnlyMatch = raw.match(/^\*\*(.+?)\*\*$/)
  if (boldOnlyMatch) {
    return { title: boldOnlyMatch[1].trim(), description: '', raw: raw.trim() }
  }
  return { title: '', description: raw.trim(), raw: raw.trim() }
}

function parseReleaseSections(markdownBody) {
  const lines = String(markdownBody ?? '')
    .replace(/\r\n/g, '\n')
    .split('\n')

  const sections = []
  let currentSection = null
  let lastItem = null

  const ensureSection = (heading) => {
    const clean = heading.trim()
    if (!currentSection || currentSection.heading !== clean) {
      currentSection = { heading: clean, items: [] }
      sections.push(currentSection)
      lastItem = null
    }
    return currentSection
  }

  for (const line of lines) {
    const headingMatch = line.match(/^###\s+(.+?)\s*$/)
    if (headingMatch) {
      ensureSection(headingMatch[1])
      continue
    }

    const subBulletMatch = line.match(/^\s{2,}[-*]\s+(.+?)\s*$/)
    if (subBulletMatch && lastItem) {
      const text = subBulletMatch[1].trim()
      if (!isRestrictedLine(text)) lastItem.subItems.push(text)
      continue
    }

    const topBulletMatch = line.match(/^[-*]\s+(.+?)\s*$/)
    if (topBulletMatch) {
      const text = topBulletMatch[1].trim()
      if (isRestrictedLine(text)) {
        lastItem = null
        continue
      }
      const section = currentSection ?? ensureSection('변경 사항')
      const parsed = { ...parseBulletText(text), subItems: [] }
      section.items.push(parsed)
      lastItem = parsed
    }
  }

  return sections.filter((s) => s.items.length > 0)
}

function computeReleaseNotesHash(releases) {
  const canonical = (Array.isArray(releases) ? releases : []).map((release) => ({
    tag: normalizeTag(release.tag ?? release.version),
    sections: (release.sections ?? parseReleaseSections(release.body ?? '')).map((section) => ({
      heading: String(section.heading ?? '').trim(),
      items: (section.items ?? []).map((item) => ({
        raw: String(item.raw ?? '').trim(),
        subItems: (item.subItems ?? []).map((sub) => String(sub).trim())
      }))
    }))
  }))
  return createHash('sha256').update(JSON.stringify(canonical), 'utf8').digest('hex').slice(0, 16)
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatInlineMarkdownHtml(text) {
  return escapeHtml(text)
    .replace(
      /`([^`]+)`/g,
      '<code class="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 text-xs font-mono">$1</code>'
    )
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
}

function getSectionBadgeClass(heading) {
  if (heading.includes('신규')) return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
  if (heading.includes('개선')) return 'bg-sky-500/15 text-sky-300 border-sky-500/30'
  if (heading.includes('버그') || heading.includes('수정')) {
    return 'bg-amber-500/15 text-amber-300 border-amber-500/30'
  }
  return 'bg-slate-700/60 text-slate-200 border-slate-600'
}

function formatReleaseNotesHtml(releases, repoSlug) {
  if (!releases.length) {
    return [
      '        <div class="page-card rounded-2xl p-6 text-sm text-slate-300">',
      `          최신 업데이트 내역은 <a href="https://github.com/${escapeHtml(repoSlug)}/releases" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:underline">GitHub Releases</a>에서 확인할 수 있습니다.`,
      '        </div>'
    ].join('\n')
  }

  return releases
    .map((release, index) => {
      const vTag = normalizeTag(release.tag)
      const dateStr = release.date ? escapeHtml(String(release.date).slice(0, 10)) : ''
      const releaseUrl = `https://github.com/${repoSlug}/releases/tag/${encodeURIComponent(vTag)}`
      const latestBadge =
        index === 0
          ? '<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/35">LATEST</span>'
          : ''
      const dateBadge = dateStr ? `<span class="text-xs text-slate-400">${dateStr}</span>` : ''

      const sectionsHtml = release.sections
        .map((section) => {
          const badgeClass = getSectionBadgeClass(section.heading)
          const listHtml = section.items
            .map((item) => {
              const titlePart = item.title
                ? `<strong class="text-white font-semibold">${formatInlineMarkdownHtml(item.title)}</strong>${item.description ? `: ${formatInlineMarkdownHtml(item.description)}` : ''}`
                : formatInlineMarkdownHtml(item.description || item.raw)
              const subHtml =
                item.subItems && item.subItems.length > 0
                  ? `\n                  <ul class="mt-1.5 ml-4 space-y-1 text-xs text-slate-400 list-disc">${item.subItems
                      .map((sub) => `\n                    <li>${formatInlineMarkdownHtml(sub)}</li>`)
                      .join('')}\n                  </ul>`
                  : ''
              return `                <li class="leading-relaxed">${titlePart}${subHtml}\n                </li>`
            })
            .join('\n')

          return [
            '            <div class="space-y-2">',
            `              <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold border ${badgeClass}">${escapeHtml(section.heading)}</span>`,
            '              <ul class="space-y-1.5 text-sm text-slate-300 pl-1">',
            listHtml,
            '              </ul>',
            '            </div>'
          ].join('\n')
        })
        .join('\n')

      return [
        '        <article class="page-card rounded-2xl p-6 space-y-4">',
        '          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">',
        '            <div class="flex items-center gap-2.5">',
        `              <a href="${escapeHtml(releaseUrl)}" target="_blank" rel="noopener noreferrer" class="text-lg font-extrabold text-white hover:text-sky-300 transition">${escapeHtml(vTag)}</a>`,
        latestBadge ? `              ${latestBadge}` : '',
        dateBadge ? `              ${dateBadge}` : '',
        '            </div>',
        `            <a href="${escapeHtml(releaseUrl)}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-sky-400 hover:underline">릴리스 보기 →</a>`,
        '          </div>',
        '          <div class="space-y-4">',
        sectionsHtml,
        '          </div>',
        '        </article>'
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function replaceMarkerBlock(content, startMarker, endMarker, innerContent, label) {
  const pattern = new RegExp(`(${escapeRegExp(startMarker)})[\\s\\S]*?(${escapeRegExp(endMarker)})`)
  if (!pattern.test(content)) {
    throw new Error(`Missing required markers for ${label}: ${startMarker} ... ${endMarker}`)
  }
  return content.replace(pattern, () => `${startMarker}\n${innerContent}\n${endMarker}`)
}

function upsertMetaTag(html, name, value) {
  const tagHtml = `<meta name="${name}" content="${escapeHtml(value)}" />`
  const existing = new RegExp(
    `<meta\\s+name=["']${escapeRegExp(name)}["']\\s+content=["'][^"']*["']\\s*/?>`,
    'i'
  )
  return existing.test(html) ? html.replace(existing, tagHtml) : html.replace(/<\/head>/i, `  ${tagHtml}\n</head>`)
}

function readPagesMetadata(html) {
  const versionMatch = html.match(/<meta\s+name=["']maple-release-version["']\s+content=["']([^"']*)["']/i)
  const hashMatch = html.match(/<meta\s+name=["']maple-release-notes-hash["']\s+content=["']([^"']*)["']/i)
  const exeHrefMatch = html.match(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*\bdata-direct-exe-download\b/i)
  return {
    version: versionMatch ? normalizeTag(versionMatch[1]) : '',
    notesHash: hashMatch ? hashMatch[1].trim() : '',
    exeUrl: exeHrefMatch ? exeHrefMatch[1].trim() : ''
  }
}

function validateOutput({ docsDir, readmeContent }) {
  const indexPath = path.join(docsDir, 'index.html')
  const html = readFileSync(indexPath, 'utf8')
  const filesToCheck = [
    ['docs/index.html', html],
    ['README.md', readmeContent]
  ]
  for (const [name, content] of filesToCheck) {
    if (!content) continue
    if (content.startsWith('\uFEFF')) throw new Error(`${name} contains UTF-8 BOM`)
    if (!content.includes('Data based on NEXON Open API')) {
      throw new Error(`${name} missing Data based on NEXON Open API attribution`)
    }
    for (const term of FORBIDDEN_LITERALS) {
      if (content.toLowerCase().includes(term.toLowerCase())) {
        throw new Error(`${name} contains forbidden term: ${term}`)
      }
    }
    for (const { label, regex } of FORBIDDEN_PATTERNS) {
      if (regex.test(content)) throw new Error(`${name} contains forbidden phrasing: ${label}`)
    }
  }
  for (const m of html.matchAll(/\.\/screenshots\/([A-Za-z0-9_.-]+\.png)/g)) {
    const p = path.join(docsDir, 'screenshots', m[1])
    if (!existsSync(p) || statSync(p).size <= 1000 || !readFileSync(p).subarray(0, 8).equals(PNG_MAGIC)) {
      throw new Error(`Invalid or missing screenshot referenced by docs/index.html: ${m[1]}`)
    }
  }
}

async function main() {
  const repoSlug = process.env.GITHUB_REPOSITORY || 'th0079/maplestory-income-releases'
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''
  const eventName = process.env.GITHUB_EVENT_NAME || ''

  if (eventName === 'release' && process.env.GITHUB_EVENT_PATH && existsSync(process.env.GITHUB_EVENT_PATH)) {
    const payload = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'))
    const rel = payload.release
    if (!rel || rel.draft || rel.prerelease) {
      console.log('Skipping draft or prerelease event.')
      return
    }
    const isInitialPublish = payload.action === 'published' || payload.action === 'released'
    if (isInitialPublish && !String(rel.body ?? '').trim()) {
      console.log('Skipping initial empty-body release event; release workflow updates Pages + screenshots.')
      return
    }
  }

  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'maplestory-income-releases-pages-sync'
  }
  if (token) headers.Authorization = `Bearer ${token}`

  const res = await fetch(`https://api.github.com/repos/${repoSlug}/releases?per_page=10`, { headers })
  if (!res.ok) throw new Error(`GitHub Releases API error ${res.status}: ${await res.text()}`)

  const allReleases = await res.json()
  const published = allReleases.filter((r) => !r.draft && !r.prerelease)
  if (published.length === 0) {
    console.log('No published releases found.')
    return
  }

  const latest = published[0]
  const tag = normalizeTag(latest.tag_name)
  const version = stripVersion(tag)
  const releaseDate = latest.published_at ? String(latest.published_at).slice(0, 10) : ''
  const exeAsset = Array.isArray(latest.assets)
    ? latest.assets.find((a) => typeof a?.name === 'string' && a.name.toLowerCase().endsWith('.exe'))
    : null
  const exeUrl =
    exeAsset?.browser_download_url ||
    `https://github.com/${repoSlug}/releases/download/${encodeURIComponent(tag)}/Maple-Income-Setup-${version}.exe`

  const notesReleases = published
    .filter((r) => r.body && String(r.body).trim())
    .slice(0, 3)
    .map((r) => ({
      tag: normalizeTag(r.tag_name),
      version: stripVersion(r.tag_name),
      date: r.published_at ? String(r.published_at).slice(0, 10) : '',
      sections: parseReleaseSections(String(r.body))
    }))
    .filter((r) => r.sections.length > 0)

  const notesHash = computeReleaseNotesHash(notesReleases)
  const docsDir = path.resolve('docs')
  const indexPath = path.join(docsDir, 'index.html')
  const readmePath = path.resolve('README.md')
  const prevHtml = readFileSync(indexPath, 'utf8').replace(/\r\n/g, '\n')
  const meta = readPagesMetadata(prevHtml)

  if (meta.version === tag && meta.notesHash === notesHash && meta.exeUrl === exeUrl) {
    console.log(`GitHub Pages is already in sync with ${tag} (${notesHash}).`)
    return
  }

  let nextHtml = upsertMetaTag(prevHtml, 'maple-release-version', tag)
  nextHtml = upsertMetaTag(nextHtml, 'maple-release-notes-hash', notesHash)
  nextHtml = nextHtml.replace(
    /(<a\b[^>]*\bhref=["'])[^"']*(["'][^>]*\bdata-direct-exe-download\b)/g,
    `$1${escapeHtml(exeUrl)}$2`
  )
  nextHtml = nextHtml.replace(
    /(<a\b[^>]*\bdata-direct-exe-download\b[^>]*\bhref=["'])[^"']*(["'])/g,
    `$1${escapeHtml(exeUrl)}$2`
  )
  nextHtml = nextHtml.replace(
    /(<span\b[^>]*\bdata-exe-label\b[^>]*>)[\s\S]*?(<\/span>)/g,
    `$1최신 버전 다운로드 (${escapeHtml(tag)})$2`
  )
  nextHtml = nextHtml.replace(
    /(<span\b[^>]*\bdata-exe-hero-label\b[^>]*>)[\s\S]*?(<\/span>)/g,
    `$1Windows 설치 파일 다운로드 (${escapeHtml(tag)} .exe)$2`
  )
  if (nextHtml.includes('<!-- RELEASE_VERSION_START -->') && nextHtml.includes('<!-- RELEASE_VERSION_END -->')) {
    nextHtml = replaceMarkerBlock(
      nextHtml,
      '<!-- RELEASE_VERSION_START -->',
      '<!-- RELEASE_VERSION_END -->',
      escapeHtml(tag),
      'release version pill'
    )
  }
  nextHtml = replaceMarkerBlock(
    nextHtml,
    '<!-- RELEASE_NOTES_START -->',
    '<!-- RELEASE_NOTES_END -->',
    formatReleaseNotesHtml(notesReleases, repoSlug),
    'release notes'
  )

  writeFileSync(indexPath, nextHtml, 'utf8')

  let nextReadme = ''
  if (existsSync(readmePath)) {
    const prevReadme = readFileSync(readmePath, 'utf8').replace(/\r\n/g, '\n')
    if (prevReadme.includes('<!-- LATEST_RELEASE_START -->')) {
      const latestItem = notesReleases[0]
      const sections = latestItem?.sections ?? []
      const totalCount = sections.reduce((sum, section) => sum + section.items.length, 0)
      const downloadBadge = `https://img.shields.io/badge/${encodeURIComponent('Windows 설치 파일 다운로드')}-${encodeURIComponent(tag.replace(/-/g, '--'))}-0284c7?style=for-the-badge`
      const releaseBadge = `https://img.shields.io/badge/${encodeURIComponent('릴리스 노트')}-GitHub-334155?style=for-the-badge&logo=github`
      const releaseUrl = `https://github.com/${repoSlug}/releases/tag/${encodeURIComponent(tag)}`
      const dateText = releaseDate ? ` · \`${releaseDate}\` 배포` : ''
      const readmeLines = [
        `## 최신 버전 · \`${tag}\``,
        '',
        `[![Windows 설치 파일 다운로드](${downloadBadge})](${exeUrl})`,
        `[![릴리스 노트](${releaseBadge})](${releaseUrl})`,
        '',
        `\`Maple-Income-Setup-${version}.exe\`${dateText}`
      ]
      if (totalCount > 0) {
        readmeLines.push('', '<details>', `<summary><strong>${tag} 주요 변경 사항 (${totalCount}건)</strong></summary>`)
        for (const section of sections) {
          if (section.items.length === 0) continue
          readmeLines.push('', `#### ${section.heading}`, '')
          for (const item of section.items) {
            readmeLines.push(
              item.title
                ? `- **${item.title}**${item.description ? ` — ${item.description}` : ''}`
                : `- ${item.description || item.raw}`
            )
          }
        }
        readmeLines.push('', '</details>')
      }
      const readmeBlock = readmeLines.join('\n')
      nextReadme = replaceMarkerBlock(
        prevReadme,
        '<!-- LATEST_RELEASE_START -->',
        '<!-- LATEST_RELEASE_END -->',
        readmeBlock,
        'README latest release section'
      )
      writeFileSync(readmePath, nextReadme, 'utf8')
    }
  }

  validateOutput({ docsDir, readmeContent: nextReadme })
  console.log(`Synced GitHub Pages files to ${tag} (hash: ${notesHash}).`)
}

main().catch((err) => {
  console.error('❌ sync-pages failed:', err)
  process.exit(1)
})
