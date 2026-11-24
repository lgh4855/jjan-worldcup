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
 }
};
