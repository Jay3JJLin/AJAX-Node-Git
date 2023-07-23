/*
* 目标：使用nodemon全局软件包，检测文件变化，自动重启程序
* 语法：
* 1.安装 nodemon 全局软件包，命令：npm i nodemon -g（-g 代表安装到全局环境中）
* 2.使用 nodemon 来执行目标 js 文件
* 体验：启动后：修改代码，保存后观察终端效果
*/

// 格式化日期
const dayjs = require('dayjs') //引入系统包,但导出的是函数
const nowDateStr = dayjs().format('YYYY-MM-DD') //dayjs对象调用内置方法 
console.log(nowDateStr)

// 求数组最大值
const data = require('lodash')
console.log(data.max([1, 2, 3, 4, 5]))


// npm - 全局软件包 nodemon
// 1. 本地软件包和全局软件包区别？
// ➢ 本地软件包，当前项目内使用，封装属性和方法，存在于 node_modules
// ➢ 全局软件包，本机所有项目使用，封装命令和工具，存在于系统设置的位置
// 2. nodemon 作用？
// ➢ 替代 node 命令，检测代码更改，自动重启程序
// 3. nodemon 怎么用？
// ➢ 先确保安装 npm i nodemon - g
// ➢ 使用 nodemon 执行目标 js 文件