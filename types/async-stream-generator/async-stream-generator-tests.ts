import streamify = require('async-stream-generator');

async function* generator() {
    yield 'foo';
}

async function notGenerator() {
    // do nothing
}

function* notAsync() {
    yield 'foo';
}

// @ts-expect-error
streamify();
// @ts-expect-error
streamify(notGenerator());
// @ts-expect-error
streamify(notAsync());
streamify(generator());  // $ExpectType Readable
streamify(generator()).pipe(process.stdout);
