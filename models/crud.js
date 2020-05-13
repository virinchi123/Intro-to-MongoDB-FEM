const User = require('./user');
const connect = require('../connect');

const getUserById = (id) => {
  //connect("mongodb://localhost:27017/myDatabase").then(async connection=>{
    const student=User.findById(id).exec()
    return student
  /*}
  ).catch(error=>{
    console.log(error)
  })*/
}

const getAllUsers = () => {
  //connect("mongodb://localhost:27017/myDatabase").then(async connection=>{
    const student=User.find({}).exec()
    return student
  /*}
  ).catch(error=>{
    console.log(error)
  })*/
}

const createUser = (userDetails) => {
  //connect("mongodb://localhost:27017/myDatabase/hello").then(async connection=>{
    const student=User.create(userDetails);
    return student
  }
  /*).catch(error=>{
    console.log(error)
  })
}*/

const removeUserById = (id) => {
  //connect("mongodb://localhost:27017/myDatabase").then(async connection=>{
    const student=User.findByIdAndDelete(id).exec()
    return student
  }
  /*).catch(error=>{
    console.log(error)
  })
}*/

const updateUserById = (id, update) => {
  //connect("mongodb://localhost:27017/myDatabase").then(async connection=>{
    const student=User.findByIdAndUpdate(id,update,{new:true}).exec()
    return student
  }
  /*).catch(error=>{
    console.log(error)
  })
}*/

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById
}
