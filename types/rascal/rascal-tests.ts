import {
    Broker,
    BrokerAsPromised,
    BrokerConfig,
    AckOrNack,
    withDefaultConfig,
    PublicationSession,
    SubscriptionSession,
    createBrokerAsPromised,
    createBroker,
} from 'rascal';
import { Message } from 'amqplib';

const config: BrokerConfig = {
    vhosts: {
        '/': {
            connection: {
                url: 'amqp://user:password@broker.example.com:5742/',
                socketOptions: {
                    clientProperties: {
                        connection_name: 'demo_service',
                        custom_tag: 'custom_tag_identifier',
                    },
                },
            },
            exchanges: [
                'demo_ex',
                {
                    name: 'short_ex',
                },
            ],
            queues: [
                'demo_q',
                {
                    name: 'short_q',
                },
            ],
            bindings: [
                'demo_ex[a.b.c] -> demo_q',
                {
                    source: 'short_ex',
                    destination: 'short_q',
                },
            ],
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

// $ExpectType void
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

{
    // $ExpectType Promise<BrokerAsPromised>
    const b1 = createBrokerAsPromised(config);
    // $ExpectType Promise<BrokerAsPromised>
    const b2 = createBrokerAsPromised(config, {});
}

{
    // $ExpectType void
    createBroker(config, (err, broker) => {
        err; // $ExpectType Error | null
        broker; // $ExpectType Broker
    });

    // $ExpectType void
    createBroker(config, {}, (err, broker) => {
        err; // $ExpectType Error | null
        broker; // $ExpectType Broker
    });
}

{
    // $ExpectType void
    Broker.create(config, (err, broker) => {
        err; // $ExpectType Error | null
        broker; // $ExpectType Broker
    });

    // $ExpectType void
    Broker.create(config, {}, (err, broker) => {
        err; // $ExpectType Error | null
        broker; // $ExpectType Broker
    });
}

{
    Broker.create(config, (err, broker) => {
        broker.subscribeAll((err, res) => {
            err; // $ExpectType Error | null
            res; // $ExpectType SubscriptionSession[]
        });
        broker.subscribeAll(
            x => {
                x; // $ExpectType SubscriptionConfig
                return true;
            },
            (err, res) => {
                err; // $ExpectType Error | null
                res; // $ExpectType SubscriptionSession[]
            },
        );
    });

    (async () => {
        const b = await BrokerAsPromised.create(config);
        // $ExpectType SubscriberSessionAsPromised[]
        const res = await b.subscribeAll(x => {
            x; // $ExpectType SubscriptionConfig
            return true;
        });
    })();
}

{
    Broker.create(config, (err, broker) => {
        if (err !== null) {
            err; // $ExpectType Error
            return;
        }

        err; // $ExpectType null
        broker; // $ExpectType Broker

        broker.connect('/', (err, conn) => {
            err; // $ExpectType Error | null
            conn; // $ExpectType Connection | null
        });

        broker.connect('/', (...x) => {
            if (x[0] === null) {
                const y = x[1]; // $ExpectType Connection
            } else {
                const y = x[1]; // $ExpectType Connection | null
            }
        });
    });
}

{
    Broker.create(config, (err, broker) => {
        broker.publish('demo_publication', 'Hello World!', (err, publication) => {
            publication
                .on('error', (err, msgId) => {
                    err; // $ExpectType Error
                    msgId; // $ExpectType string
                })
                .on('return', msg => {
                    msg; // $ExpectType Message
                })
                .on('success', msgId => {
                    msgId; // $ExpectType string
                });
        });
    });
}
