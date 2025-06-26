// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image'],
  devServer: {
    port: 3022,
  },
  future: {
    compatibilityVersion: 4
  }
})
