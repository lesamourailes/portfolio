export type Locale = 'ru' | 'en';
export type L = Record<Locale, string>;

export const profile = {
  name: { ru: 'Артур Маркарян', en: 'Artur Markarian' },
  role: {
    ru: 'Head of Product',
    en: 'Head of Product',
  },
  tagline: {
    ru: { lead: 'Создаю продукты, ', accent: 'которые меняют мир' },
    en: { lead: 'I create products ', accent: 'that change the world' },
  },
  summary: {
    ru: '9+ лет в продуктовом менеджменте. От FMCG-гиганта до IT-стартапов: запускаю продукты с измеримым эффектом — рост выручки, миллионы пользователей и первые в стране технологические внедрения.',
    en: '9+ years in product management. From an FMCG leader to IT startups — I launch products with measurable impact: revenue growth, millions of users, and country-first tech rollouts.',
  },
};

export const contacts = {
  email: 'artur.markaryan@yahoo.com',
  telegram: { handle: '@amourailes', url: 'https://t.me/amourailes' },
  linkedin: 'https://www.linkedin.com/in/artur-markarian/',
  getmentor: 'https://getmentor.dev/mentor/artur-markarian-5874',
};

export const stats: { value: string; label: L }[] = [
  { value: '9+', label: { ru: 'лет в продукте', en: 'years in product' } },
  { value: '1M+', label: { ru: 'max MAU продукта', en: 'max product MAU' } },
  { value: '25', label: { ru: 'стран мира', en: 'countries worldwide' } },
  { value: '2019', label: { ru: 'проект года', en: 'project of the year' } },
];

export const about = {
  paragraphs: {
    ru: [
      'Руководитель продукта с опытом более 9 лет и практикой управления командами от 3 до 5 человек. Провёл продукты через полный цикл — от исследования и unit-экономики до запуска, масштабирования и P&L.',
      'Ключевые достижения: каждая 20-я шоколадка, произведённая в России, проходит контроль качества на оборудовании и ПО, спроектированном под моим руководством; совместная с лидером рынка hh.ru платформа для поиска подработки с 1M+ MAU; и первый в России промышленный запуск системы распознавания товаров на полке в секторе FMCG.',
    ],
    en: [
      'Head of Product with 9+ years of experience and hands-on leadership of teams of 3–5. I take products through the full cycle — from research and unit economics to launch, scale, and P&L ownership.',
      'Key achievements: every 20th chocolate bar produced in the country passes quality control on hardware and software designed under my lead; a gig-work platform built with market leader hh.ru reaching 1M+ MAU; and the first industrial rollout of shelf image recognition in the FMCG sector in the country.',
    ],
  },
};

