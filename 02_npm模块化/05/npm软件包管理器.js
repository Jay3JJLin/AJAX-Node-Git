// 使用：
// 1. 初始化清单文件 ：npm init -y（得到 package.json 文件，有则略过此命令）
// 2. 下载软件包到当前项目 ：npm i 软件包名称
// 3. 使用软件包

// 需求：使用 dayjs 软件包，来格式化日期时间
const dayjs = require('dayjs') //引入系统包,但导出的是函数
// console.log(dayjs);
console.log(dayjs()); //返回的是dayjs的对象
const nowDateStr = dayjs().format('YYYY-MM-DD') //dayjs对象调用内置方法 
console.log(nowDateStr);

// 1. npm 软件包管理器作用？
// ➢ 下载软件包以及管理版本
// 2. 初始化项目清单文件 package.json 命令？ 
// ➢ npm init - y       （文件夹不要有中文，最好用英文或数字）
// 3. 下载软件包的命令？
// ➢ npm i 软件包名字
// 4. 下载的包会存放在哪里？
// ➢ 当前项目下的 node_modules 中，并记录在 package.json 中

