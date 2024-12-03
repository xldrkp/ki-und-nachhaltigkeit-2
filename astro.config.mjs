import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://axel-duerkop.de",
  base: '/course/ki-und-nachhaltigkeit',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
