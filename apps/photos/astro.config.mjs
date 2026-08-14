// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://www.photos.jimiademola.com",
  integrations: [react()],
  adapter: cloudflare(),
  vite: {
    resolve: {
      tsconfigPaths: false,
    },
  },
});