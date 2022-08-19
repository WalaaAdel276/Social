const { Schema } = require("mongoose");

const massageSchema = new Schema({
    message:String,
    sendTo:{type:Schema.Types.ObjectId,ref:"users"},
    sendBy:{type:Schema.Types.ObjectId,ref:"users"}

},{
    timestamps:true
})

module.exports = massageSchema;