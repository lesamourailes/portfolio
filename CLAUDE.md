# arturmarkarian.com — портфолио Артура Маркаряна

Персональный сайт-портфолио продакт-менеджера. Двуязычный (RU/EN), статический, задеплоен.

## Быстрый старт

```bash
cd C:/Users/Artur/Projects/arturmarkarian
npm run dev      # astro dev --host → http://localhost:4321
npm run build    # прод-сборка в dist/
```

⚠️ **Важно про dev-сервер:** сервер, поднятый через preview-MCP Claude, работает в песочнице, до которой **браузер пользователя не достаёт** (порт 4321 на его хосте остаётся пустым). Поэтому запускай dev-сервер **на хосте**: Bash + `run_in_background: true`, затем проверяй через `curl 127.0.0.1:4321`. Либо пользователь сам запускает `npm run dev` в PowerShell.

## Стек и структура

- **Astro 5**, статика, обычный CSS с CSS-переменными (без Tailwind), шрифт Inter.
- **i18n:** нативный Astro i18n. RU — `/`, EN — `/en`. На корне работает автоопределение языка (не-русский → редирект на `/en`), ручной выбор запоминается в `localStorage.lang`.
- **Темы:** светлая/тёмная, `localStorage.theme`, inline-скрипт в `<head>` против мерцания.
- **Акцент:** оранжевый `#ee5f10` (светлая) / `#ff7a33` (тёмная). Логотип — леттермарк «AM» со свапом цветов при наведении.

```
src/
  data/content.ts          # ВЕСЬ контент, двуязычный (profile, stats, about, services,
                           # testimonials, experience, skills, companies, communities,
                           # media, certificates, photos, portfolio)
  i18n/ui.ts               # UI-строки + t() + byYearDesc() (сортировка по году убыв.)
  layouts/Layout.astro     # <head>: SEO, OG, JSON-LD, hreflang, Метрика, verification-теги,
                           # скрипты тем/языка/reveal/show-more, cookie-баннер
  components/
    Home.astro             # порядок секций
    Header.astro / Footer.astro / Logo.astro / ThemeToggle.astro
    sections/*.astro       # Hero, Companies, About, Services, Experience, Testimonials,
                           # Skills, Portfolio, Communities, Media, Certificates, Gallery, Contact
public/                    # portrait.jpg, og.png, favicon.svg, robots.txt,
                           # certificates/, gallery/, portfolio/, logos/
```

**Порядок секций:** Hero → Companies (плашка логотипов) → About → *Services* → Experience → *Testimonials* → Skills → Portfolio → Communities («Ассоциации») → Media → Certificates → Gallery → Contact.

## ⚠️ Секции только для dev (не должны попасть в прод)

**Services** («Как я могу помочь?») и **Testimonials** («Отзывы») закрыты флагом `import.meta.env.DEV`:
- в `Home.astro`: `{import.meta.env.DEV && <Services ... />}` и то же для `<Testimonials />`;
- в `Header.astro` — ссылка «Услуги» в навигации тоже под флагом.

Итог: в `npm run dev` видны, в прод-сборке отсутствуют. Пользователь попросил это явно.
**Отзывы содержат ЗАГЛУШКИ** («Имя Фамилия, CEO, Компания») — заменить на реальные перед снятием флага.

## Правила работы (согласованы с пользователем)

1. **Всё двуязычно.** Если дан только русский текст — перевести и обновить EN.
2. **Проверять до заявления «готово»** — через curl/инспекцию DOM, затем `npm run build`.
3. **Коммитить локально**, в конце сообщения — трейлер `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.
4. **Пушить только по команде «выкатывай».** Не публиковать самовольно.
5. **Минимальные правки.** Пользователь просил не переделывать вёрстку/дизайн, если просят изменить только текст.
6. Скриншоты через preview-MCP на этой странице отваливаются по таймауту (много картинок) — проверять через DOM/curl.
   Если скриншот всё же нужен: временная страница в `src/pages/` только с нужной секцией (не забыть `.reveal { opacity: 1 }` — обсервер живёт в Layout) + headless Chrome.
   ⚠️ Флаг `--window-size` **не годится для мобильной ширины**: Windows не даёт окну быть уже ~500px, вёрстка считается по 500, картинка режется по запрошенной ширине — выглядит как ложное переполнение.
   Для мобильных — только CDP с `Emulation.setDeviceMetricsOverride` (Node 24 умеет WebSocket из коробки, пакеты не нужны).

## Деплой

```bash
git push origin main   # Vercel соберёт за ~1–2 мин
```
- Репозиторий: **github.com/lesamourailes/portfolio**, ветка `main`. Токен не нужен — Windows Credential Manager закешировал PAT.
- Домен: **www.arturmarkarian.com** — основной; apex `arturmarkarian.com` → 308-редирект на www. DNS в Namecheap: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`.
- Проверять после деплоя по **www**; apex минуту может отдавать кеш — это норма.

