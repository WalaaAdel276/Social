const massageSchema = require("../schema/messageSchema");

const  mongoose = require("mongoose");


const Massage = mongoose.model("messages",massageSchema)

module.exports= Massage


