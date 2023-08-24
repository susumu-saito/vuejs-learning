module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/test/' : '/',

  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,

  devServer: {
    port: 8085,   /* この場合、http://localhost:8085 で表示されます */
    https: false
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  }
}