export type Experience = {
  company: L;
  period: L;
  role: L;
  location: L;
  summary: L;
  highlights: L[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: { ru: 'Моя смена', en: 'My shifts LLC' },
    period: { ru: '2025 — настоящее время', en: '2025 — present' },
    role: { ru: 'Head of Product', en: 'Head of Product' },
    location: { ru: 'Москва, Россия', en: 'Moscow' },
    summary: {
      ru: 'Запуск интеграционного продукта по подработке совместно с лидером рынка hh.ru (аналог Indeed Flex), MAU 1M+.',
      en: 'Launched an integration gig-work product together with market leader hh.ru (analogue of Indeed Flex), 1M+ MAU.',
    },
    highlights: [
      { ru: 'Посчитал unit-экономику, согласовал общие цели, продуктовую стратегию и RoadMap с C-level обеих сторон.', en: 'Calculated unit economics; aligned shared goals, product strategy and roadmap with C-level on both sides.' },
      { ru: 'Ускорил воронку на 21% и увеличил конверсию в верхней части воронки на 15%.', en: 'Sped up the funnel by 21% and raised top-of-funnel conversion by 15%.' },
      { ru: 'За 3 месяца запустил новое перспективное продуктовое направление (по TAM–SAM–SOM), привлёк 3 платящих клиентов + 4 в переговорах.', en: 'Launched a promising new product line (validated via TAM–SAM–SOM) in 3 months; closed 3 paying customers with 4 more in the pipeline.' },
      { ru: 'Участвовал в финальной стадии инвестиционной сделки hh.ru в «Моя смена».', en: 'Took part in the final stage of the hh.ru investment deal in My Shift.' },
    ],
    tags: ['Product strategy', 'Unit-economics', 'Marketplace', 'C-level alignment'],
  },
  {
    company: { ru: 'SmartMerch', en: 'SmartMerch LLC' },
    period: { ru: '2021 — 2025', en: '2021 — 2025' },
    role: { ru: 'Head of Product', en: 'Head of Product' },
    location: { ru: 'Россия / международные рынки', en: 'International markets' },
    summary: {
      ru: 'Развил линейку с 1 до 6 продуктов (4 SaaS, 2 IoT). 22 тыс. DAU, 25 стран, 245 млн изображений в год — #1 в России и #2 в мире.',
      en: 'Grew the portfolio from 1 to 6 products (4 SaaS, 2 IoT). 22K DAU, 25 countries, 245M images per year — #1 in the country and #2 worldwide.',
    },
    highlights: [
      { ru: '+82% MRR (до 35% на клиента) за счёт 3 новых УТП-фич. Рост MAU на 50% и NPS с 30 до 50.', en: '+82% MRR (up to 35% per customer) via 3 new USP features. MAU up 50%, NPS from 30 to 50.' },
      { ru: 'SM Pulse: запустил и масштабировал AI-агента на 1000+ пользователей — 12% выручки разово и 18% MRR клиента.', en: 'SM Pulse: launched and scaled an AI agent to 1,000+ users — 12% of revenue at once and 18% of the client’s MRR.' },
      { ru: 'AI-контроль качества: система проверки готовой продукции — каждая 20-я шоколадка в России тестируется на ней.', en: 'AI quality control: a finished-goods inspection system — every 20th chocolate bar in the country is tested on it.' },
      { ru: 'Модульная и кросс-клиентская разработка сократила time-to-market на 70%.', en: 'Modular, cross-client development cut time-to-market by 70%.' },
    ],
    tags: ['SaaS', 'IoT', 'AI/ML', 'Computer Vision', 'P&L', 'Scale'],
  },
  {
    company: { ru: 'IDS Borjomi', en: 'IDS Borjomi LLC' },
    period: { ru: '2016 — 2021', en: '2016 — 2021' },
    role: { ru: 'Product Owner / IT Business Partner', en: 'Product Owner / IT Business Partner' },
    location: { ru: 'Россия, Украина, Беларусь', en: 'International markets' },
    summary: {
      ru: 'Трансформировал продажи и операции за счёт модернизации IT-портфеля. Первым в FMCG запустил Image Recognition в промышленную эксплуатацию.',
      en: 'Transformed sales and operations by modernizing the IT portfolio. First in FMCG to bring shelf image recognition into industrial use.',
    },
    highlights: [
      { ru: 'Запустил SFA, BI-аналитику и AI Image Recognition (первым в FMCG в России).', en: 'Launched SFA, BI analytics and AI image recognition (first in FMCG in the country).' },
      { ru: 'Импакт: −7% затрат на ФОТ, ×2.5 скорость принятия решений через DWH/BI, +4% выручки.', en: 'Impact: −7% payroll costs, ×2.5 faster executive decisions via DWH/BI, +4% revenue.' },
      { ru: 'Спикер GlobalCIO и SysTech, номинант «Проект года 2019».', en: 'Speaker at GlobalCIO and SysTech; nominee for “Project of the Year 2019”.' },
      { ru: 'Масштабировал внедрённые IT-решения в Украине и Беларуси. Карьерный рост из sales (2012–2019).', en: 'Scaled deployed IT solutions to Ukraine and Belarus. Grew from a sales career (2012–2019).' },
    ],
    tags: ['FMCG', 'Digital transformation', 'BI/DWH', 'Image Recognition'],
  },
];

export type SkillGroup = { title: L; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: { ru: 'Продукт и стратегия', en: 'Product & strategy' },
    items: ['Product strategy', 'P&L', 'Road mapping', 'Strategic & risk planning', 'Product launch', 'Change management', 'Prioritization (RICE, MoSCoW)', 'CJM', 'JTBD', 'A/B-testing'],
  },
  {
    title: { ru: 'Soft skills', en: 'Soft skills' },
    items: ['Stakeholder management', 'Cross-functional leadership', 'Customer Development', 'Strategic thinking', 'Critical thinking'],
  },
  {
    title: { ru: 'Инструменты и аналитика', en: 'Tools & analytics' },
    items: ['Jira', 'Figma', 'Miro', 'Power BI', 'Metabase', 'Google Analytics', 'Яндекс.Метрика', 'ChatGPT', 'Claude', 'Cohort & funnel analysis'],
  },
];

