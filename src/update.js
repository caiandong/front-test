const { Department } = require('./model')

!(async function() {
  const updateRes = await Department.update({
    depart: '财务结算中心'
  }, {
    where: {
      userName: 'xiaolaodi'
    }
  })

  console.log('updateRes=', updateRes[0] > 0)
})()