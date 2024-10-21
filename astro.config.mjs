import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sass from 'sass';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
    sass({
      
    })
  ]
});