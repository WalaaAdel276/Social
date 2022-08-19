
const { StatusCodes } = require("http-status-codes");
module.exports = (schema) => {
  return (req, res, next) => {
    const validateRequest = schema.body.validate(req.body)
    const validationArr = [];
    if (validateRequest.error) {
      validationArr.push(validateRequest.error.details[0].message)
    }
    if (validationArr.length) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Error Validation",
        data: validationArr.join()
      })
    } else {
      next();
    }
  }

}
