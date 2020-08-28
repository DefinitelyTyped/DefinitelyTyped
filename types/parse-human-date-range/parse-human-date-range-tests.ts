import parse = require('parse-human-date-range');

parse('last 2 days');
/* [
    Sat Oct 15 2016 14:00:00 GMT+0200 (CEST),
    Sun Oct 16 2016 14:00:00 GMT+0200 (CEST)
] */

parse('next 2 weeks');
/* [
    Tue Oct 18 2016 14:00:00 GMT+0200 (CEST),
    Wed Oct 19 2016 14:00:00 GMT+0200 (CEST),
    Thu Oct 20 2016 14:00:00 GMT+0200 (CEST),
    Fri Oct 21 2016 14:00:00 GMT+0200 (CEST),
    Sat Oct 22 2016 14:00:00 GMT+0200 (CEST),
    Sun Oct 23 2016 14:00:00 GMT+0200 (CEST),
    Mon Oct 24 2016 14:00:00 GMT+0200 (CEST),
    ...
] */

parse('last 2 tuesdays');
/* [
    Tue Oct 04 2016 14:00:00 GMT+0200 (CEST),
    Tue Oct 11 2016 14:00:00 GMT+0200 (CEST)
] */

parse('invalid', new Date('2016-10-17T12:00:00.000Z'));
