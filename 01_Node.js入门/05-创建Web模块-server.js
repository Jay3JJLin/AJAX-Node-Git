/**
 * 目标：基于 http 模块创建 Web 服务程序
 *  1.1 加载 http 模块，创建 Web 服务对象
 *  1.2 监听 request 请求事件，设置响应头和响应体
 *  1.3 配置端口号并启动 Web 服务
 *  1.4 浏览器请求（http://localhost:3000）测试   （localhost：固定代表本机的域名）
 */

// 1.1 加载 http 模块，创建 Web 服务对象
const http = require('http')
const server = http.createServer()
// 1.2 监听 request 请求事件，设置响应头和响应体
server.on('request', (req, res) => {
    // 设置响应头-内容类型-普通文本以及中文编码格式
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    // 设置响应体内容，结束本次请求与响应
    res.end('欢迎使用 Node.js 和 http 模块创建的 Web 服务')//有中文字符，需要设置请求头
})
// 1.3 配置端口号并启动 Web 服务，便于区分
server.listen(3000, () => {
    console.log('Web 服务启动成功了')
})

// 中途停止服务：ctrl + c

// URL 中的端口号
// URL：统一资源定位符，简称网址，用于访问服务器里的资源
// 端口号：标记服务器里不同功能的服务程序
// 端口号范围：0 - 65535 之间的任意整数
// 注意：http 协议，默认访问 80 端口

// 1. 端口号的作用？
// ➢ 标记区分服务器里不同的服务程序
// 2. 什么是 Web 服务程序？
// ➢ 提供网上信息浏览的程序代码