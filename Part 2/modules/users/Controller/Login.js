const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const User = require("../Model/userModel")
const bcrypt = require('bcrypt');



const LoginHandler = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = User.findOne({email})
       if(!user){
        res.status(StatusCodes.BAD_REQUEST).json({ message: "Email Not Found" })
       }else{
         const match = await bcrypt.compare(password,user.password)  
       }
       if(match){
        var token = jwt.sign({ _id: data._id,email: data.email }, process.env.SECRET_KEY, {
            expiresIn: "1h"
        });
        const { password, ...rest } = user._doc;
        res.status(StatusCodes.OK).json({ message: "Login Success", user: rest,token })

       }else{
        res.status(StatusCodes.BAD_REQUEST).json({ message: "Wrong Password" })   
       }
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error", error })
    }

}

module.exports = { LoginHandler};