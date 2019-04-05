import leapYear = require('leap-year');

// $ExpectType boolean
leapYear();
// $ExpectType boolean
leapYear(2016);
// $ExpectType boolean
leapYear(new Date());
