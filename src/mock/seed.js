const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.company.createMany({
    data: [
      {
        companyName: "두나무",
        description:
          "두나무는 금융서비스를 쉽고 투명하게 전달하고자 노력하고 있는 핀테크 회사입니다. 대한민국 최다 암호화폐 거래소 '업비트'와 대한민국 1등 주식앱 '카카오스탁' 서비스를 중심에 두고, 자산관리 등으로 서비스 영역을 확장해나가고 있습니다. 금융과 IT를 결합해 이용자에게 가치있는 서비스를 함께 만들어나갈 분을 찾고 있습니다.",
        category: "가상화폐, 투자",
        realInvestmentAmount: 1000,
        revenue: 9862,
        employeesNumber: 633,
        selectedNumber: 1,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-01%2F2d2f17bd-097c-4011-931f-6c73c7b7b694.png&w=48&q=75",
      },
      {
        companyName: "성림첨단산업",
        description:
          "'성림첨단산업㈜'은 혁신적인 사고와 지속적인 기술 개발을 통하여 고객에게는 최고의 품질과 기술로 언제나 신뢰할 수 있는 파트너가, 회사 구성원에게는 자아실현을 이루는 행복한 일터가 될 것입니다. 희토류 영구 자석 응용 분야의 미래를 창조해나가는 세계적인 기업으로 나아가겠습니다.",
        category: "제조",
        realInvestmentAmount: 450,
        revenue: 1425.3,
        employeesNumber: 194,
        selectedNumber: 2,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2024-11%2Fd17fa967-71f5-4a0c-a578-d0ec1f579c00.png&w=64&q=75",
      },
      {
        companyName: "빗썸",
        description:
          "빗썸코리아는 2014년에 설립된 블록체인 화폐거래소 분야의 서울특별시에 위치한 한국 스타트업입니다. 빗썸은 글로벌시장에서 검증된 암호화폐만을 엄선해 상장하고, 고객신뢰를 바탕으로 글로벌 암호화폐 거래소로 자리 잡았습니다. 이와 더불어, 암호화폐 결제 서비스인 빗썸캐시, 미래형 키오스크 서비스 터치비 등 블록체인과 핀테크 기술을 접목한 신규 서비스를 통해 성장동력의 다각화를 진행하고 있습니다.",
        category: "가상화폐, 투자",
        realInvestmentAmount: 48,
        revenue: 1358,
        employeesNumber: 524,
        selectedNumber: 3,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F341650.png&w=64&q=75",
      },
      {
        companyName: "에스엠랩",
        description:
          "에스엠랩(Singular Materials Laboratory)은 전기차용 리튬이온 배터리의 핵심 원료인 양극재를 만드는 스타트업입니다.",
        category: "배터리, 제조",
        realInvestmentAmount: 2106,
        revenue: 5,
        employeesNumber: 29,
        selectedNumber: 4,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fcompany%2F2768.png&w=64&q=75",
      },
      {
        companyName: "케이뱅크",
        description:
          "주식회사 케이뱅크는 2016년 1월에 설립된 한국계 은행으로 금융 송금/결제 분야의 케이뱅크가 주요 제품/ 서비스입니다. 본사는 한국 서울 특별시에 위치해 있으며 현재 대표자는 최우형입니다. ",
        category: "은행",
        realInvestmentAmount: 10000,
        revenue: 9465,
        employeesNumber: 586,
        selectedNumber: 5,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F279570.png&w=64&q=75",
      },
      {
        companyName: "야놀자",
        description:
          "야놀자는 한국의 여행 관련 기업들 중 최초로 '유니콘' 지위를 획득하며 빠르게 성장하고 있는 국내 1위 여가 플랫폼이자 트래블 테크 기업입니다. 온라인에서는 슈퍼앱으로서 국내외 숙박 레저 교통 등 여가를 위한 모든 서비스를 제공하고, 오프라인에서는 동남아시아 최대 호텔 프랜차이즈 기업으로서 1만개 이상의 객실을 운영 중입니다.(Singular Materials Laboratory)은 전기차용 리튬이온 배터리의 핵심 원료인 양극재를 만드는 스타트업입니다.",
        category: "숙박,여가",
        realInvestmentAmount: 43640,
        revenue: 3753,
        employeesNumber: 211,
        selectedNumber: 6,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F350920.png&w=64&q=75",
      },
      {
        companyName: "무신사",
        description:
          "무신사는 온라인 패션 플랫폼으로 스트릿,글로벌 명품, 디자이너 등 5천여 개 브랜드가 입점한 무신사 스토어를 운영합니다. 2019년 유니콘 기업으로 선정되었으며 2021년 홍대를 시작으로 성수, 대구 등 지역에 자체 브랜드 '무신사 스탠다드' 매장과 150여 개의 브랜드가 입점된 오프라인 편집숍을 오픈하여 남성 의류와 여성 의류, 잡화 등을 판매하며 오프라인 영역으로 사업을 확장하였습니다. Materials Laboratory)은 전기차용 리튬이온 배터리의 핵심 원료인 양극재를 만드는 스타트업입니다.",
        category: "의류,판매",
        realInvestmentAmount: 3200,
        revenue: 8829,
        employeesNumber: 1702,
        selectedNumber: 7,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-12%2F694577d0-9b8c-40f3-94fa-8ae34891c1e4.png&w=64&q=75",
      },
      {
        companyName: "지엔티파마",
        description:
          "지엔티파마는 인류 최고의 난제인 뇌졸중과 알츠하이머 치매와 같은 뇌신경질환의 혁신적인 치료 신약과 기술 개발을 목표로 1998년 4월에 설립된 벤처기업입니다. 지엔티파마는 다중 경로 뇌신경세포 사멸의 개념을 정립하여 질환 선택적인 맞춤형 다중 표적 뇌신경세포 보호 신약 개발을 선도하고 있습니다.",
        category: "신약개발",
        realInvestmentAmount: 10,
        revenue: 7,
        employeesNumber: 43,
        selectedNumber: 112,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-11%2F73d37fa5-cb6a-4ad9-b984-ef79bc79e7a8.png&w=64&q=75",
      },
      {
        companyName: "당근마켓",
        description:
          "당근마켓은 2015년 7월에 출시된 지역 기반 중고거래 플랫폼으로 사용자들이 자신의 동네에서 직접 만나 물품을 거래할 수 있도록 지원합니다. 이를 통해 지역 사회 내에서 신뢰할 수 있는 거래 환경을 조성하며 이웃 간의 소통과 교류를 촉진하고 있습니다. 또한 중고거래뿐만 아니라 동네 생활 정보 공유 지역 업체 홍보, 부동산 직거래, 동네 알바  등 다양한 지역 밀착형 서비스를 제공하여 사용자들의 편의를 높이고 있습니다.",
        category: "판매",
        realInvestmentAmount: 2270,
        revenue: 1274,
        employeesNumber: 536,
        selectedNumber: 21,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-09%2Fa1a896d7-32ce-490f-aaf7-49204766ed3d.png&w=64&q=75",
      },
      {
        companyName: "한국피엠지제약",
        description:
          "류마티스내과 분야에 특화되어 있는 제약사, 주요 제품으로는 생약제제인 '레일라정'을 비롯하여, 항류마티스제인 '류마킨' 소염진통제 '신플렉스 세이프' 국내 최초 콜레칼시페롤 단일제 '애드민포르테(비타민 D)' 등이 있습니다.",
        category: "신약개발",
        realInvestmentAmount: 400,
        revenue: 505,
        employeesNumber: 105,
        selectedNumber: 12,
        imageUrl: "http://www.pmgpharm.co.kr/img/contents/sub0104_5.png",
      },
      {
        companyName: "지씨지놈",
        description:
          "유전체 분석을 통한 질병 예측 전문 업체로 암, 유전희귀질환, 건강검진 등 진단키트 및 시약 개발 및 생산을 담당하고 있습니다.",
        category: "신약개발",
        realInvestmentAmount: 181,
        revenue: 428,
        employeesNumber: 134,
        selectedNumber: 8675,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F340450.png&w=64&q=75",
      },
      {
        companyName: "아이지에이웍스",
        description:
          "아이지에이웍스는 모바일 마케팅에서 필수적으로 사용되는 모바일 어트리뷰션을 비롯해 모바일 데이터분석 마케팅자동화 DMP, 머신러닝, AI, 트레이드데스크, 마켓인텔리전스 등 모바일 데이터와 플랫폼을 서비스 하는 국내 유일의 종합 데이터 테크 SaaS 서비스형 소프트웨어 기업입니다. 모바일 데이터 분야에 대한 오랜 연구와 투자로 업계 최초로 10억대가 넘는 모바일 데이터 분석 시대를 열어 보인 아이지에이웍스는 압도적인 데이터를 기반으로 AI 머신러닝 기술을 고도화 하며, 명실상부 국내 B2B 모바일 데이터 산업을 대표하는 데이터 플랫폼 전문기업으로 자리매김 하였습니다.",
        category: "SW개발",
        realInvestmentAmount: 535,
        revenue: 981,
        employeesNumber: 152,
        selectedNumber: 872,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fcompany%2F1054.png&w=64&q=75",
      },
      {
        companyName: "플랜택",
        description:
          "포스코계열의 플랜텍은 포항제철소 3고로 3차 개수 프로젝트 등 철강플랜트를 기반으로 발전 환경 분야로 그 영역을 넓혀 나가고 있는 플랜텍의 엔지니어링 기술로 고객의 가치를 높여 나가겠습니다.",
        category: "토목, 건설",
        realInvestmentAmount: 600,
        revenue: 6793,
        employeesNumber: 609,
        selectedNumber: 90,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-02%2F937f9e69-5d3a-4e89-9138-32445c61e7ba.png&w=64&q=75",
      },
      {
        companyName: "에스아이플렉스",
        description:
          "에스아이플렉스는 1988년 설립이래 고객만족 최고품질을 경영이념으로 다변화하는 주변환경에 다양한 고객의 요구를 적극적으로 만족시키며 노력한 결과 연성인쇄회로 기판 제조 분야를 선도하는 업체가 되었습니다. ",
        category: "PCB,제조",
        realInvestmentAmount: 700,
        revenue: 3178.3,
        employeesNumber: 254,
        selectedNumber: 332,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-02%2F8a477df1-6352-4347-8d88-30eb900a0e4f.png&w=64&q=75",
      },
      {
        companyName: "컬리",
        description:
          "마켓컬리는 2015년 서비스 런칭 이후, 국내에서 가장 빠른 배송 서비스, 미식가와 주부들을 사로잡은 큐레이션, 막강한 컨텐츠와 브랜드 파워로 최고의 공급사들이 함께하고 싶은 서비스로 성장하였습니다. 좋은 제품을 제공하기 위해 해외 직구, 백화점, 동네 마트, 재래 시장. 전국 산지를 탐색하였습니다. 나와 내 가족이 사고 싶은 상품을 판매하고 있으며, 물류 혁신을 통한 새벽 배송, 같은 품질 내 가장 저렴한 가격을 제공하기 위해 노력하고 있습니다.",
        category: "음식,판매",
        realInvestmentAmount: 8832,
        revenue: 20727,
        employeesNumber: 2746,
        selectedNumber: 312,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fstock%2F408480.png&w=64&q=75",
      },
      {
        companyName: "덕산넵코어스",
        description:
          "2012년 설립된 넵코어스는 방위산업 우주항공 항법인프라 분야 사업을 영위하며 특히 항법 분야에서 높은 경쟁력을 보유하고 있습니다. 2018년 누리호 시험 발사체에 GNSS 항법장치 탑재, 2021년 3월 반도체 디스플레이 소재 기업 덕산그룹이 넵코어스를 인수 완료했습니다.",
        category: "항공,제조",
        realInvestmentAmount: 300,
        revenue: 314,
        employeesNumber: 170,
        selectedNumber: 399,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-02%2F25286deb-ff39-4153-b084-eb5319a6f780.png&w=64&q=75",
      },
      {
        companyName: "로킷헬스케어",
        description:
          "로킷헬스케어는 세계 최고 수준의 장기재생 플랫폼, 진단 및 치료, 노화방지 솔루션을 제공하여 세계 인류의 삶을 향상시키는 글로벌 헬스케어 기업입니다. 2012년에 설립되었고, 현재는 당뇨발 재생치료 플랫폼과 연골재생 등 4D 바이오프린팅과 자가세포를 사용한 치료법, 인체 기반 바이오 잉크 기술, 항노화 재생, 단일세포 RNA시퀀스 유전자 분석 서비스로 세계인에게 최고 수준의 장기재생 플랫폼과 노화방지 솔루션을 제공하여 인류의 삶의 질과 건강을 향상시킵니다.",
        category: "의료,제조",
        realInvestmentAmount: 469,
        revenue: 63,
        employeesNumber: 58,
        selectedNumber: 6423,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fcompany%2F67920.png&w=64&q=75",
      },
      {
        companyName: "제이비케이랩",
        description:
          "아로니아의 Cyanidine을 비롯한 식물영양소에서 유효성분을 나노추출, 고순도정제, 분리하여 화학합성이 아닌 천연물 기반의 부작용 없는 원료의약품, 건강기능식품, 천연비타민, 헬스케어 제품 및 반려동물용 의약품 등을 생산합니다.",
        category: "의료, 제조",
        realInvestmentAmount: 1000,
        revenue: 460,
        employeesNumber: 165,
        selectedNumber: 199,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-01%2F06aac63c-465d-433f-bc74-8ce6e484d613.png&w=64&q=75",
      },
      {
        companyName: "인투셀",
        description:
          "인투셀은 저분자 위주의 신약개발 방식에서 탈피하여 독창적 아이디어 창출 및 기술적 검증에 기반한 신개념 기반기술의 연구개발 및 사업화를 목표로 탄생하였습니다",
        category: "신약개발",
        realInvestmentAmount: 502,
        revenue: 16,
        employeesNumber: 41,
        selectedNumber: 3219,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Flogo%2Fcompany%2F208.png&w=64&q=75",
      },
      {
        companyName: "에이치디현대삼호",
        description:
          "현대중공업 그룹의 계열사인 조선업체로 전남 영암군 삼호읍 일대 300만 부지에 세계 4위 규모의 선박 생산능력을 보유하고 초대형 컨테이너선, 탱커, LNG선, LPG선, 자동차 운반선, 벌커 등 거의 모든 상선에 대해 건조 실적을 확보하고 있습니다",
        category: "강선건조",
        realInvestmentAmount: 99,
        revenue: 70031.4,
        employeesNumber: 3905,
        selectedNumber: 3676,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2023-01%2Fd9602423-0b56-419f-8737-8d30c015e379.png&w=64&q=75",
      },
      {
        companyName: "비바리퍼블리카",
        description:
          "간편송금 모바일 서비스 토스를 운영하며 LG유플러스 전자결제사업부문을 인수해 PG사업을 신규 진행 중입니다. ",
        category: "은행",
        realInvestmentAmount: 10000,
        revenue: 13706.5,
        employeesNumber: 1073,
        selectedNumber: 366,
        imageUrl:
          "https://www.ustockplus.com/_next/image?url=https%3A%2F%2Fstatic.ustockplus.com%2Fadmin%2F2022-09%2F2075df61-33e0-4ecc-ba42-b95ebf15705a.png&w=64&q=75",
      },
      {
        companyName: "㈜메디테라피",
        description: `주식회사 메디테라피는 브랜드 동명의 브랜드 "메디테라피"를 통해 전세계 소비자들이 건강하고 아름다운 피부를 가꿀 수 있도록 뷰티와 테크의 융합과 쉽고 편하게 사용할 수 있는 새로운 형태의 솔루션을 고민합니다. `,
        category: "화장품, 제조",
        realInvestmentAmount: 497,
        revenue: 2000,
        employeesNumber: 100,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2023/10/17/JK_CO_lwjrmf23101714310556.png?v=202504052025",
      },
      {
        companyName: "울트라브이",
        description: `피부과·성형외과에서 사용하는 봉합용 녹는 실, 의료기기 및 기능성화장품 개발·제조. 울트라브이 리프팅(Ultra V-Lifting), 울트라브이 코스메틱(Ultra V Cosmetic) 브랜드 보유. `,
        category: "화장품, 제조",
        realInvestmentAmount: 56,
        revenue: 187.4,
        employeesNumber: 82,
        selectedNumber: 0,
        imageUrl: "",
      },
      {
        companyName: "빅테크",
        description: `국내 유일의 드라이아이스 세척기 제조사로 세척핵심 기술인 분사노즐 설계 및 제작기술 보유.`,
        category: "기계, 제조",
        realInvestmentAmount: 493.1,
        revenue: 128.9,
        employeesNumber: 125,
        selectedNumber: 0,
        imageUrl: "",
      },
      {
        companyName: "㈜밋",
        description: `균형잡힌 건강한 운동 프로그램을 제공하여 일상이 건강한 세상 만들기를 목표로 하고 있습니다 `,
        category: "서비스",
        realInvestmentAmount: 2.1,
        revenue: 1.82,
        employeesNumber: 9,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2024/1/24/JK_CO_zYCC54d24012414291444.png?v=202504052032",
      },
      {
        companyName: "엔라이튼㈜",
        description: `엔라이튼은 에너지 업계에서 가장 빠르게 성장하고 있습니다. 모두가 에너지를 쉽게 생산하고 소비할 수 있도록 혁신적인 IT, 데이터, 금융으로 새로운 에너지 생태계를 만듭니다.`,
        category: "화학,에너지,환경",
        realInvestmentAmount: 156,
        revenue: 1000,
        employeesNumber: 98,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/1/14/JK_CO_cfZJ3Ac22011422183049.png?v=202504052033",
      },
      {
        companyName: "㈜스탁키퍼",
        description: `예로부터 육류는 원래 소수를 위한 사치품이었으나 이제 많은 이가 즐기고 기대하는 음식이 되었습니다. 전 세계적으로 매년 3억 톤 이상, 1조 달러 이상의 고기가 생산되고 있습니다.`,
        category: "축산",
        realInvestmentAmount: 1.419,
        revenue: 204.8,
        employeesNumber: 44,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/4/29/JK_CO_sNy8Yks22042910394942.png?v=202504052035",
      },
      {
        companyName: "㈜플렉시스",
        description: `자체 개발한 지능형 RPA 솔루션 AI-Helper GEN을 중심으로 공공, 금융, 서비스업 등 다양한 산업군에 필요한 솔수션 기술과 능력을 보유하고 있습니다`,
        category: "솔루션",
        realInvestmentAmount: 2.22,
        revenue: 3.9,
        employeesNumber: 15,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2020/8/11/2595g00bXl_eGuf3m3n2n3922l0hgVjRx_xe1c5kgl.png?v=202504052036&hash=r&serviceCode=CL",
      },
      {
        companyName: "㈜라미솔루션",
        description: `주식회사 라미솔루션은 정보 서비스의 빈부격차를 해소하고 더 많은 사람들이 정보를 쉽게 활용할 수 있는 환경을 조성하는 데 목표를 두고 있습니다. 또한 프로젝트 진행 간 취득한 여러 산업의 데이터 및 업무 자동화 솔루션 (RPA)을 제공함으로써 교육, 일자리, 건강, 그리고 사회 참여와 연결될 수 있는 다양한 기회를 창출하여, 데이터 산업의 미래를 보다 공평하고 포용적으로 만들어가고자 합니다.`,
        category: "DB, 정보제공",
        realInvestmentAmount: 0.5,
        revenue: 24.5,
        employeesNumber: 8,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2023/2/15/JK_CO_Bu34UyP23021514205482.png?v=202504052038",
      },
      {
        companyName: "반려생활",
        description: `반려동물과 같이 즐길 수 있는 여행을 꿈꿉니다.`,
        category: "포털, 서비스",
        realInvestmentAmount: 0.26,
        revenue: 1.63,
        employeesNumber: 8,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/11/18/JK_CO_tagiom22111810522631.jpeg?v=202504052039",
      },
      {
        companyName: "㈜프로티나",
        description: `프로티나의 단백질 상호작용 분석 기술을 탐구해 보세요`,
        category: "제약, 보건, 바이오",
        realInvestmentAmount: 15,
        revenue: 841,
        employeesNumber: 51,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2020/7/02/2c3de008Rj_kXrlqxs3a2wj0eeYwUd_iq2ej.jpg?v=202504052041&hash=r&serviceCode=CL",
      },
      {
        companyName: "㈜휴트리온",
        description: `(주)휴트리온은 2020년 10월 설립한 스타트업 기업으로 통신, 금융, 공공, 유통 부문등 고객의 다양한 요구에 부응하여 최상의 IT서비스를 제공하고 있습니다. 또한 RPA(Robotic Process Automation) 솔루션 및 AI 플랫폼 구축에 특화된 사업으로 매년 2배 이상 성장하고 있는 강소 기업입니다.`,
        category: "솔루션",
        realInvestmentAmount: 158,
        revenue: 35,
        employeesNumber: 25,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/4/05/JK_CO_5qpZJcf22040511382779.png?v=202504052042",
      },
      {
        companyName: "워로브라더스",
        description: `워로브라더스는 현재 차량 용품 전문 브랜드 ‘벤딕트’와 캠핑 용품 전문 브랜드 ‘왈로우’를운영하고 인챈트, 퍼플래빗 브랜드를 새롭게 런칭해서 키워가고 있습니다. 그리고 우리가 가진 커뮤니티 생태계를 기반으로 플랫폼 비즈니스도 시작했어요!`,
        category: "포털, 커뮤니티",
        realInvestmentAmount: 1,
        revenue: 0.38,
        employeesNumber: 40,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2024/1/09/JK_CO_Xzec07L24010913471274.png?v=202504052043",
      },
      {
        companyName: "㈜파란샘",
        description: `2018년도에 설립한 소프트웨어 개발 회사입니다. 사회적기업 인증을 신청하였고 그만큼 사회적 가치를 제고할 수 있게 노력중입니다. 당사는 CMS, 디자인 시안 저작 툴 등 다양한 R&D 개발을 진행중에 있습니다. 매출은 매년 300% 이상 성장하고 있습니다.`,
        category: "SW, 개발",
        realInvestmentAmount: 1,
        revenue: 31.09,
        employeesNumber: 38,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2020/7/24/2k7jt00aRx_gKfblrnmy3o2px0gtYdIh_gxak2tx.png?v=202504052044&hash=r&serviceCode=CL",
      },
      {
        companyName: "㈜케이에스앤픽",
        description: `연예인 지망생과 제작사를 연결하는 새로운 형태의 오픈 플랫폼`,
        category: "연예, 엔터테인먼트",
        realInvestmentAmount: 81,
        revenue: 15,
        employeesNumber: 12,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2019/11/2o58y009Df_lGuf8j2i3f21f0fyFdOa_yx2tyf.png?v=202504052044&hash=r&serviceCode=CL",
      },
      {
        companyName: "라텔앤드파트너즈",
        description: `We have been re-issuing digital marketing
for the past 10 years with a different and
persistent plan.`,
        category: "SW, 개발",
        realInvestmentAmount: 1,
        revenue: 36.7,
        employeesNumber: 28,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2021/7/19/2d19l007Pq_mW8j2k3h28q0dlMhSe_5qlq.jpeg?v=202504052045&hash=r&serviceCode=CL",
      },
      {
        companyName: "프리윌린",
        description: `우리의 기술이 교육을 더 스마트하게 만들어
더 많은 선생님과 학생들이 더 좋은 교육을 경험하도록 하는 것,
프리윌린이 만들어 나가고 싶은 세상입니다.`,
        category: "교육",
        realInvestmentAmount: 4.6,
        revenue: 120,
        employeesNumber: 110,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2024/4/09/JK_CO_wGAnlhI24040909045277.png?v=202504052046",
      },
      {
        companyName: "딥브레인 AI ",
        description: `딥브레인 AI는 대화형 인공 지능 스타트업입니다. 딥러닝 영상 합성, 음성 합성, 그리고 자연어 처리 원천 기술에 기반한 인공 인간 및 가상 인간 서비스를 제공하고 있습니다`,
        category: "솔루션",
        realInvestmentAmount: 15,
        revenue: 600,
        employeesNumber: 103,
        selectedNumber: 0,
        imageUrl: "https://file1.jobkorea.co.kr/Super/561/10659/logo_02.png",
      },
      {
        companyName: "알투이랩",
        description: `물리적 항균 기술 기반의 생활방역 솔루션을 개발하는 기술 중심 스타트업으로 현재 자사의 살균 항균 코팅 스프레이 제품을 홈쇼핑과 온 오프라인 유통 채널에 론칭할 준비를 하고 있으며, 브랜드 정체성과 스토리를 시각적으로 구현하고 있습니다.`,
        category: "화학, 솔루션",
        realInvestmentAmount: 1.35,
        revenue: 4.53,
        employeesNumber: 10,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2024/2/05/JK_CO_kNiYUYe24020514233622.png?v=202504052051",
      },
      {
        companyName: "스마일샤크㈜",
        description: `스마일샤크는 창업 5년만에 AWS 파트너사 최상위 등급인 Premier Tier 가 되었습니다. 2019년 12월 설립된 이후, 역사상 최단 기간 Advanced Tier 를 달성하고 Rising Star Award 를 수상하며 빠른 성장을 해왔습니다. 클라우드 기술을 더 유연하고 접근 가능하게 만드는 데 집중하고 있습니다.`,
        category: "SW, 서비스",
        realInvestmentAmount: 40.6,
        revenue: 267.6,
        employeesNumber: 42,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2023/7/20/JK_CO_Afl6kP723072013475557.png?v=202504052051",
      },
      {
        companyName: "인비저블아이디어㈜",
        description: `인비저블아이디어는 F&B 및 리테일 분야 IT솔루션 개발 스타트업입니다.
익숙해진 불편함을 해결할 작은 아이디어들로 세상을 바꿀 서비스를 개발하고 있습니다`,
        category: "SW, 개발",
        realInvestmentAmount: 0.6,
        revenue: 1.11,
        employeesNumber: 11,
        selectedNumber: 0,
        imageUrl:
          "https://file2.jobkorea.co.kr/Company/Visual_Co/Image_Thumb_View_CoRead.asp?FN=2022/3/JK_CO_rrsuKgz22031115281459_1973209.jpg&W=820&H=390",
      },
      {
        companyName: "엘지에이비이아이엔씨",
        description: `엘가베는 2016년 라쉐르코리아를 전신으로 탄생하여, 초기 자본금 1억으로 시작해 2020년에는 150억, 2022년에는 180억의 매출을 달성하며 빠르게 성장하였습니다. 우리는 투명하고 정직한 거래를 통해 고객의 피드백을 소중히 받아들이고, 끊임없이 변화하는 뷰티 시장에 신속하게 대응하는 뷰티 전문 유통 회사로서의 역할을 충실히 수행하고 있습니다.`,
        category: "도매",
        realInvestmentAmount: 1,
        revenue: 111.05,
        employeesNumber: 12,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2023/3/30/JK_CO_pPGaiBa23033018303266.png?v=202504052053",
      },
      {
        companyName: "㈜피트릭스",
        description: `맞춤 건강관리에 필요한 근골격(MSK)기능 AI 분석 B2B 솔루션으로, 검사와 해석, 그리고 관리의 프로세스를 디지털화 합니다.
비전기반 검사기기와 AI 알고리즘을 통해 근육밸런스와 체형, 체력의 종합적인 신체정보 70+를 실시간 분석하여 3D 시각화하고
맞춤 솔루션(제품.코칭)을 추천합니다.`,
        category: "SW, 개발",
        realInvestmentAmount: 156,
        revenue: 135,
        employeesNumber: 81,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2020/10/2k1rf007Pd_hWdx2k3j2yd0dfMhSl_crfd.gif?v=202504052054&hash=r&serviceCode=CL",
      },
      {
        companyName: "㈜코스웹",
        description: `코스웹은 해외 화장품 브랜드가 어떻게 하면 한국에서 화장품을 쉽게 제조할 수 있을까란 의문에서 2017년 사업을 시작하였습니다. 현재 약 5개국에 고객이 원하는 컨셉에 맞춰 화장품 내용물을 개발해서 판매하고 있으며, 50개가 넘는 업체와 거래하고 있습니다.`,
        category: "성형, 제조",
        realInvestmentAmount: 0.5,
        revenue: 5.15,
        employeesNumber: 6,
        selectedNumber: 0,
        imageUrl: "",
      },
      {
        companyName: "지오캡쳐",
        description: `공간정보 솔루션 및 서비스 · 시스템 개발`,
        category: "컨설팅",
        realInvestmentAmount: 1,
        revenue: 51,
        employeesNumber: 9,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2020/9/24/2v7op00aRa_oKttekapb3f2ja0gpYgIn_vjli2pa.png?v=202504052056&hash=r&serviceCode=CL",
      },
      {
        companyName: "글로우데이즈",
        description: `Make People’s Beauty Life Glow
우리의 첫번째 고객은 소비자입니다. 대한민국에는 전세계 어떤 나라보다도 많은 뷰티브랜드가 존재하고, 지금도 매일 수많은 브랜드와 제품들이 각자의 철학과 아이디어를 바탕으로 생겨나고 있습니다.
하지만 시장의 가파른 성장 그리고 공급의 과잉은 소비자들에게 피로가 되기도 합니다. 모든 브랜드는 다양한 마케팅 수단을 동원하여 ‘좋은’ 제품만을 만든다고 광고합니다. 화장품은 고관여 소비재입니다. 각각의 제품마다 사람들의 취향은 다를 수 있고 피부타입, 연령, 성분의 적합도 등 다양한 요소들에 의해 제품은 누구에게나 다르게 받아들여질 수 있는 것이 화장품입니다. 글로우데이즈는 정보의 홍수와 비대칭 속에서 소비자들의 집단지성을 글로우픽이라는 하나의 플랫폼으로 모으고, 이를 바탕으로 소비자들이 신뢰할 수 있는 정보제공을 통해 소비자들이 더 나은 제품을 선택할 수 있도록 돕습니다.`,
        category: "SW, 서비스",
        realInvestmentAmount: 0.66,
        revenue: 50.6,
        employeesNumber: 51,
        selectedNumber: 0,
        imageUrl: "",
      },
      {
        companyName: "㈜폴레드",
        description: `폴레드는 실제 차량 충돌시험을 통해 개발된 국내 유일의 카시트입니다.
현대자동차 남양연구소에서 수많은 실제 차량 충돌시험을 통해
일반 인증치 이상의 가혹도 시험을 통해 개발되었습니다.`,
        category: "자동차, 제조",
        realInvestmentAmount: 19.01,
        revenue: 224.2,
        employeesNumber: 67,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2021/12/17/JK_CO_vyldVmi21121714520758.png?v=202504052058",
      },
      {
        companyName: "㈜모빅신소재기술",
        description: `모빅신소재기술은 내일의 희망이 되는 소재를 만듭니다.
지구상에서 가장 많은 자원이기도 한 바이오매스 유래 셀룰로오스를 나노화하면 3D그물망 구조의 소재가 되며,
CNF(Cellulose NanoFiber)라 불리는 이 소재를 복합소재로 사용시 강도와 유연성 및 내열성, 통기성, 생분해성 등이 향상 됩니다.`,
        category: "화학, 제조",
        realInvestmentAmount: 0.62,
        revenue: 0.31,
        employeesNumber: 5,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2020/11/06/2j52s009Dw_qGdv7a2n3p23w0fsFcOw_bn3lsw.JPG?v=202504052059&hash=r&serviceCode=CL",
      },
      {
        companyName: "㈜주만사",
        description: `주차장만드는사람들(주)은 비어있는 주차공간을 타인이 사용할 수 있게 연결시켜드리는 주차 공유 플랫폼 "주만사"를 서비스하고 있습니다.

지난 10년간 그 누구도 해결하지 못한 주차 공유 사업의 가능성을 찾아냈으며

서울과 전국으로 진출하기 위한 작업을 진행하고 있습니다.`,
        category: "SW, 서비스",
        realInvestmentAmount: 0.15,
        revenue: 0.26,
        employeesNumber: 25,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2021/11/16/2w3fn008Rw_oXiiqxt3d2ww0enYwUq_cx2nw.png?v=202504052100&hash=r&serviceCode=CL",
      },
      {
        companyName: "아테나코퍼레이션",
        description: `표면처리장비, 철도차량 관려 소재 부품 장비 전문기업입니다..`,
        category: "기계, 제조",
        realInvestmentAmount: 15,
        revenue: 156,
        employeesNumber: 3,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2024/4/02/JK_CO_a4nEZTe24040214410582.png?v=202504052101",
      },
      {
        companyName: "㈜에이치에너지",
        description: `Have Your Energy and Share It.
. 전력을 유투브처럼, 옥상을 에어비엔비처럼 공유하며, 누구나 사업자, 소비자로 에너지시장에 참여할 수 있는 전력거래 플랫폼
. 소규모분산자원 티핑포인트 확보, 다단계 시장구조 제거하여, 소상공인들이 에너지전환시장의 주체로 수익을 창출하는 전력O2O 플랫폼
. 사업자, 소비자가 참여하는 소규모 분산자원 시장을 만들고, O2O 서비스로 제3자 자원시장 활성화하여
규모의 경제를 통해 전력거래 플랫폼 독점적 지위를 확보`,
        category: "네트워크, 통신, 서비스",
        realInvestmentAmount: 46,
        revenue: 1023,
        employeesNumber: 163,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/3/21/JK_CO_iTA3fbf22032110432681.png?v=202504052102",
      },
      {
        companyName: "㈜테키",
        description: `최신 기술의 전문가 집단의 매칭기술로 사람과 사람을 잇는 가장 핫한 결혼정보회사 '모두의지인'입니다.
수십억 매출을 이루며 업계에서 가장 빠른 속도로 성장하고 있으며 회원을 생각하는 '사람중심서비스'로 결혼정보 및 연애 시장의 패러다임을 바꿉니다.`,
        category: "결혼, 서비스",
        realInvestmentAmount: 18,
        revenue: 87,
        employeesNumber: 30,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/2/26/JK_CO_RYtWNMP22022600180361.jpg?v=202504052104",
      },
      {
        companyName: "㈜부드러운돌멩이",
        description: `㈜부드러운 돌멩이'는 뷰티테크 전문 IT스타트업으로 현재 헤어 브랜드 1위 준오헤어와 IT 파트너 협약을 맺고 헤어 살롱 운영에 필요한 각종 IT 시스템과 프로그램을 개발하고 있습니다. 급속도로 진행되는 IT 기술의 진일보가 다양한 산업에 영향을 미치고 있으나, 헤어살롱 업계에서는 아직 IT 기술의 침투가 미미한 수준이라고 판단하고 있습니다.`,
        category: "SW, 개발",
        realInvestmentAmount: 1,
        revenue: 8,
        employeesNumber: 10,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2021/6/17/2k7jx00aRg_vKvxjg6xv3c23g0gxYrIx_gkav2xg.png?v=202504052105&hash=r&serviceCode=CL",
      },
      {
        companyName: "㈜어큐진",
        description: `주식회사 어큐진은 분자진단에 특화된 제품과 기술을 가지고 인간의 질병과 생명단축 원인을 완화, 제거하는 궁극적인 목표를 위해 설립되었으며, 보다 정확한 진단을 위한 검체 샘플링에서부터 DNA 추출 및 정제, 특정 질환 진단키트 개발 및 분석결과 리포팅까지 모든 프로세스를 자체기술력으로 축적하면서 헬스케어 시장에 대한 지배력을 지속적으로 넓혀가고 있습니다.`,
        category: "의료,제조",
        realInvestmentAmount: 51,
        revenue: 18,
        employeesNumber: 29,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2020/6/01/2a5aw009Du_zGcnco2p3j29u0fwFuOb_do4ewu.jpg?v=202504052106&hash=r&serviceCode=CL",
      },
      {
        companyName: "번개장터",
        description: `취향 & 브랜드 중고 거래 플랫폼, 번개장터입니다.

삶을 더 똑소리나게 만들어 줄 IT 기기, 입으면 기분이 절로 좋아지는 옷,
바라만 보아도 흐뭇한 스니커즈, 최애 아이돌과 나를 이어줄 수많은 굿즈들까지.

번개장터는 내가 좋아하는 것들로 일상이 채워질 때,
우리 모두가 더 행복해질 수 있다고 믿습니다.
저마다의 취향이라는 세계 속에서 모두가 행복해질 수 있도록.
오늘도 번개장터는 더 쉽고 안전한 개인간 거래를 만들어갑니다`,
        category: "판매",
        realInvestmentAmount: 64.4,
        revenue: 0.2,
        employeesNumber: 254,
        selectedNumber: 0,
        imageUrl:
          "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2023/9/24/JK_CO_hjDKFyw23092415034383.jpg?v=202504052106",
      },
    ],
  });
}
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
