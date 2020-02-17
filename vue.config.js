module.exports = {
  'css': {
    'loaderOptions': {
      'sass': {
        'prependData': '@import "@/styles/_variables.scss"'
      },
      'scss': {
        'prependData': '@import "@/styles/_variables.scss";'
      }
    }
  },
  'transpileDependencies': [
    'vuetify'
  ]
};