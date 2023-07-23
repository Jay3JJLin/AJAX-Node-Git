/*
基于CommonJS 标准语法,导入工具属性和方法使用
*/

// 导入
const obj = require('./utils')
console.log(obj);
const res = obj.arraySum([5, 1, 2, 3])
console.log(res);

// 使用：
// 1. 导出：module.exports = {}
// 2. 导入：require('模块名或路径')
// 模块名或路径：
// ✓ 内置模块：直接写名字（例如：fs，path，http）
// ✓ 自定义模块：写模块文件路径（例如：./utils.js）

// 概念：项目是由很多个模块文件组成的
// 好处：提高代码复用性，按需加载，独立作用域
// 使用：需要标准语法导出和导入进行使用

// 1. Node.js 中什么是模块化？
// ➢ 每个文件都是独立的模块
// 2. 模块之间如何联系呢？
// ➢ 使用特定语法，导出和导入使用
// 3. CommonJS 标准规定如何导出和导入模块呢？
// ➢ 导出：module.exports = {}
// ➢ 导入：require('模块名或路径')
// 4. 模块名 / 路径如何选择？
// ➢ 内置模块，直接写名字。例如：fs，path，http等
// ➢ 自定义模块，写模块文件路径。例如：./utils.js  (相对路径)


/*
Node.js 总结
Node.js 模块化：
概念：每个文件当做一个模块，独立作用域，按需加载
使用：采用特定的标准语法导出和导入进行使用
CommonJS 标准 
导出                        导入
语法 module.exports = {}    require('模块名或路径')
ECMAScript 标准
导出                        导入
默认 export default {}      import 变量名 from '模块名或路径'
命名 export 修饰定义语句    import { 同名变量 } from '模块名或路径'

CommonJS 标准：一般应用在 Node.js 项目环境中
ECMAScript 标准：一般应用在前端工程化项目中
*/



