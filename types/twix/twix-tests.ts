import moment = require('moment');

var someMoment = moment("20111031", "YYYYMMDD");
var otherMoment = moment("20120620", "YYYYMMDD");
var startTime = moment('20120701');
var endTime = moment('20120801');

someMoment.twix(otherMoment);
someMoment.twix('2012-05-25');
someMoment.twix({ year: 2012, month: 5, day: 25 });
someMoment.twix("05/25/1982", "MM/DD/YYYY", { parseStrict: true });

someMoment.twix(otherMoment, "MM/DD/YYYY", { parseStrict: true });

var range = moment(someMoment).twix(otherMoment);
var range2 = moment.twix(someMoment, otherMoment);
var range3 = someMoment.twix(otherMoment);

moment('1982-05-25').twix('1982-05-26', { allDay: true });

moment('1982-05-25').twix('1982-05-26', true);

moment().twix(moment()).isValid();                    //=> true
moment().twix(moment().add(1, "day")).isValid();      //=> true
moment().twix(moment().subtract(1, "day")).isValid(); //=> false

moment("1982-05-25T05:00").twix("1982-05-26T06:00").isSame("day");  //=> false
moment("1982-05-25T05:00").twix("1982-05-25T06:00").isSame("day");  //=> true
moment("1982-05-25T05:00").twix("1982-05-25T06:00").isSame("year"); //=> true

moment("1982-05-25").twix("1982-05-26").isPast(); //=> true

moment("2054-05-25").twix("2054-05-26").isFuture(); //=> true

moment("2054-05-25").twix(moment().add(1, "hour")).isCurrent(); //=> true

moment("1982-05-25").twix("1982-05-28").contains("1982-05-26"); //=> true

moment("1982-05-25T5:30").twix("1982-05-25T6:30").length("hours")  //=> 1
moment("1982-05-25T5:00").twix("1982-05-30T6:00").length("days")   //=> 6

moment("1982-05-25T5:00").twix("1982-05-25T6:00").count("days")  //=> 1
moment("1982-05-25T5:00").twix("1982-05-26T6:00").count("days")  //=> 2

moment("1982-05-25T5:00").twix("1982-05-25T6:00").countInner("days")  //=> 0
moment("1982-05-24T5:00").twix("1982-05-26T6:00").countInner("days")  //=> 1

var iter = moment("1982-05-25T5:00").twix("1982-05-26T6:00").iterate("days");
iter.hasNext(); //=> true
iter.next(); //=> moment("1982-05-25")
iter.next(); //=> moment("1982-05-26")
iter.hasNext(); //=> false
iter.next(); //=> null

var iter = moment("16", "hh").twix("1982-05-26T6:00").iterate(2, 'hours');
iter.next().format('LT'); //=> '4:00 PM'
iter.next().format('LT'); //=> '6:00 PM'

var duration = moment.duration({ hours: 2, minutes: 30, seconds: 20 });
var iter = moment("16", "hh").twix(someMoment).iterate(duration);
iter.next().format('LT'); //=> '4:00 PM'
iter.next().format('LT'); //=> '6:30 PM'
iter.next().format('LT'); //=> '9:00 PM'

var iter2 = moment("1982-05-24T5:00").twix("1982-05-27T6:00").iterateInner("days");
iter.hasNext(); //=> true
iter.next(); //=> moment("1982-05-25")
iter.next(); //=> moment("1982-05-26")
iter.hasNext(); //=> false
iter.next(); //=> null

var range1 = moment("1982-05-25").twix("1982-05-30");
var range2 = moment("1982-05-27").twix("1982-06-13");

range1.overlaps(range2); //=> true

var range1 = moment("1982-05-25").twix("1982-08-30");
var range2 = moment("1982-05-27").twix("1982-06-13");

range1.engulfs(range2); //=> true
range2.engulfs(range1); //=> false

var range1 = moment("1982-05-25").twix("1982-08-30");
var range2 = moment("1982-05-25").twix("1982-08-30");

