---
title: "Writing Tips for Technical Blog Posts"
description: "Practical advice for writing clear, readable, and useful technical blog posts in HAST CMS — structure, formatting, code examples, and more."
date: 2026-08-16
author: "HAST CMS"
category: "Tutorials"
tags:
  - writing
  - tutorial
  - tips
  - content
draft: false
toc: true
---

A well-structured technical blog post teaches something useful and is easy to follow. This guide covers the practices that make technical writing clear and readable in HAST CMS's Markdown format.

---

## Start With the Reader in Mind

Before writing a single word, ask:

- **Who is this for?** A beginner needs every step explained. An experienced reader needs precision, not handholding.
- **What will they know when they finish?** Name the specific skill or knowledge the post delivers.
- **Why would someone read this?** They have a problem, or they want to learn something. Keep that in focus.

A post with a clear, specific goal is always better than a broad overview of a topic.

---

## Structure the Post Before Writing

Outline the H2 sections before writing the body. A basic technical tutorial structure:

```
## Introduction / What This Post Covers
## Prerequisites
## Step 1: ...
## Step 2: ...
## Step 3: ...
## Common Mistakes / Troubleshooting
## Summary / Next Steps
```

You do not have to follow this exactly, but having a skeleton before you start prevents the post from wandering.

In HAST CMS, H2 headings (`##`) become table of contents entries when `toc: true` is set in frontmatter. This gives readers a navigation map of the entire post.

---

## Write a Strong Title

The title is the first thing a reader sees in search results, on the homepage, and in their RSS reader.

**Be specific:**

| Weak | Better |
|---|---|
| "Git Tips" | "Five Git Commands That Will Change How You Work" |
| "Python Guide" | "How to Read a CSV File in Python with Pandas" |
| "Docker Tutorial" | "Running a Node.js App in Docker: A Step-by-Step Guide" |

**Patterns that work well for tutorials:**

- `How to [Accomplish Specific Task]`
- `A Step-by-Step Guide to [Topic]`
- `[Topic]: Everything You Need to Know to Get Started`
- `[Number] Ways to [Do Something]`

Keep titles under 70 characters when possible — longer titles get cut off in search engine results.

---

## Write a Useful Description

The `description` frontmatter field is your one-sentence pitch. It appears in post indexes, search results, and social sharing cards.

A good description:
- States what the reader will learn or do
- Is a complete sentence
- Is under 160 characters (for clean search engine display)
- Does not repeat the title word-for-word

```yaml
# Weak
description: "A post about Git."

# Better
description: "Learn five Git commands — rebase, cherry-pick, bisect, stash, and reflog — that experienced developers use every day."
```

---

## Use Headings to Create Scannable Structure

Readers scan before they read. Use headings to break the post into clear sections.

**Rules for headings in HAST CMS:**

- Use `##` for top-level sections in the body — the `#` heading is reserved for the post title (set automatically from frontmatter)
- Use `###` for subsections within a section
- Keep heading text concise and descriptive — headings are navigation, not sentences
- Do not skip heading levels (do not jump from `##` to `####`)

```markdown
## Installation

### macOS

...

### Linux

...

### Windows

...
```

---

## Write Short Paragraphs

In technical writing, short paragraphs are easier to follow than long blocks of text.

- Aim for 2–4 sentences per paragraph
- One idea per paragraph
- Start a new paragraph when you move to a new point

Long paragraphs slow the reader down and make it hard to find information on a second read.

---

## Format Code Correctly

Code blocks are the core of technical writing. Use them consistently.

**Always use fenced code blocks with a language identifier:**

````markdown
```bash
npm install
```

```javascript
const x = 42;
```

```yaml
title: "My Post"
draft: false
```
````

The language identifier enables syntax highlighting. Common identifiers:

- `bash` or `sh` — shell commands
- `javascript` or `js` — JavaScript
- `typescript` or `ts` — TypeScript
- `python` — Python
- `yaml` — YAML configuration
- `json` — JSON data
- `html` — HTML
- `css` — CSS
- `markdown` — Markdown itself
- `diff` — file diffs

**Use inline code for:**

- File paths: `src/content/posts/`
- Field names: `draft`, `category`
- Commands used inline: run `npm run dev` to start the server
- Single values: set this to `true`

**Show input and output separately:**

```bash
npm run validate
```

```
Validating 7 post(s)...

Validation complete: 7 file(s), 0 error(s), 0 warning(s)
```

This makes it clear what you type versus what you see.

---

## Use Tables for Comparisons and References

Tables work well for:
- Comparing options side by side
- Listing fields and their descriptions
- Showing input → output pairs

```markdown
| Frontmatter field | Type | Default | Description |
|---|---|---|---|
| `title` | string | required | The post headline |
| `draft` | boolean | `false` | Hide the post from indexes |
| `toc` | boolean | `true` | Show table of contents |
```

Keep tables simple. If a cell needs a full paragraph, a table is the wrong format — use a definition list or subsections instead.

---

## Use Numbered Lists for Sequences

When order matters, use a numbered list:

```markdown
1. Create the file
2. Add frontmatter
3. Write the body
4. Set draft: false
5. Commit and push
```

When order does not matter, use a bulleted list:

```markdown
- Markdown-first
- Git-based
- No database required
- Easy to deploy
```

Do not use numbered lists for things that are not sequential — it implies a required order that does not exist.

---

## Explain Why, Not Just What

The biggest difference between a useful tutorial and a frustrating one is context. Tell the reader why a step matters.

**Without context:**

```
Run git rebase -i HEAD~3.
```

**With context:**

```
Run git rebase -i HEAD~3 to open the interactive rebase editor.
This lets you squash, reorder, or reword the last 3 commits before
pushing — useful for cleaning up a messy branch history before
opening a pull request.
```

The extra sentence tells the reader what this achieves and when it is useful.

---

## Finish With Next Steps

End every post with a clear signal for what to do next:

```markdown
## Next Steps

- [Link to related post] — brief description
- [Link to another post] — brief description
```

Or a short action item:

```markdown
Now that you understand the workflow, try publishing your first post
following the [step-by-step tutorial](/posts/writing-your-first-blog-post-complete-tutorial/).
```

A post that ends abruptly leaves readers without a path forward. Next steps keep them on your site and guide them through your content in a logical order.

---

## Quick Checklist Before Publishing

Run through this before setting `draft: false`:

- [ ] Title is specific and descriptive
- [ ] Description is under 160 characters and summarises the post clearly
- [ ] H2 headings form a logical outline
- [ ] All code blocks have language identifiers
- [ ] Numbered lists are used for sequences only
- [ ] Short paragraphs throughout
- [ ] Each step explains why, not just what
- [ ] Post ends with next steps or a clear action
- [ ] `npm run validate` passes with 0 errors
