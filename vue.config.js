module.exports = {
  outputDir: 'docs',
  baseUrl: process.env.NODE_ENV === 'production' ? '/pupil/' : '/',
  devServer: {
    port: 8030, // 端口号
    host: '192.168.1.199',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://192.168.0.199:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    },  // 配置多个代理
  },
};
