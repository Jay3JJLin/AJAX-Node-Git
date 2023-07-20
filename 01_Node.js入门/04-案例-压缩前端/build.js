/**
 * 目标1：压缩 html 代码
 * 需求：把回车符 \r，换行符 \n 去掉，写入到新 html 文件中
 *  1.1 读取源 html 文件内容
 *  1.2 正则替换字符串
 *  1.3 写入到新的 html 文件中
 */

// 1.1 读取源 html 文件内容
const fs = require('fs') //用fs读取文件
const path = require('path') //读取不同文件夹下的文件，常用绝对路径，需要 path 模块
console.log(__dirname);
fs.readFile(path.join(__dirname, './public/index.html'), (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(data.toString());
        // 1.2 正则替换字符串
        const htmlStr = data.toString()
        const resStr = htmlStr.replace(/[\r\n]/g, '')
        console.log(resStr);
        // 1.3 写入到新的 html 文件中
        fs.writeFile(path.join(__dirname, 'dist/index.html'), resStr, err => {
            if (err) {
                console.log(err);
            } else {0
                console.log('写入成功');
            }
        })
    }
})