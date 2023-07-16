/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */

const creator = '是蕾姆呢' //等效于ID
// 1.1 获取用户的数据
axios({
    method: 'get',
    // 此接口保存了相应数据供取出/保存，所以不用自己本地存储
    url: 'http://hmajax.itheima.net/api/settings',
    params: {
        creator: '是蕾姆呢'
    }
}).then(res => {
    const userObj = res.data.data
    // console.log(userObj);//对象s
    // 1.2 回显数据到网页标签上
    // 先获取属性，然后利用属性找对应标签
    const keys = Object.keys(userObj)
    // console.log(keys);//['avatar', 'nickname', 'email', 'desc', 'gender'] 是个数组
    keys.forEach(key => {
        // 在遍历过程中，性别和头像需要进行单独处理
        if (key === 'avatar') {
            // 赋予默认头像
            document.querySelector('.prew').src = userObj[key]
        } else if (key === 'gender') {
            // 赋予默认性别
            // 获取性别单选框
            const genderList = document.querySelectorAll('.gender')
            // console.log(genderList);
            // 获取性别数字，0男1女
            const gNum = userObj[key]
            // 规律:通过性别数字，作为下标，找到对应的性别单选框，设置选中状态
            genderList[gNum].checked = true
        } else {
            // 属性和类型相同，赋予默认内容
            document.querySelector(`.${key}`).value = userObj[key]
        }
    })
})

/**
 * 目标2：修改头像
 *  2.1 获取头像文件
 *  2.2 提交服务器并更新头像
 * */

// 文件选择元素->change事件
document.querySelector('.upload').addEventListener('change', e => {
    // 2.1 获取头像文件
    // console.log(e.target.files[0]);
    // 创建表单数据对象
    const fd = new FormData()
    fd.append('avatar', e.target.files[0])
    fd.append('creator', creator)
    // 2.2 提交服务器并更新头像
    axios({
        method: 'put',
        url: 'http://hmajax.itheima.net/api/avatar',
        data: fd
    }).then(res => {
        // console.log(res);
        const imgUrl = res.data.data.avatar //新图片地址
        document.querySelector('.prew').src = imgUrl
        // 这里图片是在服务器保存和取出的，所以不用本地存储
        // 关键：图片地址是否有地方给你保存，有就调用接口获取，没有就自己保存到本地使用
        // 上一个背景更换没有提供背景图地址获取的接口，而只是把本地图片提交到服务器换取一个地址使用，并没有地址保存
    })
})

/**
 * 目标3：提交表单
 *  3.1 收集表单信息
 *  3.2 提交到服务器保存
 */
/**
 * 目标4：结果提示
 *  4.1 创建toast对象
 *  4.2 调用show方法->显示提示框
 */

// 保存修改->点击
document.querySelector('.submit').addEventListener('click', () => {
    // 使用serialize前提，必须要有name属性，而且要在表单范围内
    // 3.1 收集表单信息
    const userForm = document.querySelector('.user-form')
    const userObj = serialize(userForm, { hash: true, empty: true })
    userObj.creator = creator
    // 性别数字字符串，后端要求数字类型
    userObj.gender = +userObj.gender
    // console.log(userObj);
    // 3.2 提交到服务器保存
    axios({
        method: 'put',
        url: 'http://hmajax.itheima.net/api/settings',
        data: userObj //内部自动转json字符串
    }).then(res => {
        // console.log(res);
        // 4.1 创建toast对象 先获取再指定创建
        const toastDom = document.querySelector('.my-toast')
        const toast = new bootstrap.Toast(toastDom)
        // 4.2 调用show方法->显示提示框
        toast.show()
    })
})
