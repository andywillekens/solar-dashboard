import { resolve } from "path";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  srcDir: "src",
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  ssr: false,
  devtools: { enabled: true },

  runtimeConfig: {
    apiUrl: process.env.API_URL,
    toonAccessToken: process.env.TOON_ACCESS_TOKEN,
    apUserId: process.env.APSYSTEMS_USERID,
  },
});
