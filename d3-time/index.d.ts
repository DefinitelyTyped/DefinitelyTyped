// Type definitions for D3JS d3-time module 1.0
// Project: https://github.com/d3/d3-time/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.0.4

// ---------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------

/**
 * A D3 Time Interval
 */
export interface TimeInterval {
    /**
     * Returns a new date representing the latest interval boundary date before or equal to date.
     * This function is an alias for "TimeInterval.floor(date)". For example, timeYear(date) and timeYear.floor(date) are equivalent.
     *
     * For example, timeDay(date) typically returns 12:00 AM local time on the given date.
     *
     * This function is idempotent: if the specified date is already floored to the current interval, a new date with an identical time is returned.
     * Furthermore, the returned date is the minimum expressible value of the associated interval, such that interval.floor(interval.floor(date) - 1) returns the preceeding interval boundary date.
     *
     * Note that the == and === operators do not compare by value with Date objects, and thus you cannot use them to tell whether the specified date has already been floored. Instead, coerce to a number and then compare.
     *
     * This is more reliable than testing whether the time is 12:00 AM, as in some time zones midnight may not exist due to daylight saving.
     *
     * @param date A date object.
     */
    (date: Date): Date;

    /**
     * Returns a new date representing the latest interval boundary date before or equal to date.
     *
     * For example, timeDay.floor(date) typically returns 12:00 AM local time on the given date.
     *
     * This method is idempotent: if the specified date is already floored to the current interval, a new date with an identical time is returned.
     * Furthermore, the returned date is the minimum expressible value of the associated interval, such that interval.floor(interval.floor(date) - 1) returns the preceeding interval boundary date.
     *
     * Note that the == and === operators do not compare by value with Date objects, and thus you cannot use them to tell whether the specified date has already been floored. Instead, coerce to a number and then compare.
     *
     * This is more reliable than testing whether the time is 12:00 AM, as in some time zones midnight may not exist due to daylight saving.
     *
     * @param date A date object.
     */
    floor(date: Date): Date;

    /**
     * Returns a new date representing the closest interval boundary date to date.
     *
     * For example, timeDay.round(date) typically returns 12:00 AM local time on the given date if it is on or before noon,
     * and 12:00 AM of the following day if it is after noon.
     *
     * This method is idempotent: if the specified date is already rounded to the current interval, a new date with an identical time is returned.
     *
     * @param date A date object.
     */
    round(date: Date): Date;

    /**
     * Returns a new date representing the earliest interval boundary date after or equal to date.
     *
     * For example, timeDay.ceil(date) typically returns 12:00 AM local time on the date following the given date.
     *
     * This method is idempotent: if the specified date is already ceilinged to the current interval, a new date with an identical time is returned. Furthermore,
     * the returned date is the maximum expressible value of the associated interval, such that interval.ceil(interval.ceil(date) + 1) returns the following interval boundary date.
     *
     * @param date A date object.
     */
    ceil(date: Date): Date;

    /**
     * Returns a new date equal to date plus step intervals.
     *
     * If step is not specified it defaults to 1.
     *
     * This method does not round the specified date to the interval. For example, if date is today at 5:34 PM,
     * then timeDay.offset(date, 1) returns 5:34 PM tomorrow (even if daylight saving changes!).
     *
     * @param date A date object.
     * @param step An optional number of steps to apply when calculating the offset date. If step is negative, then the returned date will be before the specified date;
     * if step is zero, then a copy of the specified date is returned; if step is not an integer, it is floored.
     */
    offset(date: Date, step?: number): Date;

    /**
     * Returns an array of dates representing every interval boundary after or equal to start (inclusive) and before stop (exclusive).
     *
     * If step is specified, then every step-th boundary will be returned; for example, for the timeDay interval a step of 2 will return every other day.
     * If step is not an integer, it is floored.
     *
     * The first date in the returned array is the earliest boundary after or equal to start; subsequent dates are offset by step intervals and floored.
     * Thus, two overlapping ranges may be inconsistent.
     *
     * To make ranges consistent when a step is specified, use CountableInterval.every instead.
     *
     * @param start A start date object for the range.
     * @param stop A stop date object for the range.
     * @param step An optional number of steps to apply when calculating the dates in the range.
     */
    range(start: Date, stop: Date, step?: number): Date[];

