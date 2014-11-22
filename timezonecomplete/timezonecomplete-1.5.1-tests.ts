/// <reference path="timezonecomplete-1.5.1.d.ts" />

import tc = require("timezonecomplete-1.5.1");

var b: boolean;
var n: number;
var s: string;
var w: tc.WeekDay;

b = tc.isLeapYear(2014);
n = tc.daysInMonth(2014, 10);
n = tc.daysInYear(2014);
n = tc.dayOfYear(2014, 1, 2);
w = tc.firstWeekDayOfMonth(2014, 1, tc.WeekDay.Sunday);
w = tc.lastWeekDayOfMonth(2014, 1, tc.WeekDay.Sunday);
n = tc.weekDayOnOrAfter(2014, 1, 14, tc.WeekDay.Monday);
n = tc.weekDayOnOrBefore(2014, 1, 14, tc.WeekDay.Monday);
n = tc.secondOfDay(13, 59, 59);
n = tc.weekOfMonth(2014, 1, 1);

// DURATION

var d: tc.Duration;
var d1: tc.Duration = tc.Duration.hours(24);
var d2: tc.Duration = tc.Duration.minutes(24);
var d3: tc.Duration = tc.Duration.seconds(24);
var d4: tc.Duration = tc.Duration.milliseconds(24);
var d5: tc.Duration = new tc.Duration(24);
var d6: tc.Duration = new tc.Duration("00:01");
var d7: tc.Duration = d6.clone();

n = d7.wholeHours();
n = d7.hours();
n = d7.minutes();
n = d7.minute();
n = d7.seconds();
n = d7.second();
n = d7.milliseconds();
n = d7.millisecond();
s = d7.sign();
b = d7.lessThan(d6);
b = d7.greaterThan(d6);
d = d7.min(d6);
d = d7.max(d6);
d = d7.multiply(3);
d = d7.divide(0.3);
d = d7.add(d6);
d = d7.sub(d6);
s = d7.toString();

// TIMEZONE

var t: tc.TimeZone;
var k: tc.TimeZoneKind;

t = tc.TimeZone.local();
t = tc.TimeZone.utc();
t = tc.TimeZone.zone(2);
t = tc.TimeZone.zone("+01:00");
s = t.name();
k = t.kind();
b = t.equals(t);
b = t.isUtc();
n = t.offsetForUtc(2014, 1, 1, 13, 0, 5, 123);
n = t.offsetForZone(2014, 1, 1, 13, 0, 5, 123);
n = t.offsetForUtcDate(new Date(2014, 1, 1, 13, 0, 5, 123), tc.DateFunctions.Get);
n = t.offsetForZoneDate(new Date(2014, 1, 1, 13, 0, 5, 123), tc.DateFunctions.GetUTC);
s = t.toString();
s = tc.TimeZone.offsetToString(2);
n = tc.TimeZone.stringToOffset("+00:01");

// REALTIMESOURCE

var date: Date = (new tc.RealTimeSource()).now();

// DATETIME

var dt: tc.DateTime;

var ts: tc.TimeSource = tc.DateTime.timeSource;

dt = tc.DateTime.nowLocal();
dt = tc.DateTime.nowUtc();
dt = tc.DateTime.now(tc.TimeZone.local());
dt = new tc.DateTime();
dt = new tc.DateTime("2014-01-01T13:05:01.123 UTC");
dt = new tc.DateTime("2014-01-01T13:05:01.123", tc.TimeZone.utc());
dt = new tc.DateTime(date, tc.DateFunctions.Get);
dt = new tc.DateTime(date, tc.DateFunctions.Get, tc.TimeZone.utc());
dt = new tc.DateTime(2014, 1, 1, 13, 5, 1, 123);
dt = new tc.DateTime(2014, 1, 1, 13, 5, 1, 123, tc.TimeZone.utc());
dt = new tc.DateTime(89949284);
dt = new tc.DateTime(89949284, tc.TimeZone.utc());
dt = dt.clone();
t = dt.zone();
n = dt.offset();
n = dt.year();
n = dt.month();
n = dt.day();
n = dt.hour();
n = dt.minute();
n = dt.second();
n = dt.weekNumber();
n = dt.weekOfMonth();
n = dt.secondOfDay();
n = dt.dayOfYear();
n = dt.millisecond();
n = dt.unixUtcMillis();
n = dt.utcYear();
n = dt.utcMonth();
n = dt.utcDay();
n = dt.utcHour();
n = dt.utcMinute();
n = dt.utcSecond();
n = dt.utcMillisecond();
n = dt.utcWeekNumber();
n = dt.utcWeekOfMonth();
n = dt.utcSecondOfDay();
n = dt.utcDayOfYear();
s = dt.format("%Y-%m-%d");
dt.convert(tc.TimeZone.local());
dt = dt.toZone(tc.TimeZone.utc());
date = dt.toDate();
dt = dt.add(tc.Duration.seconds(2));
dt = dt.add(2, tc.TimeUnit.Year);
dt = dt.add(2, tc.TimeUnit.Month);
dt = dt.add(2, tc.TimeUnit.Week);
dt = dt.add(2, tc.TimeUnit.Day);
dt = dt.add(2, tc.TimeUnit.Hour);
dt = dt.add(2, tc.TimeUnit.Minute);
dt = dt.add(2, tc.TimeUnit.Second);
dt = dt.addLocal(2, tc.TimeUnit.Second);
dt = dt.sub(tc.Duration.seconds(2));
dt = dt.sub(2, tc.TimeUnit.Year);
dt = dt.sub(2, tc.TimeUnit.Month);
dt = dt.sub(2, tc.TimeUnit.Week);
dt = dt.sub(2, tc.TimeUnit.Day);
dt = dt.sub(2, tc.TimeUnit.Hour);
dt = dt.sub(2, tc.TimeUnit.Minute);
dt = dt.sub(2, tc.TimeUnit.Second);
dt = dt.subLocal(2, tc.TimeUnit.Second);
d = dt.diff(new tc.DateTime(9289234, tc.TimeZone.local()));
b = dt.lessThan(new tc.DateTime(9289234, tc.TimeZone.local()));
b = dt.lessEqual(new tc.DateTime(9289234, tc.TimeZone.local()));
b = dt.greaterThan(new tc.DateTime(9289234, tc.TimeZone.local()));
b = dt.greaterEqual(new tc.DateTime(9289234, tc.TimeZone.local()));
s = dt.toIsoString();
s = dt.toString();
s = dt.toUtcString();

var wd: tc.WeekDay;
wd = dt.weekDay();
wd = dt.utcWeekDay();

// PERIOD

s = tc.periodDstToString(tc.PeriodDst.RegularIntervals);
s = tc.periodDstToString(tc.PeriodDst.RegularLocalTime);

var p: tc.Period;

p = new tc.Period(tc.DateTime.nowLocal(), 1, tc.TimeUnit.Hour, tc.PeriodDst.RegularLocalTime);
dt = p.start();
n = p.amount();
var tu: tc.TimeUnit = p.unit();
var pd: tc.PeriodDst = p.dst();
dt = p.findFirst(tc.DateTime.nowLocal());
dt = p.findNext(dt);
s = p.toIsoString();
s = p.toString();

























