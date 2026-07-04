import type { Locale } from '../data/content';

export const locales: Locale[] = ['ru', 'en'];
export const defaultLocale: Locale = 'ru';

export const ui = {
  nav: {
    about: { ru: 'Обо мне', en: 'About' },
    experience: { ru: 'Опыт', en: 'Experience' },
    skills: { ru: 'Навыки', en: 'Skills' },
    portfolio: { ru: 'Портфолио', en: 'Portfolio' },
    communities: { ru: 'Ассоциации', en: 'Associations' },
    media: { ru: 'СМИ', en: 'Media' },
    certificates: { ru: 'Сертификаты', en: 'Certificates' },
    gallery: { ru: 'Фото', en: 'Photos' },
    contact: { ru: 'Контакты', en: 'Contact' },
  },
  hero: {
    cta_contact: { ru: 'Связаться', en: 'Get in touch' },
    cta_experience: { ru: 'Узнать больше', en: 'Learn more' },
  },
  sections: {
    about: { ru: 'Обо мне', en: 'About' },
    experience: { ru: 'Опыт', en: 'Experience' },
    skills: { ru: 'Навыки', en: 'Skills' },
    education: { ru: 'Образование', en: 'Education' },
    portfolio: { ru: 'Портфолио', en: 'Portfolio' },
    communities: { ru: 'Ассоциации', en: 'Associations' },
    media: { ru: 'СМИ обо мне', en: 'Media' },
    certificates: { ru: 'Сертификаты', en: 'Certificates' },
    gallery: { ru: 'Галерея', en: 'Gallery' },
    contact: { ru: 'Контакты', en: 'Contact' },
  },
  portfolio: {
    web: { ru: 'Веб-приложения', en: 'Web apps' },
    mobile: { ru: 'Мобильные приложения', en: 'Mobile apps' },
    empty: {
      ru: 'Скоро здесь появятся скриншоты и разбор кейсов.',
      en: 'Screenshots and case breakdowns are coming soon.',
    },
  },
  gallery: {
    empty: {
      ru: 'Скоро здесь появятся фотографии с коллегами и мероприятий.',
      en: 'Photos with colleagues and from events are coming soon.',
    },
  },
  media_kind: {
    press: { ru: 'Публикация', en: 'Press' },
    speaking: { ru: 'Выступление', en: 'Speaking' },
    profile: { ru: 'Профиль', en: 'Profile' },
  },
  contact: {
    lead: {
      ru: 'Продуктовые задачи, консалтинг и менторство',
      en: 'Product challenges, consulting and mentorship',
    },
  },
  footer: {
    rights: { ru: 'Все права защищены.', en: 'All rights reserved.' },
    built: { ru: 'Сделано на Astro', en: 'Built with Astro' },
  },
  theme: {
    toggle: { ru: 'Переключить тему', en: 'Toggle theme' },
  },
} as const;

export function t(entry: Record<Locale, string>, locale: Locale): string {
  return entry[locale] ?? entry[defaultLocale];
}

// Sort by a year-ish string descending; undated / non-numeric go to the end.
export function byYearDesc<T>(items: T[], getYear: (item: T) => string): T[] {
  return [...items].sort((a, b) => {
    const ya = parseInt(getYear(a), 10);
    const yb = parseInt(getYear(b), 10);
    const va = Number.isNaN(ya) ? -Infinity : ya;
    const vb = Number.isNaN(yb) ? -Infinity : yb;
    return vb - va;
  });
}

export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '/' ? '/' : clean;
  return `/en${clean === '/' ? '' : clean}`;
}

export function switchLocalePath(currentPath: string, target: Locale): string {
  let base = currentPath.replace(/^\/en(?=\/|$)/, '');
  if (base === '') base = '/';
  return target === defaultLocale ? base : `/en${base === '/' ? '' : base}`;
}
