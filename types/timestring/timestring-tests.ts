import timestring = require('timestring');

// @ts-expect-error
timestring();
// @ts-expect-error
timestring(1);
// @ts-expect-error
timestring('1s', 'parsec');
// @ts-expect-error
timestring('1s', 'ms', 'options');
// @ts-expect-error
timestring('1s', 'ms', { options: true });

// $ExpectType number
timestring('1s');
// $ExpectType number
timestring('1s', 'ms');
// $ExpectType number
timestring('1s', 'weeks');
// $ExpectType number
timestring('1 day', 'hours', { hoursPerDay: 25 });
// $ExpectType number
timestring('1 week', undefined, { daysPerWeek: 8 });
// $ExpectType number
timestring('1 week', undefined, {});
