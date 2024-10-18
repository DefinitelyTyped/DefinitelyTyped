import unixTime = require("unix-time");

unixTime(1); // $ExpectType number
unixTime(new Date()); // $ExpectType number
unixTime(new Date().toISOString()); // $ExpectType number
