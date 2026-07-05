export type Locale = 'ru' | 'en';
export type L = Record<Locale, string>;

export const profile = {
  name: { ru: 'Артур Маркарян', en: 'Artur Markarian' },
  role: {
    ru: 'Head of Product',
    en: 'Head of Product',
  },
  tagline: {
    ru: { lead: 'От идеи до ', accent: 'кратного роста выручки' },
    en: { lead: 'From idea to ', accent: 'multiplied revenue' },
  },
  summary: {
    ru: '10 лет в продуктовом менеджменте — от IT-стартапов до крупных корпораций. Помогаю пересобрать продуктовый портфель, запустить новый продукт и повлиять на ключевые метрики роста.',
    en: '10 years in product management — from IT startups to large corporations. I help rebuild the product portfolio, launch a new product and move the key growth metrics.',
  },
};

export const contacts = {
  email: 'artur.markaryan@yahoo.com',
  telegram: { handle: '@amourailes', url: 'https://t.me/amourailes' },
  linkedin: 'https://www.linkedin.com/in/artur-markarian/',
  getmentor: 'https://getmentor.dev/mentor/artur-markarian-5874',
};

export const companies = [
  { src: '/logos/hh.png', name: 'hh.ru', domain: 'HR Tech' },
  { src: '/logos/borjomi.jpg', name: 'IDS Borjomi', domain: 'FMCG' },
  { src: '/logos/smartmerch.png', name: 'SmartMerch', domain: 'IT B2B' },
  { src: '/logos/my-shifts.png', name: 'Моя смена', domain: 'IT B2C' },
];

export const stats: { value: L; label: L }[] = [
  { value: { ru: '10 лет', en: '10 years' }, label: { ru: 'в продуктовой разработке', en: 'in product development' } },
  { value: { ru: '1 млн', en: '1M' }, label: { ru: 'MAU в одном продукте', en: 'MAU in one product' } },
  { value: { ru: '25', en: '25' }, label: { ru: 'стран мира', en: 'countries worldwide' } },
  { value: { ru: '2019', en: '2019' }, label: { ru: 'проект года', en: 'project of the year' } },
];

export const about: Record<Locale, { paragraphs: string[]; bullets: string[] }> = {
  ru: {
    paragraphs: [
      'Руководитель продукта с 10-летним опытом. Запустил три продукта, влияющих на широкий сегмент населения страны:',
    ],
    bullets: [
      'Каждая 20-я шоколадка, произведённая в России, проходит контроль качества на оборудовании и ПО, спроектированном под моим руководством',
      'Спроектирована и запущена платформа для поиска подработки совместно с hh.ru',
      'Первый в России промышленный запуск системы распознавания товаров на полке в секторе FMCG',
    ],
  },
  en: {
    paragraphs: [
      'Head of product, 10 years in Product management with practical leadership skills (3 to 5 subordinates). Key achievement: managed 3 products, influenced to a biggest segment of the country population:',
    ],
    bullets: [
      'Every 20th chocolate bar produced in country is safety-tested using my product',
      'A platform developed with an HR tech leader',
      'The first in country launched an image recognition in the FMCG sector',
    ],
  },
};

