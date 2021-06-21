import Joi from 'joi'

//Todo validation
const todoValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
  })
  return schema.validate(data)
}

export { todoValidation }