range1.equals(range2); //=> true
range2.equals(range1); //=> true

var range1 = moment("1982-05-25").twix("1982-05-30");
var range2 = moment("1982-05-27").twix("1982-06-13");

range1.union(range2); //=> 5/25/82 - 6/13/1982

var range1 = moment("1982-05-25").twix("1982-05-30");
var range2 = moment("1982-05-27").twix("1982-06-13");

range1.intersection(range2); //=> 5/27/82 - 5/30/1982

var range1 = moment("1982-05-24").twix("1982-05-28", true);
var range2 = moment("1982-05-22").twix("1982-05-26", true);
var xorred = range1.xor(range2);

xorred[0].format() //=> 'May 22 - 23, 1982'
xorred[1].format() //=> 'May 27 - 28, 1982'

var range1 = moment("1982-05-23").twix("1982-05-28", true);
var range2 = moment("1982-05-25").twix("1982-05-26", true);
var diff = range1.difference(range2);

diff[0].format(); //=> 'May 23 - 24, 1982'
diff[1].format(); //=> 'May 27 - 28, 1982'

var range = moment("1982-05-25T05:01").twix("1982-05-25T07:30");

var splits = range.split(1, "hour");
splits[0].format({ showDate: false }); //=> '5:01 - 6:01 AM'
splits[1].format({ showDate: false }); //=> '6:01 - 7:01 AM'
splits[2].format({ showDate: false }); //=> '7:01 - 7:30 AM'

//other signatures
range.split(moment.duration({ "h": 1 })).length; //=> 3
range.split(moment("1982-05-25T06:00")).length; //=> 2
range.split(moment("1982-05-25T06:00"), moment("1982-05-25T07:00")).length; //=> 3

var d = moment.duration(2, "days");
var range4 = d.afterMoment("1982-05-25"); //=> 5/25/1982 - 5/27/1982

var d = moment.duration(2, "days");
d.beforeMoment("1982-05-25"); //=> 5/23/1982 - 5/25/1982

var range = moment("1982-05-25").twix("1982-05-28");
range.asDuration("days"); //=> duration object with {days: 3}

var range = moment("1982-05-25T8:00").twix("1982-05-25T10:00");
range.humanizeLength(); //=> "2 hours"

range = moment("1982-05-25").twix("2013-01-01");
range.humanizeLength(); //=> 31 years

var range = moment("1982-05-25T9:00").twix("1982-05-25T12:00");

range.simpleFormat(); //=> '1982-05-25T09:00:00-04:00 - 1982-05-25T12:00:00-04:00'

range.simpleFormat("ddd, hA"); //=> 'Tue, 9AM - Tue, 12PM'

var range = moment("1982-05-25").twix("1982-05-26", { allDay: true });

range.simpleFormat(); //=> '1982-05-25T00:00:00-04:00 - 1982-05-26T00:00:00-04:00 (all day)'
range.simpleFormat("YYYY - MM - DD"); //=> '1982-05-25 - 1982-05-26 (all day)'

range.simpleFormat(null, { allDay: "-- all day! --" }); //=> '1982-05-25T00:00:00-04:00 - 1982-05-26T00:00:00-04:00 -- all day! --'

range.simpleFormat(null, { allDay: null }); //=> '1982-05-25T00:00:00-04:00 - 1982-05-26T00:00:00-04:00'

range.simpleFormat("HH:mm", { template: function (left, right) { return left + " | " + right; } }); //=> '16:21 | 17:21'

moment.twixClass.formatTemplate = function (left, right) { return left + " | " + right; };
range.simpleFormat("HH:mm"); //=> '16:29 | 17:29'

moment("1982-01-25T09:00").twix("1982-01-25T11:00").format();  //=> 'Jan 25, 1982, 9 - 11 AM'
moment("1982-01-25T9:00").twix("1982-01-26T13:00").format(); //=> 'Jan 25, 9 AM - Jan 26, 1 PM, 1982'

