<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./docs/assets/readme-banner-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="./docs/assets/readme-banner-light.png" />
    <img src="./docs/assets/readme-banner-dark.png" alt="Maple Income — 메이플스토리 수익 정산 · 보스 · 캐릭터 통합 관리" width="100%" />
  </picture>
</div>

<!-- LATEST_RELEASE_START -->
## 최신 버전 · `v2.73.0`

[![Windows 설치 파일 다운로드](https://img.shields.io/badge/Windows%20%EC%84%A4%EC%B9%98%20%ED%8C%8C%EC%9D%BC%20%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-v2.73.0-0284c7?style=for-the-badge)](https://github.com/th0079/maplestory-income-releases/releases/download/v2.73.0/Maple-Income-Setup-2.73.0.exe)
[![웹 가이드](https://img.shields.io/badge/%EC%9B%B9%20%EA%B0%80%EC%9D%B4%EB%93%9C-GitHub%20Pages-2563eb?style=for-the-badge&logo=github)](https://th0079.github.io/maplestory-income-releases/)
[![릴리스 노트](https://img.shields.io/badge/%EB%A6%B4%EB%A6%AC%EC%8A%A4%20%EB%85%B8%ED%8A%B8-GitHub-334155?style=for-the-badge&logo=github)](https://github.com/th0079/maplestory-income-releases/releases/tag/v2.73.0)

`Maple-Income-Setup-2.73.0.exe`

<details>
<summary><strong>v2.73.0 주요 변경 사항 (7건)</strong></summary>

#### 신규 기능

- **대시보드 스펙업 목표 등록 및 순서대로 채우기** — 노트 > 스펙업 목표의 항목을 대시보드 목표로 등록해 목표 자산 카드 옆에서 화살표로 넘겨 보며 진행도를 확인할 수 있습니다
- **보스 요구 포스 탭 추가** — 보스 페이지에 `요구 포스` 탭이 추가되었습니다
- **설정 > 사용설명서 탭 추가** — 처음 시작하기 단계, 화면별 기능 안내, 검색 및 `[이 화면 열기]` 바로가기를 제공하는 앱 내 사용설명서가 추가되었습니다
- **착용 장비 캐시 아이템 프리즘 표시** — 착용 장비 확인 > 캐시·뷰티 탭과 코디 프리셋에서 컬러링 프리즘·이펙트 프리즘 적용 정보를 함께 표시합니다

#### 개선

- **보스 썸네일 고화질 교체 및 구도 보정** — 보스 아이콘을 인게임 보스 이동 창 기준 고화질 그림으로 교체하고 윌·더스크·칼로스·벨룸·검은 마법사 등의 얼굴 위치와 구도를 다듬었습니다
- **보스 카드 펼침 반응 개선** — 보스 처치 도장 효과를 가볍게 조정해 보스 카드를 처음 펼칠 때의 버벅임을 줄였습니다
- **보스 페이지 탭 줄 유지** — 보스 페이지 탭이 많아져도 한 줄로 깔끔하게 유지되도록 조정했습니다

</details>
<!-- LATEST_RELEASE_END -->

---

## 화면 미리보기

<div align="center">
  <img src="./docs/screenshots/p01-dashboard-main.png" alt="Maple Income 대시보드" width="86%" />
</div>

---

## 바로가기

| 메뉴 | 설명 |
| :--- | :--- |
| **[기능별 세부 설명](https://th0079.github.io/maplestory-income-releases/#guide/p01)** | 15개 화면별 기능 안내 및 스크린샷 |
| **[최신 업데이트](https://th0079.github.io/maplestory-income-releases/#changelog)** | 최근 릴리스 변경 내역 |
| **[시작 · API 안내](https://th0079.github.io/maplestory-income-releases/#info)** | 설치·API 키 등록 3단계 및 보안 안내 |
| **[전체 릴리스](https://github.com/th0079/maplestory-income-releases/releases)** | 설치 파일(.exe) 및 버전별 배포 이력 |

---

## 보안 및 출처 안내

- **API 키 OS 암호화 보관**: NEXON Open API 키는 Electron `safeStorage`를 통해 사용자 PC 내부에만 암호화 보관됩니다.
- **로컬 SQLite 저장**: 모든 데이터는 PC 로컬 SQLite DB에 저장되며 JSON 백업·복원을 지원합니다.
- **Data based on NEXON Open API**: 본 프로그램은 NEXON Open API를 활용하여 제작된 개인 개발 애플리케이션입니다.
