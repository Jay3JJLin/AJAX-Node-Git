/*
基于ECMAscript 标准语法，封装属性和方法并'默认'导出
*/

// 基地址
const baseURL = 'http://hmajax.itheima.net'
// 求数组元素和的函数
const getArraySum = arr => arr.reduce((sum, val) => sum += val, 0)

// 默认导出
export default {
    url: baseURL,
    arraySum: getArraySum
}


