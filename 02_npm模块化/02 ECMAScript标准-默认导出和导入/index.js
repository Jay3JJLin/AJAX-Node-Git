/*
基于ECMAScript 标准语法,'默认'导入，工具属性和方法使用
*/

// 默认导入
import obj from './utils.js'
console.log(obj); // obj就等于 export default 
const res = obj.arraySum([1, 2, 3, 4])
console.log(res);

// ECMAScript 标准 - 默认导出和导入
// 需求：封装并导出基地址和求数组元素和的函数
// 默认标准使用：
// 1. 导出：export default { 对外属性名: 值 }
// 2. 导入：import 变量名 from '模块名或路径'

// 注意：Node.js 默认支持 CommonJS 标准语法
// 如需使用 ECMAScript 标准语法，在运行模块所在文件夹新建 package.json 文件，并设置 { "type" : "module" }

// 1. ECMAScript 标准规定如何默认导出和导入模块呢？
// ➢ 导出：export default {}
// ➢ 导入：import 变量名 from '模块名或路径'
// 2. 如何让 Node.js 切换模块标准为 ECMAScript？
// ➢ 运行模块所在文件夹，新建 package.json 并设置
// ➢ { "type" : "module" }