    /**
     * Returns a new interval that is a filtered subset of this interval using the specified test function.
     *
     * @param test A test function which is passed a date and should return true if and only if the specified date should be considered part of the interval.
     */
    filter(test: (date: Date) => boolean): TimeInterval;
}

/**
 * A D3 Countable Time Interval
 */
export interface CountableTimeInterval extends TimeInterval {
    /**
     * Returns the number of interval boundaries after start (exclusive) and before or equal to end (inclusive).
     *
     * Note that this behavior is slightly different than interval.range,
     * because its purpose is to return the zero-based number of the specified end date relative to the specified start date.
     *
     * @param start A start date object.
     * @param start An end date object.
     */
    count(start: Date, end: Date): number;
    /**
     * Returns a filtered view of this interval representing every stepth date.
     *
     * The meaning of step is dependent on this interval’s parent interval as defined by the field function.
     *
     * For example, timeMinute.every(15) returns an interval representing every fifteen minutes,
     * starting on the hour: :00, :15, :30, :45, etc. Note that for some intervals, the resulting dates may not be uniformly-spaced;
     * timeDay’s parent interval is timeMonth, and thus the interval number resets at the start of each month.
     *
     * If step is not valid, returns null. If step is one, returns this interval.
     *
     * This method can be used in conjunction with interval.range to ensure that two overlapping ranges are consistent.
     *
     * @param step Number of steps.
     */
    every(step: number): TimeInterval | null;
}

// ---------------------------------------------------------------
// Custom (Countable)Interval Factories
// ---------------------------------------------------------------

/**
 * Constructs a new custom interval given the specified floor and offset functions.
 *
 * The returned custom interval is not countable, i.e. does not exposee the methods "count(..)" and "every(...)".
 *
 * @param floor A floor function which takes a single date as an argument and rounds it down to the nearest interval boundary.
 * @param offset An offset function which takes a date and an integer step as arguments and advances the specified date by the specified number of boundaries; the step may be positive, negative or zero.
 */
export function timeInterval(
    floor: (date: Date) => void,
    offset: (date: Date, step: number) => void,
): TimeInterval;
/**
 * Constructs a new custom interval given the specified floor, offset and count functions.
 *
 * The returned custom interval is countable and exposes the methods "count(..)" and "every(...)".
 *
 * Note: due to an internal optimization, the specified count function must not invoke interval.count on other time intervals.
 *
 * @param floor A floor function which takes a single date as an argument and rounds it down to the nearest interval boundary.
 * @param offset An offset function which takes a date and an integer step as arguments and advances the specified date by the specified number of boundaries; the step may be positive, negative or zero.
 * @param count A count function which takes a start date and an end date, already floored to the current interval, and returns the number of boundaries between the start (exclusive) and end (inclusive).
 * Note: due to an internal optimization, the specified count function must not invoke interval.count on other time intervals.
 * @param field An optional field function which takes a date, already floored to the current interval, and returns the field value of the specified date,
 * corresponding to the number of boundaries between this date (exclusive) and the latest previous parent boundary.
 * For example, for the timeDay interval, this returns the number of days since the start of the month. If a field function is not specified,
 * it defaults to counting the number of interval boundaries since the UNIX epoch of January 1, 1970 UTC. The field function defines the behavior of interval.every.
 */
export function timeInterval(
    floor: (date: Date) => void,
    offset: (date: Date, step: number) => void,
    count: (start: Date, end: Date) => number,
    field?: (date: Date) => number
): CountableTimeInterval;

// ---------------------------------------------------------------
// Built-In Factories and Date Array Creators
// ---------------------------------------------------------------


// local time ----------------------------------------------------------

/**
 * Milliseconds Interval in Local Time; the shortest available time unit.
 */
export var timeMillisecond: CountableTimeInterval;

/**
 * This is a convenience alias for timeMillisecond.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeMilliseconds(start: Date, stop: Date, step?: number): Date[];

/**
 * Seconds Interval in Local Time; seconds (e.g., 01:23:45.0000 AM); 1,000 milliseconds.
 */
export var timeSecond: CountableTimeInterval;

/**
 * This is a convenience alias for timeSecond.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeSeconds(start: Date, stop: Date, step?: number): Date[];

/**
 * Minutes Interval in Local Time; minutes (e.g., 01:02:00 AM); 60 seconds. Note that ECMAScript ignores leap seconds.
 */
export var timeMinute: CountableTimeInterval;