moment("2012-01-25").twix("2012-01-25", { allDay: true }).format();   //=> Jan 25
moment("1982-01-25").twix("1982-01-25", { allDay: true }).format();   //=> Jan 25, 1982
moment("2012-01-25").twix("2012-01-26", { allDay: true }).format();   //=> Jan 25 - 26
moment("1982-01-25").twix("1982-02-25", { allDay: true }).format();   //=> Jan 25 - Feb 25, 1982
moment("1982-01-25").twix(new Date(), { allDay: true }).format();    //=> Jan 25, 1982 - Jan 9, 2012

moment("1982-01-25T9:30").twix("1/25/1982 1:30 PM").format();  //=> Jan 25, 1982, 9:30 AM - 1:30 PM
moment("1982-01-25T9:30").twix(new Date()).format();           //=> Jan 25, 1982, 9:30 AM - Jan 9, 2012, 3:05 AM
moment("1982-01-25").twix("1982-01-27").format();              //=> Jan 25, 12 AM - Jan 27, 12 AM, 1982

var twix = moment("2012-05-25T9:00").twix("2012-05-25T10:00");

twix.format();                                                    //=> May 25, 9 - 10 AM
twix.format({ implicitMinutes: false, groupMeridiems: false });     //=> May 25, 9:00 AM - 10:00 AM

var twix = moment().twix(moment().add('days', 1));
twix.format({ implicitYear: false }); //=> Mar 28, 1:13 AM - Mar 29, 1:13 AM, 2013

moment("2012-05-25T16:00").twix("2012-05-25T17:00").format({ twentyFourHour: true }); //=> May 25, 16:00 - 17:00

moment("2012-01-25T8:00").twix("2012-01-25T17:00").format({
    monthFormat: "MMMM",
    dayFormat: "Do"
});

moment("2012-05-25T8:00").twix("2012-05-25T17:00").format({ spaceBeforeMeridiem: false }); //=> May 25, 8AM - 5PM

moment("2012-05-25T8:00").twix("2012-05-25T17:00").format({ showDate: false }); //=> 8 AM - 5 PM

moment("2012-01-25").twix("2012-01-25", { allDay: true }).format({ showDate: false }); //=> All day

moment.lang("fr");
moment().twix(moment().add(3, "month")).simpleFormat("MMMM"); //=> 'juillet - octobre'

moment("1982-05-25").twix(moment("1982-05-27")).format(); //=> '25 mai, 0:00 - 27 mai, 0:00, 1982'

moment("1982-05-25").twix(moment("1982-05-27")).format({
    groupMeridiems: true,
    spaceBeforeMeridiem: true,
    showDate: true,
    showDayOfWeek: false,
    twentyFourHour: false,
    implicitMinutes: true,
    implicitYear: true,
    yearFormat: "YYYY",
    monthFormat: "MMM",
    weekdayFormat: "ddd",
    dayFormat: "D",
    meridiemFormat: "A",
    hourFormat: "h",
    minuteFormat: "mm",
    allDay: "all day",
    explicitAllDay: false,
    lastNightEndsAt: 0
}); //=> '25 mai, 0:00 - 27 mai, 0:00, 1982'

var t = moment("1982-01-25T09:30").twix("1982-01-25T13:30");

t.format();  //=> Jan 25, 1982, 9:30 AM - 1:30 PM

t.isSame("day"); //=> true
t.humanizeLength(); //=> "4 hours"
t.count("days"); //=> 1


var t = moment("2012-05-25T8:00").twix("2012-05-27T17:00");

t.format({ hideTime: true }); //=> May 25 - 27, 2012


var t = moment("2012-05-25T8:00").twix("2012-05-25T17:00");

t.format({ hideDate: true }); //=> 8 AM - 5 PM


var t = moment("2012-01-25").twix("2012-01-25", { allDay: true });

t.format({ hideDate: true }); //=> All day


var t = moment("2012-05-25").twix("2012-05-27");

t.format({ hideYear: true }); //=> May 25 - May 27
