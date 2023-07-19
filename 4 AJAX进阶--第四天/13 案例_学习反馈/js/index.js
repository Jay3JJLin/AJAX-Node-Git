/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */

// 1.1 设置省份下拉菜单数据
axios({
    method: 'get',
    url: 'http://hmajax.itheima.net/api/province',
}).then(res => {
    console.log(res);
    const optionStr1 = res.data.list.map(pname => `<option value="${pname}">${pname}</option>`).join('') //value便于后续操作获取，pname是给用户展示用的
    document.querySelector('.province').innerHTML = `<option value="">省份</option>` + optionStr1
})

// 1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
// 监测上一个选项发生改变后，获取数据并清空
document.querySelector('.province').addEventListener('change', async e => {
    // 获取用户选择的省份名字
    console.log(e.target.value);
    const res1 = await axios({ url: 'http://hmajax.itheima.net/api/city', params: { pname: e.target.value } })
    console.log(res1);
    const optionStr2 = res1.data.list.map(cname => `<option>${cname}</option>`).join('')
    // 把默认的城市选项和城市数据插入到select中
    document.querySelector('.city').innerHTML = `<option value="">城市</option>` + optionStr2

    // 清空地区下拉菜单
    document.querySelector('.area').innerHTML = `<option value="">地区</option>`
})

// 1.3 切换城市，设置地区下拉菜单数据
document.querySelector('.city').addEventListener('change', async e => {
    // 设置地区数据
    const res2 = await axios({ url: 'http://hmajax.itheima.net/api/area', params: { pname: document.querySelector('.province').value, cname: e.target.value } })
    const optionStr3 = res2.data.list.map(aname => `<option>${aname}</option>`).join('')
    document.querySelector('.area').innerHTML = `<option value="">地区</option>` + optionStr3
})

/**
 * 目标2：收集数据提交保存
 *  2.1 监听提交的点击事件
 *  2.2 依靠插件收集表单数据
 *  2.3 基于axios提交保存，显示结果
 */
// 2.1 检测提交的点击事件
document.querySelector('.submit').addEventListener('click', async () => {//记得加 async
    // 2.2 依靠插件收集表单数据
    const form = document.querySelector('.info-form')
    const data = serialize(form, { hash: true, empty: true })
    // console.log(data);
    // 2.3 基于axios提交保存，反馈结果
    try {
        const result = await axios({ //await 用来接收请求成功的数据
            url: 'http://hmajax.itheima.net/api/feedback',
            method: 'POST',//提交数据
            data
        })
        console.log(result)
        alert(result.data.message)
    } catch (error) {
        console.dir(error)//错误的信息用dir详细打印
        alert(error.response.data.message)
    }
})