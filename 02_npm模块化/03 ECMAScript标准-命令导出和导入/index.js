/*
基于ECMAScript 标准语法,'命令'导入，工具属性和方法使用
*/

// 命令导入
import { baseURL, getArraySum } from "./utils.js"
// baseURL, getArraySum 是变量，值为模块内命名导出的同名变量的值
console.log(baseURL);
console.log(getArraySum);

const res = getArraySum([1, 2, 3, 4])
console.log('计算结果为：' + res);

// ECMAScript 标准 - 命名导出和导入
// 需求：封装并导出基地址和求数组元素和的函数
// 命名标准使用：
// 1. 导出：export 修饰定义语句
// 2. 导入：import { 同名变量 } from '模块名或路径'

// 如何选择：
// 按需加载，使用命名导出和导入
// 全部加载，使用默认导出和导入

// 1. Node.js 支持哪 2 种模块化标准？
// ➢ CommonJS 标准语法（默认）
// ➢ ECMAScript 标准语法
// 2. ECMAScript 标准，命名导出和导入的语法？
// ➢ 导出：export 修饰定义的语句
// ➢ 导入：import { 同名变量 } from '模块名或路径‘
// 3. ECMAScript 标准，默认导出和导入的语法？
// ➢ 导出：export default {}
// ➢ 导入：import 变量名 from '模块名或路径'

// 命名 和 默认 的差别说白了 就是 分开导入/出 和 一起导入/出 
