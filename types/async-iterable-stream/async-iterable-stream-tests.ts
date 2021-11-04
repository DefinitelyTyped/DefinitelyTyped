import AsyncIterableStream = require('async-iterable-stream');

// Simple, dummy implementation of the abstract class

class DummyAsyncIterator {
    async next() {
        return { done: true, value: 'dummy' };
    }

    return() {
        return {};
    }
}

class DummyAsyncIterableStream extends AsyncIterableStream<string> {
    createAsyncIterator() {
        return new DummyAsyncIterator();
    }
}

// Actual tests

const asyncIterableStream = new DummyAsyncIterableStream();

// Consume data objects from consumableStream as they are written to the stream.
(async () => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const data of asyncIterableStream) {
        // $ExpectType string
        data;
        console.log(data);
    }
})();

// Consume only the next data object which is written to the stream.
(async () => {
    // $ExpectType string
    await asyncIterableStream.once();
})();

(async () => {
    const asyncIterable = asyncIterableStream.createAsyncIterable(20);
    for await (const data of asyncIterable) {
        // $ExpectType string
        data;
    }
})();

(async () => {
    const result = await asyncIterableStream.next();

    if (!result.done) {
        // $ExpectType string
        result.value;
    }
})();
