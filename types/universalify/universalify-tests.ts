import universalify = require('universalify');

// check if no parameter is valid
const callbackFn = universalify.fromCallback((cb: (err: any, result: number) => void) => {
    cb(null, 3);
    cb(null, 'Hello World!'); // $ExpectError
});

callbackFn((error, result) => {}); // $ExpectType void
callbackFn(); // $ExpectType Promise<number>
callbackFn('Hello World!'); // $ExpectError
callbackFn('Hello World!', 'not a function'); // $ExpectError

const promiseFn = universalify.fromPromise(() => Promise.resolve(3));

promiseFn((error, result) => {}); // $ExpectType void
promiseFn(); // $ExpectType Promise<number>
promiseFn('Hello World!'); // $ExpectError
promiseFn('Hello World!', 'not a function'); // $ExpectError

// check if one parameter is valid
const callbackFnOne = universalify.fromCallback((arg1: string, cb: (err: any, result: string) => void) => {
    cb(null, 'Hello World!');
    cb(null, 3); // $ExpectError
});

callbackFnOne('Hello World!', (error, result) => {}); // $ExpectType void
callbackFnOne('Hello World!'); // $ExpectType Promise<string>
callbackFnOne(); // $ExpectError
callbackFnOne('Hello World!', 'not a function'); // $ExpectError

const promiseFnOne = universalify.fromPromise((arg1: string) => Promise.resolve('Hello World!'));

promiseFnOne('Hello World!', (error, result) => {}); // $ExpectType void
promiseFnOne('Hello World!'); // $ExpectType Promise<string>
promiseFnOne(); // $ExpectError
promiseFnOne('Hello World!', 'not a function'); // $ExpectError

// check if three parameters are valid
const callbackFnThree = universalify.fromCallback(
    (arg1: string, arg2: number, arg3: string, cb: (err: any, result: string) => void) => {
        cb(null, 'Hello World!');
        cb(null, 3); // $ExpectError
    },
);

callbackFnThree('Hello World!', 3, 'Hello World!', (error, result) => {}); // $ExpectType void
callbackFnThree('Hello World!', 3, 'Hello World!'); // $ExpectType Promise<string>
callbackFnThree('Hello World!', 'Not a string', 'Hello World!'); // $ExpectError
callbackFnThree('Hello World!', 'Not a string', 'Hello World!', (error, result) => {}); // $ExpectError
callbackFnThree(); // $ExpectError
callbackFnThree('Not enough values'); // $ExpectError
callbackFnThree('Not enough values', 0); // $ExpectError
callbackFnThree('Not enough values', 0, 'Enough values', 'but not a function'); // $ExpectError

const promiseFnThree = universalify.fromPromise((arg1: string, arg2: number, arg3: string) =>
    Promise.resolve('Hello World!'),
);

promiseFnThree('Hello World!', 3, 'Hello World!', (error, result) => {}); // $ExpectType void
promiseFnThree('Hello World!', 3, 'Hello World!'); // $ExpectType Promise<string>
promiseFnThree('Hello World!', 'Not a string', 'Hello World!'); // $ExpectError
promiseFnThree('Hello World!', 'Not a string', 'Hello World!', (error, result) => {}); // $ExpectError
promiseFnThree(); // $ExpectError
promiseFnThree('Not enough values'); // $ExpectError
promiseFnThree('Not enough values', 0); // $ExpectError
promiseFnThree('Not enough values', 0, 'Enough values', 'but not a function'); // $ExpectError