export type Experience = {
  company: L;
  logo: string;
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
    logo: '/logos/my-shifts.png',
    period: { ru: '2025 — настоящее время', en: '2025 — present' },
    role: { ru: 'Head of Product', en: 'Head of Product' },
    location: { ru: 'Москва, Россия', en: 'Domestic' },
    summary: {
      ru: 'Первый в стране интеграционный продукт для поиска подработки с hh.ru.',
      en: 'The country’s first integration gig-work product for finding shift work, built with an HR-tech market leader.',
    },
    highlights: [
      { ru: 'Посчитал unit-экономику, согласовал общие цели, продуктовую стратегию и RoadMap с C-level обеих сторон.', en: 'Calculated unit economics; aligned shared goals, product strategy and roadmap with C-level on both sides.' },
      { ru: 'Ускорил воронку на 21% и увеличил конверсию в верхней части воронки на 15%.', en: 'Sped up the funnel by 21% and raised top-of-funnel conversion by 15%.' },
      { ru: 'За 3 месяца запустил новое продуктовое направление, привлёк 3 платящих клиентов и передал в коммерцию.', en: 'Launched a new product line in 3 months, closed 3 paying customers and handed it over to the commercial team.' },
      { ru: 'Координировал подготовку команды и участвовал в финальной стадии инвестиционной сделки.', en: 'Coordinated the team’s preparation and took part in the final stage of the investment deal.' },
    ],
    tags: ['Product strategy', 'Unit-economics', 'Marketplace', 'C-level alignment'],
  },
  {
    company: { ru: 'SmartMerch', en: 'SmartMerch LLC' },
    logo: '/logos/smartmerch.png',
    period: { ru: '2021 — 2025', en: '2021 — 2025' },
    role: { ru: 'Head of Product', en: 'Head of Product' },
    location: { ru: 'Россия / международные рынки', en: 'International markets' },
    summary: {
      ru: 'Расширил продуктовую линейку с 1 до 6 продуктов, что привело к 22 тыс. DAU в 25 странах и 245 млн изображений в год — показатель №1 в России и №2 в мире.',
      en: 'Expanded the product line from 1 to 6 products, which drove 22K DAU across 25 countries and 245M images per year — #1 domestically and #2 worldwide.',
    },
    highlights: [
      { ru: '+62% MRR (до 26% на клиента) за счёт 3 новых УТП-фич. Рост MAU на 28% и NPS с 30 до 50.', en: '+62% MRR (up to 26% per customer) via 3 new USP features. MAU up 28%, NPS from 30 to 50.' },
      { ru: 'SM Pulse: запустил и масштабировал AI-агента на 1000+ пользователей, что принесло 12% выручки разово и 18% MRR клиента.', en: 'SM Pulse: launched and scaled an AI agent to 1,000+ users, which brought 12% of revenue at once and 18% of the client’s MRR.' },
      { ru: 'Запустил SM Factory: AI-контроль качества готовой продукции. Сейчас каждая 20-я шоколадка в России тестируется на ней.', en: 'Launched SM Factory: AI quality control for finished goods. Today every 20th chocolate bar in the country is tested on it.' },
      { ru: 'Внедрил модульный кросс-платформенный подход к проектированию продукта: сократил time-to-market на 70%.', en: 'Introduced a modular, cross-platform approach to product design: cut time-to-market by 70%.' },
    ],
    tags: ['SaaS', 'IoT', 'AI/ML', 'Computer Vision', 'P&L', 'Scale'],
  },
  {
    company: { ru: 'IDS Borjomi', en: 'IDS Borjomi LLC' },
    logo: '/logos/borjomi.jpg',
    period: { ru: '2016 — 2021', en: '2016 — 2021' },
    role: { ru: 'Product Owner / IT Business Partner', en: 'Product Owner / IT Business Partner' },
    location: { ru: 'Россия, Украина, Беларусь', en: 'International markets' },
    summary: {
      ru: 'Выполнил цифровую трансформацию коммерческого департамента. Первым в FMCG запустил Image Recognition в промышленную эксплуатацию.',
      en: 'Delivered the digital transformation of the commercial department. First in FMCG to bring image recognition into industrial use.',
    },
    highlights: [
      { ru: 'Запустил SFA, BI-аналитику и AI Image Recognition (первый проект в нише FMCG в России).', en: 'Launched SFA, BI analytics and AI image recognition (the first project in the FMCG niche domestically).' },
      { ru: 'Импакт: −7% затрат на ФОТ, ×2.5 скорость принятия решений через DWH/BI, +4% выручки.', en: 'Impact: −7% payroll costs, ×2.5 faster executive decisions via DWH/BI, +4% revenue.' },
      { ru: 'Спикер GlobalCIO и SysTech, номинант «Проект года 2019».', en: 'Speaker at GlobalCIO and SysTech; nominee for “Project of the Year 2019”.' },
      { ru: 'Масштабировал внедрённые IT-решения в Украине и Беларуси.', en: 'Scaled deployed IT solutions to Ukraine and Belarus.' },
    ],
    tags: ['FMCG', 'Digital transformation', 'BI/DWH', 'Image Recognition'],
  },
];

