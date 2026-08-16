import { getEntry } from 'astro:content';
import { SITE } from '@/config/site';

export async function getSiteSettings() {
  const entry = await getEntry('settings', 'site').catch(() => null);
  if (!entry?.data) return SITE;
  const d = entry.data;
  return {
    ...SITE,
    siteName: d.siteName,
    author: d.author,
    authorRole: d.authorRole,
    authorBio: d.authorBio ?? SITE.authorBio,
    siteDescription: d.siteDescription ?? SITE.siteDescription,
    rss: { ...SITE.rss, title: d.siteName },
    seo: { ...SITE.seo, titleSuffix: d.siteName },
  };
}
