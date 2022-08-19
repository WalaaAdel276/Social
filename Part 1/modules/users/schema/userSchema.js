const { Schema } = require("mongoose");
const { softDeletePlugin } = require('soft-delete-plugin-mongoose');


const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    

}, {
        timestamps: true
    })

userSchema.plugin(softDeletePlugin);





module.exports = userSchema;

