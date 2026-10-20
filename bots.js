/* ============================================================
   봇 목록 — 새 봇은 맨 아래에 추가 (만든 순서대로 No.001, 002 …)
   index.html은 이 파일만 읽어요. 봇 추가·수정은 여기서만!
   ------------------------------------------------------------
   title  : 영문/대표 이름             ko     : 한글 이름(선택)
   sub    : 한두 줄 소개               tags   : 태그 ["로맨스","호러"]
   type   : "캐릭터" 또는 "시뮬"        origin : "1차" 또는 "2차" (창작 구분)
   date   : 등록 연월 "2025.11"
   thumb  : thumbs 폴더 안 이미지 (가로 2:1)
   hero   : 메인 상단 큰 배경 이미지 경로(선택, 없으면 thumb 사용)
   badge  : 카드 위 작은 뱃지 문구(선택) 예: "NEW", "ON AIR"
   links  : page / realm / arca 중 있는 것만 (page = 전용 소개 페이지)
   ============================================================ */
const BOTS = [
  {
    title: "Haruno Miyu", ko: "하루노 미유 ♥",
    sub: "너무 깊게 사랑하는 소녀. 감정 수치 상태창, 트위터 팝업, 메시지 시스템.",
    tags: ["로맨스", "멘헤라", "일상", "에셋봇"],
    type: "캐릭터", origin: "1차",
    date: "2025.11", thumb: "miyu.jpg", badge: "FIRST",
    links: { page: "Haruno-Miyu/" }
  },
  {
    title: "NEXT STAGE", ko: "넥스트 스테이지",
    sub: "남자 아이돌 서바이벌 RP · 시즌 1. 참가자·프로듀서·팬 중 역할 선택.",
    tags: ["아이돌", "서바이벌", "시스템", "에셋봇"],
    type: "시뮬", origin: "1차",
    date: "2026.10", thumb: "nextstage.jpg", badge: "ON AIR",
    links: { page: "nextstage/" }
  },
  {
    title: "Aurel Valençay", ko: "오렐 발랑쉐",
    sub: "1920년대 파리, 열여덟의 얼굴로 백 년을 산 뱀파이어. 상태창·일기 시스템, 한/영 지원.",
    tags: ["로맨스", "뱀파이어", "시대물", "에셋봇"],
    type: "캐릭터", origin: "1차",
    date: "2025.11", thumb: "aurel.jpg", hero: "aurel/assets/img/w_roof.webp", badge: "NOCTURNE",
    links: { page: "aurel/", realm: "https://realm.risuai.net/character/f674591c-9935-449c-bd16-87c1d0a067b6" }
  },
  {
    title: "ZOOTOPIA 2", ko: "주토피아 2 · 투게더? 주게더!",
    sub: "주토피아 2 팬픽션 시뮬봇. ZPD 폰 상태창, 인터랙티브 맵, 메인 캐스트 감정 에셋 30종.",
    tags: ["팬픽션", "수사", "어드벤처", "에셋봇"],
    type: "시뮬", origin: "2차",
    date: "2025.12", thumb: "zootopia2.jpg", hero: "zootopia2/assets/hero.webp", badge: "ZPD",
    links: { page: "zootopia2/", realm: "https://realm.risuai.net/character/8cfc8a3b-68ac-4a92-bbe5-3ac29ae885ab" }
  },
];
