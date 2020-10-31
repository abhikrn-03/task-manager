require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('5f9b3b1257105332ae78492f', {age: 30}).then((user) => {
//     console.log(user)
//     return User.countDocuments( {age: 30} )
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const findIdAndUpdate = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, {age})
//     const count = await User.countDocuments({age})
//     return count
// }

// findIdAndUpdate('5f9b3b1257105332ae78492f', 26).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

// Task.findByIdAndRemove('5f9b4061c97b1b37e61fb08c').then(() => {
//     return Task.countDocuments( {completed: false} )
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const findIdAndRemove = async (id) => {
//     await Task.findOneAndRemove(id)
//     const count = await Task.countDocuments({completed: false})
//     return count
// }

// findIdAndRemove('5f9a4d44cc59002fe2faa68a').then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })