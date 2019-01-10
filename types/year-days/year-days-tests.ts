import yearDays = require('year-days');

// $ExpectType number
yearDays();
// $ExpectType number
yearDays(2016);
// $ExpectType number
yearDays(new Date());