/**
 * This is a convenience alias for timeMinute.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeMinutes(start: Date, stop: Date, step?: number): Date[];

/**
 * Hours Interval in Local Time; Hours (e.g., 01:00 AM); 60 minutes.
 *
 * Note that advancing time by one hour in local time can return the same hour or skip an hour due to daylight saving.
 */
export var timeHour: CountableTimeInterval;

/**
 * This is a convenience alias for timeHour.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeHours(start: Date, stop: Date, step?: number): Date[];

/**
 * Days Interval in Local Time; days (e.g., February 7, 2012 at 12:00 AM); typically 24 hours.
 * Days in local time may range from 23 to 25 hours due to daylight saving.
 */
export var timeDay: CountableTimeInterval;

/**
 * This is a convenience alias for timeDay.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeDays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval in Local Time. Alias for sunday; 7 days and typically 168 hours.
 *
 * Weeks in local time may range from 167 to 169 hours due on daylight saving.
 */
export var timeWeek: CountableTimeInterval;

/**
 * This is a convenience alias for timeWeek.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeWeeks(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Sunday-based weeks in Local Time (e.g., February 5, 2012 at 12:00 AM).
 * 7 days and typically 168 hours.
 *
 * Weeks in local time may range from 167 to 169 hours due on daylight saving.
 */
export var timeSunday: CountableTimeInterval;

/**
 * This is a convenience alias for timeSunday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeSundays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Monday-based weeks in Local Time (e.g., February 6, 2012 at 12:00 AM).
 * 7 days and typically 168 hours.
 *
 * Weeks in local time may range from 167 to 169 hours due on daylight saving.
 */
export var timeMonday: CountableTimeInterval;

/**
 * This is a convenience alias for timeMonday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeMondays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Tuesday-based weeks in Local Time (e.g., February 7, 2012 at 12:00 AM).
 * 7 days and typically 168 hours.
 *
 * Weeks in local time may range from 167 to 169 hours due on daylight saving.
 */
export var timeTuesday: CountableTimeInterval;

/**
 * This is a convenience alias for timeTuesday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeTuesdays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Wednesday-based weeks in Local Time (e.g., February 8, 2012 at 12:00 AM).
 * 7 days and typically 168 hours.
 *
 * Weeks in local time may range from 167 to 169 hours due on daylight saving.
 */
export var timeWednesday: CountableTimeInterval;

/**
 * This is a convenience alias for timeWednesday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeWednesdays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Thursday-based weeks in Local Time (e.g., February 9, 2012 at 12:00 AM).
 * 7 days and typically 168 hours.
 *
 * Weeks in local time may range from 167 to 169 hours due on daylight saving.
 */
export var timeThursday: CountableTimeInterval;

/**
 * This is a convenience alias for timeThursday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeThursdays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Friday-based weeks in Local Time (e.g., February 10, 2012 at 12:00 AM).
 * 7 days and typically 168 hours.
 *
 * Weeks in local time may range from 167 to 169 hours due on daylight saving.
 */
export var timeFriday: CountableTimeInterval;


/**
 * This is a convenience alias for timeFriday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeFridays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Saturday-based weeks in Local Time (e.g., February 11, 2012 at 12:00 AM).
 * 7 days and typically 168 hours.
 *
 * Weeks in local time may range from 167 to 169 hours due on daylight saving.
 */
export var timeSaturday: CountableTimeInterval;

/**
 * This is a convenience alias for timeSaturday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeSaturdays(start: Date, stop: Date, step?: number): Date[];

/**
 * Month Interval in Local Time; months (e.g., February 1, 2012 at 12:00 AM); ranges from 28 to 31 days.
 */
export var timeMonth: CountableTimeInterval;

/**
 * This is a convenience alias for timeMonth.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeMonths(start: Date, stop: Date, step?: number): Date[];

/**
 * Year Interval in Local Time; years (e.g., January 1, 2012 at 12:00 AM); ranges from 365 to 366 days.
 */
export var timeYear: CountableTimeInterval;

/**
 * This is a convenience alias for timeYear.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function timeYears(start: Date, stop: Date, step?: number): Date[];


// utc Universal Coordinated Time ----------------------------------------------------------

/**
 * Milliseconds Interval in Univarsal Coordinated Time (UTC); the shortest available time unit.
 */
export var utcMillisecond: CountableTimeInterval;

/**
 * This is a convenience alias for utcMilliesecond.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcMilliseconds(start: Date, stop: Date, step?: number): Date[];

/**
 * Seconds Interval in Univarsal Coordinated Time (UTC); seconds (e.g., 01:23:45.0000 AM); 1,000 milliseconds.
 */
