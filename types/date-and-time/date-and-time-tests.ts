import * as date from "date-and-time";

const now = new Date();
// $ExpectType string
date.format(now, "YYYY/MM/DD HH:mm:ss"); // => '2015/01/02 23:14:05'
// $ExpectType string
date.format(now, "ddd MMM DD YYYY"); // => 'Fri Jan 02 2015'
// $ExpectType string
date.format(now, "hh:mm A [GMT]Z"); // => '11:14 p.m. GMT-0800'
// $ExpectType string
date.format(now, "hh:mm A [GMT]Z", true); // => '07:14 a.m. GMT+0000'

// $ExpectType number | Date
date.parse("2015/01/02 23:14:05", "YYYY/MM/DD HH:mm:ss"); // => date object
// $ExpectType number | Date
date.parse("02-01-2015", "DD-MM-YYYY"); // => date object
// $ExpectType number | Date
date.parse("Jam 1 2017", "MMM D YYYY"); // => NaN

// $ExpectType boolean
date.isValid("2015/01/02 23:14:05", "YYYY/MM/DD HH:mm:ss"); // => true
// $ExpectType boolean
date.isValid("29-02-2015", "DD-MM-YYYY"); // => false

// $ExpectType Date
date.addYears(now, 1); // => Date object

// $ExpectType Date
date.addMonths(now, 1); // => Date object

// $ExpectType Date
date.addDays(now, -1); // => Date object

// $ExpectType Date
date.addHours(now, -1); // => Date object

// $ExpectType Date
date.addMinutes(now, 2); // => Date object

// $ExpectType Date
date.addSeconds(now, -3); // => Date object

// $ExpectType Date
date.addMilliseconds(now, 1); // => Date object

const today = new Date(2015, 0, 2);
const yesterday = new Date(2015, 0, 1);

// $ExpectType Subtract
date.subtract(today, yesterday);
// $ExpectType number
date.subtract(today, yesterday).toDays(); // => 1 = today - yesterday
// $ExpectType number
date.subtract(today, yesterday).toHours(); // => 24
// $ExpectType number
date.subtract(today, yesterday).toMinutes(); // => 1440
// $ExpectType number
date.subtract(today, yesterday).toSeconds(); // => 86400
// $ExpectType number
date.subtract(today, yesterday).toMilliseconds(); // => 86400000

const date1 = new Date(2015, 0, 2);
const date2 = new Date(2012, 0, 2);
// $ExpectType boolean
date.isLeapYear(date1); // => false
// $ExpectType boolean
date.isLeapYear(date2); // => true

const date1_ = new Date(2017, 0, 2, 0); // Jan 2 2017 00:00:00
const date2_ = new Date(2017, 0, 2, 23, 59); // Jan 2 2017 23:59:00
const date3 = new Date(2017, 0, 1, 23, 59); // Jan 1 2017 23:59:00
// $ExpectType boolean
date.isSameDay(date1_, date2_); // => true
// $ExpectType boolean
date.isSameDay(date1_, date3); // => false

// $ExpectType string
date.locale();

// $ExpectType any
date.getLocales();

// $ExpectType void
date.setLocales("en", {
    A: ["AM", "PM"]
});
