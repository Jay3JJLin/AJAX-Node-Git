// 目标：导入 utils 软件包，使用里面封装的工具函数
// 文件夹名 不要有中文，要由 小写英文或数字 组成

// 由于是包自己定义的，所以都写路径 CommonJS --(默认语法)
const obj = require('./utils')
console.log(obj);
// {
//     getArraySum: [Function: getArraySum],
//     checkUser: [Function: checkUserName],
//     checkPwd: [Function: checkPassWord]
// }

const res = obj.getArraySum([10, 20, 30]) //60
console.log(res);

// 包的概念
// 包：将模块，代码，其他资料聚合成一个文件夹
// 包分类：
// ✓ 项目包：主要用于编写项目和业务逻辑
// ✓ 软件包：封装工具和方法进行使用
// 要求：根目录中，必须有 package.json 文件（记录包的清单信息）
// 注意：导入软件包时，引入的默认是 index.js 模块文件 / main 属性指定的模块文件
// 需求：封装数组求和函数的模块，判断用户名和密码长度函数的模块，形成成一个软件包

// 1. 什么是包？
// ➢ 将模块，代码，其他资料聚合成的文件夹 (其中一个文件叫 模块)
// 2. 包分为哪 2 类呢？
// ➢ 项目包：编写项目代码的文件夹
// ➢ 软件包：封装工具和方法进行使用的文件夹（一般使用 npm 管理）
//         ✓ 本地软件包：作用在当前项目，一般封装的属性 / 方法，供项目调用编写业务需求
//         ✓ 全局软件包：作用在所有项目，一般封装的命令 / 工具，支撑项目运行
// 3. package.json 文件的作用？
// ➢ 记录软件包的名字，作者，入口文件等信息
// 4. 导入一个包文件夹的时候，导入的是哪个文件？
// ➢ 默认 index.js 文件，或者 main 属性指定的文件

/*
常用命令：
Node.js 总结
功能                    命令
执行 js 文件            node xxx.js
初始化 package.json     npm init -y
下载本地软件包          npm i 软件包名
下载全局软件包          npm i 软件包名 -g
删除软件包              npm uni 软件包名
*/