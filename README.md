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

- **[신규 기능] 메이플 ID 기준 결정 판매 한도**: 주간 결정 판매 한도(90개)를 월드가 아니라 메이플 ID 기준으로 계산하고, 주간 결정 제한은 대표 캐릭터로 보여 줍니다
- **[신규 기능] 계정별 메이플 ID 보기**: 설정 > 계정에서 계정 줄을 누르면 펼쳐져 그 계정의 메이플 ID 목록이 보이고, 메이플 ID에 이름을 붙일 수 있습니다. 계정마다 `캐릭터 N · 메이플 ID N`을 표시하고, 지울 수 없는 첫 번째 계정에는 `기본` 뱃지를 붙였습니다
- **[신규 기능] 가계부 카테고리 직접 만들기**: [카테고리 관리]에서 수입·지출 카테고리를 만들고, 이름을 바꾸고, 지울 수 있습니다(종류마다 최대 8개, 지운 카테고리의 기록은 `기타`로 옮겨집니다)
- **[신규 기능] 가계부 새 카테고리**: 수입에 `솔 에르다 조각 판매`(개수 단위 입력·경매장 수수료 반영·사냥 기록 시세로 등록), 지출에 `어빌리티 재설정`을 추가했습니다
- **[신규 기능] 캐릭터 검색**: 캐릭터 스펙·장비 확인·강화 기댓값 화면에서 캐릭터를 검색할 수 있습니다
- **[신규 기능] 보스 설정 정렬**: 보스 목록을 처음 열면 게임 보스 목록 순서를 거꾸로 한 `기본 순`(최신 보스가 위)으로 보여 주고, 정렬 단추로 `기본 역순`·결정 가격 높은 순·낮은 순으로 바꿀 수 있습니다
- **[개선] 창 크기에 맞춘 배치**: 창을 넓히면 페이지와 팝업이 넓어진 공간을 채웁니다
- **[개선] 가계부 도넛 그래프**: 카테고리마다 고정된 색으로 한 그래프 안에서 같은 색이 겹치지 않고, 라이트·다크 모드 모두 맑고 진한 색으로 바꿨습니다
- **[개선] 대시보드 보스 체크리스트**: 캐릭터 카드를 펼치면 시즌 보스를 월간 보스 옆에 나란히 보여 줍니다
- **[개선] 다른 넥슨 계정 캐릭터 등록 막기**: 지금 API 키와 다른 넥슨 계정의 캐릭터는 등록되지 않습니다
- **[버그 수정] 테마에 따라 수익이 손실처럼 보이던 색**: 코랄 민트 등 일부 테마에서 결정·수익 금액이 빨간색 계열로 보이던 것을 고쳤습니다. 테마를 바꿔도 어두운 카드가 어색하게 남지 않습니다
- **[버그 수정] 익스트림 몬스터파크 표시**: 두 캐릭터가 클리어해도 `1 / 2`로 보이던 것을 `완료`로 표시합니다
- **[버그 수정] 활동 달력 날짜 칸**: 캐릭터가 7명 이상이면 5명과 `+N`으로 두 줄 안에 보여 줍니다
- **[버그 수정] 대시보드 캐릭터 카드**: 월드·직업이 길어도 한 줄에 들어가도록 글씨 크기를 맞춥니다
- **[버그 수정] 활동 달력 지난주 결산 드롭**: 같은 캐릭터·아이템 드롭이 보관함 구분으로 나뉘어 있을 때 표시가 엉키던 것을 고쳤습니다
- **[버그 수정] 가계부 기록 아이콘**: 밝은 화면에서 노랑·청록 카테고리 아이콘이 흐릿하던 것을 또렷하게 했습니다
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
