import universalify = require("universalify");

const callbackFunction = universalify.fromCallback((value: number, callback: (value: number) => void) => {
    callback(value + 1);
});

const promiseFunction = universalify.fromPromise(async (value: number) => {
    return value + 1;
});

callbackFunction(1, value => value); // $ExpectType void
callbackFunction(1); // $ExpectType Promise<number>

promiseFunction(1, value => value); // $ExpectType void
promiseFunction(1); // $ExpectType Promise<number>
