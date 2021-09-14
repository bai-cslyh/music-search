const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use('/api', createProxyMiddleware(
        { 
            target: 'https://u.y.qq.com', 
            changeOrigin: true,
            pathRewrite:{
                "^/api":""
            }
        }
    ))
}