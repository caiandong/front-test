const Sequelize = require('sequelize')
const seq = require('./seq')

// 创建 User 模型, 数据表的名字是 users
const Department = seq.define('department', {
  // id, // 会自动创建，并设为主键、自增
  userName: {
    type: Sequelize.STRING, // VARCHAR(255)
    allowNull: false,
  },
  depart: {
    type: Sequelize.STRING, // VARCHAR(255)
    allowNull: false,
    comment: '部门'
  },
  // 自动创建： createdAt 和 updatedAt
})

module.exports = {
  Department
}