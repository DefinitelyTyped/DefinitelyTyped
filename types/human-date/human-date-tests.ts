import hdate = require('human-date');

hdate.prettyPrint(new Date());
hdate.relativeTime('12-11-1998');
hdate.monthName(8);
hdate.toUTC(new Date());
