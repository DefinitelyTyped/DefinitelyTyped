import WritableConsumableStream = require('writable-consumable-stream');

const consumableStream = new WritableConsumableStream<string>();

async function consumeAsyncIterable1(asyncIterable: WritableConsumableStream<string>) {
    // Consume iterable data asynchronously.
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const packet of asyncIterable) {
        console.log('Packet:', packet);
    }
}
consumeAsyncIterable1(consumableStream);

setInterval(() => {
    // Write data to the stream asynchronously,
    consumableStream.write(`Timestamp: ${Date.now()}`);
}, 100);

async function consumeAsyncIterable2(asyncIterable: WritableConsumableStream<string>) {
    // Consume iterable data asynchronously.
    // Works in older environments.
    const asyncIterator = asyncIterable.createConsumer();
    while (true) {
        const packet = await asyncIterator.next();
        if (packet.done) break;
        console.log('Packet:', packet.value);
    }
}
consumeAsyncIterable2(consumableStream);

setInterval(() => {
    // Write data to the stream asynchronously,
    consumableStream.write(`Timestamp: ${Date.now()}`);
}, 100);

setInterval(() => {
    // Write data to the stream asynchronously,
    consumableStream.write(`Timestamp: ${Date.now()}`);
}, 100);

(async () => {
    const data = await consumableStream.once();
    console.log(data);
})();

setInterval(() => {
    // Write data to the stream asynchronously,
    consumableStream.write(`Timestamp: ${Date.now()}`);
}, 100);
