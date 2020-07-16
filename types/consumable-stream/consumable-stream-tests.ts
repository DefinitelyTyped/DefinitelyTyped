import ConsumableStream = require('consumable-stream');

// Simple, dummy implementation of the abstract class

class DummyConsumer {
    async next() {
        return { done: true, value: 'dummy' };
    }

    return() {
        return {};
    }
}

class DummyConsumableStream extends ConsumableStream<string> {
    createConsumer() {
        return new DummyConsumer();
    }
}

// Actual tests

const consumableStream = new DummyConsumableStream();

// Consume data objects from consumableStream as they are written to the stream.
(async () => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const data of consumableStream) {
        // $ExpectType string
        data;
        console.log(data);
    }
})();

// Consume only the next data object which is written to the stream.
(async () => {
    // $ExpectType string
    await consumableStream.once();
})();

(async () => {
    const consumable = consumableStream.createConsumable(20);
    for await (const data of consumable) {
        // $ExpectType string
        data;
    }
})();

(async () => {
    const result = await consumableStream.next();

    if (!result.done) {
        // $ExpectType string
        result.value;
    }
})();
