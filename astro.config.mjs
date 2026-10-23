// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yonolink.co',
  integrations: [
    tailwind(),
    sitemap({
      // Exclude 404 — not a real page for crawlers.
      // Exclude /games/ — duplicates the /app/ directory listing 1:1 (same 60+ apps,
      // same links, near-identical copy) and canonicalizes to /app/; sitemaps should
      // only list canonical URLs, so keep it out while that duplication stands.
      filter: (page) => !page.includes('/404') && page !== 'https://yonolink.co/games/',
    }),
  ],
});
