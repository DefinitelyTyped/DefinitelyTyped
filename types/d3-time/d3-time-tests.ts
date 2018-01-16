/**
 * Typescript definition tests for d3/d3-time module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Time from 'd3-time';

let countableI: d3Time.CountableTimeInterval;
let simpleI: d3Time.TimeInterval;
let dateArray: Date[];
const start: Date = new Date(2014, 1, 1, 6, 0, 0, 0);
const end: Date = new Date(2016, 6, 13, 1, 25, 15, 500);
const inBetween: Date = new Date(2015, 6, 13, 1, 30, 5, 700);
let resultDate: Date;
let count: number;

// Test custom factories' definitions ------------------------------------------

simpleI = d3Time.timeInterval(
    // floor function
    (d: Date) => { d.setUTCMinutes(0, 0, 0); },
    // offset function
    (d: Date, step: number) => { d.setUTCHours(d.getUTCHours() + step); }
);

// Below test fails, as generating countable interval requires count function argument
// countableI = d3Time.timeInterval(
//     // floor function
//     (d: Date) => { d.setUTCMinutes(0, 0, 0); },
//     // offset function
//     (d: Date, step: number) => { d.setUTCHours(d.getUTCHours() + step); }
// );

countableI = d3Time.timeInterval(
    // floor function
    (d: Date) => { d.setUTCMinutes(0, 0, 0); },
    // offset function
    (d: Date, step: number) => { d.setUTCHours(d.getUTCHours() + step); },
    // count function
    (start: Date, end: Date) => (end.valueOf() - start.valueOf()) / 36e5
);

countableI = d3Time.timeInterval(
    // floor function
    (d: Date) => { d.setUTCMinutes(0, 0, 0); },
    // offset function
    (d: Date, step: number) => { d.setUTCHours(d.getUTCHours() + step); },
    // count function
    (start: Date, end: Date) => (end.valueOf() - start.valueOf()) / 36e5,
    // field function
    (d: Date) => d.valueOf() / 36e5
);

// Test signatures of (Countable)Interval methods ------------------------------

countableI = d3Time.timeMonday;

resultDate = countableI(inBetween);
resultDate = countableI.floor(inBetween);
resultDate = countableI.round(inBetween);
resultDate = countableI.ceil(inBetween);
resultDate = countableI.ceil(inBetween);
resultDate = countableI.offset(inBetween);
resultDate = countableI.offset(inBetween, 3);

dateArray = countableI.range(new Date(), new Date()); // TODO: specify dates
dateArray = countableI.range(new Date(), new Date(), 2); // TODO: specify dates

// countableI = countableI.filter((d: Date)=>{ return d.getMonth() === 2;}); // Test fails, since .filter(...) return Interval and not CountableInterval
simpleI = countableI.filter((d: Date) => d.getMonth() === 2);

count = countableI.count(start, end);

// let countableIOrNull: d3Time.CountableTimeInterval | null = countableI.every(10); // Test fails, since .every(...) return Interval and not CountableInterval
const simpleIOrNull: d3Time.TimeInterval | null = countableI.every(10);

resultDate = simpleI.floor(inBetween);
resultDate = simpleI.round(inBetween);
resultDate = simpleI.ceil(inBetween);
resultDate = simpleI.ceil(inBetween);
resultDate = simpleI.offset(inBetween);
resultDate = simpleI.offset(inBetween, 3);
simpleI = simpleI.filter((d: Date) => d.getMonth() === 2);

// count = simpleI.count(start, end); // Test fails, since .count(...) is not defined on Interval
// simpleI = simpleI.every(10); // Test fails, since .every(...) is not defined on Interval

// Test built-in factories and date array creator definitions ------------------

countableI = d3Time.timeMillisecond;
dateArray = d3Time.timeMilliseconds(start, end);
dateArray = d3Time.timeMilliseconds(start, end, 60000);

countableI = d3Time.timeSecond;
dateArray = d3Time.timeSeconds(start, end);
dateArray = d3Time.timeSeconds(start, end, 120);

countableI = d3Time.timeMinute;
dateArray = d3Time.timeMinutes(start, end);
dateArray = d3Time.timeMinutes(start, end, 5);

countableI = d3Time.timeHour;
dateArray = d3Time.timeHours(start, end);
dateArray = d3Time.timeHours(start, end, 2);

countableI = d3Time.timeDay;
dateArray = d3Time.timeDays(start, end);
dateArray = d3Time.timeDays(start, end, 2);

countableI = d3Time.timeWeek;
dateArray = d3Time.timeWeeks(start, end);
dateArray = d3Time.timeWeeks(start, end, 2);

countableI = d3Time.timeSunday;
dateArray = d3Time.timeSundays(start, end);
dateArray = d3Time.timeSundays(start, end, 2);

countableI = d3Time.timeMonday;
dateArray = d3Time.timeMondays(start, end);
dateArray = d3Time.timeMondays(start, end, 2);

countableI = d3Time.timeTuesday;
dateArray = d3Time.timeTuesdays(start, end);
dateArray = d3Time.timeTuesdays(start, end, 2);

countableI = d3Time.timeWednesday;
dateArray = d3Time.timeWednesdays(start, end);
dateArray = d3Time.timeWednesdays(start, end, 2);

countableI = d3Time.timeThursday;
dateArray = d3Time.timeThursdays(start, end);
dateArray = d3Time.timeThursdays(start, end, 2);

countableI = d3Time.timeFriday;
dateArray = d3Time.timeFridays(start, end);
dateArray = d3Time.timeFridays(start, end, 2);

countableI = d3Time.timeSaturday;
dateArray = d3Time.timeSaturdays(start, end);
dateArray = d3Time.timeSaturdays(start, end, 2);

countableI = d3Time.timeMonth;
dateArray = d3Time.timeMonths(start, end);
dateArray = d3Time.timeMonths(start, end, 3);

countableI = d3Time.timeYear;
dateArray = d3Time.timeYears(start, end);
dateArray = d3Time.timeYears(start, end, 2);

countableI = d3Time.utcMillisecond;
dateArray = d3Time.utcMilliseconds(start, end);
dateArray = d3Time.utcMilliseconds(start, end, 60000);

countableI = d3Time.utcSecond;
dateArray = d3Time.utcSeconds(start, end);
dateArray = d3Time.utcSeconds(start, end, 120);

countableI = d3Time.utcMinute;
dateArray = d3Time.utcMinutes(start, end);
dateArray = d3Time.utcMinutes(start, end, 5);

countableI = d3Time.utcHour;
dateArray = d3Time.utcHours(start, end);
dateArray = d3Time.utcHours(start, end, 2);

countableI = d3Time.utcDay;
dateArray = d3Time.utcDays(start, end);
dateArray = d3Time.utcDays(start, end, 2);

countableI = d3Time.utcWeek;
dateArray = d3Time.utcWeeks(start, end);
dateArray = d3Time.utcWeeks(start, end, 2);

countableI = d3Time.utcSunday;
dateArray = d3Time.utcSundays(start, end);
dateArray = d3Time.utcSundays(start, end, 2);

countableI = d3Time.utcMonday;
dateArray = d3Time.utcMondays(start, end);
dateArray = d3Time.utcMondays(start, end, 2);

countableI = d3Time.utcTuesday;
dateArray = d3Time.utcTuesdays(start, end);
dateArray = d3Time.utcTuesdays(start, end, 2);

countableI = d3Time.utcWednesday;
dateArray = d3Time.utcWednesdays(start, end);
dateArray = d3Time.utcWednesdays(start, end, 2);

countableI = d3Time.utcThursday;
dateArray = d3Time.utcThursdays(start, end);
dateArray = d3Time.utcThursdays(start, end, 2);

countableI = d3Time.utcFriday;
dateArray = d3Time.utcFridays(start, end);
dateArray = d3Time.utcFridays(start, end, 2);

countableI = d3Time.utcSaturday;
dateArray = d3Time.utcSaturdays(start, end);
dateArray = d3Time.utcSaturdays(start, end, 2);

countableI = d3Time.utcMonth;
dateArray = d3Time.utcMonths(start, end);
dateArray = d3Time.utcMonths(start, end, 3);

countableI = d3Time.utcYear;
dateArray = d3Time.utcYears(start, end);
dateArray = d3Time.utcYears(start, end, 2);