export type Community = { title: L; detail: L; period: string };

export const communities: Community[] = [
  {
    title: { ru: 'ProductCamp Russia & EE', en: 'ProductCamp' },
    detail: { ru: 'Участник сообщества; эксперт Карьерного трека', en: 'Community member; expert of the Career Track' },
    period: '2025',
  },
  {
    title: { ru: 'GlobalCIO — Ассоциация ИТ-директоров России', en: 'GlobalCIO. Association of IT Leaders' },
    detail: { ru: 'Член ассоциации, спикер отраслевых конференций', en: 'Member & speaker at industry conferences' },
    period: '2018',
  },
  {
    title: { ru: 'Хакатоны России', en: 'International hackathons award' },
    detail: { ru: 'Член экспертного совета жюри национальной премии', en: 'Member of the expert jury council' },
    period: '2026',
  },
  {
    title: { ru: 'GetMentor', en: 'GetMentor' },
    detail: { ru: 'Ментор для продакт-менеджеров', en: 'Mentor for product managers' },
    period: '2025',
  },
];

export const education = [
  {
    school: { ru: 'Московский финансово-промышленный университет (МФПУ)', en: 'Moscow University of Finance and Industry' },
    degree: { ru: 'Финансовый менеджмент (бакалавр)', en: 'Financial management (BA equivalent)' },
    period: '2009 — 2012',
  },
  {
    school: { ru: 'Колледж экономики и права', en: 'College of Economics and Law' },
    degree: { ru: 'Экономист', en: 'Economist' },
    period: '2006 — 2009',
  },
];

export type MediaItem = { title: L; source: string; year: string; url: string; kind: 'press' | 'speaking' | 'profile' };

export const media: MediaItem[] = [
  {
    title: { ru: 'Персона: Маркарян Артур Рубенович', en: 'Profile: Artur Markarian' },
    source: 'TAdviser', year: '', kind: 'profile',
    url: 'https://www.tadviser.ru/index.php/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0:%D0%9C%D0%B0%D1%80%D0%BA%D0%B0%D1%80%D1%8F%D0%BD_%D0%90%D1%80%D1%82%D1%83%D1%80_%D0%A0%D1%83%D0%B1%D0%B5%D0%BD%D0%BE%D0%B2%D0%B8%D1%87',
  },
  {
    title: { ru: 'Боржоми внедряет нейросеть для работы с ритейлом — первый Image Recognition в РФ', en: 'Borjomi deploys a neural network for retail — the first image recognition in the country' },
    source: 'CNews', year: '2018', kind: 'press',
    url: 'https://www.cnews.ru/news/line/2018-11-27_borzhomi_vnedryaet_nejroset_dlya_raboty_s_ritejlom',
  },
  {
    title: { ru: 'Открытие конференции SysTech Family Area 2018 (спикер)', en: 'Opening of SysTech Family Area 2018 (speaker)' },
    source: 'sys4tec.com', year: '2018', kind: 'speaking',
    url: 'https://sys4tec.com/company/press_center/news/otkrytie-konferencii-systech-family-area-2018/',
  },
  {
    title: { ru: 'Системные технологии: SFA 2019 — подарки и вызовы цифровой экономики (спикер)', en: 'System Technologies: SFA 2019 — gifts and challenges of the digital economy (speaker)' },
    source: 'Retail.ru', year: '2019', kind: 'speaking',
    url: 'https://www.retail.ru/rbc/pressreleases/sistemnye-tekhnologii-sfa-2019-podarki-i-vyzovy-tsifrovoy-ekonomiki/',
  },
  {
    title: { ru: 'Кейс Borjomi: история успеха с SM Visor', en: 'Borjomi case: a success story with SM Visor' },
    source: 'SmartMerch', year: '', kind: 'press',
    url: 'https://smartmerch.it/blog/one-of-our-first-clients-the-borjomi-success-story-with-sm-visor/',
  },
  {
    title: { ru: 'TAdviser: IT Retail Day 2025 (выступление)', en: 'TAdviser: IT Retail Day 2025 (talk)' },
    source: 'TAdviser', year: '2025', kind: 'speaking',
    url: 'https://www.tadviser.ru/index.php/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F:TAdviser:_IT_Retail_Day_2025',
  },
  {
    title: { ru: 'SmartMerch на IT Retail Day 2025', en: 'SmartMerch at IT Retail Day 2025' },
    source: 'SmartMerch', year: '2025', kind: 'press',
    url: 'https://smartmerch.it/blog/smartmerch-at-it-retail-day-2025/',
  },
  {
    title: { ru: 'Профиль ментора на GetMentor', en: 'Mentor profile on GetMentor' },
    source: 'GetMentor', year: '', kind: 'profile',
    url: 'https://getmentor.dev/mentor/artur-markarian-5874',
  },
];

