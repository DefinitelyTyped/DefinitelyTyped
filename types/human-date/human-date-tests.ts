import hdate = require('human-date');

// .prertyPrint method
hdate.prettyPrint('8-16-1987');
hdate.prettyPrint(new Date('8-16-1987'));
hdate.prettyPrint(-6400);
hdate.prettyPrint(new Date(1416448704578), { showTime: true });

// .relativeTime method
hdate.relativeTime(4);
hdate.relativeTime(4, {futureSuffix: "in the future"});
hdate.relativeTime("8-16-1987");
hdate.relativeTime(new Date("8-16-1987"));
hdate.relativeTime(new Date("8-16-1987"), { returnObject: true });
hdate.relativeTime(new Date("8-16-1987")).length;
hdate.relativeTime(new Date("8-16-1987"), { returnObject: true }).seconds;
hdate.relativeTime(75, { allUnits: true });

// .monthName method
hdate.monthName(8);
hdate.monthName("8-16-1987");
hdate.monthName(new Date("8-16-1987"));

// .toUTC method
hdate.toUTC(1000000000000);
hdate.toUTC(1000000000000).getFullYear();
hdate.toUTC("8-16-1987");
hdate.toUTC(new Date("8-16-1987"));
hdate.toUTC(new Date("8-16-1987")).toISOString();
