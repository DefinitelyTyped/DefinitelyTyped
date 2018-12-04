import RabbitMqSchema = require('rabbitmq-schema');

const topology: rabbitMqSchemaNc.Topology = {
  exchange: 'images',
  type: 'topic',
  vhost: '/',
  bindings: [
    {
      routingPattern: 'images.jpeg.get',
      destination: {
        queue: 'images.image.get',
        messageSchema: {
          type: 'object',
          properties: {
            testMsg: {
              type: "string"
            }
          }
        },
        args: { 'message-ttl': 10000 }
      }
    }
  ]
}

const rabbitSchema = new RabbitMqSchema(topology, '');

const exchanges: rabbitMqSchemaNc.Exchange[] = rabbitSchema.getExchanges();
const bindings: rabbitMqSchemaNc.Binding[] = rabbitSchema.getBindings();
const queues: rabbitMqSchemaNc.Queue[] = rabbitSchema.getQueues();
const directBindings: rabbitMqSchemaNc.DirectBinding[] = rabbitSchema.getDirectBindings();

const jpgQueue: rabbitMqSchemaNc.Queue = rabbitSchema.getQueueByName('images.jpeg.get');
const exchange: rabbitMqSchemaNc.Exchange = rabbitSchema.getExchangeByName('images');

rabbitSchema.validate(topology);
rabbitSchema.validateMessage('images', 'images.jpeg.get', {testMsg: 'ok'});