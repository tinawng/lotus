export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Lotus -- Tina Wang',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preload", href: "./fonts/Poppins-Regular.ttf", as: "font", crossorigin: "" },
      { rel: "preload", href: "./fonts/Poppins-ExtraLight.ttf", as: "font", crossorigin: "" },
      { rel: "preload", href: "./fonts/Poppins-ExtraBold.ttf", as: "font", crossorigin: "" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/css/base.postcss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-material-design-ripple.js', mode: 'client' },
    { src: '@/plugins/vue-click-outside.js', mode: 'client' },
    { src: '@/plugins/vuex-persist.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/http'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },

  bundleRenderer: {
    shouldPreload: (file, type) => {
      return ['script', 'style', 'font'].includes(type)
    }
  },

  // Server config
  server: {
    port: 8093,
    host: '0.0.0.0'
  }
}