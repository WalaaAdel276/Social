const { getAllMessages,addMessage } = require("../controller/messageController")

const Router = require("express").Router()

Router.get("/messages",getAllMessages)
Router.get("/messages/:id",getAllMessages)
Router.post("/messages",addMessage)

 module.exports = Router