// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://gersteinj.github.io',
  base: '/SCMFWebsite',
  vite: {
    plugins: [tailwindcss()],
  },
});