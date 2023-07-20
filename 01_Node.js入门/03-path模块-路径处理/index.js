/**
 * 目标：在 Node.js 环境的代码中，应使用绝对路径
 * 原因：代码的相对路径是以终端所在文件夹为起点，而不是 Vscode 资源管理器,容易造成目标文件找不到的错误
 */

const fs = require('fs')
// 1. 引入 path 模块对象
const path = require('path')
// 调用path.join() 配合 __dirname组成目标文件的绝对路径
console.log(__dirname); // E:\是蕾姆啊\前端Web\AJAX-Node-Git--案例\03.Node.js与Webpack\03


fs.readFile(path.join(__dirname, '../test.txt'), (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());//从Buffer字符集(16进制)转换为字符串
        // data是 buffer 16进制数据流对象
        // .toString() 转换为字符串
    }
})

// 注意终端是从哪个位置打开的，就是注意路径，node 后面要接执行文件的相对路径
// 记住：要得到执行文件的路径的话，用 __dirname 后面拼上，平时找路径的那个字符串即可

// path 模块 - 路径处理
// 建议：在 Node.js 代码中，使用绝对路径
// 补充：__dirname 内置变量（获取当前模块目录 - 绝对路径）
// ✓ windows： D: \备课代码\3 - B站课程\03_Node.js与Webpack\03 - code\03
// ✓ mac： /Users/xxx / Desktop / 备课代码 / 3 - B站课程 / 03_Node.js与Webpack / 03 - code / 03
// 注意：path.join() 会使用特定于平台的分隔符，作为定界符，将所有给定的路径片段连接在一起
// 语法：
// 1. 加载 path 模块
// 2. 使用 path.join 方法，拼接路径