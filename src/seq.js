const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql',
}

// // 线上环境 使用连接池
// config.pool = {
//   max: 5, // 连接池中最大连接数
//   min: 0, // 连接池中最小连接数
//   idle: 10000, // 一个连接 10s 内未使用就释放
// }

const seq = new Sequelize('test', 'root', 'dreamlv0703', conf)

module.exports = seq