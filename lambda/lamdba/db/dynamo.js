const dynamo = require('dynamodb');
dynamo.AWS.config.loadFromPath('credentials.json');

module.exports = dynamo;