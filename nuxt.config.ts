// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', 'shadcn-nuxt'],
  devServer: {
    port: 3022,
  },
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],
  shadcn: {
    componentDir: './app/components/ui',
    prefix: '',
  },
})