## Аналитика и SEO (не ломать)

- **Яндекс.Метрика** счётчик `110397461` (Вебвизор, карты кликов/скролла) — в `Layout.astro`.
- **Cookie-баннер** — внизу `Layout.astro`, согласие в `localStorage['cookie-consent']`.
- **Verification-мета-теги** Google (`google-site-verification`) и Яндекс (`yandex-verification`) в `<head>` — **не удалять**, иначе слетит подтверждение в Search Console / Вебмастере.
- sitemap (`@astrojs/sitemap` → `/sitemap-index.xml`), `robots.txt`, JSON-LD Person, hreflang (ru/en/x-default), OG/Twitter, canonical → `https://www.arturmarkarian.com`.

## Контент — факты

- Контакты: `artur.markaryan@yahoo.com`, Telegram `@amourailes`, LinkedIn `/in/artur-markarian`, GetMentor `artur-markarian-5874`.
- Опыт: Моя смена (2025→), SmartMerch (2021–2025), IDS Borjomi (2016–2021) — у каждого логотип-чип.
- Портфолио: 8 веб-кейсов (SaaS и On-Premise) + 4 мобильных; картинки кликабельны → лайтбокс; у NRM и Pulse скриншоты меняются по языку (`srcEn`), у мобильных квадратные превью (`preview`/`previewEn`).
- Ассоциации: две группы (как в Портфолио) — сначала «Профессиональные сообщества» (Expinet 2026, ProductCamp 2025, GlobalCIO 2018), затем «Жюри и менторство» (Хакатоны России 2026, GetMentor 2025). Внутри группы — сортировка по году убыв.
  - В карточке: год слева вверху, логотип справа вверху, белой подложки нет. Поле `logoStyle` в `content.ts` задаёт отрисовку знака:
    `'invert'` — одноцветный тёмный знак, в тёмной теме `filter: invert(1) hue-rotate(180deg)` (ProductCamp, Expinet);
    `'tile'` — фон встроен в сам знак, показываем плиткой со скруглением (GetMentor — тёмно-синий JPEG);
    без поля — цветной прозрачный знак, читается на обеих темах (GlobalCIO, Хакатоны).
  - Лого Expinet **сгенерирован** (`public/logos/expinet.svg`) — заменить, если появится настоящий.
  - `public/logos/productcamp.png` — шестерёнка, это **настоящий знак ProductCamp** (подтверждено пользователем), менять не нужно. Белый фон вырезан по яркости, поля подрезаны.
  - У логотипов подрезаны прозрачные поля (`sharp .trim()`), иначе знак рендерится крошечным в слоте фиксированной высоты.
- «Показать ещё»: Сертификаты (8), Портфолио-веб (4), СМИ (6) — обработчик в `Layout.astro`, ищет `.show-more[data-grid]`.
- Исходники ассетов: логотипы `Desktop\NRM\Лого` и `Desktop\Logo`, портфолио `Desktop\NRM\Portfolio\{Web,Mobile}` (+ `Описание.txt`), галерея `Desktop\NRM\HH ProductDay`, сертификаты `Desktop\Доки ЕВ-1а\Для Айи`.

## 🔒 Приватность

`C:\Users\Artur\Desktop\Доки ЕВ-1а` — визовый пакет EB-1/EV-1: паспорт, виза США, DS-160, I-94, свидетельство о рождении, трудовые договоры, NDA. **Ничего оттуда не публиковать**, кроме профессиональных сертификатов, отобранных пользователем.

## Что дальше (открытые задачи)

1. Собрать **реальные отзывы** (шаблон запроса уже дан) → заменить заглушки → решить, снимать ли флаг с Testimonials и Services.
2. Опционально: блок с ценами/пакетами, lead magnet, визуальная CMS, отправка sitemap в Google Search Console.
