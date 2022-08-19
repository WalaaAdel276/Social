const upload = require('../../../Common/Services/uploadFile');
const {signInHandler} = require('../Controller/userController');
const {SignUpHandler} = require('../Controller/SignUp');
const validateRequest = require("../../../Common/middleWare/validateRequest");
const { addUserSchema, signInSchema } = require('../Joi/userValidation');

const router = require('express').Router();

// router.get("/users",)
router.post("/users", upload.single('userImage'),validateRequest(addUserSchema),SignUpHandler)
router.post("/auth", validateRequest(signInSchema),signInHandler)

module.exports = router 