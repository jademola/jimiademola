// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Every page is prerendered (static is Astro's default output). That matters:
// the Cloudflare adapter's `compile` image service only resizes images for
// prerendered pages, so server-rendered pages would ship full-size originals.
export default defineConfig({
  site: 'https://www.photos.jimiademola.com',
  integrations: [
    sitemap({
      // The videos page isn't linked from the site yet.
      filter: (page) => !page.includes('/videos'),
    }),
  ],
  adapter: cloudflare({ imageService: 'compile' }),
  vite: {
    resolve: {
      tsconfigPaths: false,
    },
  },
});
