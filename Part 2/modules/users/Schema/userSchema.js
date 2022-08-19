// Creat user collection : with fields :
//    1. Name
//    2. Email
//    3. Profile Picture 
//   4.Verified :Boolen


const { Schema } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    role: {
        type: String, enum: ["user", "admin"]
    },
    userImage: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
})

userSchema.pre("save",  async function (next){
   try {
       this.password = await bcrypt.hash(this.password,7)
       next()
        
   } catch (error) {
       throw new Error(error)
       
   }
})



module.exports = userSchema 