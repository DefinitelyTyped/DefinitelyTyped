import get = require("just-safe-get");

const arr = ['one', 'two'];
const obj = {foo: {bar: arr}};

// Pass single `object`.
get(arr, '0'); // $ExpectType any
get(arr, ['0']); // $ExpectType any
get(obj, 'foo.bar'); // $ExpectType any
get(obj, 'foo.bar.0'); // $ExpectType any

// Incorrect argument
get(); // $ExpectError
get(obj); // $ExpectError
get([]); // $ExpectError
get({}); // $ExpectError
get(obj, 3); // $ExpectError
get(obj, [3]); // $ExpectError
get(false); // $ExpectError
get(null); // $ExpectError
get(undefined); // $ExpectError
