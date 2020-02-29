import set = require("just-safe-set");

const arr = ['one', 'two'];
const obj = {foo: {bar: arr}};

// Pass single `object`.
set(arr, '0', {}); // $ExpectType any
set(arr, ['0'], ''); // $ExpectType any
set(obj, 'foo.bar', 0); // $ExpectType any
set(obj, 'foo.bar.0', 1); // $ExpectType any

// Incorrect argument
set(); // $ExpectError
set(obj); // $ExpectError
set([]); // $ExpectError
set({}); // $ExpectError
set(obj, 3); // $ExpectError
set(obj, [3]); // $ExpectError
set(false); // $ExpectError
set(null); // $ExpectError
set(undefined); // $ExpectError
set(obj, 'foo.bar'); // $ExpectError
