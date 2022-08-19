const Joi = require("joi")


module.exports = {
    addUserSchema:{
       body: Joi.object().required().keys({
           name :Joi.string().required().messages({
            'string.base': `"Name" should be a type of 'text'`,
            'string.empty': `"Name" cannot be an empty field`,
            'any.required': `"Name" is a required field`
          }),
           email :Joi.string().required().email().messages({
            'string.base': `"Email" should be a type of 'Email'`,
            'string.empty': `"Email" cannot be an empty field`,
            'any.required': `"Email" is a required field`
          }),
           password:Joi.string().required().messages({
            'string.base': `"Password" should be a type of 'text'`,
            'string.empty': `"Password" cannot be an empty field`,
            'any.required': `"Password" is a required field`
          }),
           role :Joi.string().required().messages({
            'string.empty': `"Role" cannot be an empty field`,
            'any.required': `"Role" is a required field`
          }),
           
       })
    },
    signInSchema:{
        body: Joi.object().required().keys({
            email :Joi.string().required().email().messages({
             'string.base': `"Email" should be a type of 'Email'`,
             'string.empty': `"Email" cannot be an empty field`,
             'any.required': `"Email" is a required field`
           }),
            password:Joi.string().required().messages({
             'string.base': `"Password" should be a type of 'text'`,
             'string.empty': `"Password" cannot be an empty field`,
             'any.required': `"Password" is a required field`
           })
            
        })
     }

}














