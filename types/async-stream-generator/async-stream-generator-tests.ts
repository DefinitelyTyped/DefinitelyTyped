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

streamify();  // $ExpectError
streamify(notGenerator());  // $ExpectError
streamify(notAsync());  // $ExpectError
streamify(generator());  // $ExpectType Readable
streamify(generator()).pipe(process.stdout);
