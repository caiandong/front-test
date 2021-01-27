// INSERT ...

const { Department } = require('./model')

!(async function () {
  // 创建数据
  await Department.create({
    userName: 'daxiongdi',
    depart: '研发中心 - 前端',
  })

  await Department.create({
    userName: 'xiaolaodi',
    depart: '研发中心 - 后端',
  })
})()