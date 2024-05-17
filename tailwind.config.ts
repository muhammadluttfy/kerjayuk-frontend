import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        lightColor: '#F6F8FD',
        darkColor: '#34364a',
        secondaryColor: '#999aa4',
        dangerColor: '#E7242B'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
