const pkg = require('./package')


module.exports = {
  mode: 'universal',

  head: {
    title: 'Blogposts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Блог с интересными постами по психологии' },
      {hid: 'keywords', name: 'keywords', content: 'статьи по психологии, статьи психологии, интересные статьи по психологии, интересные статьи, интересные статьи эзотерика, интересные посты, посты психология'}
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#409EFF' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss'
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'    

    // ['nuxt-seo-module', {
    //   robots: {
    //     UserAgent: '',
    //     CrawlDelay: '',
    //     Disallow: '',
    //     Allow: '',
    //     Sitemap: '',
    //   },
    //   sitemap: [{
    //     path: 'sitemap.xml',
    //     hostname: null,
    //     generate: true,
    //     exclude: [],
    //   }]
    // }]
  ],
  
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  env: {
    appName: 'Blogposts'
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {

    }
  }
}
