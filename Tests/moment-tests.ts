/// <reference path="../Definitions/moment-1.7.d.ts" />

moment().add('hours', 1).fromNow();

var day = new Date(2011, 9, 16);
var dayWrapper = moment(day);
var otherDay = moment(new Date(2020, 3, 7));

var day1 = moment(1318781876406);
var day2 = moment.unix(1318781876);
var day3 = moment("Dec 25, 1995");
var day4 = moment("12-25-1995", "MM-DD-YYYY");
var day5 = moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);
var day6 = moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"]);
var now = moment();
var day7 = moment([2010, 1, 14, 15, 25, 50, 125]);
var day8 = moment([2010]);
var day9 = moment([2010, 6]);
var day10 = moment([2010, 6, 10]); 
var array = [2010, 1, 14, 15, 25, 50, 125];
var day11 = moment(Date.UTC.apply({}, array));
var day12 = moment.unix(1318781876);

var a = moment([2012]);
var b = moment(a);
a.year(2000);
b.year(); // 2012

moment.utc();
moment.utc(12345);
moment.utc([12, 34, 56]);
moment.utc("1-2-3");
moment.utc("1-2-3", "3-2-1");

var a2 = moment.utc([2011, 0, 1, 8]);
a.hours();
a.local();
a.hours();

moment("2011-10-10", "YYYY-MM-DD").isValid(); 
moment("2011-10-50", "YYYY-MM-DD").isValid(); 
moment("2011-10-10T10:20:90").isValid();
moment([2011, 0 1]).isValid();
moment([2011, 0 50]).isValid();
moment("not a date").isValid();

moment().add('days', 7).subtract('months', 1).year(2009).hours(0).minutes(0).seconds(0);

moment().add('days', 7);
moment().add('days', 7).add('months', 1);
moment().add({days:7,months:1});
moment().add('milliseconds', 1000000); 
moment().add('days', 360);
moment([2010, 0, 31]);  
moment([2010, 0, 31]).add('months', 1);
var m = moment(new Date(2011, 2, 12, 5, 0, 0));
m.hours(); 
m.add('days', 1).hours();
var m = moment(new Date(2011, 2, 12, 5, 0, 0)); 
m.hours();
m.add('hours', 24).hours(); 
var duration = moment.duration({'days', 1});
moment([2012, 0, 31]).add(duration);

moment().subtract('days', 7);

moment().milliseconds(30) === new Date().setMilliseconds(30);
moment().milliseconds()   === new Date().getMilliseconds();
moment.utc().milliseconds(30) === new Date().setUTCMilliseconds(30);
moment.utc().milliseconds()   === new Date().getUTCMilliseconds();

moment().seconds(30);
moment().minutes(30);

moment().hours(12); 
moment().date(5);
moment().day(5);
moment().month(5);
moment().year(1984);
moment().startOf('year'); 
moment().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
moment().startOf('hour');
moment().minutes(0).seconds(0).milliseconds(0);

moment().sod();
moment().hours(0).minutes(0).seconds(0).milliseconds(0);
moment().eod();

var a = moment.utc([2011, 0, 1, 8]);
a.hours();
a.local();
a.hours();

var a = moment([2011, 0, 1, 8]);
a.hours();
a.utc();
a.hours();

var a = moment([2010, 1, 14, 15, 25, 50, 125]);
a.format("dddd, MMMM Do YYYY, h:mm:ss a"); 
a.format("ddd, hA");

moment().format('\\L');
moment().format('[today] DDDD'); 

var a = moment([2007, 0, 29]);
var b = moment([2007, 0, 28]);
a.from(b) ;

var a = moment([2007, 0, 29]);
var b = moment([2007, 0, 28]);
a.from(b);                     
a.from([2007, 0, 28]);         
a.from(new Date(2007, 0, 28)); 
a.from("1-28-2007");

var a = moment();\n
var b = moment("10-10-1900", "MM-DD-YYYY");
a.from(b);

var start = moment([2007, 0, 5]);\n
var end = moment([2007, 0, 10]);
start.from(end);   
start.from(end, true);

moment([2007, 0, 29]).fromNow(); 
moment([2007, 0, 29]).fromNow();     
moment([2007, 0, 29]).fromNow(true); 

moment.humanizeDuration(1000 * 60);
moment.humanizeDuration(1, "seconds");
moment.humanizeDuration(60000, true);       
moment.humanizeDuration(1, "minutes", true);
moment.humanizeDuration(-60000, true);     
moment.humanizeDuration(-1, "minutes", true);

var a = moment([2007, 0, 29]);
var b = moment([2007, 0, 28]);
a.diff(b) ;
a.diff(b, 'days');
a.diff(b, 'years')      
a.diff(b, 'years', true);

moment([2007, 0, 29]).toDate();
moment(1318874398806).valueOf(); 
moment(1318874398806).unix();
moment([2000]).isLeapYear();
moment().zone();
moment("2012-2", "YYYY-MM").daysInMonth();
moment([2011, 2, 12]).isDST();

moment.isMoment();
moment.isMoment(new Date());
moment.isMoment(moment());

moment.lang('fr');
moment(1316116057189).fromNow();

moment.lang('en'); 
var globalLang = moment();
var localLang = moment();
localLang.lang('fr'); 
localLang.format('LLLL'); 
globalLang.format('LLLL'); 

moment.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
moment.monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
moment.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
moment.weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
moment.weekdaysMin = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
moment.longDateFormat = {
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D YYYY",
    LLL: "MMMM D YYYY LT",
    LLLL: "dddd, MMMM D YYYY LT"
};
moment.relativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
};
moment.meridiem = function (hour, minute, isLower) {
    if (hour < 9) {
        return "??";
    } else if (hour < 11 && minute < 30) {
        return "??";
    } else if (hour < 13 && minute < 30) {
        return "??";
    } else if (hour < 18) {
        return "??";
    } else {
        return "??";
    }
};
moment.calendar = {
    lastDay : '[Yesterday at] LT',
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    lastWeek : '[last] dddd [at] LT',
    nextWeek : 'dddd [at] LT',
    sameElse : 'L'
};
moment.ordinal = function (number) {
    var b = number % 10;
    return (~~ (number % 100 / 10) === 1) ? 'th' :
        (b === 1) ? 'st' :
        (b === 2) ? 'nd' :
        (b === 3) ? 'rd' : 'th';
};

moment.duration(100);
moment.duration(2, 'seconds');
moment.duration({
    seconds: 2,
    minutes: 2,
    hours: 2,
    days: 2,
    weeks: 2,
    months: 2,
    years: 2
});
moment.duration(1, "minutes").humanize();
moment.duration(500).milliseconds();
moment.duration(500).asMilliseconds();
moment.duration(500).seconds();
moment.duration(500).asSeconds();
moment.duration().minutes();
moment.duration().asMinutes();