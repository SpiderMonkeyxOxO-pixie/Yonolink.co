// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yonolink.co',
  integrations: [
    tailwind(),
    sitemap({
      // Exclude 404 — not a real page for crawlers
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
