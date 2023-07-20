/**
 * 目标：基于 fs 模块读写文件内容
 *  1. 加载 fs 模块对象
 *  2. 写入文件内容
 *  3. 读取文件内容
 */

// 1. 加载 fs 模块对象
const fs = require('fs')
// 2. 写入文件内容
fs.writeFile('./test.txt', '全体目光向我看齐~~~', err => {
    if (err) {
        console.log(err); //打印错误信息
    } else {
        console.log('写入成功');
    }
})
// 3. 读取文件内容
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());//从Buffer字符集(16进制)转换为字符串
        // data是 buffer 16进制数据流对象
        // .toString() 转换为字符串
    }
})


// fs 模块 - 读写文件
// 模块：类似插件，封装了方法 / 属性
// fs 模块：封装了与本机文件系统进行交互的，方法 / 属性
// 语法：
// 1. 加载 fs 模块对象
// const fs = require('fs') //fs是模块标识符：模块的名字
// 2. 写入文件内容
// fs.writeFile('文件路径', '写入内容', err => {
    // 写入后的回调函数
// })
// 3. 读取文件内容
// fs.readFile('文件路径', (err, data) => {
    // 读取后的回调函数
    // data是文件内容的Buffer数据流
// })