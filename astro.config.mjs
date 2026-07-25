import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://selixa.fr',
  output: 'static',
  build: { format: 'directory' },
});
