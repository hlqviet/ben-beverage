import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://benbeverage.pages.dev/",
  integrations: [tailwind(), icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
  },
  output: "hybrid",
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
});
