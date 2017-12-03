var path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',  
    proxyTable: {
      '/napi': {
        target: 'http://localhost:8080', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        pathRewrite: {
            '^/napi' : ''
        },
        router: {
            'localhost:8080' : 'http://localhost:3000'
        }
      }
    },
    cssSourceMap: false
  }
}
