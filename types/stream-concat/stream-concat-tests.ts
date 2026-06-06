import StreamConcat = require("stream-concat");
import { Readable } from "stream";

const test: boolean = false;
const options = {
    advanceOnClose: true,
    highWaterMark: 10,
    objectMode: true,
};

const readable = <Readable> {};
const fromStreams: Readable = new StreamConcat([
    readable,
    readable,
    readable,
]);
const fromStreamsWithOptions: Readable = new StreamConcat([
    readable,
    readable,
    readable,
], options);

const fromFactory: Readable = new StreamConcat(() => {
    if (test) {
        return readable;
    }
    return null;
});
const fromFactoryWithOptions: Readable = new StreamConcat(() => {
    if (test) {
        return readable;
    }
    return null;
}, options);

const fromAsyncFactory: Readable = new StreamConcat(async () => {
    if (test) {
        return readable;
    }
    return null;
});
const fromAsyncFactoryWithOptions: Readable = new StreamConcat(async () => {
    if (test) {
        return readable;
    }
    return null;
}, options);

new StreamConcat([]).addStream(readable);
new StreamConcat([]).nextStream().then(() => {});
