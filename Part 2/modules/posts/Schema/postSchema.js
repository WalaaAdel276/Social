
const { Schema } = require("mongoose");

const postSchema = new Schema({
    title:{
        type:String
    },
    PostBody:{
        type:String
    }, 
    CreatedBy:{ 
        type:Schema.Types.ObjectId,ref:"users"
    },
    PostPic:{
        type:String
    }

   
},{
    timestamps:true

})
module.exports =postSchema