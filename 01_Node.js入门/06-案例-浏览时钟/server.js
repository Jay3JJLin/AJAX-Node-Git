/**
 * 目标：基于 Web 服务，开发提供网页资源的功能
 * 步骤：
 *  1. 基于 http 模块，创建 Web 服务
 *  2. 使用 req.url 获取请求资源路径，并读取 index.html 里字符串内容返回给请求方
 *  3. 其他路径，暂时返回不存在提示
 *  4. 运行 Web 服务，用浏览器发起请求
 */

const fs = require('fs')
const path = require('path')
// 1. 基于 http 模块，创建 Web 服务

const http = require('http') // 加载 http 模块
const server = http.createServer() // 创建 Web 服务对象
server.on('request', (req, res) => {
    // 2. 使用 req.url 获取请求资源路径，并读取 index.html 里字符串内容返回给请求方
    if (req.url === '/index.html') {
        fs.readFile(path.join(__dirname, './dist/index.html'), (err, data) => {
            if (err) {
                console.dir(err);
            } else {
                // 设置响应体内容,返回给前端
                // 设置响应头-内容类型-超文本以及中文编码格式，让浏览器解析成标签网页等 
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data.toString())
            }
        })
    } else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('你要访问的资源路径不存在')
    }
})
server.listen(8080, () => {
    console.log('Web 服务启动成功了');
})
