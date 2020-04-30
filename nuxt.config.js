import Mode from 'frontmatter-markdown-loader/mode'
import glob from 'glob'
import path from 'path'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],

  generate: {
    fallback: true,
    subFolders: false,
    routes: () => {
      const paths = {
        '/': '*.md',
        '/posts/': 'posts/*.md'
      }

      return [].concat(
        ...Object.keys(paths).map((urlPath) => {
          const filePathGlob = paths[urlPath]

          return glob
            .sync(filePathGlob, { cwd: 'entries' })
            .map((filePath) => `${urlPath}${path.basename(filePath, '.md')}`)
        })
      )
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        // include: path.resolve(__dirname, 'entries'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META]
        }
      })
    }
  }
}