export type SkillGroup = { title: L; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: { ru: 'Продукт и стратегия', en: 'Product & strategy' },
    items: ['Product strategy', 'P&L', 'JTBD', 'Road mapping', 'Change management', 'Strategic & risk planning', 'Product launch'],
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
    title: { ru: 'ProductCamp', en: 'ProductCamp' },
    detail: { ru: 'Участник сообщества; эксперт Карьерного трека', en: 'Community member; expert of the Career Track' },
    period: '2025',
  },
  {
    title: { ru: 'GlobalCIO. Ассоциация ИТ-директоров России', en: 'GlobalCIO. Association of IT Leaders' },
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
    school: { ru: 'Московский финансово-промышленный университет', en: 'Financial and Industrial University' },
    degree: { ru: 'Финансовый менеджер', en: 'Financial manager, BA equivalent' },
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
    title: { ru: 'Боржоми внедряет нейросеть - первый Image Recognition в стране', en: 'Borjomi deploys a neural network — the first image recognition in the country' },
    source: 'CNews', year: '2018', kind: 'press',
    url: 'https://www.cnews.ru/news/line/2018-11-27_borzhomi_vnedryaet_nejroset_dlya_raboty_s_ritejlom',
  },
  {
    title: { ru: 'Открытие конференции SysTech Family Area 2018', en: 'Opening of SysTech Family Area 2018' },
    source: 'sys4tec.com', year: '2018', kind: 'speaking',
    url: 'https://sys4tec.com/company/press_center/news/otkrytie-konferencii-systech-family-area-2018/',
  },
  {
    title: { ru: 'Системные технологии: SFA 2019: вызовы цифровой экономики', en: 'System Technologies: SFA 2019: challenges of the digital economy' },
    source: 'Retail.ru', year: '2019', kind: 'speaking',
    url: 'https://www.retail.ru/rbc/pressreleases/sistemnye-tekhnologii-sfa-2019-podarki-i-vyzovy-tsifrovoy-ekonomiki/',
  },
  {
    title: { ru: 'Кейс Borjomi: история успеха', en: 'Borjomi case: a success story' },
    source: 'SmartMerch', year: '', kind: 'press',
    url: 'https://smartmerch.it/blog/one-of-our-first-clients-the-borjomi-success-story-with-sm-visor/',
  },
  {
    title: { ru: 'TAdviser: IT Retail Day 2025', en: 'TAdviser: IT Retail Day 2025' },
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

export type PortfolioItem = {
  src: string;
  srcEn?: string; // локализованная версия скриншота (если есть)
  preview?: string; // квадратное превью для карточки (полное фото — в лайтбоксе)
  previewEn?: string;
  title: L;
  description: L;
  bullets?: L[];
  result?: L;
  tags?: string[];
  url?: string;
};

export const portfolio: { web: PortfolioItem[]; mobile: PortfolioItem[] } = {
  web: [
    {
      src: '/portfolio/kpi.png',
      title: { ru: 'Конструктор KPI', en: 'KPI builder' },
      description: { ru: 'Настройка в один клик и авторасчёт KPI без разработки', en: 'One-click setup and automatic KPI calculation with no development' },
      bullets: [
        { ru: 'Работает на визите в реальном времени', en: 'Works during the visit in real time' },
        { ru: 'Подсказывает, что нужно изменить', en: 'Suggests what needs to change' },
        { ru: 'Есть офлайн-режим при отсутствии интернета', en: 'Offline mode when there is no internet' },
      ],
      result: { ru: '+1.5% в объёме выручки', en: '+1.5% in revenue' },
    },
    {
      src: '/portfolio/sm-factory.png',
      title: { ru: 'Оценка качества готовой продукции', en: 'Finished-goods quality control' },
      description: { ru: 'Софт и модернизация производственной линии', en: 'Software and production-line modernization' },
      bullets: [
        { ru: 'Распознавание инородных материалов', en: 'Foreign-material detection' },
        { ru: 'Автоматическая отбраковка', en: 'Automatic rejection of defects' },
        { ru: 'Подстраивается под скорость движения ленты', en: 'Adapts to the conveyor belt speed' },
      ],
      result: { ru: 'На 99.9% чистая партия', en: '99.9% clean batch' },
    },
    {
      src: '/portfolio/zig-zag.png',
      title: { ru: 'Система автомаршрутизации', en: 'Auto-routing system' },
      description: { ru: 'Автоматически распределяет магазины по кластерам и исполнителям', en: 'Automatically distributes stores across clusters and field reps' },
      bullets: [
        { ru: 'Исходные данные: справочник магазинов и исполнителей', en: 'Input data: directory of stores and field reps' },
        { ru: 'Учитывает частоту посещений и десятки других атрибутов', en: 'Accounts for visit frequency and dozens of other attributes' },
        { ru: 'Авто перерасчёт при выбывании сотрудника или магазина', en: 'Auto recalculation when a rep or store drops out' },
      ],
      result: { ru: 'Оптимизация ФОТ на 6%, TimeTravel на 12%', en: '6% payroll cost optimization, 12% less travel time' },
    },
    {
      src: '/portfolio/top-mt.png',
      title: { ru: 'Аналитика в Power BI', en: 'Analytics in Power BI' },
      description: { ru: 'Аналитический хаб, работающий в реальном времени', en: 'A real-time analytics hub' },
      bullets: [
        { ru: 'Пример с метриками оценки качества распознавания', en: 'Example with image-recognition quality metrics' },
        { ru: 'Единый DWH для консолидации данных', en: 'Unified DWH for data consolidation' },
        { ru: 'Гибкая многоуровневая ролевая модель', en: 'Flexible multi-level role model' },
      ],
      result: { ru: 'На 25% выше скорость принятия решений', en: '25% faster decision-making' },
    },
    {
      src: '/portfolio/sm-camera.png',
      title: { ru: 'Контроль холодильника 24/7', en: 'Fridge monitoring 24/7' },
      description: { ru: 'Физическая камера на дверце холодильника', en: 'A physical camera on the fridge door' },
      bullets: [
        { ru: 'Настраиваемая частота и скорость съёмки', en: 'Configurable capture frequency and speed' },
        { ru: 'Автоматическое распознавание позиций на полках', en: 'Automatic recognition of items on shelves' },
        { ru: 'Контроль фрода со стороны торговой точки', en: 'Fraud control on the retailer’s side' },
      ],
      result: { ru: 'Оптимизация ФОТ на 17%', en: '17% payroll cost optimization' },
    },
    {
      src: '/portfolio/routing.png',
      title: { ru: 'SFA', en: 'SFA' },
      description: { ru: 'Система автоматизации полевого персонала', en: 'Field force automation system' },
      bullets: [
        { ru: 'Маршрутизация и GPS-контроль', en: 'Routing and GPS control' },
        { ru: 'Конструктор KPI и анкетирование', en: 'KPI builder and surveys' },
        { ru: 'Распознавание товара на полке', en: 'Shelf image recognition' },
      ],
      result: { ru: '+4% в объёме выручки', en: '+4% in revenue' },
    },
    {
      src: '/portfolio/creatio.png',
      title: { ru: 'Система согласования проектов', en: 'Project approval system' },
      description: { ru: 'Автоматический расчёт метрик и прибыльности проекта', en: 'Automatic calculation of project metrics and profitability' },
      bullets: [
        { ru: 'Интеграция с 1С, SFA и СЭД', en: 'Integration with 1C, SFA and EDMS' },
        { ru: 'Автоматический расчёт метрик и прибыльности', en: 'Automatic calculation of metrics and profitability' },
        { ru: 'Автоматическое создание и наполнение договоров', en: 'Automatic creation and population of contracts' },
      ],
      result: { ru: 'Оптимизация ФОТ на 8%', en: '8% payroll cost optimization' },
    },
    {
      src: '/portfolio/nrm-ru.png',
      srcEn: '/portfolio/nrm-en.jpg',
      title: { ru: 'NRM', en: 'NRM' },
      description: { ru: 'Прогнозирование эффективности промо', en: 'Promo effectiveness forecasting' },
      bullets: [
        { ru: 'Интеграция со всеми учётными системами компании', en: 'Integration with all company accounting systems' },
        { ru: 'Календарь планируемых промо-активностей', en: 'Calendar of planned promo activities' },
        { ru: 'Авто-отклонение / согласование при достижении порога ROI', en: 'Auto rejection / approval upon reaching the ROI threshold' },
      ],
      result: { ru: 'На 25% выше скорость принятия решений', en: '25% faster decision-making' },
    },
  ],
  mobile: [
    {
      src: '/portfolio/sfa-mobile.png',
      preview: '/portfolio/sfa-preview.png',
      title: { ru: 'SFA', en: 'SFA' },
      description: { ru: 'Система автоматизации полевого персонала', en: 'Field force automation system' },
      bullets: [
        { ru: 'Чек-ин по GPS, анкетирование', en: 'GPS check-in, surveys' },
        { ru: 'Авто-расчёт выполнения KPI (SoS, планограмма…)', en: 'Automatic KPI calculation (SoS, planogram…)' },
        { ru: 'Исправление ситуации во время визита, не постфактум', en: 'Fixing issues during the visit, not after the fact' },
      ],
    },
    {
      src: '/portfolio/image-recognition.png',
      preview: '/portfolio/image-recognition-preview.png',
      title: { ru: 'Image recognition', en: 'Image recognition' },
      description: { ru: 'Распознавание товара на полке', en: 'Shelf image recognition' },
      bullets: [
        { ru: 'Склейка и проверка на охват категории', en: 'Stitching and category-coverage check' },
        { ru: 'Офлайн режим в случае отсутствия интернета', en: 'Offline mode when there is no internet' },
        { ru: 'Точность 98+%', en: '98+% accuracy' },
      ],
    },
    {
      src: '/portfolio/my-shifts.jpg',
      preview: '/portfolio/my-shifts-preview.jpg',
      title: { ru: 'Интеграция с hh.ru', en: 'hh.ru integration' },
      description: { ru: 'WebView в разделе «Подработка»', en: 'WebView in the “Gig work” section' },
      bullets: [
        { ru: 'Бронирование смен пользователями hh.ru', en: 'Shift booking by hh.ru users' },
        { ru: 'Все чувствительные флоу в «Моей смене» (legal)', en: 'All sensitive flows handled in My Shift (legal)' },
        { ru: 'Лидер рынка HR tech', en: 'HR-tech market leader' },
      ],
    },
    {
      src: '/portfolio/pulse-ru.png',
      srcEn: '/portfolio/pulse-en.png',
      preview: '/portfolio/pulse-ru-preview.png',
      previewEn: '/portfolio/pulse-en-preview.png',
      title: { ru: 'Pulse', en: 'Pulse' },
      description: { ru: 'AI-ассистент любого сотрудника компании', en: 'AI assistant for any company employee' },
      bullets: [
        { ru: 'Распознавание запроса в любой форме', en: 'Understands a request in any form' },
        { ru: 'Конвертация в SQL и выборка данных из базы', en: 'Converts to SQL and queries the database' },
        { ru: 'Автоматический расчёт метрик и KPI', en: 'Automatic calculation of metrics and KPIs' },
      ],
    },
  ],
};

export type Photo = { src: string; caption?: L };

// Фотографии с коллегами и мероприятий (без подписей). Порядок = порядок вывода.
export const photos: Photo[] = [
  { src: '/gallery/9.jpg' },
  { src: '/gallery/2.jpg' },
  { src: '/gallery/3.jpg' },
  { src: '/gallery/4.jpg' },
  { src: '/gallery/5.jpg' },
  { src: '/gallery/6.jpg' },
  { src: '/gallery/7.jpg' },
  { src: '/gallery/8.jpg' },
];

export type Certificate = { src: string; title: L; issuer: L; year: string };

export const certificates: Certificate[] = [
  { src: '/certificates/productcamp-2026.jpg', title: { ru: 'ProductCamp', en: 'ProductCamp' }, issuer: { ru: 'Благодарственное письмо', en: 'Letter of appreciation' }, year: '2026' },
  { src: '/certificates/pm-skills-test-1.jpg', title: { ru: 'Certificate', en: 'Certificate' }, issuer: { ru: '', en: '' }, year: '2026' },
  { src: '/certificates/pm-skills-test-2.jpg', title: { ru: 'Certificate', en: 'Certificate' }, issuer: { ru: '', en: '' }, year: '2026' },
  { src: '/certificates/productcamp-2025.png', title: { ru: 'ProductCamp', en: 'ProductCamp' }, issuer: { ru: 'Благодарственное письмо', en: 'Letter of appreciation' }, year: '2025' },
  { src: '/certificates/pm-in-it.jpg', title: { ru: 'Project Management in IT', en: 'Project Management in IT' }, issuer: { ru: 'Binary District', en: 'Binary District' }, year: '2019' },
  { src: '/certificates/itil.png', title: { ru: 'Повышение квалификации', en: 'Professional development' }, issuer: { ru: 'ITIL Foundation', en: 'ITIL Foundation' }, year: '2018' },
];
