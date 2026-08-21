import { CountQueuingStrategy, ReadableStream, ReadableStreamDefaultReader } from "k6/experimental/streams";

//
// ReadableStream constructor
//
new ReadableStream();
new ReadableStream({}, {});
new ReadableStream({}, new CountQueuingStrategy());
new ReadableStream({
    start: _ => {
    },
    pull: _ => {
    },
    cancel: _ => {
    },
    type: "default",
}, {});
new ReadableStream({
    start: _ => {
    },
    pull: _ => {
    },
    cancel: _ => {
    },
    type: "default",
}, {
    highWaterMark: 5,
    size: _ => {
        return 1;
    },
});
new ReadableStream({
    // @ts-expect-error
    type: "byob",
}, {});
new ReadableStream({}, {
    // @ts-expect-error
    size: _ => {
    },
});

const rs = new ReadableStream();

//
// ReadableStream.cancel
//
// @ts-expect-error
rs.cancel();
rs.cancel("reason"); // $ExpectType Promise<void>;
// @ts-expect-error
rs.cancel = () => {};

//
// ReadableStream.getReader
//
rs.getReader(); // $ExpectType ReadableStreamDefaultReader;
// @ts-expect-error
rs.getReader = () => {};

//
// ReadableStreamDefaultReader constructor
//
// @ts-expect-error
new ReadableStreamDefaultReader();
const reader = new ReadableStreamDefaultReader(new ReadableStream());

//
// ReadableStreamDefaultReader.cancel
//
// @ts-expect-error
reader.cancel();
reader.cancel("reason"); // $ExpectType Promise<void>;
// @ts-expect-error
reader.cancel = () => {};

//
// ReadableStreamDefaultReader.read
//
reader.read(); // $ExpectType Promise<{ done: false; value: any; } | { done: true; value: undefined; }>;
// @ts-expect-error
reader.read = () => {};

//
// ReadableStreamDefaultReader.releaseLock
//
reader.releaseLock(); // $ExpectType void;
// @ts-expect-error
reader.releaseLock = () => {};

//
// CountQueuingStrategy constructor
//
const cqs = new CountQueuingStrategy();
new CountQueuingStrategy({});
new CountQueuingStrategy({ highWaterMark: 5 });
new CountQueuingStrategy({
    highWaterMark: 5,
    // @ts-expect-error
    size: _ => {
        return 1;
    },
});

//
// CountQueuingStrategy.highWaterMark
//
cqs.highWaterMark; // $ExpectType number
// @ts-expect-error
cqs.highWaterMark = 5;

//
// CountQueuingStrategy.size
// @ts-expect-error
cqs.size();
cqs.size("chunk"); // $ExpectType number;
// @ts-expect-error
cqs.size = () => {};
