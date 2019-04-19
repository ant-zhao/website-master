
const Webpack = require('webpack')
module.exports = {
  /*
  **catche
  */
  cache: {
    max: 1000,
    maxAge: 900000
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '~~水木青蓝 || Home Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '水木青蓝' },
      { hid: 'Keywords', name: 'Keywords', content: '水木青蓝' },

      { property: 'og:title', content: '水木青蓝'},
      { property: 'og:type', content: '水木青蓝'},
      { property: 'og:image', content: 'www.baidu.com/img/bd_logo1.png'},
      { property: 'og:description', content: '水木青蓝'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?c76371044204d6a9d256db60dce5a793'}
    ],
    noscript: [
      { innerHTML: '~~~~~~ 网站不翼而飞  ~~~ (꒦_꒦) (꒦_꒦) ~~~' }
    ]
  },
  css:[
    '~/assets/css/common/main.css',
    '~/static/icon/iconfont.css',
    'swiper/dist/css/swiper.css', // swiper
    'element-ui/lib/theme-chalk/index.css'
  ],
  router: {
    base: '/',
    // scrollBehavior: function (to, from, savedPosition) {
    //   if (to.hash) {
    //     return {
    //       selector: to.hash
    //     }
    //   }else{
    //     return { x: 0, y: 0 }
    //   }
    // },
    middleware: ['loginOut']
  },

  plugins: [
     { src: '~/plugins/router', ssr: true },
     { src: '~/plugins/element', ssr: true},
     { src: '~/plugins/animate', ssr: false},
     { src: '~/plugins/scroll-progress', ssr: false},
     { src: '~/plugins/copy-right', ssr: false},
     { src: '~/plugins/ga', ssr: false},
     { src: '~/plugins/mixin', ssr: true},
     { src: '~/plugins/swiper.js', ssr: false },
     { src: '~/plugins/filters', ssr: false},
     { src: '~/plugins/vueUtils', ssr: false}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'orange' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {allChunks:true},
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /**
     * 引入jq
     */
    plugins: [
      new Webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
    vendor: ['babel-polyfill'],
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-runtime']
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    // styleResources: {
    //   scss: './assets/css/common/color.scss',
    //   options:{}
    // },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg|cur|ico)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  modules: [
    // '@nuxtjs/proxy',
    // 'bootstrap-vue/nuxt',
    // ['bootstrap-vue/nuxt', { css: false }]
  ],
  // proxy: [
  //     ['/v1', {
  //       context: ["/v1"],
  //       secure: false,
  //       target: 'http://specials.3tichina.com'
  //      }
  //     ]
  // ]
}

