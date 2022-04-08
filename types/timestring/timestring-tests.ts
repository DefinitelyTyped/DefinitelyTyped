import timestring = require('timestring');

timestring(); // $ExpectError
timestring(1); // $ExpectError
timestring('1s', 'parsec'); // $ExpectError
timestring('1s', 'ms', 'options'); // $ExpectError
timestring('1s', 'ms', { options: true }); // $ExpectError

timestring('1s'); // $ExpectType number
timestring('1s', 'ms');
timestring('1s', 'weeks');
timestring('1 day', 'hours', { hoursPerDay: 25 });
timestring('1 week', undefined, { daysPerWeek: 8 });
timestring('1 week', undefined, {});
