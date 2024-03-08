import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://benbeverage.pages.dev/",
  integrations: [tailwind(), icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
  },
});
