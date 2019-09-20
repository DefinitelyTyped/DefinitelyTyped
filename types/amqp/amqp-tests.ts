import * as amqp from 'amqp';

async function connect() {
  const promise = new Promise<amqp.AMQPClient>((resolve, reject) => {
    const client = amqp.createConnection({
      clientProperties: { applicationName: 'typing' },
      url: 'amqp://admin:password@localhost:5672'
    });

    client.once('error', reject);
    client.once('ready', resolve);
  });

  return promise;
}

async function start() {
  try {
    const client = await connect();
    console.log('Connected');

    const queue = client.queue('perth-now',
      {
        autoDelete: false,
        durable: true,
      }, q => {
        console.log('Queue opened');
        console.log('Name: %s Channel: %s', q.name, q.channel);

        queue.bind('amq.fanout', '#', () => {
          queue.subscribe(
            { ack: true },
            (msg, _, __, ack) => {
              ack.acknowledge(true);
            });
        });
      });

    const exchange = client.exchange('amq.fanout', { confirm: true });

    exchange.once('open', () => {
      exchange.publish(
        'content',
        { message: new Date().toLocaleTimeString() },
        { deliveryMode: 2 },
        (err, msg) => {
          if (!err) {
            return;
          }
          throw new Error(`Failed to publish: ${msg}`);
        }
      );

      exchange.publish('content', { message: 'content message' }, () => {
        console.log('Published');
      });
    });
  } catch (ex) {
    console.log(ex);
    process.exit(1);
  }
}

async function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

start();
