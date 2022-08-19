const mongoose = require("mongoose");
const userSchema = require("../Schema/userSchema");


const User = mongoose.model("users",userSchema)

module.exports = User;