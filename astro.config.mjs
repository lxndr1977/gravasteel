// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';



// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [tailwindcss()],
   },
   site: 'https://gravasteel.com.br',
   integrations: [icon(), sitemap()],
   adapter: cloudflare()

});