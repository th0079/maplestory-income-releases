# 🍁 Maple Income (메이플스토리 보스 수익 계산기 & 캐릭터 통합 관리 앱)

[![Latest Release](https://img.shields.io/github/v/release/th0079/maplestory-income-releases?label=latest&style=for-the-badge)](https://github.com/th0079/maplestory-income-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/th0079/maplestory-income-releases/total?style=for-the-badge)](https://github.com/th0079/maplestory-income-releases/releases)
[![Website](https://img.shields.io/badge/소개_페이지_및_사용_안내-GitHub_Pages-2563eb?style=for-the-badge)](https://th0079.github.io/maplestory-income-releases/)

**Maple Income**은 메이플스토리의 **주간·월간·일간 보스 결정 수익**, **보스 드롭 아이템 및 보관함**, **메소 가계부**, **사냥 타이머·기록**과 **NEXON Open API** 기반 **인게임 메이플 스케줄러 자동 동기화·착용 장비·캐릭터 스펙·성장 히스토리·강화 기록**을 한곳에서 통합 관리하는 Windows 데스크톱 애플리케이션입니다.

> 🌐 **[공식 소개 페이지 및 상세 사용 안내 웹사이트 바로가기 (GitHub Pages)](https://th0079.github.io/maplestory-income-releases/)**  
> 📦 **[최신 설치 파일(`.exe`) 다운로드 바로가기](https://github.com/th0079/maplestory-income-releases/releases/latest)**

---

## 🖥️ 대표 화면 (메인 대시보드)

![메인 대시보드](https://th0079.github.io/maplestory-income-releases/screenshots/01-dashboard.png)

---

## ✨ 핵심 특징

1. **정확한 보스 결정 최적화 계산**
   - 캐릭터당 주간 12개 보스 제한과 **월드당 주간 90개 결정 판매 한도**를 자동 반영하여 가장 비싼 결정 순으로 예상·실현 수익을 실시간 계산합니다.
   - 월간 보스(검은 마법사) 클리어 잠금 및 KST(목요일 00:00) 주간 초기화 결산을 지원합니다.
2. **NEXON Open API 기반 메이플 스케줄러 자동 연동**
   - 인게임 스케줄러에 등록된 보스 구성과 클리어 현황을 자동으로 동기화하며, 일일/주간 심볼 퀘스트·에픽 던전·몬스터파크·길드 컨텐츠(수로/플래그)·무릉도장 현황을 한눈에 보여줍니다.
3. **착용 장비 · 캐릭터 스펙 · 성장 히스토리 · 강화 기록 조회**
   - 인게임 툴팁 형태의 착용 장비 상세 확인, 전투력·랭킹·HEXA 매트릭스·V매트릭스·유니온(챔피언/아티팩트)·심볼·어빌리티 조회, 기간별 경험치/전투력 성장 그래프, 스타포스·잠재능력·큐브 강화 통계 및 확률 비교를 제공합니다.
4. **안전한 로컬 저장 & 최대 5개 다중 계정 운영**
   - 모든 데이터와 API Key는 외부 서버 전송 없이 사용자 PC 내부(SQLite)에 저장되며, 최대 5개 계정을 분리 관리할 수 있습니다.

---

## 🚀 처음 사용 안내 (Quick Start)

### 1단계. 설치 및 실행
1. [최신 릴리스 페이지](https://github.com/th0079/maplestory-income-releases/releases/latest)로 이동합니다.
2. `Maple-Income-Setup-x.y.z.exe` 설치 파일을 다운로드하여 실행합니다.

### 2단계. NEXON Open API Key 발급 및 등록
1. [NEXON Open API 공식 사이트](https://openapi.nexon.com/)에 로그인 후 **[내 애플리케이션]**에서 메이플스토리 API Key를 발급받습니다.
2. 앱 좌측 하단의 **⚙️ 설정 (`계정` 탭)**으로 이동하여 **API 키** 입력란에 발급받은 키를 등록합니다.

![설정 및 API 키 등록](https://th0079.github.io/maplestory-income-releases/screenshots/17-settings-account.png)

### 3단계. 캐릭터 빠른 등록 (260레벨 이상 자동 조회)
1. 대시보드 우측 상단의 **[+ 캐릭터 추가]** 버튼을 클릭합니다.
2. **[계정 내 캐릭터 빠른 등록]** 탭에서 조회된 260레벨 이상 캐릭터를 **[미등록 전체 등록]**으로 한 번에 추가하거나 **[직접 검색]**으로 등록합니다.

![캐릭터 빠른 등록](https://th0079.github.io/maplestory-income-releases/screenshots/02-add-character.png)

### 4단계. 보스 프리셋 적용 및 자동/수동 모드 선택
1. 캐릭터 카드의 **[보스 설정]** → **[프리셋]**에서 **검밑솔 ~ 익적솔 18종 고정 프리셋**을 클릭 한 번으로 적용할 수 있습니다.
2. **⚡ 자동 모드**(인게임 스케줄러 연동) 또는 **수동 모드**(직접 클릭 체크)를 자유롭게 전환하며 보스 클리어 현황을 관리합니다.

![보스 설정 및 프리셋](https://th0079.github.io/maplestory-income-releases/screenshots/04-boss-preset.png)

---

## 📸 페이지별 주요 기능 미리보기

> 전체 19개 화면의 고해상도 스크린샷과 상세 설명은 **[소개 및 사용 안내 웹페이지](https://th0079.github.io/maplestory-income-releases/#features)**에서 확인하실 수 있습니다.

| 화면 | 주요 기능 설명 | 미리보기 |
| :--- | :--- | :---: |
| **대시보드** | 주간/월간/일간 예상·실현 수익, 월드별 90개 결정 한도, 목표 자산 달성률, 메이플포인트 환산 & 펫, 캐릭터별 보스 체크리스트 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/01-dashboard.png) |
| **보스 설정 & 프리셋** | 보스 난이도·파티 인원 설정, 결정 가격 직접 수정, 검밑솔~익적솔 18종 고정 프리셋 및 내 프리셋 저장 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/03-boss-config.png) |
| **수익 현황** | 보스 결정·드롭 아이템·가계부 순수익 주간/월간 추이 차트 및 결산 공유 이미지 저장 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/05-income.png) |
| **드롭 아이템 & 보관함** | 보스 드롭 아이템 판매 수익, 경매장 수수료(5%/3%)·파티 분배금 계산 및 미판매 드롭 보관함 관리 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/06-drop-items.png) |
| **가계부** | 인게임 메소 수입/지출 카테고리별 기록 및 월간 소비 패턴 파이차트 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/07-ledger.png) |
| **사냥 기록 & 위젯** | 재획/소재비 단위 사냥 메소·솔 에르다 조각 기록 및 오버레이 미니 사냥 위젯(타이머·알람) | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/08-hunting.png) |
| **활동 달력** | 일자별 보스 처치, 드롭 획득, 가계부, 사냥 기록 통합 월간 캘린더 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/09-calendar.png) |
| **스케줄러 컨텐츠** | 에픽 던전, 몬스터파크/익스트림 몬스터파크, 길드 수로/플래그, 캐릭터별 일일/주간 심볼 퀘스트 현황표 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/10-homework.png) |
| **장비 확인** | 착용 장비 슬롯 그리드 및 인게임 스타일 상세 아이템 툴팁 (스타포스·잠재·에디셔널·추옵·소울·익셉셔널) | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/11-equipment.png) |
| **캐릭터 스펙** | 전투력·랭킹·핵심 스탯 개요, HEXA 매트릭스(코어/스탯), V매트릭스, 유니온(챔피언/아티팩트), 심볼, 어빌리티, 세트 효과, 링크 스킬 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/12-spec-stat.png) |
| **캐릭터 히스토리** | 기간별 일자 단위 경험치 획득량·레벨업 예상일·레벨·전투력·유니온 성장 추이 그래프 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/15-character-history.png) |
| **강화 기록** | 스타포스·잠재능력·큐브 강화 내역, 소모 메소 집계 및 공식 확률 대비 기대치 비교 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/16-enhance-history.png) |
| **출석 · 펫 · 업적** | 일일 출석 체크, 메이플월드 마을(9곳)·펫(20종) 해금, 8개 분야 343종 업적 및 보스 도감 | [보기](https://th0079.github.io/maplestory-income-releases/screenshots/19-achievements.png) |

---

## 📌 NEXON Open API 안내 및 법적 고지

- **Data based on NEXON Open API**
- 본 프로그램은 넥슨코리아(NEXON Korea)의 공식 Open API를 활용하여 제작된 비영리 팬메이드(Fan-made) 데스크톱 애플리케이션입니다.
- 사용자가 입력한 NEXON Open API Key와 모든 데이터는 외부 서버로 전송되지 않으며, 오직 사용자의 PC 내부(SQLite DB)에만 안전하게 보관됩니다.
