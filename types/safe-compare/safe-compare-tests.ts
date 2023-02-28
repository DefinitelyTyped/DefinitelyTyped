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

// @ts-expect-error
safeCompare(undefined, '');
// @ts-expect-error
safeCompare(void 0, '');
// @ts-expect-error
safeCompare(null, '');
// @ts-expect-error
safeCompare(true, '');
// @ts-expect-error
safeCompare(false, '');
// @ts-expect-error
safeCompare({}, '');
// @ts-expect-error
safeCompare([], '');
// @ts-expect-error
safeCompare(42, '');
// @ts-expect-error
safeCompare(NaN, '');
// => error

// @ts-expect-error
safeCompare('', undefined);
// @ts-expect-error
safeCompare('', void 0);
// @ts-expect-error
safeCompare('', null);
// @ts-expect-error
safeCompare('', true);
// @ts-expect-error
safeCompare('', false);
// @ts-expect-error
safeCompare('', {});
// @ts-expect-error
safeCompare('', []);
// @ts-expect-error
safeCompare('', 42);
// @ts-expect-error
safeCompare('', NaN);
// => error