export var utcSecond: CountableTimeInterval;

/**
 * This is a convenience alias for utcSecond.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcSeconds(start: Date, stop: Date, step?: number): Date[];

/**
 * Minutes Interval in Univarsal Coordinated Time (UTC); minutes (e.g., 01:02:00 AM); 60 seconds. Note that ECMAScript ignores leap seconds.
 */
export var utcMinute: CountableTimeInterval;

/**
 * This is a convenience alias for utcMinute.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcMinutes(start: Date, stop: Date, step?: number): Date[];

/**
 * Hours Interval in Univarsal Coordinated Time (UTC); Hours (e.g., 01:00 AM); 60 minutes.
 */
export var utcHour: CountableTimeInterval;

/**
 * This is a convenience alias for utcHour.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcHours(start: Date, stop: Date, step?: number): Date[];

/**
 * Days Interval in Univarsal Coordinated Time (UTC); days (e.g., February 7, 2012 at 12:00 AM); 24 hours.
 */
export var utcDay: CountableTimeInterval;

/**
 * This is a convenience alias for utcDay.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcDays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval in Local Time. Alias for sunday; 7 days and 168 hours.
 *
 */
export var utcWeek: CountableTimeInterval;

/**
 * This is a convenience alias for utcWeek.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcWeeks(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Sunday-based weeks in Univarsal Coordinated Time (UTC) (e.g., February 5, 2012 at 12:00 AM).
 * 7 days and 168 hours.
 */
export var utcSunday: CountableTimeInterval;

/**
 * This is a convenience alias for utcSunday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcSundays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Monday-based weeks in Univarsal Coordinated Time (UTC) (e.g., February 6, 2012 at 12:00 AM).
 * 7 days and 168 hours.
 */
export var utcMonday: CountableTimeInterval;

/**
 * This is a convenience alias for utcMonday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcMondays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Tuesday-based weeks in Univarsal Coordinated Time (UTC) (e.g., February 7, 2012 at 12:00 AM).
 * 7 days and 168 hours.
 */
export var utcTuesday: CountableTimeInterval;

/**
 * This is a convenience alias for utcTuesday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcTuesdays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Wednesday-based weeks in Univarsal Coordinated Time (UTC) (e.g., February 8, 2012 at 12:00 AM).
 * 7 days and 168 hours.
 */
export var utcWednesday: CountableTimeInterval;

/**
 * This is a convenience alias for utcWednesday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcWednesdays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Thursday-based weeks in Univarsal Coordinated Time (UTC) (e.g., February 9, 2012 at 12:00 AM).
 * 7 days and 168 hours.
 */
export var utcThursday: CountableTimeInterval;

/**
 * This is a convenience alias for utcThursday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcThursdays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Friday-based weeks in Univarsal Coordinated Time (UTC) (e.g., February 10, 2012 at 12:00 AM).
 * 7 days and 168 hours.
 */
export var utcFriday: CountableTimeInterval;

/**
 * This is a convenience alias for utcFriday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcFridays(start: Date, stop: Date, step?: number): Date[];

/**
 * Week Interval for Saturday-based weeks in Univarsal Coordinated Time (UTC) (e.g., February 11, 2012 at 12:00 AM).
 * 7 days and 168 hours.
 */
export var utcSaturday: CountableTimeInterval;

/**
 * This is a convenience alias for utcSaturday.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcSaturdays(start: Date, stop: Date, step?: number): Date[];

/**
 * Month Interval in Univarsal Coordinated Time (UTC); months (e.g., February 1, 2012 at 12:00 AM); ranges from 28 to 31 days.
 */
export var utcMonth: CountableTimeInterval;

/**
 * This is a convenience alias for utcMonth.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcMonths(start: Date, stop: Date, step?: number): Date[];

/**
 * Year Interval in Univarsal Coordinated Time (UTC); years (e.g., January 1, 2012 at 12:00 AM); ranges from 365 to 366 days.
 */
export var utcYear: CountableTimeInterval;

/**
 * This is a convenience alias for utcYear.range(...).
 *
 * @param start A start date object for the range.
 * @param stop A stop date object for the range.
 * @param step An optional number of steps to apply when calculating the dates in the range.
 */
export function utcYears(start: Date, stop: Date, step?: number): Date[];
