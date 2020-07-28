import timeSafeCompare = require('tsscmp');

timeSafeCompare(); // $ExpectError
timeSafeCompare(''); // $ExpectError
timeSafeCompare(1); // $ExpectError

timeSafeCompare('', ''); // $ExpectType boolean
timeSafeCompare(1, 1); // $ExpectType boolean

timeSafeCompare('', 1); // $ExpectError
timeSafeCompare(1, ''); // $ExpectError

timeSafeCompare({}, {}); // $ExpectError
timeSafeCompare([], []); // $ExpectError

timeSafeCompare({}, ''); // $ExpectError
timeSafeCompare([], ''); // $ExpectError

timeSafeCompare([], 1); // $ExpectError
timeSafeCompare({}, 1); // $ExpectError

timeSafeCompare('', {}); // $ExpectError
timeSafeCompare('', []); // $ExpectError

timeSafeCompare(1, []); // $ExpectError
timeSafeCompare(1, {}); // $ExpectError
