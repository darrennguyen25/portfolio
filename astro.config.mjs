import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/static";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: "material-theme-palenight",

  tokensMap: {},
};
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "static",
  site: "https://darrennguyen25-portfolio.vercel.app",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
