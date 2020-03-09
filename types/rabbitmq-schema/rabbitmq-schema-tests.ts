import RabbitMqSchema = require('rabbitmq-schema');

const topology = {};

const rabbitSchema = new RabbitMqSchema({}, '');

rabbitSchema.getExchanges();
rabbitSchema.getBindings();
rabbitSchema.getQueues();
rabbitSchema.getDirectBindings();

rabbitSchema.getQueueByName('images.jpeg.get');
rabbitSchema.getExchangeByName('images');

rabbitSchema.validate(topology);
rabbitSchema.validateMessage('images', 'images.jpeg.get', {testMsg: 'ok'});
