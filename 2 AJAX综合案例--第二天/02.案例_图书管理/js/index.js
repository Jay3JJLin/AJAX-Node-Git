/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

const creator = '是蕾姆呢' //别名
// 封装-获取并渲染图书列表函数
function getBooksList() {
  // 1.1 获取数据
  axios({
    method: 'get',
    url: 'http://hmajax.itheima.net/api/books',
    params: {
      // 外号即ID,获取对应数据
      // creator: creator
      creator,
    },
  }).then((res) => {
    // console.log(res)
    const bookList = res.data.data //到元素页面获取属性路径
    // console.log(bookList)
    // 1.2 渲染数据
    const htmlStr = bookList
      .map((item, index) => {
        // 返回的是数组，后面渲染数据需要转换成字符串
        return `
        <tr>
          <td>${index + 1}</td>
          <td>${item.bookname}</td>
          <td>${item.author}</td>
          <td>${item.publisher}</td>
          <td data-id=${item.id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>
        `
      })
      .join('')
    // console.log(htmlStr)
    document.querySelector('.list').innerHTML = htmlStr
  })
}
// 网页加载运行，获取并渲染列表一次
getBooksList()

/**
 * 目标2：新增图书
 *  2.1 新增弹框->显示和隐藏
 *  2.2 收集表单数据，并提交到服务器保存
 *  2.3 刷新图书列表
 */

//对保存按钮，要用JS控制
// 2.1 创建弹框对象
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom) //实例化模态对象，与获取的元素绑定
// 保存按钮->点击->隐藏弹框
document.querySelector('.add-btn').addEventListener('click', () => {
  // 2.2 收集表单数据，并提交给服务器保存
  const addForm = document.querySelector('.add-form')
  const bookObj = serialize(addForm, { hash: true, empty: true })
  // console.log(bookObj)
  // 提交到服务器
  axios({
    method: 'post',
    url: 'http://hmajax.itheima.net/api/books',
    data: {
      ...bookObj,
      // bookname,
      // author,
      // publisher,
      creator,
    },
  }).then((res) => {
    // console.log(res)
    // 2.3 添加成功后，重新请求渲染图书列表
    getBooksList()
    // 重置表单 reset
    addForm.reset()
    // 隐藏弹框
    addModal.hide()
  })
})

/**
 * 目标3：删除图书
 *  3.1 删除元素绑定点击事件->获取图书id
 *  3.2 调用删除接口
 *  3.3 刷新图书列表
 */

// 3.1 删除元素->点击（事件委托）
document.querySelector('.list').addEventListener('click', e => {
  // 获取触发事件目标元素
  // 判断点击的是删除元素
  // console.log(e.target.tagName)//SPAN
  // 所以不能用 e.target.tagName === 'DEL',只能包含
  if (e.target.classList.contains('del')) {
    // console.log('点击删除')
    //  获取图书id(自己定义属性id)
    const theId = e.target.parentNode.dataset.id
    // console.log(theId)
    // 3.2 调用删除接口
    axios({
      method: 'delete',
      //在路径上传参
      url: `http://hmajax.itheima.net/api/books/${theId}`,

    }).then(res => {
      // 3.3 刷新图书列表
      getBooksList()
    })
  }
})

/**
 * 目标4：编辑图书
 *  4.1 编辑弹框->显示和隐藏
 *  4.2 获取当前编辑图书数据->回显到编辑表单中
 *  4.3 提交保存修改，并刷新列表
 */

// 4.1 编辑弹框->显示和隐藏
const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)
// 编辑元素->点击->弹框显示 (事件委托方式)
document.querySelector('.list').addEventListener('click', e => {
  // 判断点击的是否为编辑元素
  if (e.target.classList.contains('edit')) {
    // 4.2 获取当前编辑图书数据->回显到编辑表单中
    // 通过父级节点tr->td自定义属性data-id
    const theId = e.target.parentNode.dataset.id
    // console.log(theId)
    axios({
      method: 'get',
      url: `http://hmajax.itheima.net/api/books/${theId}`,

    }).then(res => {
      // 数据回显
      // console.log(res)
      const bookObj = res.data.data
      // console.log(bookObj);//对象
      // document.querySelector('.edit-form .bookname').value = bookObj.bookname
      // 数据对象的'属性'和标签的'类名'一致
      // 遍历数据对象，使用属性去获取对应的标签，快速赋值
      // 用key获取属性
      const keys = Object.keys(bookObj)
      //属性 ['id', 'bookname', 'author', 'publisher']
      // console.log(keys);
      keys.forEach(key => {
        //利用属性表达式 bookObj[key] 表示值 key表示属性
        document.querySelector(`.edit-form .${key}`).value = bookObj[key]
      })
    })
    editModal.show()
  }
})
// 修改按钮->点击->收集数据提交->隐藏弹框
document.querySelector('.edit-btn').addEventListener('click', () => {
  // 4.3 提交保存修改，并刷新列表
  const editForm = document.querySelector('.edit-form')
  //利用serialize快速获取表单里的值 并解构
  const { id, bookname, author, publisher } = serialize(editForm, { hash: true, empty: true })

  // 保存正在编辑的图书id，隐藏起来，无需让用户编辑
  // <input type="hidden" class="id" name="id" value="214509">
  axios({
    method: 'put',
    url: `http://hmajax.itheima.net/api/books/${id}`,
    data: {
      bookname,
      author,
      publisher,
      creator
    }
  }).then(res => {
    // console.log(res);
    // 修改成功以后,重新获取并刷新列表
    getBooksList()
    // 成功后再隐藏弹框
    editModal.hide()
  })

  
})