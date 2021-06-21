import Joi from 'joi'

//User validation
const userValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().min(4),
    password: Joi.string().required().min(4),
  })
  return schema.validate(data)
}

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().min(4),
    password: Joi.string().required().min(4),
  })
  return schema.validate(data)
}

export { userValidation, loginValidation }
