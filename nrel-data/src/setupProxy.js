const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
      '/api/solar/solar_resource/v1.json',
      createProxyMiddleware({
        target: 'https://developer.nrel.gov',
        secure: false,
        changeOrigin: true,
      })
    )
  }