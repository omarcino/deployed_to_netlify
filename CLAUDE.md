### Goal

Build a website with:

- Astro
- Tailwind for styling
- Pagefind for search

The website content will be:

- A portfolio page
- Three blog-type pages: blogs, quotes, projects

### Build requirements

The site will be build step by step.

### Installation and setup process done so far

Scaffolded a minimal Astro project

`npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict`

Installed dependencies

`npm install`

Added Tailwind

`npx astro add tailwind`

Added pagefind

`npm install pagefind --save-dev`

Created a layout

`src/layouts/BaseLayout.astro`

Layout features:
- Nav: logo left, links + search right (desktop); hamburger menu (tablet/mobile)
- Nav and footer background: `#3E4249` with white text
- Content width constrained to `max-w-4xl`, centered
- Background image: `src/assets/images/tile.jpg` (repeating)
- Footer: copyright left, social icons right (GitHub, X, LinkedIn, YouTube)

All pages are using the new layout

- `src/pages/index.astro` — Home (portfolio)
- `src/pages/blog.astro` — Blog listing
- `src/pages/blog/[slug].astro` — Individual blog post
- `src/pages/quotes.astro` — Quotes listing
- `src/pages/quotes/[slug].astro` — Individual quote
- `src/pages/projects.astro` — Projects listing
- `src/pages/projects/[slug].astro` — Individual project

### Content collections

Defined in `src/content.config.ts` using Astro v6 Content Layer API (`glob` loader).

Content lives in `src/content/<collection>/` as Markdown files.

**blog** (`src/content/blog/*.md`)
- `title` — string
- `date` — date
- `description` — string

**quotes** (`src/content/quotes/*.md`)
- `author` — string
- `source` — string (optional)
- `date` — date
- Body: the quote text

**projects** (`src/content/projects/*.md`)
- `title` — string
- `date` — date
- `description` — string
- `url` — string (optional)
- `tags` — string[] (optional)
- Body: full project write-up

### Styling notes

- Main content area has `bg-white` (set on `<main>` in `BaseLayout.astro`)
- All page headings use `text-gray-900`
- Listing cards use `bg-gray-50 border border-gray-200` with `hover:bg-gray-100`
- Blog and project detail pages use a `.post-content` class with scoped `<style>` blocks to style rendered Markdown (no typography plugin installed)