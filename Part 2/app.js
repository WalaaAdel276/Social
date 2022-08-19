// Assignment 8:
// Creat user collection : with fields :
//    1. Name
//    2. Email
//    3. Profile Picture 
//   4.Verified :Boolen
// Creat post collection: 
//      1. Title
//      2. Post body
//      3. CreatedBy
//      4. Post pic( one pic , array of pics, no  0pic)
// For each user create token contain email of this user and the id 
// Creat Apis: 
// For User:
//  1- sign Up (send verification email and confirm this email before sign in)
// (Email can’t verified more than once)
// 2- sign in
// 3- update user(by post Owner only)
// 4- delete user(by admin and Post owner)
// 5- get user posts (Posts owner and admin)
// 6- get all users(admin only)(apply paging -get 10 users by 10 users )
// 7- get verified account 
// For post:
// 1- add post
// 2- edit post(add another pic,postBody)(by post owner )
// 3- delete post(by post owner and admin)
// 4- get all posts(admin)(apply paging -get 5 posts by 5 posts) 
//   Doing validation on each Api using Joi or express validator 

const express = require('express')
const dbConnection = require('./configurations/config')
require('dotenv').config()
const app = express()
app.use(express.json());
app.use("/uploads",express.static("uploads"))
dbConnection();

const userRoutes = require("./modules/users/Routes/userRoutes")
const postRoutes = require("./modules/posts/Routes/postRoutes")

app.use(userRoutes,postRoutes) 
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))