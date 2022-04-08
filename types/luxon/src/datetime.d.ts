import {
    CalendarSystem,
    DateTimeFormatOptions,
    NumberingSystem,
    StringUnitLength, ToISOFormat, ToISOTimeDurationOptions,
    ZoneOptions,
} from '../index';
import { Zone } from './zone';
import { Duration, DurationInput, DurationUnit, DurationUnits } from './duration';
import { Interval } from './interval';

export type ToRelativeUnit =
    | 'years'
    | 'quarters'
    | 'months'
    | 'weeks'
    | 'days'
    | 'hours'
    | 'minutes'
    | 'seconds';

export interface ToRelativeOptions extends ToRelativeCalendarOptions {
    /**
     * @default long
     */
    style?: StringUnitLength;
    /** @default true */
    round?: boolean;
    /**
     * Padding in milliseconds. This allows you to round up the result if it fits inside the threshold.
     * Don't use in combination with {round: false} because the decimal output will include the padding.
     * @default 0
     */
    padding?: number;
}

export interface ToRelativeCalendarOptions {
    /**
     * The DateTime to use as the basis to which this time is compared
     * @default now
     */
    base?: DateTime;
    /**
     * Override the locale of this DateTime
     */
    locale?: string;
    /** If omitted, the method will pick the unit. */
    unit?: ToRelativeUnit;
    /**
     * Override the numberingSystem of this DateTime.
     * The Intl system may choose not to honor this.
     */
    numberingSystem?: NumberingSystem;
}

export interface ToSQLOptions {
    /**
     * Include the offset, such as 'Z' or '-04:00'
     * @default true
     */
    includeOffset?: boolean;
    /**
     * Include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @default false
     */
    includeZone?: boolean;
}

export interface ToISODateOptions {
    /**
     * Choose between the basic and extended format
     * @default 'extended'
     */
    format?: ToISOFormat;
}

export interface ToISOTimeOptions extends ToISOTimeDurationOptions {
    /**
     * Include the offset, such as 'Z' or '-04:00'
     * @default true
     */
    includeOffset?: boolean;
}

/** @deprecated alias for backwards compatibility */
export type ISOTimeOptions = ToISOTimeOptions;

export interface LocaleOptions {
    /**
     * @default system's locale
     */
    locale?: string;
    outputCalendar?: CalendarSystem;
    numberingSystem?: NumberingSystem;
}

export interface DateTimeOptions extends LocaleOptions {
    /**
     * Use this zone if no offset is specified in the input string itself. Will also convert the time to this zone.
     * @default local
     */
    zone?: string | Zone;
    /**
     * Override the zone with a fixed-offset zone specified in the string itself, if it specifies one.
     * @default false
     */
    setZone?: boolean;
}

export type DateTimeJSOptions = Omit<DateTimeOptions, 'setZone'>;

export interface DateObjectUnits {
    // a year, such as 1987
    year?: number;
    // a month, 1-12
    month?: number;
    // a day of the month, 1-31, depending on the month
    day?: number;
    // day of the year, 1-365 or 366
    ordinal?: number;
    // an ISO week year
    weekYear?: number;
    // an ISO week number, between 1 and 52 or 53, depending on the year
    weekNumber?: number;
    // an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
    weekday?: number;
    // hour of the day, 0-23
    hour?: number;
    // minute of the hour, 0-59
    minute?: number;
    // second of the minute, 0-59
    second?: number;
    // millisecond of the second, 0-999
    millisecond?: number;
}

export interface DateObject extends DateObjectUnits, LocaleOptions {
    zone?: string | Zone;
}

export type ConversionAccuracy = 'casual' | 'longterm';

export interface DiffOptions {
    conversionAccuracy?: ConversionAccuracy;
}

