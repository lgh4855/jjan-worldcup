// 사진 출처 (위키미디어 공용). 월드컵 id → 후보 이름 → {원본 파일, 작가, 라이선스, 주소}
const CREDITS={
 "food64": {
  "간장게장": {
   "t": "Korean seafood-Ganjang gejang-01.jpg",
   "by": "derivative work: Caspian blue (talk) Korean.cuisine-Ganjang_",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_seafood-Ganjang_gejang-01.jpg"
  },
  "간장계란밥": {
   "t": "Ganjang-gyeran-bap 3.jpg",
   "by": "건강한 레시피",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ganjang-gyeran-bap_3.jpg"
  },
  "갈비탕": {
   "t": "Galbi-tang 2.jpg",
   "by": "Debbie Tingzon",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Galbi-tang_2.jpg"
  },
  "경양식 돈까스": {
   "t": "Dongaseu 4.jpg",
   "by": "chomjong",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dongaseu_4.jpg"
  },
  "곱창": {
   "t": "Gopchang 2.jpg",
   "by": "뚱표아빠의 세상사는 이야기",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gopchang_2.jpg"
  },
  "김치볶음밥": {
   "t": "Kimchi fried rice.jpg",
   "by": "Sharon Ang",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Kimchi_fried_rice.jpg"
  },
  "김치찌개": {
   "t": "Korean.cuisine-Kimchi jjigae-01.jpg",
   "by": "by avlxyz",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Kimchi_jjigae-01.jpg"
  },
  "김치찜": {
   "t": "김치찜.jpg",
   "by": "밤하늘의 수정",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:%EA%B9%80%EC%B9%98%EC%B0%9C.jpg"
  },
  "낙곱새": {
   "t": "Nakji-bokkeum, Stir-Fried Octopus.jpg",
   "by": "Korea.net / Korean Culture and Information Service",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Nakji-bokkeum,_Stir-Fried_Octopus.jpg"
  },
  "뉴욕 피자": {
   "t": "New York-Style Pizza-crop.png",
   "by": "Pnickell0",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:New_York-Style_Pizza-crop.png"
  },
  "니기리 초밥": {
   "t": "Nigiri Sushi (26505096851).jpg",
   "by": "Tim Reckmann from Hamm, Deutschland",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Nigiri_Sushi_(26505096851).jpg"
  },
  "닭강정": {
   "t": "만석닭강정.jpg",
   "by": "LR0725",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:%EB%A7%8C%EC%84%9D%EB%8B%AD%EA%B0%95%EC%A0%95.jpg"
  },
  "닭볶음탕": {
   "t": "Korean.food-Dakbokemtang-01.jpg",
   "by": "stuart_spivack (a flickr user)",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.food-Dakbokemtang-01.jpg"
  },
  "대창": {
   "t": "Daechang-gui.jpg",
   "by": "향긋한 커피매니아",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Daechang-gui.jpg"
  },
  "돈코츠 라멘": {
   "t": "Tonkotsu ramen in Tokyo.jpg",
   "by": "Syced",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Tonkotsu_ramen_in_Tokyo.jpg"
  },
  "돼지국밥": {
   "t": "Dwaeji-gukbap 1.jpg",
   "by": "chomjong",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dwaeji-gukbap_1.jpg"
  },
  "된장찌개": {
   "t": "Doenjang-jjigae 2.jpg",
   "by": "스물셋",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Doenjang-jjigae_2.jpg"
  },
  "두부김치": {
   "t": "Korean cuisine-Dubu kimchi-01.jpg",
   "by": "by benghan",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Dubu_kimchi-01.jpg"
  },
  "떡볶이": {
   "t": "Korean.snacks-Tteokbokki-08.jpg",
   "by": "by jetalone (flickr)",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.snacks-Tteokbokki-08.jpg"
  },
  "라면": {
   "t": "Ramen Jump 002.jpg",
   "by": "Ocdp",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Ramen_Jump_002.jpg"
  },
  "로스트비프": {
   "t": "A roast beef dinner at The Queen's Head, Boreham, Essex, England - lighter.jpg",
   "by": "Acabashi",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:A_roast_beef_dinner_at_The_Queen%27s_Head,_Boreham,_Essex,_England_-_lighter.jpg"
  },
  "마르게리타 피자": {
   "t": "Margherita Originale.JPG",
   "by": "Mario56",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Margherita_Originale.JPG"
  },
  "막창": {
   "t": "Makchang.jpg",
   "by": "채지형",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Makchang.jpg"
  },
  "바비큐 폭립": {
   "t": "Pork-ribs 02.jpg",
   "by": "Pannet",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Pork-ribs_02.jpg"
  },
  "바지락칼국수": {
   "t": "Bajirak-kal-guksu 2.jpg",
   "by": "굿바이 조미료",
   "lic": "CC BY 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Bajirak-kal-guksu_2.jpg"
  },
  "보쌈": {
   "t": "Korean cuisine-Bossam-04.jpg",
   "by": "Timber Tank",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Bossam-04.jpg"
  },
  "브리스킷 바비큐": {
   "t": "Smoked Brisket with smoke ring.jpg",
   "by": "Johnsparks75",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Smoked_Brisket_with_smoke_ring.jpg"
  },
  "뼈해장국": {
   "t": "Ppyeohaejangguk 20240929 001.jpg",
   "by": "Mobius6",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ppyeohaejangguk_20240929_001.jpg"
  },
  "산낙지": {
   "t": "Korean.cuisine-Sannakji.hoe-01.jpg",
   "by": "by LWY at flickr",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Sannakji.hoe-01.jpg"
  },
  "삼겹살": {
   "t": "Korean.cuisine-Samgyeopsal-01.jpg",
   "by": "by hellochris",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Samgyeopsal-01.jpg"
  },
  "새우장": {
   "t": "Ganjang-saeu-jang 1.jpg",
   "by": "lazy fri13th",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ganjang-saeu-jang_1.jpg"
  },
  "샤브샤브": {
   "t": "Shabu Shabu photo Don Ramey Logan.jpg",
   "by": "Don Ramey Logan",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Shabu_Shabu_photo_Don_Ramey_Logan.jpg"
  },
  "설렁탕": {
   "t": "Seolleongtang.jpg",
   "by": "이동원",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Seolleongtang.jpg"
  },
  "순대국밥": {
   "t": "Korean soup Sundae gukbap 01.jpg",
   "by": "Mar del Este",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup_Sundae_gukbap_01.jpg"
  },
  "순두부찌개": {
   "t": "Korean stew-Sundubu jjigae-05.jpg",
   "by": "by titanium22",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_stew-Sundubu_jjigae-05.jpg"
  },
  "숯불 닭갈비": {
   "t": "Chuncheon sizzling chicken (Dakgalbi).jpg",
   "by": "Fumikas Sagisavas",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Chuncheon_sizzling_chicken_(Dakgalbi).jpg"
  },
  "스테이크": {
   "t": "Steak and onions.jpg",
   "by": "E4024",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Steak_and_onions.jpg"
  },
  "쌀국수": {
   "t": "Phở bò in a German restaurant 02.jpg",
   "by": "Kritzolina",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ph%E1%BB%9F_b%C3%B2_in_a_German_restaurant_02.jpg"
  },
  "아귀찜": {
   "t": "Agwi-jjim 1.jpg",
   "by": "lazy fri13th",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Agwi-jjim_1.jpg"
  },
  "아사도": {
   "t": "Asado a.jpg",
   "by": "Maxd2",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Asado_a.jpg"
  },
  "아이스크림": {
   "t": "Ice cream cone with spoon.jpg",
   "by": "Thegreatmutata",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Ice_cream_cone_with_spoon.jpg"
  },
  "양꼬치": {
   "t": "양꼬치.jpg",
   "by": "악미",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:%EC%96%91%EA%BC%AC%EC%B9%98.jpg"
  },
  "양념치킨": {
   "t": "Yangnyeom Chicken Korean fried chicken.jpg",
   "by": "Startandstar",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Yangnyeom_Chicken_Korean_fried_chicken.jpg"
  },
  "연어장": {
   "t": "Salmon don of Nakau.jpg",
   "by": "ノボホショコロトソ",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Salmon_don_of_Nakau.jpg"
  },
  "육회": {
   "t": "2020-10-20 육회.jpeg",
   "by": "revi",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:2020-10-20_%EC%9C%A1%ED%9A%8C.jpeg"
  },
  "육회비빔밥": {
   "t": "Korean cuisine yukhoe bibimbop.jpg",
   "by": "Mar del Este",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine_yukhoe_bibimbop.jpg"
  },
  "일식 돈까스": {
   "t": "Tonkatsu of Kimukatsu.jpg",
   "by": "Minseong Kim",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tonkatsu_of_Kimukatsu.jpg"
  },
  "잔치국수": {
   "t": "Janchi-guksu.jpg",
   "by": "Chloe Lim",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Janchi-guksu.jpg"
  },
  "장어덮밥": {
   "t": "Jangeo-deopbap.jpg",
   "by": "박진영",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Jangeo-deopbap.jpg"
  },
  "제육볶음": {
   "t": "Jeyuk-bokkeum 2.jpg",
   "by": "국립국어원",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Jeyuk-bokkeum_2.jpg"
  },
  "젤라토": {
   "t": "Mango gelato (9368461646).jpg",
   "by": "Ruth Hartnup from Vancouver, Canada",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Mango_gelato_(9368461646).jpg"
  },
  "족발": {
   "t": "Jokbal 2.jpg",
   "by": "국립국어원",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Jokbal_2.jpg"
  },
  "짜장면": {
   "t": "Jajangmyeon by KFoodaddict.jpg",
   "by": "KFoodaddict",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jajangmyeon_by_KFoodaddict.jpg"
  },
  "짬뽕": {
   "t": "Jjamppong-sujebi 2.jpg",
   "by": "대경라이프",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jjamppong-sujebi_2.jpg"
  },
  "철판 닭갈비": {
   "t": "Korean cuisine-Dakgalbi-01.jpg",
   "by": "by shizu k (shezzz) at Flickr",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Dakgalbi-01.jpg"
  },
  "철판볶음밥": {
   "t": "Iron griddle fried rice.jpg",
   "by": "olivian91",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Iron_griddle_fried_rice.jpg"
  },
  "카이센동": {
   "t": "Kaisen-don in Busan.jpg",
   "by": "Choi2451",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Kaisen-don_in_Busan.jpg"
  },
  "크림 파스타": {
   "t": "롤링파스타 월계이마트점 스테이크 크림 파스타 2.jpg",
   "by": "궁셔리여사",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:%EB%A1%A4%EB%A7%81%ED%8C%8C%EC%8A%A4%ED%83%80_%EC%9B%94%EA%B3%84%EC%9D%B4%EB%A7%88%ED%8A%B8%EC%A0%90_%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC_%ED%81%AC%EB%A6%BC_%ED%8C%8C%EC%8A%A4%ED%83%80_2.jpg"
  },
  "탕수육": {
   "t": "Tangsuyuk (Korean Chinese sweet and sour pork).jpg",
   "by": "용스토리",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tangsuyuk_(Korean_Chinese_sweet_and_sour_pork).jpg"
  },
  "통닭": {
   "t": "Tongdak.jpg",
   "by": "국립국어원",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Tongdak.jpg"
  },
  "파닭": {
   "t": "Padak.jpg",
   "by": "Choi2451",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Padak.jpg"
  },
  "햄버거": {
   "t": "NCI Visuals Food Hamburger.jpg",
   "by": "Len Rizzi (photographer)",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:NCI_Visuals_Food_Hamburger.jpg"
  },
  "후라이드 치킨": {
   "t": "Iksan City 48 Korean Style Fried chicken.jpg",
   "by": "KOREA.NET",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Iksan_City_48_Korean_Style_Fried_chicken.jpg"
  },
  "훠궈": {
   "t": "Chengdu Hot Pot Yuanyangguo style 2019.jpg",
   "by": "Breaknet2025",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Chengdu_Hot_Pot_Yuanyangguo_style_2019.jpg"
  }
 },
 "anju": {
  "간장게장": {
   "t": "Korean seafood-Ganjang gejang-01.jpg",
   "by": "derivative work: Caspian blue (talk) Korean.cuisine-Ganjang_",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_seafood-Ganjang_gejang-01.jpg"
  },
  "감자튀김": {
   "t": "Cajun fries from Popeyes Louisiana Kitchen, Stratford, Ontario, 2025-08-04.jpg",
   "by": "Chris Woodrich",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Cajun_fries_from_Popeyes_Louisiana_Kitchen,_Stratford,_Ontario,_2025-08-04.jpg"
  },
  "계란말이": {
   "t": "Gyeran-mari.jpg",
   "by": "Hyeon-Jeong Suk",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gyeran-mari.jpg"
  },
  "골뱅이무침": {
   "t": "Golbaengi-muchim 2.jpg",
   "by": "맘앤쿡",
   "lic": "CC BY 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Golbaengi-muchim_2.jpg"
  },
  "군만두": {
   "t": "Japanese pan fried gyoza.jpg",
   "by": "Adryan R. Villanueva",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Japanese_pan_fried_gyoza.jpg"
  },
  "굴전": {
   "t": "Guljeon.jpg",
   "by": "Dr 방원장",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Guljeon.jpg"
  },
  "김치찌개": {
   "t": "Korean.cuisine-Kimchi jjigae-01.jpg",
   "by": "by avlxyz",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Kimchi_jjigae-01.jpg"
  },
  "낙지볶음": {
   "t": "Nakji-bokkeum, Stir-Fried Octopus.jpg",
   "by": "Korea.net / Korean Culture and Information Service",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Nakji-bokkeum,_Stir-Fried_Octopus.jpg"
  },
  "노가리": {
   "t": "Korean.cuisine-Anju-nogari.and.nuts.jpg",
   "by": "by ayustety",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Anju-nogari.and.nuts.jpg"
  },
  "닭발": {
   "t": "Chicken feet.jpg",
   "by": "User:Anna Frodesiak",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Chicken_feet.jpg"
  },
  "땅콩": {
   "t": "Roasted Peanuts with shell.jpg",
   "by": "Sanjay Acharya",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Roasted_Peanuts_with_shell.jpg"
  },
  "마라탕": {
   "t": "Malatang from Hope Tree (20220226172344).jpg",
   "by": "N509FZ",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Malatang_from_Hope_Tree_(20220226172344).jpg"
  },
  "번데기탕": {
   "t": "Silkworm snack.jpg",
   "by": "Meniscus at English Wikipedia",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Silkworm_snack.jpg"
  },
  "보쌈": {
   "t": "Korean cuisine-Bossam-04.jpg",
   "by": "Timber Tank",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Bossam-04.jpg"
  },
  "부대찌개": {
   "t": "Budae jjigae indonesia.jpg",
   "by": "Agus Damanik",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Budae_jjigae_indonesia.jpg"
  },
  "삼겹살": {
   "t": "Korean.cuisine-Samgyeopsal-01.jpg",
   "by": "by hellochris",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Samgyeopsal-01.jpg"
  },
  "소곱창": {
   "t": "Gopchang 2.jpg",
   "by": "뚱표아빠의 세상사는 이야기",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gopchang_2.jpg"
  },
  "소시지 야채볶음": {
   "t": "Stir-Fried Cabbage and Mixed Vegetables with Sliced Sausages.jpg",
   "by": "Uthman salma",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Stir-Fried_Cabbage_and_Mixed_Vegetables_with_Sliced_Sausages.jpg"
  },
  "수박": {
   "t": "Slices of watermelon.jpg",
   "by": "Funmoring46",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Slices_of_watermelon.jpg"
  },
  "양념치킨": {
   "t": "Yangnyeom Chicken Korean fried chicken.jpg",
   "by": "Startandstar",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Yangnyeom_Chicken_Korean_fried_chicken.jpg"
  },
  "어묵탕": {
   "t": "Eomuk-tang 2.jpg",
   "by": "bigtorica",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Eomuk-tang_2.jpg"
  },
  "육회": {
   "t": "2020-10-20 육회.jpeg",
   "by": "revi",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:2020-10-20_%EC%9C%A1%ED%9A%8C.jpeg"
  },
  "족발": {
   "t": "Jokbal 2.jpg",
   "by": "국립국어원",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Jokbal_2.jpg"
  },
  "짬뽕탕": {
   "t": "Jjamppong-sujebi 2.jpg",
   "by": "대경라이프",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jjamppong-sujebi_2.jpg"
  },
  "치즈 나쵸": {
   "t": "Nachos with Melted Cheese, Jalapenos, and Tasty Toppings.jpg",
   "by": "روتانا",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Nachos_with_Melted_Cheese,_Jalapenos,_and_Tasty_Toppings.jpg"
  },
  "콘치즈": {
   "t": "Corn cheese.jpg",
   "by": "anokarina",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Corn_cheese.jpg"
  },
  "파전": {
   "t": "Pajeon (spring onion pancake) - Kogi, Brighton.jpg",
   "by": "Andy Li",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Pajeon_(spring_onion_pancake)_-_Kogi,_Brighton.jpg"
  },
  "회 한 접시": {
   "t": "Korean.food-Hoe-02.jpg",
   "by": "by ebifry",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.food-Hoe-02.jpg"
  },
  "후라이드 치킨": {
   "t": "Iksan City 48 Korean Style Fried chicken.jpg",
   "by": "KOREA.NET",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Iksan_City_48_Korean_Style_Fried_chicken.jpg"
  }
 },
 "sul": {
  "데킬라 샷": {
   "t": "Tequila shots.jpg",
   "by": "Prayitno / Thank you for (8 millions +) views from Los Angel",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tequila_shots.jpg"
  },
  "레드와인": {
   "t": "Red Wine Glass.jpg",
   "by": "André Karwath aka Aka",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Red_Wine_Glass.jpg"
  },
  "막걸리": {
   "t": "Makgeolli 4.jpg",
   "by": "jinho kim",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Makgeolli_4.jpg"
  },
  "모히또": {
   "t": "Mojito, Mazatlán, 30 de noviembre de 2022.jpg",
   "by": "El Nuevo Doge",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Mojito,_Mazatl%C3%A1n,_30_de_noviembre_de_2022.jpg"
  },
  "복분자주": {
   "t": "Bokbunjaju.jpg",
   "by": "pepelady",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Bokbunjaju.jpg"
  },
  "사케": {
   "t": "Sake set.jpg",
   "by": "The Epopt",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Sake_set.jpg"
  },
  "생맥주": {
   "t": "Cheap beer in Slovakia (8400393718).jpg",
   "by": "Guillaume Speurt from Vilnius, Lithuania",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Cheap_beer_in_Slovakia_(8400393718).jpg"
  },
  "샴페인": {
   "t": "Champagne at Sausage Emporium in Sonoma, California - Sarah Stierch.jpg",
   "by": "Missvain",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Champagne_at_Sausage_Emporium_in_Sonoma,_California_-_Sarah_Stierch.jpg"
  },
  "소맥": {
   "t": "Somaek.jpg",
   "by": "은영쌤",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Somaek.jpg"
  },
  "소주": {
   "t": "Soju in korean restaurant.JPG",
   "by": "Clément Bucco-Lechat",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Soju_in_korean_restaurant.JPG"
  },
  "위스키 하이볼": {
   "t": "Torys Highball at Ebisu, Nishiogikubo south (29740423022).jpg",
   "by": "nakashi",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Torys_Highball_at_Ebisu,_Nishiogikubo_south_(29740423022).jpg"
  },
  "진토닉": {
   "t": "Gin and Tonic with ingredients.jpg",
   "by": "NotFromUtrecht",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gin_and_Tonic_with_ingredients.jpg"
  },
  "화이트와인": {
   "t": "White Wine Glas.jpg",
   "by": "André Karwath aka Aka",
   "lic": "CC BY-SA 2.5",
   "url": "https://commons.wikimedia.org/wiki/File:White_Wine_Glas.jpg"
  },
  "흑맥주": {
   "t": "A glass of Stout from Cloudwater.jpg",
   "by": "55belgianbeerfan",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:A_glass_of_Stout_from_Cloudwater.jpg"
  }
 },
 "yasik": {
  "감자탕": {
   "t": "Gamja-tang 5.jpg",
   "by": "travel oriented",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gamja-tang_5.jpg"
  },
  "김밥": {
   "t": "Gimbap (pixabay).jpg",
   "by": "changupn",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Gimbap_(pixabay).jpg"
  },
  "꼬치": {
   "t": "Dak-kkochi 1.jpg",
   "by": "향긋한 커피매니아",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dak-kkochi_1.jpg"
  },
  "도넛": {
   "t": "Glazed doughnut (1387333).jpg",
   "by": "Unknown authorUnknown author",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Glazed_doughnut_(1387333).jpg"
  },
  "돈까스": {
   "t": "Tonkatsu of Kimukatsu.jpg",
   "by": "Minseong Kim",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tonkatsu_of_Kimukatsu.jpg"
  },
  "떡볶이": {
   "t": "Korean.snacks-Tteokbokki-08.jpg",
   "by": "by jetalone (flickr)",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.snacks-Tteokbokki-08.jpg"
  },
  "라면": {
   "t": "Ramen Jump 002.jpg",
   "by": "Ocdp",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Ramen_Jump_002.jpg"
  },
  "랍스터": {
   "t": "Lobster Thermidor.jpg",
   "by": "thefoodplace.co.uk",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Lobster_Thermidor.jpg"
  },
  "마라샹궈": {
   "t": "Malaxiangguo in China.jpg",
   "by": "Qinrong0115",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Malaxiangguo_in_China.jpg"
  },
  "만두": {
   "t": "Japanese pan fried gyoza.jpg",
   "by": "Adryan R. Villanueva",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Japanese_pan_fried_gyoza.jpg"
  },
  "부리또": {
   "t": "Burrito al pastor - Bacalar QR.jpg",
   "by": "Bernard DUPONT",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Burrito_al_pastor_-_Bacalar_QR.jpg"
  },
  "샌드위치": {
   "t": "Club-sandwich.jpg",
   "by": "Memm",
   "lic": "CC BY 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Club-sandwich.jpg"
  },
  "순댓국": {
   "t": "Korean soup Sundae gukbap 01.jpg",
   "by": "Mar del Este",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup_Sundae_gukbap_01.jpg"
  },
  "스테이크": {
   "t": "Steak and onions.jpg",
   "by": "E4024",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Steak_and_onions.jpg"
  },
  "쌀국수": {
   "t": "Phở bò in a German restaurant 02.jpg",
   "by": "Kritzolina",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ph%E1%BB%9F_b%C3%B2_in_a_German_restaurant_02.jpg"
  },
  "아이스크림": {
   "t": "Ice cream cone with spoon.jpg",
   "by": "Thegreatmutata",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Ice_cream_cone_with_spoon.jpg"
  },
  "양꼬치": {
   "t": "양꼬치.jpg",
   "by": "악미",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:%EC%96%91%EA%BC%AC%EC%B9%98.jpg"
  },
  "주먹밥": {
   "t": "Jumeok-bap.jpg",
   "by": "Chloe Lim",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jumeok-bap.jpg"
  },
  "짜장면": {
   "t": "Jajangmyeon by KFoodaddict.jpg",
   "by": "KFoodaddict",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jajangmyeon_by_KFoodaddict.jpg"
  },
  "초밥": {
   "t": "Nigiri Sushi (26505096851).jpg",
   "by": "Tim Reckmann from Hamm, Deutschland",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Nigiri_Sushi_(26505096851).jpg"
  },
  "치킨": {
   "t": "Iksan City 48 Korean Style Fried chicken.jpg",
   "by": "KOREA.NET",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Iksan_City_48_Korean_Style_Fried_chicken.jpg"
  },
  "카레": {
   "t": "Beef curry rice 003.jpg",
   "by": "Ocdp",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Beef_curry_rice_003.jpg"
  },
  "칼국수": {
   "t": "Kal-guksu 1.jpg",
   "by": "travel oriented",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Kal-guksu_1.jpg"
  },
  "크루아상": {
   "t": "Croissants au beurre (18953292873).jpg",
   "by": "Herry Wibisono (herryway)",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Croissants_au_beurre_(18953292873).jpg"
  },
  "타코": {
   "t": "(El Flaco) Al Pastor Tacos.jpg",
   "by": "City Foodsters",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:(El_Flaco)_Al_Pastor_Tacos.jpg"
  },
  "타코야끼": {
   "t": "Takoyaki by yomi955.jpg",
   "by": "heiwa4126",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Takoyaki_by_yomi955.jpg"
  },
  "텐동": {
   "t": "Tendon one meal.jpg",
   "by": "LR0725",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tendon_one_meal.jpg"
  },
  "토스트": {
   "t": "Gilgeori toast 4.jpg",
   "by": "gildedgingerbread",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gilgeori_toast_4.jpg"
  },
  "팔라펠": {
   "t": "Falafel 1.JPG",
   "by": "Miansari66",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Falafel_1.JPG"
  },
  "피자": {
   "t": "New York-Style Pizza-crop.png",
   "by": "Pnickell0",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:New_York-Style_Pizza-crop.png"
  },
  "햄버거": {
   "t": "NCI Visuals Food Hamburger.jpg",
   "by": "Len Rizzi (photographer)",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:NCI_Visuals_Food_Hamburger.jpg"
  }
 },
 "conv": {
  "감자칩": {
   "t": "Chips in a bowl at a party.JPG",
   "by": "Tomwsulcer",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Chips_in_a_bowl_at_a_party.JPG"
  },
  "과일주스": {
   "t": "Orange juice 1 edit1.jpg",
   "by": "Agency of the United States Department of Agriculture Edited",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Orange_juice_1_edit1.jpg"
  },
  "군만두": {
   "t": "Japanese pan fried gyoza.jpg",
   "by": "Adryan R. Villanueva",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Japanese_pan_fried_gyoza.jpg"
  },
  "도시락": {
   "t": "Dosirak.jpg",
   "by": "Sharon Ang",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Dosirak.jpg"
  },
  "바나나우유": {
   "t": "Binggrae Banana Flavored Milk 03.jpg",
   "by": "KOREA.NET",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Binggrae_Banana_Flavored_Milk_03.jpg"
  },
  "삼각김밥": {
   "t": "Onigiri at a convenience store by typester in Kamakura.jpg",
   "by": "typester from Kamakura, Kanagawa",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Onigiri_at_a_convenience_store_by_typester_in_Kamakura.jpg"
  },
  "샌드위치": {
   "t": "Club-sandwich.jpg",
   "by": "Memm",
   "lic": "CC BY 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Club-sandwich.jpg"
  },
  "아이스크림": {
   "t": "Ice cream cone with spoon.jpg",
   "by": "Thegreatmutata",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Ice_cream_cone_with_spoon.jpg"
  },
  "젤리": {
   "t": "Shameless Snacks gummy bears.jpg",
   "by": "Mx. Granger",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Shameless_Snacks_gummy_bears.jpg"
  },
  "초콜릿": {
   "t": "Ten Pieces of Cadbury Chocolate Bars Group Up Together.jpg",
   "by": "Brassluff",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Ten_Pieces_of_Cadbury_Chocolate_Bars_Group_Up_Together.jpg"
  },
  "캔커피": {
   "t": "Photograph of Canned Coffee Cans.jpg",
   "by": "Lucas Kelleher",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Photograph_of_Canned_Coffee_Cans.jpg"
  },
  "컵라면": {
   "t": "Nissin Cup Noodle (Original) - 01.jpg",
   "by": "Quercus acuta",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Nissin_Cup_Noodle_(Original)_-_01.jpg"
  },
  "탄산음료": {
   "t": "Glass of Cola.jpg",
   "by": "Cocktailmarler",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Glass_of_Cola.jpg"
  },
  "푸딩": {
   "t": "Homemade Flan.jpg",
   "by": "Cary Bass",
   "lic": "CC BY-SA 2.5",
   "url": "https://commons.wikimedia.org/wiki/File:Homemade_Flan.jpg"
  },
  "핫바": {
   "t": "Busan eomuk.jpg",
   "by": "seul5167",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Busan_eomuk.jpg"
  }
 },
 "trip": {
  "교토": {
   "t": "Kiyomizu-dera, Kyoto, November 2016 -07.jpg",
   "by": "Martin Falbisoner",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Kiyomizu-dera,_Kyoto,_November_2016_-07.jpg"
  },
  "남극": {
   "t": "South Shetland-2016-Deception Island–Chinstrap penguins (Pygoscelis antarctica) 04 on iceberg.jpg",
   "by": "Godot13",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguins_(Pygoscelis_antarctica)_04_on_iceberg.jpg"
  },
  "뉴욕": {
   "t": "Manhattan from Weehawken, NJ.jpg",
   "by": "Dmitry Avdeev",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Manhattan_from_Weehawken,_NJ.jpg"
  },
  "다낭": {
   "t": "Golden Bridge Ba Na Hills aerial sunset Da Nang Vietnam.jpg",
   "by": "Vivu Vietnam",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Golden_Bridge_Ba_Na_Hills_aerial_sunset_Da_Nang_Vietnam.jpg"
  },
  "두바이": {
   "t": "Dubai Skyline mit Burj Khalifa (18241030269).jpg",
   "by": "Tim Reckmann from Hamm, Deutschland",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dubai_Skyline_mit_Burj_Khalifa_(18241030269).jpg"
  },
  "라스베이거스": {
   "t": "Las Vegas (Nevada, USA), The Strip -- 2012 -- 6232.jpg",
   "by": "Dietmar Rabich",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Las_Vegas_(Nevada,_USA),_The_Strip_--_2012_--_6232.jpg"
  },
  "런던": {
   "t": "Tower Bridge London Dusk Feb 2006.jpg",
   "by": "Diliff",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tower_Bridge_London_Dusk_Feb_2006.jpg"
  },
  "로마": {
   "t": "Colosseum in Rome-April 2007-1- copie 2B.jpg",
   "by": "Diliff",
   "lic": "CC BY-SA 2.5",
   "url": "https://commons.wikimedia.org/wiki/File:Colosseum_in_Rome-April_2007-1-_copie_2B.jpg"
  },
  "몰디브": {
   "t": "Maldives resort beach, water villas and lagoon, Maldives (Radisson resort) (DSC05461).jpg",
   "by": "Tetiana Stepanets",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Maldives_resort_beach,_water_villas_and_lagoon,_Maldives_(Radisson_resort)_(DSC05461).jpg"
  },
  "몽골 초원": {
   "t": "Grasslands in Mongolia.jpg",
   "by": "Tenkyuu216",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Grasslands_in_Mongolia.jpg"
  },
  "발리": {
   "t": "Bali, Rice fields, Rice terraces in East Bali, Indonesia.jpg",
   "by": "Vyacheslav Argenberg",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Bali,_Rice_fields,_Rice_terraces_in_East_Bali,_Indonesia.jpg"
  },
  "방콕": {
   "t": "Templo Wat Arun, Bangkok, Tailandia, 2013-08-22, DD 30.jpg",
   "by": "Diego Delso",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Templo_Wat_Arun,_Bangkok,_Tailandia,_2013-08-22,_DD_30.jpg"
  },
  "부산": {
   "t": "Haeundae Beach in Busan.jpg",
   "by": "StephNurnberg",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Haeundae_Beach_in_Busan.jpg"
  },
  "산토리니": {
   "t": "1000 Three domes of Oia in Santorini Photo by Giles Laurent.jpg",
   "by": "Giles Laurent",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:1000_Three_domes_of_Oia_in_Santorini_Photo_by_Giles_Laurent.jpg"
  },
  "스위스": {
   "t": "CH.VS.Zermatt 2021-10-17 Matterhorn 8726.jpg",
   "by": "Roy Egloff",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:CH.VS.Zermatt_2021-10-17_Matterhorn_8726.jpg"
  },
  "시드니": {
   "t": "Sydney Harbour Bridge night.jpg",
   "by": "Diliff",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Sydney_Harbour_Bridge_night.jpg"
  },
  "시베리아 횡단열차": {
   "t": "VL 85-022 container train.jpg",
   "by": "Sorovas",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:VL_85-022_container_train.jpg"
  },
  "아이슬란드": {
   "t": "Skógafoss July 2014.JPG",
   "by": "Martin Falbisoner",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Sk%C3%B3gafoss_July_2014.JPG"
  },
  "아테네": {
   "t": "Attica 06-13 Athens 50 View from Philopappos - Acropolis Hill.jpg",
   "by": "A.Savin",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Attica_06-13_Athens_50_View_from_Philopappos_-_Acropolis_Hill.jpg"
  },
  "오사카": {
   "t": "Dotonbori, Osaka, at night, November 2016.jpg",
   "by": "Martin Falbisoner",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dotonbori,_Osaka,_at_night,_November_2016.jpg"
  },
  "이스탄불": {
   "t": "Hagia Sophia Mars 2013.jpg",
   "by": "Arild Vågen",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg"
  },
  "이스터섬": {
   "t": "Moai Rano raraku.jpg",
   "by": "Aurbina",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Moai_Rano_raraku.jpg"
  },
  "제주도": {
   "t": "Hydrangea macrophylla in front of Seongsan Ilchulbong volcano at blue hour in Jeju Island South Korea.jpg",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Hydrangea_macrophylla_in_front_of_Seongsan_Ilchulbong_volcano_at_blue_hour_in_Jeju_Island_South_Korea.jpg"
  },
  "캐나다 로키": {
   "t": "Moraine Lake 17092005.jpg",
   "by": "Gorgo",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Moraine_Lake_17092005.jpg"
  },
  "케냐 사파리": {
   "t": "Natural World Kenya Safaris - Masai Mara Safari tours.jpg",
   "by": "NaturalWorldKenya",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Natural_World_Kenya_Safaris_-_Masai_Mara_Safari_tours.jpg"
  },
  "파리": {
   "t": "Tour eiffel at sunrise from the trocadero.jpg",
   "by": "Tristan Nitot",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tour_eiffel_at_sunrise_from_the_trocadero.jpg"
  },
  "프라하": {
   "t": "North view of Charles Bridge from Mánesův most, Prague 20160808 1.jpg",
   "by": "DXR",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:North_view_of_Charles_Bridge_from_M%C3%A1nes%C5%AFv_most,_Prague_20160808_1.jpg"
  },
  "하노이": {
   "t": "Hanoi - Turtle Tower (Tháp Rùa), Hoàn Kiếm Lake.jpg",
   "by": "P. Hughes",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Hanoi_-_Turtle_Tower_(Th%C3%A1p_R%C3%B9a),_Ho%C3%A0n_Ki%E1%BA%BFm_Lake.jpg"
  },
  "하와이": {
   "t": "Waikiki Beach (2024)-L1004709.jpg",
   "by": "Frank Schulenburg",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Waikiki_Beach_(2024)-L1004709.jpg"
  },
  "홍콩": {
   "t": "International Commerce Centre on Victoria Harbour.jpg",
   "by": "Wilfredor",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:International_Commerce_Centre_on_Victoria_Harbour.jpg"
  },
  "후지산": {
   "t": "Mount Fuji at sunset, March 2025.jpg",
   "by": "Romain Guy from San Francisco, USA",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Mount_Fuji_at_sunset,_March_2025.jpg"
  }
 },
 "animal": {
  "거북이": {
   "t": "Green Sea Turtle Swimming in the Galápagos.jpg",
   "by": "MasterfulNerd",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Green_Sea_Turtle_Swimming_in_the_Gal%C3%A1pagos.jpg"
  },
  "고래": {
   "t": "001 Humpback whale breaching in Ballena Marine National Park Photo by Giles Laurent.jpg",
   "by": "Giles Laurent",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:001_Humpback_whale_breaching_in_Ballena_Marine_National_Park_Photo_by_Giles_Laurent.jpg"
  },
  "나무늘보": {
   "t": "Bradypus.jpg",
   "by": "Stefan Laube (Tauchgurke)",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Bradypus.jpg"
  },
  "대형견": {
   "t": "Dülmen, Hausdülmen, Golden Retriever -- 2022 -- 5945.jpg",
   "by": "Dietmar Rabich",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Hausd%C3%BClmen,_Golden_Retriever_--_2022_--_5945.jpg"
  },
  "독수리": {
   "t": "Bald eagle in Alaska 2016-3.jpg",
   "by": "Andy Morffew from Itchen Abbas, Hampshire, UK",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Bald_eagle_in_Alaska_2016-3.jpg"
  },
  "돌고래": {
   "t": "010 Atlantic bottlenose dolphin jumping at Pelican point Photo by Giles Laurent.jpg",
   "by": "Giles Laurent",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:010_Atlantic_bottlenose_dolphin_jumping_at_Pelican_point_Photo_by_Giles_Laurent.jpg"
  },
  "부잣집 고양이": {
   "t": "Francis Sartorius I (1734-1804) - 'Psyche', a White Persian Cat - 1449066 - National Trust.jpg",
   "by": "Francis Sartorius",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Francis_Sartorius_I_(1734-1804)_-_%27Psyche%27,_a_White_Persian_Cat_-_1449066_-_National_Trust.jpg"
  },
  "사자": {
   "t": "002 Male Lion prowling in the Serengeti National Park Photo by Giles Laurent.jpg",
   "by": "Giles Laurent",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:002_Male_Lion_prowling_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg"
  },
  "수달": {
   "t": "Wild Sea Otter (17348235490).jpg",
   "by": "Rennett Stowe from USA",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Wild_Sea_Otter_(17348235490).jpg"
  },
  "여우": {
   "t": "Alaska Red Fox (Vulpes vulpes).jpg",
   "by": "Gregory \"Slobirdr\" Smith",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Alaska_Red_Fox_(Vulpes_vulpes).jpg"
  },
  "용": {
   "t": "2008-02-19 Chinese sculpture of dragon in Tainan.jpg",
   "by": "Pascal Terjan",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:2008-02-19_Chinese_sculpture_of_dragon_in_Tainan.jpg"
  },
  "유니콘": {
   "t": "The Unicorn in Captivity (from the Unicorn Tapestries) MET DP118991.jpg",
   "by": "",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:The_Unicorn_in_Captivity_(from_the_Unicorn_Tapestries)_MET_DP118991.jpg"
  },
  "코알라": {
   "t": "Koala in Zoo Duisburg.jpg",
   "by": "Till Niermann",
   "lic": "CC BY 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Koala_in_Zoo_Duisburg.jpg"
  },
  "판다": {
   "t": "Giant panda eating bamboo Taipei Zoo.jpg",
   "by": "KQuhen",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Giant_panda_eating_bamboo_Taipei_Zoo.jpg"
  },
  "펭귄": {
   "t": "Penguin in Antarctica jumping out of the water.jpg",
   "by": "Christopher Michel",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Penguin_in_Antarctica_jumping_out_of_the_water.jpg"
  },
  "햄스터": {
   "t": "Baby Hamster - 2 Weeks Old.jpg",
   "by": "Augustus Binu : flickr : Instagram",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Baby_Hamster_-_2_Weeks_Old.jpg"
  }
 },
 "date": {
  "PC방": {
   "t": "PC bang in 2001.jpg",
   "by": "Alex C",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:PC_bang_in_2001.jpg"
  },
  "감성 카페": {
   "t": "Cozy cafe interior with stylish seating and large windows on a quiet street.jpg",
   "by": "Shixart1985",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Cozy_cafe_interior_with_stylish_seating_and_large_windows_on_a_quiet_street.jpg"
  },
  "놀이공원": {
   "t": "Illuminated Ferris wheel, bouncing castle and carousel at night in a funfair in Vientiane, Laos.jpg",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Illuminated_Ferris_wheel,_bouncing_castle_and_carousel_at_night_in_a_funfair_in_Vientiane,_Laos.jpg"
  },
  "바다 드라이브": {
   "t": "Great ocean road 2001-11-14 D1010041 bay of islands coastalP.jpg",
   "by": "Anne-Marie Steenbergen",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Great_ocean_road_2001-11-14_D1010041_bay_of_islands_coastalP.jpg"
  },
  "방탈출": {
   "t": "Escape Room - \"The Expedition\" (Escape Quest Bethesda).jpg",
   "by": "Hudson Bloom",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Escape_Room_-_%22The_Expedition%22_(Escape_Quest_Bethesda).jpg"
  },
  "볼링장": {
   "t": "The New HUB Bowling Lanes (7975562295).jpg",
   "by": "Atomic Taco from Seattle, WA, USA",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:The_New_HUB_Bowling_Lanes_(7975562295).jpg"
  },
  "쇼핑몰": {
   "t": "Starfield Library COEX 20240218.jpg",
   "by": "Sean Young (@assanges)",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Starfield_Library_COEX_20240218.jpg"
  },
  "아쿠아리움": {
   "t": "Georgia Aquarium - Ocean Voyager Tunnel Jan 2006.jpg",
   "by": "Diliff",
   "lic": "CC BY 2.5",
   "url": "https://commons.wikimedia.org/wiki/File:Georgia_Aquarium_-_Ocean_Voyager_Tunnel_Jan_2006.jpg"
  },
  "영화관": {
   "t": "4DX seats in cinema (motion and environmental effects synced with the on-screen action) bench rows in a movie theater hall Kinostoler kinosal Kilden kino Tønsberg, Norway 2023 IMG 7849.jpg",
   "by": "Wolfmann",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:4DX_seats_in_cinema_(motion_and_environmental_effects_synced_with_the_on-screen_action)_bench_rows_in_a_movie_theater_hall_Kinostoler_kinosal_Kilden_kino_T%C3%B8nsberg,_Norway_2023_IMG_7849.jpg"
  },
  "와인바": {
   "t": "(Zazu, Quito Ecuador, interior) wine room.jpg",
   "by": "David Adam Kess",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:(Zazu,_Quito_Ecuador,_interior)_wine_room.jpg"
  },
  "자전거 타기": {
   "t": "Bicycle path on swan under stirling bridge.jpg",
   "by": "JarrahTree",
   "lic": "CC BY 2.5 au",
   "url": "https://commons.wikimedia.org/wiki/File:Bicycle_path_on_swan_under_stirling_bridge.jpg"
  },
  "전시회": {
   "t": "Melaka Art Gallery - Exhibition Hall.jpg",
   "by": "Chongkian",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Melaka_Art_Gallery_-_Exhibition_Hall.jpg"
  },
  "코인노래방": {
   "t": "Karaoke in Nha Trang.jpg",
   "by": "Christophe95",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Karaoke_in_Nha_Trang.jpg"
  },
  "포장마차": {
   "t": "Korea-Pojangmacha-01.jpg",
   "by": "by superlocal at Flickr",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korea-Pojangmacha-01.jpg"
  },
  "한강 피크닉": {
   "t": "Yeouido Hangang Park seen from Dangsan Railway Bridge.jpg",
   "by": "Ox1997cow",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Yeouido_Hangang_Park_seen_from_Dangsan_Railway_Bridge.jpg"
  }
 },
 "retro": {
  "CD플레이어": {
   "t": "Sony-Discman-D-E307CK.jpg",
   "by": "Mikus",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Sony-Discman-D-E307CK.jpg"
  },
  "MP3 플레이어": {
   "t": "IRiver Clix 2GB MP3 Player.jpg",
   "by": "Matt Burris",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:IRiver_Clix_2GB_MP3_Player.jpg"
  },
  "게임보이": {
   "t": "Game Boy.jpg",
   "by": "PiaCarrot",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Game_Boy.jpg"
  },
  "롤러블레이드": {
   "t": "TRUE Inline Hockey Skates-IMG 5253-pair-FRD.png",
   "by": "Fred Hsu on en.wikipedia",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:TRUE_Inline_Hockey_Skates-IMG_5253-pair-FRD.png"
  },
  "비디오 대여점": {
   "t": "VHS Tapes on Library Shelves.JPG",
   "by": "ParentingPatch",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:VHS_Tapes_on_Library_Shelves.JPG"
  },
  "삐삐": {
   "t": "Beeper Motorola Bravo Express - CTC Chile - 1.jpg",
   "by": "Jorgebarrios",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Beeper_Motorola_Bravo_Express_-_CTC_Chile_-_1.jpg"
  },
  "손편지": {
   "t": "Emily Dickinson´s letter about her love.jpg",
   "by": "",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Emily_Dickinson%C2%B4s_letter_about_her_love.jpg"
  },
  "오락실": {
   "t": "Video arcade games at Wikimania 2017 afterparty.jpg",
   "by": "Daniel Case",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Video_arcade_games_at_Wikimania_2017_afterparty.jpg"
  },
  "폴더폰": {
   "t": "Samsung flip phone, Bunde (2019) 01.jpg",
   "by": "Donald Trung Quoc Don (Chữ Hán: 徵國單) - Wikimedia Commons - ©",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Samsung_flip_phone,_Bunde_(2019)_01.jpg"
  }
 },
 "chickenfood": {
  "간장치킨": {
   "t": "Korean fried chicken 4 ganjang.jpg",
   "by": "happy o'ne",
   "lic": "CC BY 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_fried_chicken_4_ganjang.jpg"
  },
  "닭가슴살 샐러드": {
   "t": "DSC 7112 A plate of grilled chicken Caesar salad on a table set for dinner with glasses of red wine and soft candlelight in the background.jpg",
   "by": "PattayaPatrol",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:DSC_7112_A_plate_of_grilled_chicken_Caesar_salad_on_a_table_set_for_dinner_with_glasses_of_red_wine_and_soft_candlelight_in_the_background.jpg"
  },
  "닭강정": {
   "t": "만석닭강정.jpg",
   "by": "LR0725",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:%EB%A7%8C%EC%84%9D%EB%8B%AD%EA%B0%95%EC%A0%95.jpg"
  },
  "닭꼬치": {
   "t": "Dak-kkochi 1.jpg",
   "by": "향긋한 커피매니아",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dak-kkochi_1.jpg"
  },
  "닭발": {
   "t": "Chicken feet.jpg",
   "by": "User:Anna Frodesiak",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Chicken_feet.jpg"
  },
  "닭볶음탕": {
   "t": "Korean.food-Dakbokemtang-01.jpg",
   "by": "stuart_spivack (a flickr user)",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.food-Dakbokemtang-01.jpg"
  },
  "닭칼국수": {
   "t": "Korean.noodle-Kalguksu-01.jpg",
   "by": "by jslander",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.noodle-Kalguksu-01.jpg"
  },
  "백숙": {
   "t": "Baeksuk.jpg",
   "by": "hyun chun kim",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Baeksuk.jpg"
  },
  "삼계탕": {
   "t": "Korean soup-Samgyetang-13.jpg",
   "by": "sozoooo",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup-Samgyetang-13.jpg"
  },
  "양념치킨": {
   "t": "Yangnyeom Chicken Korean fried chicken.jpg",
   "by": "Startandstar",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Yangnyeom_Chicken_Korean_fried_chicken.jpg"
  },
  "오야코동": {
   "t": "Oyakodon 003.jpg",
   "by": "Ocdp",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Oyakodon_003.jpg"
  },
  "찜닭": {
   "t": "Jjimdak 1.jpg",
   "by": "Jordi Sanchez",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jjimdak_1.jpg"
  },
  "철판 닭갈비": {
   "t": "Korean cuisine-Dakgalbi-01.jpg",
   "by": "by shizu k (shezzz) at Flickr",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Dakgalbi-01.jpg"
  },
  "탄두리 치킨": {
   "t": "Tandoori chicken Indian.jpg",
   "by": "pelican",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tandoori_chicken_Indian.jpg"
  },
  "파닭": {
   "t": "Padak.jpg",
   "by": "Choi2451",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Padak.jpg"
  },
  "후라이드 치킨": {
   "t": "Iksan City 48 Korean Style Fried chicken.jpg",
   "by": "KOREA.NET",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Iksan_City_48_Korean_Style_Fried_chicken.jpg"
  }
 },
 "porkfood": {
  "감자탕": {
   "t": "Gamja-tang 5.jpg",
   "by": "travel oriented",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gamja-tang_5.jpg"
  },
  "김치찜": {
   "t": "김치찜.jpg",
   "by": "밤하늘의 수정",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:%EA%B9%80%EC%B9%98%EC%B0%9C.jpg"
  },
  "돈까스": {
   "t": "Tonkatsu of Kimukatsu.jpg",
   "by": "Minseong Kim",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tonkatsu_of_Kimukatsu.jpg"
  },
  "돈코츠 라멘": {
   "t": "Tonkotsu ramen in Tokyo.jpg",
   "by": "Syced",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Tonkotsu_ramen_in_Tokyo.jpg"
  },
  "동파육": {
   "t": "Dongpo pork by superturtle.jpg",
   "by": "superturtle",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dongpo_pork_by_superturtle.jpg"
  },
  "돼지갈비": {
   "t": "Dwaeji-galbi-gui.jpg",
   "by": "lazy fri13th",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dwaeji-galbi-gui.jpg"
  },
  "돼지국밥": {
   "t": "Dwaeji-gukbap 1.jpg",
   "by": "chomjong",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dwaeji-gukbap_1.jpg"
  },
  "두루치기": {
   "t": "Gimchi-duruchigi-ssam.jpg",
   "by": "대경라이프",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gimchi-duruchigi-ssam.jpg"
  },
  "목살 구이": {
   "t": "Moksal-gui.jpg",
   "by": "happy11u",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Moksal-gui.jpg"
  },
  "바비큐 폭립": {
   "t": "Pork-ribs 02.jpg",
   "by": "Pannet",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Pork-ribs_02.jpg"
  },
  "보쌈": {
   "t": "Korean cuisine-Bossam-04.jpg",
   "by": "Timber Tank",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Bossam-04.jpg"
  },
  "삼겹살": {
   "t": "Korean.cuisine-Samgyeopsal-01.jpg",
   "by": "by hellochris",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Samgyeopsal-01.jpg"
  },
  "순대": {
   "t": "Korean.food-Sundae-01.jpg",
   "by": "ayustety (a flickr user)",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.food-Sundae-01.jpg"
  },
  "제육볶음": {
   "t": "Jeyuk-bokkeum 2.jpg",
   "by": "국립국어원",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Jeyuk-bokkeum_2.jpg"
  },
  "족발": {
   "t": "Jokbal 2.jpg",
   "by": "국립국어원",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Jokbal_2.jpg"
  },
  "탕수육": {
   "t": "Tangsuyuk (Korean Chinese sweet and sour pork).jpg",
   "by": "용스토리",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tangsuyuk_(Korean_Chinese_sweet_and_sour_pork).jpg"
  }
 },
 "beeffood": {
  "갈비찜": {
   "t": "Testing out @davidchang's mom's Galbi Jjim recipe for possible inclusion in Christmas Dinner. It's excellent. -Korean -shortribs -galbijjim (15334632144).jpg",
   "by": "Arnold Gatilao from Oakland, CA, USA",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Testing_out_@davidchang%27s_mom%27s_Galbi_Jjim_recipe_for_possible_inclusion_in_Christmas_Dinner._It%27s_excellent._-Korean_-shortribs_-galbijjim_(15334632144).jpg"
  },
  "갈비탕": {
   "t": "Galbi-tang 2.jpg",
   "by": "Debbie Tingzon",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Galbi-tang_2.jpg"
  },
  "곰탕": {
   "t": "Gomtang.jpg",
   "by": "chomjong",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gomtang.jpg"
  },
  "규동": {
   "t": "Noto beef bowl.jpg",
   "by": "Miyuki Meinaka",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Noto_beef_bowl.jpg"
  },
  "대창": {
   "t": "Daechang-gui.jpg",
   "by": "향긋한 커피매니아",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Daechang-gui.jpg"
  },
  "로스트비프": {
   "t": "A roast beef dinner at The Queen's Head, Boreham, Essex, England - lighter.jpg",
   "by": "Acabashi",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:A_roast_beef_dinner_at_The_Queen%27s_Head,_Boreham,_Essex,_England_-_lighter.jpg"
  },
  "불고기": {
   "t": "Bulgogi 3.jpg",
   "by": "Debbie Tingzon",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Bulgogi_3.jpg"
  },
  "샤브샤브": {
   "t": "Shabu Shabu photo Don Ramey Logan.jpg",
   "by": "Don Ramey Logan",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Shabu_Shabu_photo_Don_Ramey_Logan.jpg"
  },
  "소갈비 구이": {
   "t": "Galbi 1.jpg",
   "by": "donchili",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Galbi_1.jpg"
  },
  "소곱창": {
   "t": "Gopchang 2.jpg",
   "by": "뚱표아빠의 세상사는 이야기",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gopchang_2.jpg"
  },
  "스테이크": {
   "t": "Steak and onions.jpg",
   "by": "E4024",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Steak_and_onions.jpg"
  },
  "쌀국수": {
   "t": "Phở bò in a German restaurant 02.jpg",
   "by": "Kritzolina",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ph%E1%BB%9F_b%C3%B2_in_a_German_restaurant_02.jpg"
  },
  "육개장": {
   "t": "Korean soup-Yukgaejang-01.jpg",
   "by": "live",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup-Yukgaejang-01.jpg"
  },
  "육회": {
   "t": "2020-10-20 육회.jpeg",
   "by": "revi",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:2020-10-20_%EC%9C%A1%ED%9A%8C.jpeg"
  },
  "차돌박이": {
   "t": "Chadolbagi 3.jpg",
   "by": "Debbie Tingzon",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Chadolbagi_3.jpg"
  },
  "함박 스테이크": {
   "t": "Hamburg steak1.jpg",
   "by": "OiMax from Tokyo, Japan",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Hamburg_steak1.jpg"
  }
 },
 "gukbap": {
  "갈비탕": {
   "t": "Galbi-tang 2.jpg",
   "by": "Debbie Tingzon",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Galbi-tang_2.jpg"
  },
  "곰탕": {
   "t": "Gomtang.jpg",
   "by": "chomjong",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gomtang.jpg"
  },
  "굴국밥": {
   "t": "Gul-gukbap.jpg",
   "by": "Dr 방원장",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gul-gukbap.jpg"
  },
  "내장탕": {
   "t": "Naejang-tang.jpg",
   "by": "lazy fri13th",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Naejang-tang.jpg"
  },
  "돼지국밥": {
   "t": "Dwaeji-gukbap 1.jpg",
   "by": "chomjong",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dwaeji-gukbap_1.jpg"
  },
  "따로국밥": {
   "t": "Ttaro gukbap 2.JPG",
   "by": "hyolee2",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ttaro_gukbap_2.JPG"
  },
  "뼈해장국": {
   "t": "Ppyeohaejangguk 20240929 001.jpg",
   "by": "Mobius6",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ppyeohaejangguk_20240929_001.jpg"
  },
  "선지해장국": {
   "t": "Korean soup-Seonjiguk-02.jpg",
   "by": "SJ Yang",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup-Seonjiguk-02.jpg"
  },
  "설렁탕": {
   "t": "Seolleongtang.jpg",
   "by": "이동원",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Seolleongtang.jpg"
  },
  "소머리국밥": {
   "t": "So-meori-ttaro-gukbap.jpg",
   "by": "lazy fri13th",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:So-meori-ttaro-gukbap.jpg"
  },
  "순대국밥": {
   "t": "Korean soup Sundae gukbap 01.jpg",
   "by": "Mar del Este",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup_Sundae_gukbap_01.jpg"
  },
  "우거지국밥": {
   "t": "Sagol-ugeoji-guk.jpg",
   "by": "뚱표아빠의 세상사는 이야기",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Sagol-ugeoji-guk.jpg"
  },
  "육개장": {
   "t": "Korean soup-Yukgaejang-01.jpg",
   "by": "live",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup-Yukgaejang-01.jpg"
  },
  "장터국밥": {
   "t": "Gugil Ttaro gukbap.jpg",
   "by": "Arumdaum",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Gugil_Ttaro_gukbap.jpg"
  },
  "콩나물국밥": {
   "t": "Kongnamul gukbap 20230408 001.jpg",
   "by": "Mobius6",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Kongnamul_gukbap_20230408_001.jpg"
  }
 },
 "chinese": {
  "고추잡채": {
   "t": "Pepper japchae01.jpg",
   "by": "Mar del Este",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Pepper_japchae01.jpg"
  },
  "군만두": {
   "t": "Japanese pan fried gyoza.jpg",
   "by": "Adryan R. Villanueva",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Japanese_pan_fried_gyoza.jpg"
  },
  "깐쇼새우": {
   "t": "Kkansyo-saeu DSC00978.jpg",
   "by": "최광모",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Kkansyo-saeu_DSC00978.jpg"
  },
  "깐풍기": {
   "t": "Korean cuisine-Kkanpunggi-01.jpg",
   "by": "egg (Hong, Yun Seon)",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Kkanpunggi-01.jpg"
  },
  "꿔바로우": {
   "t": "Guobaorou at Zhenbutong, Changchun (20220826174428).jpg",
   "by": "N509FZ",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Guobaorou_at_Zhenbutong,_Changchun_(20220826174428).jpg"
  },
  "동파육": {
   "t": "Dongpo pork by superturtle.jpg",
   "by": "superturtle",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Dongpo_pork_by_superturtle.jpg"
  },
  "마라탕": {
   "t": "Malatang from Hope Tree (20220226172344).jpg",
   "by": "N509FZ",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Malatang_from_Hope_Tree_(20220226172344).jpg"
  },
  "볶음밥": {
   "t": "Egg Fried Rice.jpg",
   "by": "Gaurav Dhwaj Khadka",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Egg_Fried_Rice.jpg"
  },
  "양장피": {
   "t": "Yangjangpi 3.jpg",
   "by": "햇살소리",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Yangjangpi_3.jpg"
  },
  "울면": {
   "t": "Ulmyeon.jpg",
   "by": "Galaxea",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ulmyeon.jpg"
  },
  "유린기": {
   "t": "Yuringi 2.jpg",
   "by": "안녕내꺼",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Yuringi_2.jpg"
  },
  "짜장면": {
   "t": "Jajangmyeon by KFoodaddict.jpg",
   "by": "KFoodaddict",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jajangmyeon_by_KFoodaddict.jpg"
  },
  "짬뽕": {
   "t": "Jjamppong-sujebi 2.jpg",
   "by": "대경라이프",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jjamppong-sujebi_2.jpg"
  },
  "탕수육": {
   "t": "Tangsuyuk (Korean Chinese sweet and sour pork).jpg",
   "by": "용스토리",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Tangsuyuk_(Korean_Chinese_sweet_and_sour_pork).jpg"
  },
  "팔보채": {
   "t": "Palbo-chae.jpg",
   "by": "숭굴이",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Palbo-chae.jpg"
  }
 },
 "haejang": {
  "굴국밥": {
   "t": "Gul-gukbap.jpg",
   "by": "Dr 방원장",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gul-gukbap.jpg"
  },
  "김치찌개": {
   "t": "Korean.cuisine-Kimchi jjigae-01.jpg",
   "by": "by avlxyz",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Kimchi_jjigae-01.jpg"
  },
  "라면": {
   "t": "Ramen Jump 002.jpg",
   "by": "Ocdp",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Ramen_Jump_002.jpg"
  },
  "물냉면": {
   "t": "KOCIS Mul-naengmyeon, Chilled Buckwheat Noodle Soup (4594756202).jpg",
   "by": "Korea.net / Korean Culture and Information Service",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:KOCIS_Mul-naengmyeon,_Chilled_Buckwheat_Noodle_Soup_(4594756202).jpg"
  },
  "복국": {
   "t": "Pufferfish soup of Karato Market.jpg",
   "by": "そらみみ (Soramimi)",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Pufferfish_soup_of_Karato_Market.jpg"
  },
  "북엇국": {
   "t": "Bugeo-guk 2.jpg",
   "by": "국립국어원",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Bugeo-guk_2.jpg"
  },
  "뼈해장국": {
   "t": "Ppyeohaejangguk 20240929 001.jpg",
   "by": "Mobius6",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ppyeohaejangguk_20240929_001.jpg"
  },
  "선지해장국": {
   "t": "Korean soup-Seonjiguk-02.jpg",
   "by": "SJ Yang",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup-Seonjiguk-02.jpg"
  },
  "순댓국": {
   "t": "Korean soup Sundae gukbap 01.jpg",
   "by": "Mar del Este",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_soup_Sundae_gukbap_01.jpg"
  },
  "쌀국수": {
   "t": "Phở bò in a German restaurant 02.jpg",
   "by": "Kritzolina",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Ph%E1%BB%9F_b%C3%B2_in_a_German_restaurant_02.jpg"
  },
  "아이스 아메리카노": {
   "t": "Iced Coffee in Glass - Sunshine Coffee - Laramie Cafe (53838344552).jpg",
   "by": "Tony Webster",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Iced_Coffee_in_Glass_-_Sunshine_Coffee_-_Laramie_Cafe_(53838344552).jpg"
  },
  "재첩국": {
   "t": "Korean clam soup-Jaecheopguk-01.jpg",
   "by": "by shizu k (shezzz) at Flickr",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_clam_soup-Jaecheopguk-01.jpg"
  },
  "짬뽕": {
   "t": "Jjamppong-sujebi 2.jpg",
   "by": "대경라이프",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Jjamppong-sujebi_2.jpg"
  },
  "콩나물국밥": {
   "t": "Kongnamul gukbap 20230408 001.jpg",
   "by": "Mobius6",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Kongnamul_gukbap_20230408_001.jpg"
  },
  "햄버거": {
   "t": "NCI Visuals Food Hamburger.jpg",
   "by": "Len Rizzi (photographer)",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:NCI_Visuals_Food_Hamburger.jpg"
  }
 },
 "winter": {
  "계란빵": {
   "t": "Gyeranppang by travel oriented.jpg",
   "by": "travel oriented from Seoul, South Korea",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Gyeranppang_by_travel_oriented.jpg"
  },
  "국화빵": {
   "t": "Korean.dessert-Gukhwappang-01.jpg",
   "by": "by LWY",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.dessert-Gukhwappang-01.jpg"
  },
  "군고구마": {
   "t": "Gungoguma (roasted sweet potatoes) 2.jpg",
   "by": "국립국어원",
   "lic": "CC BY-SA 2.0 kr",
   "url": "https://commons.wikimedia.org/wiki/File:Gungoguma_(roasted_sweet_potatoes)_2.jpg"
  },
  "군옥수수": {
   "t": "Grilled Corn (Unsplash).jpg",
   "by": "Dragne Marius marius_dragne",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Grilled_Corn_(Unsplash).jpg"
  },
  "귤": {
   "t": "Mandarin Oranges (Citrus Reticulata).jpg",
   "by": "Joe Ravi",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Mandarin_Oranges_(Citrus_Reticulata).jpg"
  },
  "떡볶이": {
   "t": "Korean.snacks-Tteokbokki-08.jpg",
   "by": "by jetalone (flickr)",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean.snacks-Tteokbokki-08.jpg"
  },
  "붕어빵": {
   "t": "Bungeoppang-01.jpg",
   "by": "Siqbal at en.wikipedia",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Bungeoppang-01.jpg"
  },
  "십원빵": {
   "t": "10 won bread.jpg",
   "by": "Seefooddiet",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:10_won_bread.jpg"
  },
  "어묵": {
   "t": "Eomuk-tang 2.jpg",
   "by": "bigtorica",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Eomuk-tang_2.jpg"
  },
  "찹쌀떡": {
   "t": "찹쌀떡 - Chapssaltteok.jpg",
   "by": "Debbie Tingzon",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:%EC%B0%B9%EC%8C%80%EB%96%A1_-_Chapssaltteok.jpg"
  },
  "타코야끼": {
   "t": "Takoyaki by yomi955.jpg",
   "by": "heiwa4126",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Takoyaki_by_yomi955.jpg"
  },
  "핫초코": {
   "t": "Hot chocolate mug with whipped cream.jpg",
   "by": "User Jonik on en.wikipedia",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Hot_chocolate_mug_with_whipped_cream.jpg"
  },
  "호떡": {
   "t": "Korean snack-Hotteok-01.jpg",
   "by": "by yearofeats",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korean_snack-Hotteok-01.jpg"
  }
 },
 "stronganimal": {
  "고릴라": {
   "t": "Mountain gorilla (Gorilla beringei beringei) female 3.jpg",
   "by": "Charles J. Sharp",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Mountain_gorilla_(Gorilla_beringei_beringei)_female_3.jpg"
  },
  "바다악어": {
   "t": "Saltwater crocodile in Sundarbans National Park November 2024 by Tisha Mukherjee 03.jpg",
   "by": "Tisha Mukherjee",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Saltwater_crocodile_in_Sundarbans_National_Park_November_2024_by_Tisha_Mukherjee_03.jpg"
  },
  "백상아리": {
   "t": "White shark.jpg",
   "by": "Pterantula (Terry Goss) at en.wikipedia",
   "lic": "CC BY 2.5",
   "url": "https://commons.wikimedia.org/wiki/File:White_shark.jpg"
  },
  "범고래": {
   "t": "Orca, Killer Whale, breaching - Morro Bay, CA May 8, 2014 Orcinus orca.jpg",
   "by": "Mike Baird from Morro Bay, USA",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Orca,_Killer_Whale,_breaching_-_Morro_Bay,_CA_May_8,_2014_Orcinus_orca.jpg"
  },
  "북극곰": {
   "t": "Polar bear (Ursus maritimus) in the drift ice region north of Svalbard.jpg",
   "by": "Andreas Weith",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Polar_bear_(Ursus_maritimus)_in_the_drift_ice_region_north_of_Svalbard.jpg"
  },
  "사자": {
   "t": "002 Male Lion prowling in the Serengeti National Park Photo by Giles Laurent.jpg",
   "by": "Giles Laurent",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:002_Male_Lion_prowling_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg"
  },
  "아나콘다": {
   "t": "Anaconda común (Eunectes murinus), Tierpark Hellabrunn, Múnich, Alemania, 2012-06-17, DD 01.JPG",
   "by": "Diego Delso",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Anaconda_com%C3%BAn_(Eunectes_murinus),_Tierpark_Hellabrunn,_M%C3%BAnich,_Alemania,_2012-06-17,_DD_01.JPG"
  },
  "아프리카들소": {
   "t": "African buffalo (Syncerus caffer) male with Oxpecker.jpg",
   "by": "Charles J. Sharp",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:African_buffalo_(Syncerus_caffer)_male_with_Oxpecker.jpg"
  },
  "코끼리": {
   "t": "African Elephant Bull Taking Mud Bath 2019-07-26.jpg",
   "by": "Axel Tschentscher",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:African_Elephant_Bull_Taking_Mud_Bath_2019-07-26.jpg"
  },
  "코모도왕도마뱀": {
   "t": "Komodo dragon (Varanus komodoensis).jpg",
   "by": "Charles J. Sharp",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Komodo_dragon_(Varanus_komodoensis).jpg"
  },
  "코뿔소": {
   "t": "Adult White Rhinoceros (Ceratotherium simum simum) (CWPG).jpg",
   "by": "Vauxford",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Adult_White_Rhinoceros_(Ceratotherium_simum_simum)_(CWPG).jpg"
  },
  "하마": {
   "t": "Hippopotamus in the Zambezi.jpg",
   "by": "Bernard Gagnon",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Hippopotamus_in_the_Zambezi.jpg"
  },
  "하이에나": {
   "t": "Spotted hyena (Crocuta crocuta).jpg",
   "by": "Charles J. Sharp",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Spotted_hyena_(Crocuta_crocuta).jpg"
  },
  "호랑이": {
   "t": "Bengal tiger (Panthera tigris tigris) female 3.jpg",
   "by": "Charles J. Sharp",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Bengal_tiger_(Panthera_tigris_tigris)_female_3.jpg"
  },
  "회색곰": {
   "t": "Grizzly Bear (Ursus arctos ssp.).jpg",
   "by": "Gregory \"Slobirdr\" Smith",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Grizzly_Bear_(Ursus_arctos_ssp.).jpg"
  }
 },
 "veggie": {
  "가지": {
   "t": "Purple eggplants 2017 A.jpg",
   "by": "Fructibus",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Purple_eggplants_2017_A.jpg"
  },
  "고수": {
   "t": "Coriander Leaves.jpg",
   "by": "Rupeshm364",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Coriander_Leaves.jpg"
  },
  "당근": {
   "t": "Carrots of many colors.jpg",
   "by": "Stephen Ausmus",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Carrots_of_many_colors.jpg"
  },
  "미나리": {
   "t": "Oenanthe javanica1.jpg",
   "by": "KENPEI",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Oenanthe_javanica1.jpg"
  },
  "방울양배추": {
   "t": "Roasted Brussels sprouts - December 2023 - Sarah Stierch 02.jpg",
   "by": "Missvain",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Roasted_Brussels_sprouts_-_December_2023_-_Sarah_Stierch_02.jpg"
  },
  "버섯": {
   "t": "Fresh shiitake mushrooms.jpg",
   "by": "Fumikas Sagisavas",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Fresh_shiitake_mushrooms.jpg"
  },
  "브로콜리": {
   "t": "Basket of broccoli in Singapore market.jpg",
   "by": "David",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Basket_of_broccoli_in_Singapore_market.jpg"
  },
  "비트": {
   "t": "Beetroots in a basket.jpg",
   "by": "W.carter",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Beetroots_in_a_basket.jpg"
  },
  "셀러리": {
   "t": "Bundles of celery for sale in supermarket.jpg",
   "by": "Fumikas Sagisavas",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Bundles_of_celery_for_sale_in_supermarket.jpg"
  },
  "쑥갓": {
   "t": "Glebionis coronaria,or Crown Daisy in the gardens of Darjeeling Tourist Lodge, a property maintained by WBTDC 2 of 2.jpg",
   "by": "Subhrajyoti07",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Glebionis_coronaria,or_Crown_Daisy_in_the_gardens_of_Darjeeling_Tourist_Lodge,_a_property_maintained_by_WBTDC_2_of_2.jpg"
  },
  "양파": {
   "t": "Mixed onions.jpg",
   "by": "Colin",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Mixed_onions.jpg"
  },
  "콩": {
   "t": "Black soybeans.jpg",
   "by": "Fumikas Sagisavas",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Black_soybeans.jpg"
  },
  "파프리카": {
   "t": "Capsicum annuum fruits IMGP0049.jpg",
   "by": "Nikodem Nijaki",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Capsicum_annuum_fruits_IMGP0049.jpg"
  }
 },
 "babyanimal": {
  "강아지": {
   "t": "Miniature poodle puppy 6 weeks, outdoors, in sun, on grass, head, eye, flash, close-up. (Nærbilde med blits av 6 uker gammel dvergpuddel-hvalp i sol på gress.) Tjøme, Norway 2020-04-09 DSC06421.jpg",
   "by": "Wolfmann",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Miniature_poodle_puppy_6_weeks,_outdoors,_in_sun,_on_grass,_head,_eye,_flash,_close-up._(N%C3%A6rbilde_med_blits_av_6_uker_gammel_dvergpuddel-hvalp_i_sol_p%C3%A5_gress.)_Tj%C3%B8me,_Norway_2020-04-09_DSC06421.jpg"
  },
  "병아리": {
   "t": "New Born Baby Chicks.jpg",
   "by": "Yvessurbano0",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:New_Born_Baby_Chicks.jpg"
  },
  "새끼 돼지": {
   "t": "Contre-jour photograph of a standing piglet at sunset with colorful sky in Don Det Laos.jpg",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Contre-jour_photograph_of_a_standing_piglet_at_sunset_with_colorful_sky_in_Don_Det_Laos.jpg"
  },
  "새끼 여우": {
   "t": "Fox cub - geograph.org.uk - 2485155.jpg",
   "by": "Peter Trimming",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Fox_cub_-_geograph.org.uk_-_2485155.jpg"
  },
  "새끼 오리": {
   "t": "20250718 mallard duckling wethersfield cove PD200055.jpg",
   "by": "Paul Danese",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:20250718_mallard_duckling_wethersfield_cove_PD200055.jpg"
  },
  "새끼 토끼": {
   "t": "White bunny rabbit.jpg",
   "by": "Umiwasheretomeme",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:White_bunny_rabbit.jpg"
  },
  "아기 고슴도치": {
   "t": "Baby Hedgehog Sleeping.jpg",
   "by": "BrightnessWings19",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Baby_Hedgehog_Sleeping.jpg"
  },
  "아기 고양이": {
   "t": "BEN Bengalian kitten (4492540155).jpg",
   "by": "Nickolas Titkov from Moscow, Russian Federation",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:BEN_Bengalian_kitten_(4492540155).jpg"
  },
  "아기 기린": {
   "t": "Giraffe Calf.jpg",
   "by": "Awantura",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Giraffe_Calf.jpg"
  },
  "아기 물범": {
   "t": "Weaned harp seal pup (cropped).jpg",
   "by": "Lysogeny",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Weaned_harp_seal_pup_(cropped).jpg"
  },
  "아기 북극곰": {
   "t": "Polar bear (Ursus) maritimus female with its cub, Svalbard (2).jpg",
   "by": "AWeith",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Polar_bear_(Ursus)_maritimus_female_with_its_cub,_Svalbard_(2).jpg"
  },
  "아기 수달": {
   "t": "Northern sea otter (Enhydra lutris kenyoni) female and pup Tofino.jpg",
   "by": "Charles J. Sharp",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Northern_sea_otter_(Enhydra_lutris_kenyoni)_female_and_pup_Tofino.jpg"
  },
  "아기 코끼리": {
   "t": "004 Desert-adapted baby elephants cuddling in Damaraland Photo by Giles Laurent.jpg",
   "by": "Giles Laurent",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:004_Desert-adapted_baby_elephants_cuddling_in_Damaraland_Photo_by_Giles_Laurent.jpg"
  },
  "아기 판다": {
   "t": "Su Lin giant panda bear cub at the San Diego Zoo.jpg",
   "by": "Original uploader was Ailuropoda at en.wikipedia",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Su_Lin_giant_panda_bear_cub_at_the_San_Diego_Zoo.jpg"
  },
  "아기 펭귄": {
   "t": "Emperor Penguin chicks moulting.jpg",
   "by": "User:Fguerraz This illustration was made by François",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Emperor_Penguin_chicks_moulting.jpg"
  }
 },
 "dog": {
  "골든 리트리버": {
   "t": "Dülmen, Hausdülmen, Golden Retriever -- 2022 -- 5945.jpg",
   "by": "Dietmar Rabich",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Hausd%C3%BClmen,_Golden_Retriever_--_2022_--_5945.jpg"
  },
  "닥스훈트": {
   "t": "Smooth Dachshund Portrait.jpg",
   "by": "Lokal Profil [1]",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Smooth_Dachshund_Portrait.jpg"
  },
  "말티즈": {
   "t": "Maltese Dog 1.jpg",
   "by": "Alfredo Borba",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Maltese_Dog_1.jpg"
  },
  "보더콜리": {
   "t": "Border Collie 600.jpg",
   "by": "",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Border_Collie_600.jpg"
  },
  "비글": {
   "t": "Beagle in Viroinval (DSC04556).jpg",
   "by": "Trougnouf (Benoit Brummer)",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Beagle_in_Viroinval_(DSC04556).jpg"
  },
  "비숑 프리제": {
   "t": "Bichon Frisé sitting.jpg",
   "by": "Julia",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Bichon_Fris%C3%A9_sitting.jpg"
  },
  "사모예드": {
   "t": "Samoyed dog two year old female dllu.jpg",
   "by": "Dllu",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Samoyed_dog_two_year_old_female_dllu.jpg"
  },
  "시바견": {
   "t": "Shiba inu taiki.jpg",
   "by": "Roberto Vasarri",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Shiba_inu_taiki.jpg"
  },
  "시베리안 허스키": {
   "t": "Siberian Husky heterchromia edit.jpg",
   "by": "user:Przykuta, corrected by Pharaoh Hound",
   "lic": "CC BY 2.5",
   "url": "https://commons.wikimedia.org/wiki/File:Siberian_Husky_heterchromia_edit.jpg"
  },
  "웰시코기": {
   "t": "Fawn and white Welsh Corgi puppy standing on rear legs and sticking out the tongue.jpg",
   "by": "Huoadg5888Minor edits made by Subsidiary account",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Fawn_and_white_Welsh_Corgi_puppy_standing_on_rear_legs_and_sticking_out_the_tongue.jpg"
  },
  "진돗개": {
   "t": "Korea Jindo Dog 3.jpg",
   "by": "Canarian",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Korea_Jindo_Dog_3.jpg"
  },
  "치와와": {
   "t": "Chihuahua qui profite du soleil.jpg",
   "by": "JackyM59",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Chihuahua_qui_profite_du_soleil.jpg"
  },
  "퍼그": {
   "t": "Pug - 1 year Old.jpg",
   "by": "Augustus Binu : flickr",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Pug_-_1_year_Old.jpg"
  },
  "포메라니안": {
   "t": "PomeranianKardashianpoms.jpg",
   "by": "Kardashianpoms",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:PomeranianKardashianpoms.jpg"
  },
  "푸들": {
   "t": "Toy Poodle wearing clothes in Tokyo.jpg",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Toy_Poodle_wearing_clothes_in_Tokyo.jpg"
  },
  "프렌치 불독": {
   "t": "Two French bulldogs swimming in life jackets.jpg",
   "by": "W.carter",
   "lic": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File:Two_French_bulldogs_swimming_in_life_jackets.jpg"
  }
 },
 "thrill": {
  "그랜드 캐니언 스카이워크": {
   "t": "SkywalkFromOutsideLedge.jpg",
   "by": "Complexsimplellc at English Wikipedia",
   "lic": "CC BY 2.5",
   "url": "https://commons.wikimedia.org/wiki/File:SkywalkFromOutsideLedge.jpg"
  },
  "그레이트 블루홀": {
   "t": "Great Blue Hole.jpg",
   "by": "U.S. Geological Survey (USGS)",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Great_Blue_Hole.jpg"
  },
  "노르웨이 트롤퉁가": {
   "t": "View of trolltunga.jpg",
   "by": "TerjeN",
   "lic": "CC BY 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:View_of_trolltunga.jpg"
  },
  "노르웨이 프레이케스톨렌": {
   "t": "Preikestolen Norge.jpg",
   "by": "Stefan Krause, Germany",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Preikestolen_Norge.jpg"
  },
  "두바이 스카이다이빙": {
   "t": "Skydiving over Palm Jumeirah.jpg",
   "by": "Dubai Tourism",
   "lic": "CC BY 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:Skydiving_over_Palm_Jumeirah.jpg"
  },
  "마추픽추 와이나픽추": {
   "t": "Machu Picchu, Perú, 2015-07-30, DD 47.JPG",
   "by": "Diego Delso",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Machu_Picchu,_Per%C3%BA,_2015-07-30,_DD_47.JPG"
  },
  "마카오 타워 번지점프": {
   "t": "Bungee jumping outside Macau Tower.jpg",
   "by": "Ellanor",
   "lic": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File:Bungee_jumping_outside_Macau_Tower.jpg"
  },
  "볼리비아 융가스 데스 로드": {
   "t": "Camino de los Yungas Bolivia.jpg",
   "by": "celineo",
   "lic": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Camino_de_los_Yungas_Bolivia.jpg"
  },
  "빅토리아 폭포 데블스 풀": {
   "t": "Victoria Falls, Zimbabwe 01.jpg",
   "by": "Bernard Gagnon",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Victoria_Falls,_Zimbabwe_01.jpg"
  },
  "사하라 사막": {
   "t": "Sand dunes in the Sahara Desert on the border of Algeria and Morocco.tif",
   "by": "Dr. Ondřej Havelka (cestovatel)",
   "lic": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Sand_dunes_in_the_Sahara_Desert_on_the_border_of_Algeria_and_Morocco.tif"
  },
  "상어 케이지 다이빙": {
   "t": "Shark cage diving Gaansbai.jpg",
   "by": "kallerna",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Shark_cage_diving_Gaansbai.jpg"
  },
  "아마존 정글": {
   "t": "Amazon River - 2018.jpg",
   "by": "Alexander Gerst",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Amazon_River_-_2018.jpg"
  },
  "에베레스트 베이스캠프": {
   "t": "Everest North Face toward Base Camp Tibet Luca Galuzzi 2006.jpg",
   "by": "Luca Galuzzi (Lucag)",
   "lic": "CC BY-SA 2.5",
   "url": "https://commons.wikimedia.org/wiki/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
  },
  "장가계 유리다리": {
   "t": "Zhangjiajie Glass Bridge 20190726 (2).jpg",
   "by": "Sunyiming",
   "lic": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File:Zhangjiajie_Glass_Bridge_20190726_(2).jpg"
  },
  "코모도섬": {
   "t": "Komodo Island Shore.jpg",
   "by": "Hotel Kaesong",
   "lic": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File:Komodo_Island_Shore.jpg"
  },
  "하와이 킬라우에아 화산": {
   "t": "Pāhoehoe Lava flow.JPG",
   "by": "Brocken Inaglory",
   "lic": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File:P%C4%81hoehoe_Lava_flow.JPG"
  }
 }
};
