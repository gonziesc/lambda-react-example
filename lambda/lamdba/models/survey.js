const dynamo = require('../db/dynamo');

const Survey = dynamo.define('Survey', {
    timestamps : true,
    createdAt: true,
    schema : {
      text   : Joi.string(),
      id   : Joi.number(),
      userId   : Joi.number(),
      type : Joi.string(),
    }
  });

module.exports = Survey;