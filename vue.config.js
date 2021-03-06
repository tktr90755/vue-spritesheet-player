module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-spritesheet-player/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}