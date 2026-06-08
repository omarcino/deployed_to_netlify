---
title: "This Website"
date: 2026-06-07
description: "A personal site built with Astro, Tailwind, and Pagefind — portfolio, blog, quotes, and projects in one place."
url: "https://omarnina.com"
tags: ["Astro", "Tailwind", "Pagefind"]
---

A fast, statically generated personal site. The goal was simplicity: no framework overhead, no CMS, just Markdown files and a build step.

## What I built

- A portfolio landing page
- A blog for longer-form writing
- A quotes collection for ideas worth keeping
- A projects index

## What I learned

Astro's Content Layer API (v5+) is a significant improvement over the old file-based collections. The glob loader makes it easy to add new content types without touching config.

Pagefind runs as a post-build step and generates a static search index — no server needed. It's surprisingly capable for full-text search on a static site.
