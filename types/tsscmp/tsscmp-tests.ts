import timeSafeCompare = require('tsscmp');

// @ts-expect-error
timeSafeCompare();
// @ts-expect-error
timeSafeCompare('');
// @ts-expect-error
timeSafeCompare(1);

timeSafeCompare('', ''); // $ExpectType boolean
timeSafeCompare(1, 1); // $ExpectType boolean

// @ts-expect-error
timeSafeCompare('', 1);
// @ts-expect-error
timeSafeCompare(1, '');

// @ts-expect-error
timeSafeCompare({}, {});
// @ts-expect-error
timeSafeCompare([], []);

// @ts-expect-error
timeSafeCompare({}, '');
// @ts-expect-error
timeSafeCompare([], '');

// @ts-expect-error
timeSafeCompare([], 1);
// @ts-expect-error
timeSafeCompare({}, 1);

// @ts-expect-error
timeSafeCompare('', {});
// @ts-expect-error
timeSafeCompare('', []);

// @ts-expect-error
timeSafeCompare(1, []);
// @ts-expect-error
timeSafeCompare(1, {});
