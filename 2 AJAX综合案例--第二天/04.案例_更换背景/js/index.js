/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址 (存到本地)
 *  3. 网页运行后，"获取"url网址使用 (从本地读取)
 * */

// label 标签的for属性 和 input 标签的id属性 相同，则表示扩大点击范围 点击label等同于点击input
document.querySelector('.bg-ipt').addEventListener('change', e => {//这里仍然是change事件
    // console.log(e.target.files[0]);
    // 准备表单数据对象
    const fd = new FormData()
    fd.append('img', e.target.files[0])
    // 1. 选择图片上传，设置body背景
    axios({
        method: 'post',
        url: 'http://hmajax.itheima.net/api/uploadimg',
        data: fd
    }).then(res => {
        // 取出地址
        // console.log(res.data.data.url);
        const imgUrl = res.data.data.url
        // 把图片网址设置给body的背景
        document.body.style.backgroundImage = `url(${imgUrl})`

        // 2. 上传成功时，"保存"图片url网址 (存到本地)，避免刷新后图片消失
        localStorage.setItem('bgImg', imgUrl)

        //背景更换没有提供背景图地址获取的接口，而只是把本地图片提交到服务器换取一个地址使用，并没有地址保存，所以要本地存储
    })
})

// 3. 网页运行后，"获取"url网址使用 (从本地读取)
const bgUrl = localStorage.getItem('bgImg')
// console.log(bgUrl);
// 本地背景图的地址bgUrl 如果有值则执行后者，反之则不执行
bgUrl && (document.body.style.backgroundImage = `url(${bgUrl})`)

