// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://www.photos.jimiademola.com",
  integrations: [react(), sitemap()],
  adapter: cloudflare(),
  vite: {
    resolve: {
      tsconfigPaths: false,
    },
  },
});