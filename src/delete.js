const { Department } = require('./model')

!(async function() {
  // 删除一个用户
  await Department.destroy({
    where: {
      userName: 'xiaolaodi'
    }
  })
})()