import RabbitMqSchema = require('rabbitmq-schema');

const topology: rabbitMqSchemaNc.Exchange = {
  exchange: 'images',
  type: 'topic',
  bindings: []
};

const rabbitSchema = new RabbitMqSchema(topology, '');

const exchanges: rabbitMqSchemaNc.Exchange[] = rabbitSchema.getExchanges();
const bindings: rabbitMqSchemaNc.Binding[] = rabbitSchema.getBindings();
const queues: rabbitMqSchemaNc.Queue[] = rabbitSchema.getQueues();
const directBindings: rabbitMqSchemaNc.DirectBinding[] = rabbitSchema.getDirectBindings();

const jpgQueue: rabbitMqSchemaNc.Queue | unknown = rabbitSchema.getQueueByName('images.jpeg.get');
const exchange: rabbitMqSchemaNc.Exchange | unknown = rabbitSchema.getExchangeByName('images');

rabbitSchema.validate(topology);
rabbitSchema.validateMessage('images', 'images.jpeg.get', {testMsg: 'ok'});
