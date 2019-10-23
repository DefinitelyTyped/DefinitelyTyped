import safeCompare = require("safe-compare");

safeCompare('foo', 'foo'); // $ExpectType boolean
safeCompare('hello world', 'hello world'); // $ExpectType boolean
safeCompare('你好，世界', '你好，世界'); // $ExpectType boolean
safeCompare('สวัสดีชาวโลก', 'สวัสดีชาวโลก'); // $ExpectType boolean
// => true

safeCompare('foo', 'bar'); // $ExpectType boolean
safeCompare('你好，世界', '您好'); // $ExpectType boolean
safeCompare('สวัสดีชาวโลก', 'สวัสดี'); // $ExpectType boolean
// => false

safeCompare(undefined, ''); // $ExpectError
safeCompare(void 0, ''); // $ExpectError
safeCompare(null, ''); // $ExpectError
safeCompare(true, ''); // $ExpectError
safeCompare(false, ''); // $ExpectError
safeCompare({}, ''); // $ExpectError
safeCompare([], ''); // $ExpectError
safeCompare(42, ''); // $ExpectError
safeCompare(NaN, ''); // $ExpectError
// => error

safeCompare('', undefined); // $ExpectError
safeCompare('', void 0); // $ExpectError
safeCompare('', null); // $ExpectError
safeCompare('', true); // $ExpectError
safeCompare('', false); // $ExpectError
safeCompare('', {}); // $ExpectError
safeCompare('', []); // $ExpectError
safeCompare('', 42); // $ExpectError
safeCompare('', NaN); // $ExpectError
// => error
