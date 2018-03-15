const pkg = require('./package')
const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

/*
** More info: 
** https://github.com/nuxt/nuxt.js/pull/2942
** https://github.com/nuxt/nuxt.js/pull/2942/files/b5e2b585fe9c1e246d51009328d6840ede8a8c11#diff-1460b6663b490132a4084cfe8881908f
*/

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Old+Standard+TT:400,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
 build: {
  extractCSS: true,
  postcss: [
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer')
  ],
  extend (config, { isDev }) {
    if (!isDev) {
      config.plugins.push(
        new PurgecssPlugin({
          // purgecss configuration
          // https://github.com/FullHuman/purgecss
          paths: glob.sync([
            path.join(__dirname, './pages/**/*.vue'),
            path.join(__dirname, './layouts/**/*.vue')
          ]),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ["vue"]
            }
          ],
          whitelist: ['html', 'body', 'nuxt-progress']
        })
      )
    }
  }
},

css: ['~/assets/css/tailwind.css'],

}
