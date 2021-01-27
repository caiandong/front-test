const seq = require('./seq')

require('./model')

// 测试链接
seq.authenticate().then(() => {
  console.log('auth ok')
}).catch(() => {
  console.log('auth error')
})

seq.sync({ force: true }).then(() => {
  console.log('sync ok')
  process.exit()
})