export type PortfolioItem = { src: string; title: L; description: L; tags?: string[]; url?: string };

// Наполняется скриншотами продуктов. Пример элемента:
// { src: '/portfolio/sm-visor.jpg', title: { ru: 'SM Visor', en: 'SM Visor' },
//   description: { ru: 'Распознавание товаров на полке', en: 'Shelf image recognition' }, tags: ['Computer Vision'] }
export const portfolio: PortfolioItem[] = [];

export type Certificate = { src: string; title: L; issuer: L; year: string };

export const certificates: Certificate[] = [
  { src: '/certificates/productcamp-2025.png', title: { ru: 'ProductCamp 2025 — эксперт Карьерного трека', en: 'ProductCamp 2025 — Career Track expert' }, issuer: { ru: 'ProductCamp Russia & EE', en: 'ProductCamp' }, year: '2025' },
  { src: '/certificates/productcamp-2026.jpg', title: { ru: 'ProductCamp 2026', en: 'ProductCamp 2026' }, issuer: { ru: 'ProductCamp Russia & EE', en: 'ProductCamp' }, year: '2026' },
  { src: '/certificates/pm-in-it.jpg', title: { ru: 'Project Management in IT', en: 'Project Management in IT' }, issuer: { ru: 'Binary District · Digital October', en: 'Binary District · Digital October' }, year: '2019' },
  { src: '/certificates/itil.png', title: { ru: 'ITIL Foundation', en: 'ITIL Foundation' }, issuer: { ru: 'ITIL', en: 'ITIL' }, year: '' },
  { src: '/certificates/pm-skills-test-1.jpg', title: { ru: 'Тест навыков продакт-менеджера (ч.1)', en: 'Product manager skills test (pt.1)' }, issuer: { ru: 'Skills assessment', en: 'Skills assessment' }, year: '' },
  { src: '/certificates/pm-skills-test-2.jpg', title: { ru: 'Тест навыков продакт-менеджера (ч.2)', en: 'Product manager skills test (pt.2)' }, issuer: { ru: 'Skills assessment', en: 'Skills assessment' }, year: '' },
  { src: '/certificates/dev-basics.jpg', title: { ru: 'Основы программирования и баз данных', en: 'Programming and databases fundamentals' }, issuer: { ru: '«Специалист» при МГТУ им. Баумана', en: 'Specialist Center at Bauman MSTU' }, year: '2015' },
  { src: '/certificates/java-se8-l1.jpg', title: { ru: 'Java SE 8. Уровень 1', en: 'Java SE 8. Level 1' }, issuer: { ru: '«Специалист» при МГТУ им. Баумана', en: 'Specialist Center at Bauman MSTU' }, year: '2015' },
  { src: '/certificates/java-se8-l2.jpg', title: { ru: 'Java SE. Уровень 2', en: 'Java SE. Level 2' }, issuer: { ru: '«Специалист» при МГТУ им. Баумана', en: 'Specialist Center at Bauman MSTU' }, year: '2015' },
  { src: '/certificates/lambda.png', title: { ru: 'Лямбда-выражения в Java 8', en: 'Lambda expressions in Java 8' }, issuer: { ru: '«Специалист» при МГТУ им. Баумана', en: 'Specialist Center at Bauman MSTU' }, year: '2016' },
  { src: '/certificates/c-lang.jpg', title: { ru: 'Язык программирования C', en: 'C programming language' }, issuer: { ru: '«Специалист» при МГТУ им. Баумана', en: 'Specialist Center at Bauman MSTU' }, year: '' },
];
