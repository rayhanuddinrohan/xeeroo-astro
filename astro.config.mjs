
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import github from "@astrojs/github";

export default defineConfig({
  site: 'https://rayhanuddinrohan.github.io/xeeroo-astro/',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  base: '/xeeroo-astro/', // এটা project folder নাম হলে ভালো হয়
});
