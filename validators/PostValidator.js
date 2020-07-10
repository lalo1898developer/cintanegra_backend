const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      body: Joi.string().required(),
      image: Joi.string(),
      date: Joi.date(),
      permissions: Joi.string().valid('PUBLIC', 'PRIVATE'),
    }),
  }),
  readAll: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
  }),
  readOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      id: Joi.string().required(),
    }),
  }),
  updateOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string(),
      body: Joi.string(),
      image: Joi.string(),
      permissions: Joi.string().valid('PUBLIC', 'PRIVATE'),
    }),
  }),
  deleteOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      id: Joi.string().required(),
    }),
  }),
};
