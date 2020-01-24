import Pulsar = require('pulsar-client');

(async () => {
    const client: Pulsar.Client = new Pulsar.Client({
        serviceUrl: 'pulsar://localhost:6650',
        ioThreads: 5,
        messageListenerThreads: 5,
    });

    const producer = await client.createProducer({
        topic: 'my-topic',
    });

    await producer.send({
        data: Buffer.from('Hello, Typescript'),
        properties: ['a', 'b', 1, 2],
    });

    await producer.send({
        data: Buffer.from('Hello, Pulsar'),
        partitionKey: 'key1',
        properties: ['c', 'd', 3, 4],
        eventTimestamp: Date.now(),
        replicationClusters: [
            'cluster1',
            'cluster2',
        ],
      });

    await producer.flush();
    await producer.close();
    await client.close();
})();

(async () => {
    const client: Pulsar.Client = new Pulsar.Client({
        serviceUrl: 'pulsar://localhost:6650',
    });

    const consumer: Pulsar.Consumer = await client.subscribe({
        topic: 'my-topic',
        subscription: 'my-subscription',
        subscriptionType: 'Exclusive',
    });

    const msg: Pulsar.Message = await consumer.receive();
    const data: Buffer = msg.getData();
    const dataStr: string = msg.getData().toString();
    const msgId: Pulsar.MessageId = msg.getMessageId();
    const msgStrId: string = msg.getMessageId().toString();

    consumer.acknowledge(msg);
    consumer.acknowledgeId(msg.getMessageId());
    consumer.acknowledgeCumulative(msg);
    consumer.acknowledgeCumulativeId(msg.getMessageId());

    await consumer.close();
    await client.close();
})();

(async () => {
    const client: Pulsar.Client = new Pulsar.Client({
        serviceUrl: 'pulsar://localhost:6650',
    });

    const reader: Pulsar.Reader = await client.createReader({
        topic: 'my-topic',
        startMessageId: Pulsar.MessageId.earliest(),
    });

    const msg: Pulsar.Message = await reader.readNext();

    await reader.close();
    await client.close();
})();
