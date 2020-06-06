import { Broker, BrokerAsPromised, BrokerConfig, AckOrNack, withDefaultConfig, PublicationSession, SubscriptionSession } from 'rascal';
import { Message } from 'amqplib';

const config: BrokerConfig = {
    vhosts: {
        '/': {
            connection: {
                url: 'amqp://user:password@broker.example.com:5742/',
            },
            exchanges: ['demo_ex'],
            queues: ['demo_q'],
            bindings: ['demo_ex[a.b.c] -> demo_q'],
            publications: {
                demo_pub: {
                    exchange: 'demo_ex',
                    routingKey: 'a.b.c',
                },
            },
            subscriptions: {
                demo_sub: {
                    queue: 'demo_q',
                    prefetch: 3,
                },
            },
        },
    },
};

(async () => {
    try {
        const broker = await BrokerAsPromised.create(withDefaultConfig(config));
        broker.on('error', console.error);

        // Publish a message
        const publication = await broker.publish('demo_publication', 'Hello World!');
        await broker.publish('p1', 'some message');
        await broker.publish('p1', 'some message', 'some.routing.key');
        await broker.publish('p1', 'some message', {
            routingKey: 'some.routing.key',
            options: { messageId: 'foo', expiration: 5000 },
        });
        publication.on('error', console.error);

        // Consume a message
        const subscription = await broker.subscribe('demo_subscription');
        await broker.subscribe('s1', { prefetch: 10, retry: false });
        await subscription.cancel();
        subscription.isCancelled();
        subscription
            .on('message', (message, content, ackOrNack) => {
                ackOrNack();
                ackOrNack(new Error(), { strategy: 'nack' });
                ackOrNack(new Error(), { strategy: 'nack', defer: 1000, requeue: true });
                ackOrNack(new Error(), [{ strategy: 'republish', defer: 1000, attempts: 10 }, { strategy: 'nack' }]);
                ackOrNack(new Error(), { strategy: 'republish', immediateNack: true });
                ackOrNack(new Error(), { strategy: 'forward', publication: 'some_exchange' });
                ackOrNack(new Error(), [
                    {
                        strategy: 'forward',
                        publication: 'some_exchange',
                        options: { routingKey: 'custom.routing.key' },
                    },
                    { strategy: 'nack' },
                ]);
            })
            .on('error', console.error);
    } catch (err) {
        console.error(err);
    }
})();

Broker.create(config, (err, broker) => {
    if (err) throw err;

    broker.on('error', console.error);

    // Publish a message
    broker.publish('demo_publication', 'Hello World!', (err, publication) => {
        if (err) throw err;
        publication.on('error', console.error);
    });

    // Consume a message
    broker.subscribe('demo_subscription', (err, subscription) => {
        if (err) throw err;
        subscription
            .on('message', (message, content, ackOrNack) => {
                console.log(content);
                ackOrNack();
            })
            .on('error', console.error);
    });
});
