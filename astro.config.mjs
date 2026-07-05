// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const pagefindDevStub = {
  name: 'pagefind-dev-stub',
  resolveId(id) {
    if (id === '/pagefind/pagefind.js') return '\0pagefind-stub';
  },
  load(id) {
    if (id === '\0pagefind-stub') return 'export async function init() {} export async function search() { return { results: [] }; }';
  }
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), pagefindDevStub],
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js']
      }
    }
  }
});