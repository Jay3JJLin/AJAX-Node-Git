/*
* 目标：安装所有依赖软件包
* 场景：一般拿到别人的项目后，只有 package.json 缺少 node_modules 时需要做
* 语法：在当前项目终端下，输入命令：npm i
* 效果：会根据 package.json 记录的所有包和版本开始下载
*/

// 格式化日期
const dayjs = require('dayjs') //引入系统包,但导出的是函数
const nowDateStr = dayjs().format('YYYY-MM-DD') //dayjs对象调用内置方法 
console.log(nowDateStr)

// 求数组最大值
const data = require('lodash')
console.log(data.max([1, 20, 3, 4]))

// 1. 当项目中只有 package.json 没有 node_modules 怎么办？
// ➢ 当前项目下，执行 npm i 安装所有依赖软件包
// 2. 为什么 node_modules 不进行传递？
// ➢ 因为用 npm 下载比磁盘传递要快