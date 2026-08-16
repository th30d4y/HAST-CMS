import rss from '@astrojs/rss';
import { getAllPosts, getPostUrl } from '@/utils/posts';
import { SITE } from '@/config/site';
import { getSiteSettings } from '@/utils/settings';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const settings = await getSiteSettings();
  const posts = await getAllPosts();

  return rss({
    title: settings.rss.title,
    description: SITE.rss.description,
    site: context.site?.toString() ?? SITE.siteURL,
    items: posts.slice(0, SITE.rss.feedItems).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: getPostUrl(post),
      categories: [post.data.category, ...post.data.tags],
      author: post.data.author,
    })),
    customData: `<language>en-us</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  });
}
