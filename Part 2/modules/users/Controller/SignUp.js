const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../../Common/Services/sendEmail");
const User = require("../Model/userModel")
const bcrypt = require('bcrypt');

const SignUpHandler = async (req, res) => {
    const { path } = req.file;
    const { name, email, role } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            res.status(StatusCodes.BAD_REQUEST).json({ message: "email is already exist" })
        } else {
            const newUser = new User({ name, email, role, userImage: `http://localhost:5000/${path}` })
            const data = await newUser.save();
            var token = jwt.sign({ _id: data._id,email: data.email }, process.env.SECRET_KEY, {
                expiresIn: "1h"
            });
            const info = await sendEmail(process.env.SENDER, process.env.SENDER_PASSWORD, [email], 'EMAIL Verification',
                `<h1>HELLO WORLD FROM NODE JS</h1>
            <a href="http://localhost:5000/verify/${token}">Verify</a>
            `)
            if (info.messageId) {
                res.status(StatusCodes.CREATED).json({ message: "Success", data })
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error Invalid Email" })
            }


        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error", error })
    }


}

module.exports = {SignUpHandler}