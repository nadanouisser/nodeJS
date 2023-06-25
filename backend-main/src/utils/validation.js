//Validation
const Joi = require("@hapi/joi");

//Register validation functions
const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    username: Joi.string().required(),
  });
  return schema.validate(data);
};

//Login validation functions
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
