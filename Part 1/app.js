// Assignment 7:
// Using mongoDB , express:
// Create two collections
// -user collection(name,email,password,age)
// -Messages collection(message,sendTo(ref to userid),sendBy(ref to user id) )
// Create apis to:
// 1- addUser
// 2- get all users
// 3- update user  
// 4-delete user
// 5- get user by id 
// 6- get user by email and password
// 7- soft delete (delete profile but not delete it from the database) **deactivate
// 8-get user’s name starts with (a)
// 9- get user’s ages between 20 and 30
// 10- get user’s ages lessthan 30 
// 11- get all messages
// 12-get user messages(with information of sender and receiver user)




const express = require("express");
const app = express();

const userRoutes =require("./modules/users/routes/userRoutes")
const messageRoutes = require("./modules/messages/routes/messageRoutes");
const dbConnection = require("./configuration/config");
app.use(express.json())
app.use(userRoutes,messageRoutes)
dbConnection();
app.listen(5000,()=>{
    console.log('App Listening on port 5000!');
   });


