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
- Nav: logo left (links to home), links + search right (desktop); hamburger menu (tablet/mobile)
- Nav logo: `public/logoWhite_77x50.png` rendered at natural size (77×50px)
- Nav links order: Projects, Blog, Quotes — no Home link (the logo serves that purpose)
- Nav link font size: `text-lg` (18px)
- Nav and footer background: `#3E4249` with white text
- Content width constrained to `max-w-4xl`, centered
- Background image: `src/assets/images/tile.jpg` (repeating)
- Footer: copyright left, social icons right (GitHub, X, LinkedIn, YouTube)

All pages are using the new layout

- `src/pages/index.astro` — Home (portfolio), four sections:
  1. **Hero**: profile photo (`public/profile.jpg`) left, intro text + social icons right
  2. **Latest Projects**: 2-column grid, up to 6, links to `/projects`
  3. **Latest Posts**: 2-column grid, up to 4, links to `/blog`
  4. **Latest Quotes**: 2-column grid, up to 6, links to `/quotes`
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
- `image` — local image (optional) — shown as card cover image

**quotes** (`src/content/quotes/*.md`)
- `author` — string
- `source` — string (optional)
- `date` — date
- `image` — local image (optional) — shown as card cover image
- Body: the quote text

**projects** (`src/content/projects/*.md`)
- `title` — string
- `date` — date
- `description` — string
- `url` — string (optional)
- `tags` — string[] (optional)
- `image` — local image (optional) — shown as card cover image
- Body: full project write-up

### Typography

- Font: **IBM Plex Sans** (weights 300–700) loaded from Google Fonts in `BaseLayout.astro`
- Base font size: `18px` set on `body` in `src/styles/global.css`
- Font family registered in `src/styles/global.css` via Tailwind v4 `@theme { --font-sans }`

### Styling notes

- Main content area has `bg-white` (set on `<main>` in `BaseLayout.astro`)
- All page headings use `text-gray-900`
- Listing pages use a 2-column grid (`md:grid-cols-2`); cards show a cover image (or gray placeholder), then title/date, then description
- Listing cards use `bg-gray-50 border border-gray-200` with `hover:bg-gray-100`
- Blog and project detail pages use a `.post-content` class with scoped `<style>` blocks to style rendered Markdown (no typography plugin installed)

### Image setup

- Images use Astro's `<Image />` component from `astro:assets` for automatic optimization (WebP conversion, resizing, lazy loading)
- Schema uses Astro's `image()` helper (not `z.string()`) — validates and processes local images at build time
- Local images live in `src/assets/images/<collection>/` (e.g. `src/assets/images/blog/my-post.jpg`)
- Reference in frontmatter with a relative path: `image: "../../assets/images/blog/my-post.jpg"`
- Body images (inside Markdown content) go in `public/assets/images/blog/<post-slug>/` and are referenced as `/assets/images/blog/<post-slug>/filename.jpg`

### Image recommendations

**Card cover images — use Unsplash**

Unsplash provides free, professional-quality photos with no attribution required.

1. Browse and pick a photo at [unsplash.com](https://unsplash.com)
2. Copy the photo ID from the URL (the alphanumeric string after `/photo-`)
3. Download it sized for a card using curl:

```bash
curl -sL "https://images.unsplash.com/photo-{ID}?w=800&h=400&fit=crop&q=80" -o src/assets/images/blog/my-post.jpg
```

Parameters:
- `w=800&h=400` — card dimensions
- `fit=crop` — crops to fill without distortion
- `q=80` — good quality/size balance

### Search setup

Pagefind is used for search. It runs after the Astro build and indexes the `dist/` folder.

- Build command: `npm run build` (runs `astro build && pagefind --site dist`)
- Search is wired up via Pagefind's JS API (not the PagefindUI component) to keep the original nav search box style
- The search input is in `BaseLayout.astro` — desktop (`#search-desktop`) and mobile (`#search-mobile`)
- Results appear in a dropdown below the input, dismissed on outside click
- `/pagefind/pagefind.js` is marked as external in `astro.config.mjs` to avoid Vite build errors
- Listing pages and home page have `data-pagefind-ignore="all"` to prevent duplicate results — only individual post pages are indexed

### Deployment

- **Hosting:** Netlify (auto-deploys from GitHub on every push)
- **GitHub repo:** https://github.com/omarcino/deployed_to_netlify
- **Live URL:** https://omardata.com
- **DNS:** Managed at Namecheap — A record `@` → `75.2.60.5`, CNAME `www` → `omardatasite.netlify.app`
- **SSL:** Provisioned automatically by Netlify

To deploy a new version: `git push` — Netlify rebuilds and deploys automatically.