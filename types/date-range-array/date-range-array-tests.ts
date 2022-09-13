import dra = require('date-range-array');
const dates = dra('2015-02-27', '2015-03-02');
// $ExpectType string[]
dates;
