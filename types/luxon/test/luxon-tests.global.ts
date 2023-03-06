// just couple of lines to be sure basic global script support
// is in place
luxon.VERSION; // $ExpectType string
luxon.DateTime.DATETIME_MED; // $ExpectType DateTimeFormatOptions
luxon.DateTime.local(2017, 5, 15, 8, 30);
luxon.DateTime.now();
new luxon.IANAZone('America/Los_Angeles');
