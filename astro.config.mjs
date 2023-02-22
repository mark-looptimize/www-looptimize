import { defineConfig } from 'astro/config';

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.looptimize.com',
  trailingSlash: 'always',
  integrations: [lit()]
});