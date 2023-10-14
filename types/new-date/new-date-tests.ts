import newDate = require("new-date");

newDate(new Date()); // $ExpectType Date
newDate("Wed, 09 Aug 1995 00:00:00 GMT"); // $ExpectType Date
newDate(1363288923); // $ExpectType Date
