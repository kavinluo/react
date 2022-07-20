// 代理配置

// proxy
const { createProxyMiddleware: proxy } = require('http-proxy-middleware')
module.exports = function(app) {
  // console.log(app)
  app.use(
    proxy('/api', {
      target: 'http://192.168.1.166:11006',
      changeOrigin: true // 控制服务器收到的请求头 host的值
      // pathRewrite:{ '^/api': ''} // 重写请求路径
    })
  )
}