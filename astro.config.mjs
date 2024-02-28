import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
  },
  output: "server",
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
});
