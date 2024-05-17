// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    'nuxt-swiper',
    '@nuxtjs/device',
    '@nuxt/image'
  ],

  ui: {
    global: true,
    icons: ['heroicons', 'mdi', 'ph']
  },

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700]
    },
    useStylesheet: true
  },

  build: {
    transpile: [
      //
    ]
  }
})
