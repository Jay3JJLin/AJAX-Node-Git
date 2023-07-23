// 本文件是 utils 工具包唯一的出口
// 作用：把所有工具模块方法集中起来，统一向外暴露

const { getArraySum } = require('./lib/arr.js')
const { checkUser, checkPwd } = require('./lib/str.js')
// [Function: getArraySum] [Function: checkUserName] [Function: checkPassWord]
console.log(getArraySum, checkUser, checkPwd);

// 统一导出所有函数
module.exports = {
    getArraySum,
    checkUser,
    checkPwd
}

