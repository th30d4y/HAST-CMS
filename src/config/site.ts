export const SITE = {
  siteName: 'HAST CMS',
  siteDescription: 'A minimalist, Git-based Markdown publishing system.',
  siteURL: 'https://w4nn4d13.tech',
  author: 'HAST CMS',
  authorRole: 'Git-based Markdown Publishing',
  authorBio: 'HAST CMS is a minimalist, Git-based Markdown publishing system. Write in Markdown, commit to Git, and publish as static HTML.',
  authorURL: 'https://w4nn4d13.tech',
  locale: 'en-US',
  timezone: 'UTC',

  postsPerPage: 10,
  relatedPostsCount: 3,
  excerptLength: 200,

  defaultOGImage: '/og-default.png',
  favicon: '/favicon.ico',

  navigation: [
    { label: 'HOME', href: '/' },
    { label: 'LATEST', href: '/latest/' },
    { label: 'CATEGORIES', href: '/categories/' },
    { label: 'ARCHIVE', href: '/archive/' },
    { label: 'ABOUT', href: '/about/' },
    { label: 'SEARCH', href: '/search/' },
  ],

  social: {
    github: 'https://github.com/th30d4y/HAST-CMS',
    twitter: '',
    linkedin: '',
    rss: '/rss.xml',
  },

  rss: {
    title: 'HAST CMS',
    description: 'A minimalist, Git-based Markdown publishing system.',
    feedItems: 20,
  },

  seo: {
    titleSeparator: ' — ',
    titleSuffix: 'HAST CMS',
    twitterCard: 'summary_large_image' as const,
    twitterSite: '',
    keywords: 'markdown cms, git-based cms, static site generator, markdown publishing, hast cms, blog platform',
  },

  analytics: {
    enabled: false,
    provider: '', // 'plausible' | 'umami' | 'goatcounter' | ''
    scriptSrc: '',
    dataId: '',
  },
} as const;

export type SiteConfig = typeof SITE;
