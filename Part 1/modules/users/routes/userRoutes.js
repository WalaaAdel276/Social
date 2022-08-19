const { getAllUsers,addUsers,updateUsers,deleteUsers,softDeleteUser,RestoreUser, resALL } = require("../controller/userController")

 const Router = require("express").Router()


Router.get("/users",getAllUsers)
Router.get("/users/:id",getAllUsers)
Router.post("/users",addUsers)
Router.put("/users/:id",updateUsers)
Router.delete("/users/:id",deleteUsers)
Router.delete("/softDeleteUser/:id",softDeleteUser)
Router.get("/restoreUser/:id",RestoreUser)
Router.get("/resUsers",resALL)

 module.exports = Router;