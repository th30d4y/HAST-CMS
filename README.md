# HAST CMS

A minimalist, Git-based Markdown publishing system built with [Astro](https://astro.build) and TypeScript.

Write in Markdown → Commit to Git → Push to GitHub → Site rebuilds and deploys automatically.

No database. No admin panel. No backend. Plain `.md` files become a fast, fully-featured static website.

---

## Table of Contents

- [What Is HAST CMS](#what-is-hast-cms)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Creating a Blog Post](#creating-a-blog-post)
- [Frontmatter Reference](#frontmatter-reference)
- [Markdown Support](#markdown-support)
- [Site Configuration](#site-configuration)
- [Branding and Site Info](#branding-and-site-info)
- [Content Types](#content-types)
- [Taxonomy: Categories, Tags, Hashtags](#taxonomy-categories-tags-hashtags)
- [Series](#series)
- [Drafts and Scheduled Posts](#drafts-and-scheduled-posts)
- [Authors](#authors)
- [Images and Static Files](#images-and-static-files)
- [Search](#search)
- [RSS and JSON Feeds](#rss-and-json-feeds)
- [SEO](#seo)
- [Redirects](#redirects)
- [Analytics](#analytics)
- [Deployment](#deployment)
- [GitHub Actions](#github-actions)
- [Troubleshooting](#troubleshooting)

---

## What Is HAST CMS

HAST CMS is a static site publishing platform where your content lives entirely in plain text files inside a Git repository. There is no database, no login screen, and no content management backend.

The publishing workflow is:

```
1. Create a .md file in src/content/posts/
2. Write your article in Markdown
3. git add → git commit → git push
4. GitHub Actions builds the site and deploys it
5. Your post is live
```

Every change — new post, edit, delete, rebrand — is a Git commit. You get a full history of every article ever written, with the ability to roll back any change.

---

## Features

**Publishing**
- Markdown and MDX blog posts
- Draft posts (hidden until published)
- Scheduled posts (hidden until the set date)
- Featured and pinned posts on the homepage
- Multi-part article series with navigation
- Previous/Next post navigation
- Related posts suggestions

**Organization**
- Categories (one per post, auto-generates index pages)
- Tags (multiple per post, auto-generates index pages)
- Hashtags (separate `#tag` style, auto-generates index pages)
- Year/month archive
- Author pages

**Site Features**
- Client-side full-text search
- Paginated latest articles feed
- Table of contents sidebar (auto-generated from headings)
- Syntax-highlighted code blocks with copy button
- RSS feed (`/rss.xml`)
- JSON feed (`/feed.json`)
- Auto-generated sitemap
- 404 page

**SEO and Metadata**
- Canonical URLs
- Open Graph and Twitter/X card tags
- Schema.org structured data (BlogPosting, WebSite, Person, BreadcrumbList)
- Per-post `noindex` support
- Custom OG images per post

**Developer Experience**
- TypeScript throughout
- Content validation script
- Post creation script
- Hot-reload development server
- Zero runtime dependencies (pure static output)

---

## Quick Start

### Requirements

- Node.js 18 or later
- npm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/th30d4y/HAST-CMS.git
cd HAST-CMS

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:4321` in your browser. The site reloads automatically when you save files.

---

## Project Structure

```
HAST-CMS/
├── src/
│   ├── config/
│   │   └── site.ts                  # Structural config: URL, navigation, analytics
│   ├── content/
│   │   ├── posts/                   # Blog posts — one .md file per post
│   │   ├── pages/                   # Static pages (About, Disclaimer, etc.)
│   │   ├── authors/                 # Author data (.json files)
│   │   └── settings/
│   │       └── site.md              # Branding config: site name, author, description
│   ├── layouts/
│   │   ├── BaseLayout.astro         # Base HTML shell with all SEO meta tags
│   │   └── PostLayout.astro         # Article layout: TOC, author box, related posts
│   ├── pages/                       # Astro route files (do not edit for content)
│   │   ├── index.astro              # Homepage
│   │   ├── posts/[slug].astro       # Individual post pages
│   │   ├── latest/[...page].astro   # Paginated post index
│   │   ├── categories/index.astro   # All categories
│   │   ├── category/[slug].astro    # Posts in one category
│   │   ├── tags/index.astro         # All tags
│   │   ├── tag/[slug].astro         # Posts with one tag
│   │   ├── hashtags/index.astro     # All hashtags
│   │   ├── hashtag/[slug].astro     # Posts with one hashtag
│   │   ├── series/index.astro       # All series
│   │   ├── series/[slug].astro      # Posts in one series
│   │   ├── archive/index.astro      # Year/month archive
│   │   ├── author/[slug].astro      # Posts by one author
│   │   ├── search/index.astro       # Search page
│   │   ├── rss.xml.ts               # RSS feed endpoint
│   │   ├── feed.json.ts             # JSON feed endpoint
│   │   ├── robots.txt.ts            # robots.txt endpoint
│   │   └── 404.astro                # 404 page
│   ├── styles/
│   │   └── global.css               # All styles — monochrome design system
│   └── utils/
│       ├── posts.ts                 # Post fetching, filtering, sorting, taxonomy
│       ├── settings.ts              # Async branding config loader
│       ├── slugify.ts               # URL slug generation helpers
│       ├── reading-time.ts          # Reading time estimation
│       └── toc.ts                   # Table of contents builder
├── templates/
│   └── post.md                      # Post template (used by npm run new:post)
├── scripts/
│   ├── new-post.js                  # Creates a new post file from the template
│   └── validate-content.js          # Validates post frontmatter before building
├── public/
│   └── _redirects                   # Netlify/Cloudflare redirect rules
├── .github/
│   └── workflows/                   # GitHub Actions CI/CD workflows
├── astro.config.mjs                 # Astro build configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json
```

### Key Directories for Content Editors

| Directory | What goes here |
|---|---|
| `src/content/posts/` | Your blog posts — one `.md` file per post |
| `src/content/pages/` | Static pages like About, Disclaimer |
| `src/content/authors/` | Author profile data (`.json` files) |
| `src/content/settings/site.md` | Site name, author, description |
| `public/` | Images and static files served as-is |

---

## Available Scripts

```bash
npm run dev          # Start development server at http://localhost:4321
npm run build        # Build static site to dist/
npm run preview      # Preview the built site locally
npm run new:post "Title"   # Create a new post from the template
npm run validate     # Validate all post frontmatter
npm run check        # TypeScript type check
```

### `npm run new:post`

The fastest way to start a new post:

```bash
npm run new:post "How I Built a Blog"
```

This creates `src/content/posts/how-i-built-a-blog.md` pre-filled with all frontmatter fields and `draft: true`. Open the file, write your article, set `draft: false`, then commit and push.

### `npm run validate`

Checks all posts for:
- Missing required fields (`title`, `description`, `date`)
- Invalid date formats
- Duplicate slugs
- Description over 300 characters
- Invalid `seriesOrder` values

Run this before pushing to catch errors early:

```bash
npm run validate

Validating 8 post(s)...

Validation complete: 8 file(s), 0 error(s), 0 warning(s)
```

---

## Creating a Blog Post

### Step 1: Create the file

```bash
npm run new:post "My Post Title"
# Creates: src/content/posts/my-post-title.md
```

Or create manually:

```bash
# File name becomes the URL: /posts/my-post-title/
touch src/content/posts/my-post-title.md
```

### Step 2: Add frontmatter and write content

```markdown
---
title: "My Post Title"
description: "A clear, one-sentence summary of the post (under 160 characters)."
date: 2026-08-16
category: "Tutorials"
tags:
  - markdown
  - tutorial
draft: false
toc: true
---

Your article starts here.

## First Section

Write in standard Markdown. All GFM features are supported.
```

### Step 3: Preview locally

```bash
npm run dev
# Open http://localhost:4321/posts/my-post-title/
```

### Step 4: Validate

```bash
npm run validate
```

### Step 5: Commit and push

```bash
git add src/content/posts/my-post-title.md
git commit -m "publish: My Post Title"
git push
```

GitHub Actions builds and deploys the site. The post is live within 1–2 minutes.

---

## Frontmatter Reference

All supported fields for posts in `src/content/posts/`:

### Required Fields

| Field | Type | Description |
|---|---|---|
| `title` | string | Post headline. Shown as `<h1>`, in all indexes, and in the browser tab. |
| `description` | string | Short summary, max 300 characters. Shown in index rows, search results, and meta tags. |
| `date` | YYYY-MM-DD | Publication date. Controls sort order across all indexes. |

### Optional Fields

| Field | Type | Default | Description |
|---|---|---|---|
| `slug` | string | filename | Override the URL slug. File `my-post.md` → `/posts/my-post/` by default. |
| `updated` | YYYY-MM-DD | — | Date of last substantive edit. Shown in post header and used in `dateModified` structured data. |
| `author` | string | site author | Author display name. Links to `/author/<slug>/`. |
| `category` | string | `Uncategorized` | One category per post. Auto-creates `/category/<slug>/`. |
| `tags` | string[] | `[]` | Keyword tags. Each auto-creates `/tag/<slug>/`. |
| `hashtags` | string[] | `[]` | `#tag` style labels. Each auto-creates `/hashtag/<slug>/`. Include `#` or omit — both work. |
| `featured` | boolean | `false` | Shows post in the Featured section on the homepage (max 3 shown). |
| `pinned` | boolean | `false` | Shows post in the Pinned section on the homepage. |
| `draft` | boolean | `false` | Hides post from all public indexes, RSS, search, and sitemap. |
| `series` | string | — | Series name for multi-part posts. All posts with the same value are grouped. |
| `seriesOrder` | integer | — | Position within a series (1, 2, 3…). |
| `cover` | string | — | Cover image path (relative to `/public/` or absolute URL). Shown above the post title. |
| `ogImage` | string | — | Custom Open Graph image for social sharing. Overrides `cover` if both are set. |
| `canonical` | URL | — | Canonical URL if the post was originally published elsewhere. |
| `toc` | boolean | `true` | Show the table of contents sidebar. Requires at least 2–3 H2/H3 headings. |
| `comments` | boolean | `false` | Reserved for future comment provider integration. No effect currently. |
| `noindex` | boolean | `false` | Exclude from search engines, sitemap, and robots.txt. |

### Complete Example

```yaml
---
title: "Building a REST API with Node.js"
description: "Step-by-step guide to building a production-ready REST API using Node.js, Express, and JSON — no database required."
date: 2026-08-16
updated: 2026-08-16
slug: "nodejs-rest-api"
author: "HAST CMS"
category: "Backend Development"
tags:
  - node-js
  - rest-api
  - express
  - javascript
hashtags:
  - "#NodeJS"
  - "#WebDev"
featured: false
pinned: false
draft: false
series: "Node.js Guides"
seriesOrder: 1
cover: "/images/nodejs-cover.jpg"
toc: true
noindex: false
---
```

---

## Markdown Support

HAST CMS supports full [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/).

### Headings

Use `##` for top-level sections in post bodies. `#` is reserved for the post title (set from frontmatter).

```markdown
## Main Section
### Subsection
#### Minor Subsection
```

H2 and H3 headings appear in the table of contents sidebar automatically.

### Text Formatting

```markdown
**bold**    *italic*    ~~strikethrough~~    `inline code`
```

### Links and Images

```markdown
[Link text](https://example.com)
![Alt text](/images/photo.jpg)
```

### Code Blocks

Use fenced code blocks with a language identifier for syntax highlighting:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

Every code block gets a **COPY** button automatically.

**Supported languages:** `bash`, `sh`, `javascript`, `typescript`, `python`, `go`, `rust`, `c`, `cpp`, `java`, `php`, `ruby`, `sql`, `html`, `css`, `json`, `yaml`, `toml`, `dockerfile`, `powershell`, `solidity`, and more.

### Tables

```markdown
| Column A | Column B | Column C |
|---|---|---|
| Value 1 | Value 2 | Value 3 |
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
```

### Blockquotes, Footnotes, Horizontal Rules

```markdown
> This is a blockquote.

Text with a footnote.[^1]
[^1]: Footnote content here.

---
```

### Raw HTML

Raw HTML is supported and rendered as-is:

```html
<details>
  <summary>Click to expand</summary>
  Hidden content.
</details>
```

---

## Site Configuration

There are two configuration files.

### `src/content/settings/site.md` — Branding (edit this to rebrand)

This is the user-facing config file. Edit the YAML frontmatter to change what visitors see:

```yaml
---
siteName: "HAST CMS"
author: "HAST CMS"
authorRole: "Git-based Markdown Publishing"
authorBio: "HAST CMS is a minimalist, Git-based Markdown publishing system."
siteDescription: "A minimalist, Git-based Markdown publishing system."
---
```

| Field | Where it appears |
|---|---|
| `siteName` | Header logo, browser tab, RSS title, Open Graph `site_name` |
| `author` | Footer, post bylines, meta `author` tag, structured data |
| `authorRole` | Footer subtitle, author page |
| `authorBio` | Author page, post footer author box |
| `siteDescription` | Homepage subtitle, default meta description, JSON feed |

### `src/config/site.ts` — Structural Config

Edit this for settings that rarely change:

```typescript
export const SITE = {
  siteURL: 'https://your-domain.com',   // Full deployed URL — used in canonical links and feeds

  navigation: [                          // Top navigation links
    { label: 'HOME', href: '/' },
    { label: 'LATEST', href: '/latest/' },
    { label: 'CATEGORIES', href: '/categories/' },
    { label: 'ARCHIVE', href: '/archive/' },
    { label: 'ABOUT', href: '/about/' },
    { label: 'SEARCH', href: '/search/' },
  ],

  social: {
    github: 'https://github.com/th30d4y/HAST-CMS',
  },

  postsPerPage: 10,                      // Posts shown per page on /latest/
  relatedPostsCount: 3,                  // Related posts shown at the bottom of articles

  rss: {
    feedItems: 20,                       // Number of posts in RSS/JSON feeds
  },
};
```

---

## Branding and Site Info

To rename the site, change the author, or update the description:

1. Open `src/content/settings/site.md`
2. Edit the frontmatter values
3. Save, commit, and push

```bash
git add src/content/settings/site.md
git commit -m "config: update site name to My Blog"
git push
```

All pages, feeds, meta tags, and structured data update on the next build.

---

## Content Types

HAST CMS uses four content collections, each a directory under `src/content/`:

### `posts/` — Blog Posts

`.md` files. The main content type. Each file generates a public post page.

### `pages/` — Static Pages

`.md` files with simplified frontmatter. Used for About, Disclaimer, and other static pages. URLs are generated from the filename: `about.md` → `/about/`.

```yaml
---
title: "About"
description: "About this site."
updated: 2026-08-16
---
```

### `authors/` — Author Profiles

`.json` files. Filename = author slug. Used on author archive pages and post footers.

```json
{
  "name": "HAST CMS",
  "role": "Git-based Markdown Publishing",
  "bio": "HAST CMS is a minimalist publishing system.",
  "social": {
    "github": "https://github.com/th30d4y/HAST-CMS"
  }
}
```

### `settings/` — Site Branding

One file: `site.md`. Controls the user-visible site name and identity. See [Branding and Site Info](#branding-and-site-info).

---

## Taxonomy: Categories, Tags, Hashtags

All taxonomy pages are generated automatically — you never create them manually.

### Categories

One category per post. Set in frontmatter:

```yaml
category: "Tutorials"
```

Auto-generates:
- `/categories/` — all categories with post counts
- `/category/tutorials/` — all posts in that category

Category URL slugs are derived from the value: `"Web Security"` → `/category/web-security/`.

### Tags

Multiple tags per post:

```yaml
tags:
  - markdown
  - tutorial
  - beginner
```

Auto-generates:
- `/tags/` — all tags with post counts
- `/tag/markdown/` — all posts with that tag

### Hashtags

`#tag` style labels with their own separate index:

```yaml
hashtags:
  - "#HastCMS"
  - "#Markdown"
```

Auto-generates:
- `/hashtags/` — all hashtags with post counts
- `/hashtag/hastcms/` — all posts with that hashtag (case-insensitive)

The `#` prefix is optional in frontmatter values.

---

## Series

Group related posts into a named series. A navigation box linking all parts appears inside each post.

```yaml
series: "Building a Static Site"
seriesOrder: 1
```

Rules:
- All posts in a series must use the **exact same** `series` string (case-sensitive)
- `seriesOrder` must be unique positive integers within a series
- Series pages auto-generate at `/series/<slug>/`

---

## Drafts and Scheduled Posts

### Drafts

```yaml
draft: true
```

Draft posts are invisible in all production indexes, feeds, and the sitemap. They are visible during local development (`npm run dev`).

To publish: set `draft: false` and push.

### Scheduled Posts

```yaml
date: 2026-12-01
draft: false
```

Posts with a future date are automatically hidden until that date. The `getAllPosts()` utility filters out any post whose date is later than today. No action is required on publication day — the next build after that date will include the post.

---

## Authors

Author data lives in `src/content/authors/`. The filename (without `.json`) is the author slug.

```
src/content/authors/hast-cms.json  →  /author/hast-cms/
```

When a post has `author: "HAST CMS"`, the system looks for a matching author entry and shows their role and bio in the post footer. Author archive pages at `/author/<slug>/` list all posts by that author.

If no matching `.json` file exists, the post still renders — it just shows the name without a bio.

---

## Images and Static Files

Place all images and downloadable files in the `public/` directory. Files there are served from the root path.

```
public/images/my-photo.jpg       → /images/my-photo.jpg
public/files/report.pdf          → /files/report.pdf
```

Reference in Markdown:

```markdown
![A description of the image](/images/my-photo.jpg)

[Download the report](/files/report.pdf)
```

For cover images, use the `cover` frontmatter field:

```yaml
cover: "/images/post-cover.jpg"
```

---

## Search

Static client-side search is available at `/search/`. No external service required.

Searches across: title, description, category, tags, hashtags, and author.

Supports URL query parameters:

```
/search/?q=markdown
```

The search index is built at compile time from all published posts.

---

## RSS and JSON Feeds

| Feed | URL | Format |
|---|---|---|
| RSS 2.0 | `/rss.xml` | Standard RSS, compatible with all feed readers |
| JSON Feed 1.0 | `/feed.json` | Machine-readable JSON format |

Both feeds include the 20 most recent published posts (configurable via `rss.feedItems` in `site.ts`).

---

## SEO

Every page automatically gets:

- `<title>` — post title + site name separator + site name
- `<meta name="description">` — post description or site description
- `<link rel="canonical">` — canonical URL
- Open Graph tags — `og:title`, `og:description`, `og:image`, `og:type`, `og:site_name`
- Twitter/X Card tags — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Article dates — `article:published_time`, `article:modified_time`
- Schema.org JSON-LD — `WebSite`, `Person`, `BlogPosting`, `BreadcrumbList`

### Per-Post SEO Overrides

```yaml
# Canonical URL (for republished content)
canonical: "https://original-source.com/article"

# Custom OG image for social sharing (1200×630px recommended)
ogImage: "/images/my-og-image.jpg"

# Exclude from search engines and sitemap
noindex: true
```

---

## Redirects

When you change a post slug, add a redirect to `public/_redirects` (Netlify/Cloudflare syntax):

```
/posts/old-slug/   /posts/new-slug/   301
/posts/removed/    /                  301
```

For Vercel, add to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/posts/old-slug/",
      "destination": "/posts/new-slug/",
      "permanent": true
    }
  ]
}
```

---

## Analytics

Analytics is disabled by default. To enable, edit `src/config/site.ts`:

```typescript
analytics: {
  enabled: true,
  provider: 'plausible',           // 'plausible' | 'umami' | 'goatcounter'
  scriptSrc: 'https://plausible.io/js/script.js',
  dataId: 'your-domain.com',
},
```

No external scripts load unless `enabled: true` is set.

---

## Deployment

### GitHub Pages

1. Go to **Settings → Pages** in your repository
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow deploys automatically

The site deploys to `https://<username>.github.io/<repo>/`.

For a custom domain, add a `CNAME` file to `public/`:

```
your-domain.com
```

Then set the custom domain in **Settings → Pages → Custom domain** and update `siteURL` in `src/config/site.ts`.

### Cloudflare Pages

1. Connect the repository in Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`

The `public/_redirects` file is processed automatically.

### Netlify

Connect the repository. Build command: `npm run build`. Publish directory: `dist`.

### Vercel

Build command: `npm run build`. Output directory: `dist`.

---

## GitHub Actions

Two workflows are included in `.github/workflows/`.

### `deploy.yml`

Runs on every push to `main` and on a daily schedule (for scheduled post publishing):

1. Checkout repository
2. Install Node.js 20
3. `npm ci` — install dependencies
4. `npm run validate` — validate all post frontmatter
5. `npm run check` — TypeScript type check
6. `npm run build` — build the static site
7. Deploy `dist/` to GitHub Pages

### `pr-check.yml`

Runs on every pull request:

1. Validates content
2. Type checks
3. Builds (without deploying)

PRs with validation errors or build failures are blocked automatically.

---

## Troubleshooting

**Posts not showing after the dev server started:**

The Astro content cache can go stale when new files are added. Clear it and restart:

```bash
rm -rf .astro/data-store.json .astro/collections
npm run dev
```

**Post not appearing on the live site:**

- Check `draft: false` is set in frontmatter
- Check the `date` is today or in the past (not a future date)
- Check the GitHub Actions workflow completed without errors (Actions tab)
- Run `npm run validate` locally to check for frontmatter errors

**Build fails:**

```bash
npm run validate    # Check for frontmatter errors
npm run check       # Check for TypeScript errors
npm run build       # See the full error output
```

**Duplicate slug warning:**

Two posts are resolving to the same URL. Either rename one file or add a unique `slug:` field to one of them.

**Series navigation not showing:**

- All posts in the series must use the exact same `series` string (it is case-sensitive)
- Each post must have a unique `seriesOrder` integer

**Category or tag page returning 404:**

The page is generated only if at least one published, non-draft post uses that category or tag. Check that `draft: false` and the date is not in the future.

**Images not loading:**

Images in `public/` are served from the root. Use `/images/file.png`, not `public/images/file.png`, in your Markdown.

**Search not finding a post:**

The search index is built at compile time. Run `npm run build` to regenerate it. Make sure JavaScript is enabled in the browser — search is client-side only.

---

## Repository

[https://github.com/th30d4y/HAST-CMS](https://github.com/th30d4y/HAST-CMS)
AAAAA
