<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./docs/assets/readme-banner-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="./docs/assets/readme-banner-light.png" />
    <img src="./docs/assets/readme-banner-dark.png" alt="Maple Income — 메이플스토리 수익 정산 · 보스 · 캐릭터 통합 관리" width="100%" />
  </picture>
</div>

<!-- LATEST_RELEASE_START -->
## 최신 버전 · `v2.74.0`

[![Windows 설치 파일 다운로드](https://img.shields.io/badge/Windows%20%EC%84%A4%EC%B9%98%20%ED%8C%8C%EC%9D%BC%20%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-v2.74.0-0284c7?style=for-the-badge)](https://github.com/th0079/maplestory-income-releases/releases/download/v2.74.0/Maple-Income-Setup-2.74.0.exe)
[![웹 가이드](https://img.shields.io/badge/%EC%9B%B9%20%EA%B0%80%EC%9D%B4%EB%93%9C-GitHub%20Pages-2563eb?style=for-the-badge&logo=github)](https://th0079.github.io/maplestory-income-releases/)
[![릴리스 노트](https://img.shields.io/badge/%EB%A6%B4%EB%A6%AC%EC%8A%A4%20%EB%85%B8%ED%8A%B8-GitHub-334155?style=for-the-badge&logo=github)](https://github.com/th0079/maplestory-income-releases/releases/tag/v2.74.0)

<details>
<summary><strong>v2.74.0 주요 변경 사항 (4건)</strong></summary>

#### 신규 기능

- **스크린샷으로 자동 입력** — 게임 화면 스크린샷을 `Ctrl+V`로 붙여 넣거나 파일로 골라 `[적용]`을 누르면 입력란이 자동으로 채워집니다. 추가 설치 없이 Windows 10/11 기본 문자 인식을 사용합니다
- **마스터라벨 플러스 효과 표시** — 캐릭터 스펙 > 스탯 개요에 `기타 능력치` 카드가 추가되어 마스터라벨 성장 플러스·전투 플러스로 오른 능력치를 확인할 수 있습니다
- **예비 특수 반지 표시** — 리스트레인트 링·컨티뉴어스 링 4레벨 이상을 착용한 칸에 예비 특수 반지가 함께 보입니다

#### 버그 수정

- **장비 프리셋 요약의 시드링 표시** — 착용 장비 메모의 프리셋 요약에서 예비 특수 반지가 착용 중인 시드링으로 잘못 표시될 수 있던 문제를 고쳤습니다

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
