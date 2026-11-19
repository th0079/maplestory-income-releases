# <img src="./docs/screenshots/app-logo.png" width="32" height="32" align="top" alt="Maple Income" /> Maple Income Releases

메이플스토리 수익 정산 & 캐릭터·숙제·강화 통합 관리 데스크톱 앱 **Maple Income** 배포 저장소입니다.

[![Latest Release](https://img.shields.io/github/v/release/th0079/maplestory-income-releases?label=latest&style=for-the-badge)](https://github.com/th0079/maplestory-income-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/th0079/maplestory-income-releases/total?style=for-the-badge)](https://github.com/th0079/maplestory-income-releases/releases)
[![GitHub Pages](https://img.shields.io/badge/guide-GitHub%20Pages-2563eb?style=for-the-badge&logo=github)](https://th0079.github.io/maplestory-income-releases/)

![Maple Income 대시보드](./docs/screenshots/p01-dashboard-main.png)

<!-- LATEST_RELEASE_START -->
## ✨ 최신 버전 안내 (v2.69.0) (2026-11-19)

- **설치 파일 직접 다운로드**: [Maple-Income-Setup-2.69.0.exe](https://github.com/th0079/maplestory-income-releases/releases/download/v2.69.0/Maple-Income-Setup-2.69.0.exe)
- **릴리스 노트 전문**: [v2.69.0 Release](https://github.com/th0079/maplestory-income-releases/releases/tag/v2.69.0)
- **기능 안내 페이지**: [GitHub Pages 가이드](https://th0079.github.io/maplestory-income-releases/#changelog)

### v2.69.0 주요 변경 사항

- **[신규 기능] 착용 장비 확인 새 탭**: `장비 · 캐시·뷰티 · 안드로이드 · 펫` 탭으로 나눠 볼 수 있습니다
- **[신규 기능] 착용 장비 칸 표시**: 장비 칸에 스타포스 별 수 뱃지를 달고, 포켓 옆에 칭호 칸이 생겼습니다. 기간제 장비·칭호·캐시 아이템은 남은 기간(`D-30`·`만료`)과 옵션 남은 기간을 칸에 표시합니다
- **[신규 기능] 넥슨 API 오류 팝업**: 넥슨 API 점검, API 키 오류, 호출 한도 초과, 서버 오류, 인터넷 연결 오류 등 원인별로 팝업이 뜨고 오류 코드를 함께 보여 줍니다
- **[신규 기능] API 점검 중에도 마지막 정보 보기**: 캐릭터 스펙·스케줄러 컨텐츠·착용 장비 확인에서 넥슨 API를 받지 못하면 마지막으로 받은 정보를 `저장된 정보 · 시각`과 함께 보여 줍니다
- **[개선] 강화한 링크 스킬 표시**: 캐릭터 스펙의 링크 스킬에서 기본 최대 레벨을 넘어 강화한 링크(예: 3레벨)의 레벨을 금색으로 표시합니다
- **[개선] 착용 장비 바로 보기**: 착용 장비 확인 페이지를 열면 [장비 조회]를 누르지 않아도 장비가 바로 보입니다
- **[개선] 스타포스 기댓값 장비 선택**: 22성으로 고정된 제네시스 무기는 스타포스 기댓값 계산 장비창에서 고를 수 없게 했습니다
- **[개선] 오류 문구 정리**: 스케줄러 컨텐츠의 실패 사유에 내부 오류 문구가 함께 나오던 것을 정리했습니다
<!-- LATEST_RELEASE_END -->

---

## 📋 12개 사이드 페이지 요약

각 메뉴 이름을 클릭하면 **GitHub Pages 상세 가이드(해당 페이지 화면 및 세부 기능 사진)**로 이동합니다.

| 번호 | 사이드 메뉴 | 핵심 기능 |
| :---: | :--- | :--- |
| **01** | **[대시보드](https://th0079.github.io/maplestory-income-releases/#page-01)** | 주간·월간 보스 수익 정산, 월드 90개 한도 최적화, 등록 캐릭터 목록, 260Lv+ 빠른 등록, 16개 구간 간편 프리셋 |
| **02** | **[수익 현황](https://th0079.github.io/maplestory-income-releases/#page-02)** | 주간·월간 수익 추이 차트, 결정·드롭·가계부 순수익 상세 펼침, 주간/월간 결산 이미지 저장 |
| **03** | **[드롭 아이템](https://th0079.github.io/maplestory-income-releases/#page-03)** | 드롭 수익 내역, 드롭 보관함([판매]·[사용]·사용 내역 별도 메모), 파티 분배금 계산기, 빠른 시세 등록 및 변동 그래프 |
| **04** | **[가계부](https://th0079.github.io/maplestory-income-releases/#page-04)** | 월간 수입·지출 요약, 카테고리 비중 차트, API 강화 비용 원클릭 불러오기 |
| **05** | **[사냥 기록](https://th0079.github.io/maplestory-income-releases/#page-05)** | 항상 위 사냥 위젯(타이머·버프 알림), 소재비(30분 단위)·전후 차이 계산, 조각 환산 수익 통계 |
| **06** | **[활동 달력](https://th0079.github.io/maplestory-income-releases/#page-06)** | 보스·드롭·가계부 일별 수익 달력 및 날짜별 상세 내역 팝업 |
| **07** | **[스케줄러 컨텐츠](https://th0079.github.io/maplestory-income-releases/#page-07)** | 에픽 던전, 몬스터파크, 길드 수로/플래그, 심볼 일일 퀘스트 API 동기화 |
| **08** | **[장비 확인](https://th0079.github.io/maplestory-income-releases/#page-08)** | 장착 장비 24슬롯 그리드 및 스타포스·추옵·잠재·에디셔널 상세 툴팁 |
| **09** | **[캐릭터 스펙](https://th0079.github.io/maplestory-income-releases/#page-09)** | 스탯·전투력, V매트릭스, 6차 HEXA(상세 수치), 심볼, 유니온(인게임식 스탯·챔피언 석상·아티팩트), 어빌리티, 세트 효과, 링크 스킬 |
| **10** | **[캐릭터 히스토리](https://th0079.github.io/maplestory-income-releases/#page-10)** | 기간별(7일/30일/1년/전체) 경험치·레벨·최고 전투력·유니온·아티팩트 레벨 성장 차트 |
| **11** | **[강화 기록](https://th0079.github.io/maplestory-income-releases/#page-11)** | 스타포스(일반·슈페리얼)·잠재능력·큐브 기댓값 계산, 사용 이력 조회, 장비별 소비 메소 및 기댓값 대비 편차 분석 |
| **12** | **[설정](https://th0079.github.io/maplestory-income-releases/#page-12)** | 통합 프로필, 5개 다계정·API 키, 출석·펫·마을, 퀘스트, 업적·도감, 목표 자산·테마·정보 |

---

## 🚀 시작 방법 (4단계)

1. **설치 및 실행**: [Releases](https://github.com/th0079/maplestory-income-releases/releases/latest)에서 최신 `Maple-Income-Setup-x.y.z.exe` 다운로드 및 실행
2. **NEXON Open API 키 등록**: **[설정 → 계정]**에서 API 키 입력 시 캐릭터 목록·스케줄러·강화 이력 연동 활성화
3. **캐릭터 & 보스 등록**: **[대시보드 → + 캐릭터 추가]**로 260Lv+ 캐릭터 등록 후 자동 모드 또는 간편 프리셋 적용
4. **수익 정산 & 기록 관리**: 매주 목요일 00:00(KST) 자동 정산 및 12개 메뉴에서 수익·숙제·장비·스펙·강화 확인

---

## 🔒 NEXON Open API 이용 및 데이터 보안 안내

- **API 키 OS 암호화 저장**: 등록한 NEXON Open API 키는 Electron `safeStorage`를 통해 사용자 PC 내부에만 암호화되어 저장되며 외부 서버로 전송되지 않습니다.
- **로컬 SQLite 보관**: 모든 캐릭터·보스·가계부·사냥·강화 캐시 데이터는 PC 로컬 SQLite DB에 저장되며, JSON 백업 파일로 내보내거나 복원할 수 있습니다.
- **Data based on NEXON Open API**: 본 프로그램은 NEXON Open API를 활용하여 제작된 개인 개발 애플리케이션입니다.
