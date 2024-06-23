import isAsyncFunction = require("is-async-function");

isAsyncFunction(() => {}); // $ExpectType boolean
isAsyncFunction(null); // $ExpectType boolean

// $ExpectType boolean
isAsyncFunction(function*() {
    yield 42;
    return Infinity;
});

isAsyncFunction(async () => {}); // $ExpectType boolean
