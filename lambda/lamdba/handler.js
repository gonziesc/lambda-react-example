'use strict';
const Survey = require('./models/survey');
const User = require('./models/users');

module.exports.service = async event => {
  const surveys = await Survey.query().exec();
  const userIds = surveys.map(({id}) => id);
  const users = await User.find({where: {id: userIds}})
  const response = surveys.map(survey => {
    const user = users.find(user => user.id === survey.userId);
    return {...survey, name: user.name, email: user.email}
  })
  return {
    statusCode: 200,
    body: response
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
