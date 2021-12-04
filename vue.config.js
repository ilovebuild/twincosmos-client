//const target = 'http://127.0.0.1:3000';
const target = 'http://3.37.61.15:3000';


module.exports = {
  publicPath: '/twincosmos-client/',
  outputDir: 'docs',
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        ws:true,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target,
        changeOrigin: true,
      }
    }
  }
}