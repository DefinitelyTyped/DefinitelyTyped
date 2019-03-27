import jackrabbit from 'jackrabbit';

const RABBIT_URL = 'amqp://localhost';

function onMessage(data: any) {}
function ack() {}

// $ExpectError
jackrabbit();
// $ExpectError
jackrabbit(1);

const rabbit = jackrabbit(RABBIT_URL);

// test default exchange based on '1-hello-world' example
const defaultExchange = rabbit.default();
const hello = defaultExchange.queue({ name: 'hello' });

defaultExchange.publish('Hello World!', { key: 'hello' });

hello.consume(onMessage, { noAck: true });

// test fanout exchange based on '3-pubsub' example
const fanoutExchange = rabbit.fanout();

fanoutExchange.publish('this is a log');

const fanoutQueue = fanoutExchange.queue({ exclusive: true });
fanoutQueue.consume(onMessage, { noAck: true });

// test direct exchange based on '4-routing' example
const directExchange = rabbit.direct('direct_logs');

directExchange.publish({ text: 'this is a harmless log' }, { key: 'info' });
directExchange.publish({ text: 'this one is more important' }, { key: 'warning' });
directExchange.publish({ text: 'pay attention to me!' }, { key: 'error' });

const errorsQueue = directExchange.queue({ exclusive: true, key: 'error' });
const logsQueue = directExchange.queue({ exclusive: true, keys: ['info', 'warning'] });

errorsQueue.consume((onMessage, ack) => {});
logsQueue.consume((onMessage, ack) => {});

// test reply based on '6-rpc' example
const exchange = rabbit.default();
const rpc = exchange.queue({ name: 'rpc_queue', prefetch: 1, durable: false });

exchange.publish(
    { n: 40 },
    {
        key: 'rpc_queue',
        reply: onReply,
    }
);

function onReply(data: any) {}

rpc.consume(onRequest);

function onRequest(data: any, reply: (data: any) => void) {
    reply({ field: 'value' });
}
