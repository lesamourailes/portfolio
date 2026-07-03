import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arturmarkarian.com',
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
