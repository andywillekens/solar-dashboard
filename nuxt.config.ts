// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  runtimeConfig: {
    apiUrl: process.env.API_URL,
    toonAccessToken: process.env.TOON_ACCESS_TOKEN,
    apUsername: process.env.APSYSTEMS_USERNAME,
    apPassword: process.env.APSYSTEMS_PASSWORD,
    apUserId: process.env.APSYSTEMS_USERID,
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
