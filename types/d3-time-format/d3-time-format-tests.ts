/**
 * Typescript definition tests for d3/d3-time-format module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3TimeFormat from 'd3-time-format';

// ----------------------------------------------------------------------
// Preparatory Steps
// ----------------------------------------------------------------------

let num: number;

let formatFn: (n: Date) => string;

let parseFn: (dateString: string) => (Date | null);

let localeDef: d3TimeFormat.TimeLocaleDefinition;

let localeObj: d3TimeFormat.TimeLocaleObject;

// ----------------------------------------------------------------------
// Test Formating and Parsing
// ----------------------------------------------------------------------

// local time -----------------------------------------------------------

formatFn = d3TimeFormat.timeFormat('.%L');
parseFn = d3TimeFormat.timeParse('.%L');

// utc ------------------------------------------------------------------

formatFn = d3TimeFormat.utcFormat('.%L');
parseFn = d3TimeFormat.utcParse('.%L');

// iso ------------------------------------------------------------------

let dateString: string = d3TimeFormat.isoFormat(new Date(2016, 6, 6));
let date: Date = d3TimeFormat.isoParse('2016-07-08T14:06:41.386Z');

// ----------------------------------------------------------------------
// Test Locale Definition
// ----------------------------------------------------------------------

let dateTimeSpecifier: string = localeDef.dateTime;
let dateSpecifier: string = localeDef.date;
let timeSpecifier: string = localeDef.time;
let periods: [string, string] = localeDef.periods;
let days: [string, string, string, string, string, string, string] = localeDef.days;
let shortDays: [string, string, string, string, string, string, string] = localeDef.shortDays;
let months: [string, string, string, string, string, string, string, string, string, string, string, string] = localeDef.months;
let shortMonths: [string, string, string, string, string, string, string, string, string, string, string, string] = localeDef.shortMonths;

localeDef = {
    dateTime: '%a %b %e %X %Y',
    date: '%m/%d/%Y',
    time: '%H:%M:%S',
    periods: ['Vormittag', 'Nachmittag'],
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Sonnabend'],
    shortDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    months: ['Januar', 'Februar', 'Maerz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    shortMonths: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
};

localeObj = d3TimeFormat.timeFormatLocale(localeDef);

localeObj = d3TimeFormat.timeFormatDefaultLocale(localeDef);

let formatFactory: (specifier: string) => ((date: Date) => string) = localeObj.format;
let parseFactory: (specifier: string) => ((dateString: string) => Date) = localeObj.parse;

formatFactory = localeObj.utcFormat;
parseFactory = localeObj.utcParse;
