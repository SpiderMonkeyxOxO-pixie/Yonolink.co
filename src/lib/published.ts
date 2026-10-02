import type { CollectionEntry } from 'astro:content';

// A post goes live at 07:00 IST on its pubDate. The site is static, so a
// rebuild (scripts/scheduled-publish.sh, run daily by cron) is what publishes it.
export function isPublished(post: CollectionEntry<'blog'>): boolean {
  const goLive = new Date(`${post.data.pubDate.slice(0, 10)}T07:00:00+05:30`);
  return goLive.getTime() <= Date.now();
}