export interface ExplainedFormat {
    input: string;
    tokens: Array<{ literal: boolean; val: string }>;
    regex?: RegExp;
    rawMatches?: RegExpMatchArray | null;
    matches?: { [k: string]: any };
    result?: { [k: string]: any } | null;
    zone?: Zone | null;
    invalidReason?: string;
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods.
 * It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}.
 *      To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}.
 *      To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually
 *      (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month}, {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale},
 *      {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO},
 *      {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics
 * like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
export class DateTime {
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_FULL: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_FULL_WITH_SECONDS: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_HUGE: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_HUGE_WITH_SECONDS: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_MED: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_MED_WITH_SECONDS: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_MED_WITH_WEEKDAY: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_SHORT: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     */
    static readonly DATETIME_SHORT_WITH_SECONDS: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     */
    static readonly DATE_FULL: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     */
    static readonly DATE_HUGE: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     */
    static readonly DATE_MED: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     */
    static readonly DATE_MED_WITH_WEEKDAY: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like 10/14/1983
     */
    static readonly DATE_SHORT: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     */
    static readonly TIME_24_SIMPLE: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     */
    static readonly TIME_24_WITH_LONG_OFFSET: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     */
    static readonly TIME_24_WITH_SECONDS: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     */
    static readonly TIME_24_WITH_SHORT_OFFSET: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     */
    static readonly TIME_SIMPLE: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */
    static readonly TIME_WITH_LONG_OFFSET: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     */
    static readonly TIME_WITH_SECONDS: DateTimeFormatOptions;
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     */
    static readonly TIME_WITH_SHORT_OFFSET: DateTimeFormatOptions;

    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param text - the HTTP header date
     * @param [options] - options to affect the creation
     * @param [options.zone='local'] - convert the time to this zone.
     * Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @example
     * DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example
     * DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example
     * DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     */
    static fromHTTP(text: string, options?: DateTimeOptions): DateTime;

    /**
     * Create a DateTime from an ISO 8601 string
     * @example
     * DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example
     * DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example
     * DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example
     * DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
     * @example
     * DateTime.fromISO('2016-W05-4')
     */
    static fromISO(text: string, options?: DateTimeOptions): DateTime;

    /**
     * Create a DateTime from a JavaScript Date object.
     * Uses the default zone.
     */
    static fromJSDate(date: Date, options?: DateTimeJSOptions): DateTime;

    /**
     * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC).
     * Uses the default zone.
     */
    static fromMillis(ms: number, options?: DateTimeOptions): DateTime;

    /**
     * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
     * @example
     * DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example
     * DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
     * @example
     * DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example
     * DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
     * @example
     * DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
     * @example
     * DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
     * @example
     * DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     */
    static fromObject(obj: DateObject): DateTime;

    /**
     * Create a DateTime from an RFC 2822 string
     * @example
     * DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example
     * DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
     * @example
     * DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     */
    static fromRFC2822(text: string, options?: DateTimeOptions): DateTime;

    /**
     * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC).
     * Uses the default zone.
     */
    static fromSeconds(seconds: number, options?: DateTimeOptions): DateTime;

    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @example
     * DateTime.fromSQL('2017-05-15')
     * @example
     * DateTime.fromSQL('2017-05-15 09:12:34')
     * @example
     * DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example
     * DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example
     * DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example
     * DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example
     * DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example
     * DateTime.fromSQL('09:12:34.342')
     */
    static fromSQL(text: string, options?: DateTimeOptions): DateTime;

    /**
     * Create a DateTime from an input string and format string.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
     */
    static fromFormat(text: string, format: string, opts?: DateTimeOptions): DateTime;

    /**
     * Explain how a string would be parsed by {@link fromFormat}
     */
    static fromFormatExplain(text: string, format: string, opts?: DateTimeOptions): ExplainedFormat;

    /**
     * @deprecated since 0.3.0. Use {@link fromFormat} instead
     */
    static fromString(text: string, format: string, options?: DateTimeOptions): DateTime;

    /**
     * @deprecated 0.3.0. Use {@link fromFormatExplain} instead
     */
    static fromStringExplain(
        text: string,
        format: string,
        options?: DateTimeOptions,
    ): ExplainedFormat;

    /**
     * Create an invalid DateTime.
     * @param reason - simple string of why this DateTime is invalid.
     *                 Should not contain parameters or anything else data-dependent
     * @param [explanation] - longer explanation, may include parameters and other useful debugging information
     */
    static invalid(reason: string, explanation?: string): DateTime;

    /**
     * Check if an object is a DateTime. Works across context boundaries
     */
    static isDateTime(o: any): o is DateTime;

    /**
     * Create a local DateTime
     * @param [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
     * @param [month=1] - The month, 1-indexed
     * @param [day=1] - The day of the month, 1-indexed
     * @param [hour=0] - The hour of the day, in 24-hour time
     * @param [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example
     * DateTime.local()                            //~> now
     * @example
     * DateTime.local(2017)                        //~> 2017-01-01T00:00:00
     * @example
     * DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
     * @example
     * DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
     * @example
     * DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
     * @example
     * DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
     * @example
     * DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
     * @example
     * DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
     */
    static local(
        year?: number,
        month?: number,
        day?: number,
        hour?: number,
        minute?: number,
        second?: number,
        millisecond?: number,
    ): DateTime;

    /** Return the maximum of several date times */
    static max(): undefined;
    /** Return the maximum of several date times */
    static max(...dateTimes: DateTime[]): DateTime;

    /** Return the minimum of several date times */
    static min(): undefined;
    /** Return the minimum of several date times */
    static min(...dateTimes: DateTime[]): DateTime;

    /**
     * Create a DateTime for the current instant, in the system's time zone.
     *
     * Use Settings to override these default values if needed.
     * @example
     * DateTime.now().toISO() //~> now in the ISO format
     */
    static now(): DateTime;

    /**
     * Create a DateTime in UTC
     * @param [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param [month=1] - The month, 1-indexed
     * @param [day=1] - The day of the month
     * @param [hour=0] - The hour of the day, in 24-hour time
     * @param [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example
     * DateTime.utc()                            //~> now
     * @example
     * DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
     * @example
     * DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
     * @example
     * DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
     * @example
     * DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
     * @example
     * DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
     * @example
     * DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
     * @example
     * DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
     */
    static utc(
        year?: number,
        month?: number,
        day?: number,
        hour?: number,
        minute?: number,
        second?: number,
        millisecond?: number,
    ): DateTime;

    /**
     * Get the day of the month (1-30ish).
     * @example
     * DateTime.local(2017, 5, 25).day //=> 25
     */
    day: number;
    /**
     * Returns the number of days in this DateTime's month
     * @example
     * DateTime.local(2016, 2).daysInMonth //=> 29
     * @example
     * DateTime.local(2016, 3).daysInMonth //=> 31
     */
    daysInMonth: number;
    /**
     * Returns the number of days in this DateTime's year
     * @example
     * DateTime.local(2016).daysInYear //=> 366
     * @example
     * DateTime.local(2013).daysInYear //=> 365
     */
    daysInYear: number;
    /**
     * Get the hour of the day (0-23).
     * @example
     * DateTime.local(2017, 5, 25, 9).hour //=> 9
     */
    hour: number;
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     */
    invalidReason: string | null;
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     */
    invalidExplanation: string | null;
    /**
     * Get whether the DateTime is in a DST.
     */
    isInDST: boolean;
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example
     * DateTime.local(2016).isInLeapYear //=> true
     * @example
     * DateTime.local(2013).isInLeapYear //=> false
     */
    isInLeapYear: boolean;
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     */
    isOffsetFixed: boolean;
    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     */
    isValid: boolean;
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     */
    locale: string;
    /**
     * Get the millisecond of the second (0-999).
     * @example
     * DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     */
    millisecond: number;
    /**
     * Get the minute of the hour (0-59).
     * @example
     * DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     */
    minute: number;
    /**
     * Get the month (1-12).
     * @example
     * DateTime.local(2017, 5, 25).month //=> 5
     */
    month: number;
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example
     * DateTime.local(2017, 10, 30).monthLong //=> October
     */
    monthLong: string;
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example
     * DateTime.local(2017, 10, 30).monthShort //=> Oct
     */
    monthShort: string;
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     */
    numberingSystem: string;
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example
     * DateTime.now().offset //=> -240
     * @example
     * DateTime.utc().offset //=> 0
     */
    offset: number;
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     */
    offsetNameLong: string;
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     */
    offsetNameShort: string;
    /**
     * Get the ordinal (meaning the day of the year)
     * @example
     * DateTime.local(2017, 5, 25).ordinal //=> 145
     */
    ordinal: number;

    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     */
    outputCalendar: string;
    /**
     * Get the quarter
     * @example
     * DateTime.local(2017, 5, 25).quarter //=> 2
     */
    quarter: number;
    /**
     * Get the second of the minute (0-59).
     * @example
     * DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     */
    second: number;
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example
     * DateTime.local(2017, 5, 25).weekNumber //=> 21
     */
    weekNumber: number;
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example
     * DateTime.local(2014, 11, 31).weekYear //=> 2015
     */
    weekYear: number;
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example
     * DateTime.local(2014, 11, 31).weekday //=> 4
     */
    weekday: number;
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example
     * DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     */
    weekdayLong: string;
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example
     * DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     */
    weekdayShort: string;
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example
     * DateTime.local(2004).weeksInWeekYear //=> 53
     * @example
     * DateTime.local(2013).weeksInWeekYear //=> 52
     */
    weeksInWeekYear: number;
    /**
     * Get the year
     * @example
     * DateTime.local(2017, 5, 25).year //=> 2017
     */
    year: number;
    /**
     * Get the name of the time zone.
     */
    zoneName: string;
    /**
     * Get the time zone associated with this DateTime.
     */
    zone: Zone;

    /**
     * Return the difference between two DateTimes as a Duration.
     * @param other - the DateTime to compare this one to
     * @param [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param [options] - options that affect the creation of the Duration
     * @param [options.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * let i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     */
    diff(other: DateTime, unit?: DurationUnits, options?: DiffOptions): Duration;

    /**
     * Return the difference between this DateTime and right now.
     * See {@link diff}
     * @param [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param [options] - options that affect the creation of the Duration
     * @param [options.conversionAccuracy='casual'] - the conversion system to use
     */
    diffNow(unit?: DurationUnits, options?: DiffOptions): Duration;

    /**
     * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
     * @example
     * DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
     * @example
     * DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example
     * DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
     * @example
     * DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example
     * DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     */
    endOf(unit: DurationUnit): DateTime;

    /**
     * Equality check
     * Two DateTimes are equal if they represent the same millisecond, have the same zone and location, and are both valid.
     * To compare just the millisecond values, use `+dt1 === +dt2`.
     */
    equals(other: DateTime): boolean;

    /**
     * Get the value of unit.
     * @example
     * DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example
     * DateTime.local(2017, 7, 4).get('day'); //=> 4
     */
    get(unit: keyof DateTime): number;

    /**
     * Return whether this DateTime is in the same unit of time as another DateTime.
     * Higher-order units must also be identical for this function to return `true`.
     * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link setZone} to convert one of the dates if needed.
     * @example
     * DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
     */
    hasSame(other: DateTime, unit: DurationUnit): boolean;

    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link plus}
     */
    minus(duration: DurationInput): DateTime;

    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds.
     * Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way.
     * Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @example
     * DateTime.now().plus(123) //~> in 123 milliseconds
     * @example
     * DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
     * @example
     * DateTime.now().plus({ days: 1 }) //~> this time tomorrow
     * @example
     * DateTime.now().plus({ days: -1 }) //~> this time yesterday
     * @example
     * DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
     * @example
     * DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
     */
    plus(duration: DurationInput): DateTime;

    /**
     * "Set" the locale options. Returns a newly-constructed DateTime.
     */
    reconfigure(properties: LocaleOptions): DateTime;

    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     */
    resolvedLocaleOpts(options?: LocaleOptions & DateTimeFormatOptions): Intl.ResolvedDateTimeFormatOptions;

    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for setting metadata, see {@link reconfigure} and {@link setZone}.
     */
    set(values: DateObjectUnits): DateTime;

    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     */
    setLocale(locale: string): DateTime;

    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will
     * report different local times and consider DSTs when making computations, as with {@link plus}.
     * You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
     *
     * @param zone - a zone identifier. As a string, that can be any IANA zone supported by the host environment,
     * or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'.
     * You may also supply an instance of a {@link Zone} class.
     * @param [options] - options
     */
    setZone(zone: string | Zone, options?: ZoneOptions): DateTime;

    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @example
     * DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example
     * DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example
     * DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
     * @example
     * DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example
     * DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     */
    startOf(unit: DurationUnit): DateTime;

    /**
     * Returns a BSON serializable equivalent to this DateTime.
     */
    toBSON(): Date;

    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     *
     * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool.
     *
     * For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
     *
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     *
     * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
     * @example
     * DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example
     * DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example
     * DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
     * @example
     * DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     */
    toFormat(format: string, options?: LocaleOptions & DateTimeFormatOptions): string;

    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example
     * DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example
     * DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     */
    toHTTP(): string;

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @example
     * DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example
     * DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example
     * DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @example
     * DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
     */
    toISO(options?: ToISOTimeOptions): string;

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @example
     * DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @example
     * DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
     */
    toISODate(options?: ToISODateOptions): string;

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @example
     * DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
     * @example
     * DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @example
     * DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
     * @example
     * DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
     */
    toISOTime(options?: ToISOTimeOptions): string;

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example
     * DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     */
    toISOWeekDate(): string;

    /**
     * Returns a JavaScript Date equivalent to this DateTime.
     */
    toJSDate(): Date;

    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * Called implicitly via {@link JSON.stringify}
     */
    toJSON(): string;

    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link setZone}('local')
     */
    toLocal(): DateTime;

    /**
     * Returns an array of format "parts", meaning individual tokens along with metadata.
     * This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @example
     * DateTime.now().toLocaleParts(); //=> [
     *                                 //=>   { type: 'day', value: '25' },
     *                                 //=>   { type: 'literal', value: '/' },
     *                                 //=>   { type: 'month', value: '05' },
     *                                 //=>   { type: 'literal', value: '/' },
     *                                 //=>   { type: 'year', value: '1982' }
     *                                 //=> ]
     */
    toLocaleParts(options?: LocaleOptions & DateTimeFormatOptions): any[];

    /**
     * Returns a localized string representing this date.
     * Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @example
     * DateTime.now().toLocaleString(); //=> 4/20/2017
     * @example
     * DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example
     * DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
     * @example
     * DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example
     * DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example
     * DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example
     * DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
     * @example
     * DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
     * @example
     * DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
     */
    toLocaleString(options?: LocaleOptions & DateTimeFormatOptions): string;

    /**
     * Returns the epoch milliseconds of this DateTime.
     */
    toMillis(): number;

    /**
     * Returns a JavaScript object with this DateTime's year, month, day, and so on.
     * @example
     * DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     */
    toObject(options?: {
        /**
         * Include configuration attributes in the output
         * @default false
         */
        includeConfig?: boolean
    }): DateObject;

    /**
     * Returns a string representation of a this time relative to now, such as "in two days".
     * Can only internationalize if your platform supports Intl.RelativeTimeFormat. Rounds down by default.
     * @example
     * DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
     * @example
     * DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
     * @example
     * DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
     * @example
     * DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
     * @example
     * DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
     * @example
     * DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
     */
    toRelative(options?: ToRelativeOptions): string | null;

    /**
     * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
     * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
     * @example
     * DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
     * @example
     * DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> "mañana"
     * @example
     * DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
     * @example
     * DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
     */
    toRelativeCalendar(options?: ToRelativeCalendarOptions): string | null;

    /**
     * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
     * @example
     * DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example
     * DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     */
    toRFC2822(): string;

    /**
     * Returns the epoch seconds of this DateTime.
     */
    toSeconds(): number;

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @example
     * DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example
     * DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example
     * DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example
     * DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
     */
    toSQL(options?: ToSQLOptions): string;

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example
     * DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     */
    toSQLDate(): string;

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @example
     * DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example
     * DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
     * @example
     * DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example
     * DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     */
    toSQLTime(options?: ToSQLOptions): string;

    /**
     * Returns a string representation of this DateTime appropriate for debugging
     */
    toString(): string;

    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link setZone}('utc')
     * @param [offset=0] - optionally, an offset from UTC in minutes
     * @param [options] - options to pass to `setZone()`
     */
    toUTC(offset?: number, options?: ZoneOptions): DateTime;

    /**
     * Return an Interval spanning between this DateTime and another DateTime
     */
    until(other: DateTime): Interval;

    /**
     * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
     * Called implicitly when coercing types.
     */
    valueOf(): number;
}
