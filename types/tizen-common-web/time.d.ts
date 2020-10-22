/**
 * Time API: https://docs.tizen.org/application/web/api/5.5/device_api/wearable/tizen/time.html
 */

/**
 *  The Time API provides information regarding date/time and time zones.
 *
 * @since 1.0
 *
 * The JavaScript Date object does not have full timezone support.
 * Date objects allow only simple representations to denote a particular location's
 * offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
 * offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
 * that a location is 5 hours and 30 minutes ahead of UTC +00:00.
 * The issue with this method is not getting the correct
 * local time for a given date. The existing methods are sufficient for this purpose.
 * The issue is correctly converting to and from local time and UTC for all points in
 * time - in any of the past, present, and future - based on an initial time provided.
 * This is important for defining relative dates, where a time in a given location may
 * observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
 * or any other changes that may occur to a location's time zone over time.
 * Without the communication of the explicit time zone rules governing a given date and
 * time, the ability to effectively calculate the offset of the local time to UTC or to
 * any other time zone at any point in the past or future is lost.
 *
 * This API can be used to get TZDate objects with full time zone support, convert them
 * between timezones, retrieve available timezones.
 *
 * For more information on the Time features, see [Time Guide](https://docs.tizen.org/application/web/guides/device/time/).
 */

import { SuccessCallback } from './tizen';

/**
 * The TimeUtil interface that provides access to the time API.
 *
 * This interface offers methods to manage date/time as well as timezones such as:
 * - Get the current date/time using getCurrentDateTime().
 * - Get timezones using getLocalTimezone() and getAvailableTimezones().
 */
export interface TimeUtil {
    /**
     * Gets the current date/time.
     *
     *
     * @return The current TZDate object.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getCurrentDateTime(): TZDate;
    /**
     * Gets the identifier of the local system timezone.
     *
     *
     * @return The local timezone.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getLocalTimezone(): string;
    /**
     * Gets synchronously the identifiers of the timezones supported by the device.
     *
     * Zero or more slashes separate different components of a timezone identifier,
     * with the most general descriptor first and the most specific one last. For example,
     * "Europe/Berlin", "America/Argentina/Buenos_Aires".
     *
     *
     * @return Array of time zone identifiers.
     *
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getAvailableTimezones(): string[];

    /**
     * Gets the date format according to the system's locale settings.
     *
     * These expressions may be used in the returned string:
     * - `d` = day number (1 to 31)
     * - `D` = day name
     * - `m` = month number (1 to 12)
     * - `M` = month name
     * - `y` = year
     *
     * Examples of string formats include: "d/m/y", "y-d-m", "D, M d y".
     *
     *
     * @param shortformat The flag indicating whether the user is interested in the short.
     * date format (23/10/2011) instead of a long date format ("Monday, October 23 2011") <br>
     * By default, this attribute is set to false.
     *
     * @return The date format according to the system's locale settings.
     *
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getDateFormat(shortformat?: boolean): string;
    /**
     * Gets the time format according to the system's locale settings.
     *
     * These expressions may be used in the returned string:
     * - `h` = hours (0 to 23 or 1 to 12 if AM/PM display)
     * - `m` = minutes (0 to 59)
     * - `s` = seconds (0 to 59)
     * - `a`" = AM/PM display
     *
     * Examples of string formats include: "h:m:s ap", "h:m:s".
     *
     *
     * @return The time format according to the system's locale settings.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getTimeFormat(): string;
    /**
     * Checks whether the given year is a leap year.
     *
     *
     * @param year The year to check.
     *
     * @return ***true***, if the year is a leap year.
     *
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type InvalidValuesError, if any of the input
     * parameters contain an invalid value.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    isLeapYear(year: number): boolean;
    /**
     * Sets a listener to receive notification of changes to the time/date on a device.
     *
     * Listener set with `setTimezoneChangeListener()` method is called when device time was set by the user. <br>
     *
     * @since 2.3
     *
     * @param changeCallback Callback method to be invoked when device time was set <br>
     *        It is not invoked when time passes naturally.
     *
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    setDateTimeChangeListener(changeCallback: SuccessCallback): void;
    /**
     * Unsets the listener to stop receiving notification of changes to the time/date on a device.
     *
     * Calling this function has no effect if listener is not set.
     *
     * @since 2.3
     *
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    unsetDateTimeChangeListener(): void;
    /**
     * Sets a listener to receive notification of changes to the time zone on a device.
     *
     * Listener set with `setTimezoneChangeListener()` method is called when device time zone has changed.
     *
     * @since 2.3
     *
     * @param changeCallback Callback method that is invoked when the time zone has changed.
     *
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    setTimezoneChangeListener(changeCallback: SuccessCallback): void;
    /**
     * Unsets the listener to stop receiving notification of changes to the time zone on a device.
     *
     * Calling this function has no effect if listener is not set.
     *
     * @since 2.3
     *
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    unsetTimezoneChangeListener(): void;
}

export interface TZDateConstructor {
    /**
     * @param datetime Date and time passed as a javascript Date object. If this parameter is omitted, current date and time will be used.
     * @param timezone The time zone identifier, e.g. "Seoul/Korea" or "Europe/Berlin". If this parameter is omitted, the device's default time zone will be used.
     */
    new (datetime?: Date, timezone?: string): TZDate;
    new (
        year: number,
        month: number,
        day: number,
        hours?: number,
        minutes?: number,
        seconds?: number,
        milliseconds?: number,
        timezone?: string,
    ): TZDate;
}

export class TZDate {
    /**
     * @param datetime Date and time passed as a javascript Date object. If this parameter is omitted, current date and time will be used.
     * @param timezone The time zone identifier, e.g. "Seoul/Korea" or "Europe/Berlin". If this parameter is omitted, the device's default time zone will be used.
     */
    constructor(datetime?: Date, timezone?: string);
    constructor(
        year: number,
        month: number,
        day: number,
        hours?: number,
        minutes?: number,
        seconds?: number,
        milliseconds?: number,
        timezone?: string,
    );
    /**
     * Gets the day of the month (from 1-31).
     * @return The day of the month.
     */
    getDate(): number;
    /**
     * Sets the day of the month (from 1-31).
     *
     * If the value passed as a parameter is greater than the last day of current month or smaller than 1, the TZDate will be automatically recalculated to reflect this.
     * For example, if TZDate's month is May and parameter is 32, it will be set to June 1.
     * @param date Date to set.
     */
    setDate(date: number): void;
    /**
     * Gets the day of the week (from 0-6). 0 denotes Sunday, 1 denotes Monday and so on.
     *
     *
     * @return The day of the week.
     */
    getDay(): number;
    /**
     * Gets the year.
     *
     * Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
     * For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
     *
     * @return The year.
     */
    getFullYear(): number;
    /**
     * Sets the year.
     * @param year Year to set.
     *
     */
    setFullYear(year: number): void;
    /**
     * Gets the hour (0-23).
     * @return The hour.
     */
    getHours(): number;
    /**
     * Sets the hour (0-23).
     *
     * If the value passed as a parameter is greater than 23 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setHours(24) results in setting hour to 00:00 and date to the next day.
     *
     * @param hours Hours to set.
     */
    setHours(hours: number): void;
    /**
     * Gets the milliseconds (from 0-999).
     *
     * @return The milliseconds.
     *
     */
    getMilliseconds(): number;
    /**
     * Sets the milliseconds (from 0-999).
     *
     * If the value passed as a parameter is greater than 999 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setMilliseconds(1000) results in setting milliseconds to 0 and adding one second.
     *
     * @param ms Milliseconds to set.
     */
    setMilliseconds(ms: number): void;
    /**
     * Gets the minutes (from 0-59).
     * @return The minutes.
     *
     */
    getMinutes(): number;
    /**
     * Sets the minutes.
     *
     * If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setMinutes(60) results in setting minutes to 0 and adding one hour.
     *
     *
     * @param minutes Minutes to set.
     *
     */
    setMinutes(minutes: number): void;
    /**
     * Gets the month (from 0-11). <br>
     *  Note: January is denoted as 0, February as 1, and so on till December, which is denoted as 11.
     * @return The month.
     *
     */
    getMonth(): number;
    /**
     * Sets the month (from 0-11).
     *
     * If the value passed as a parameter is greater than 11 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setMonth(12) results in setting month to 0 and adding one year.
     * @param month Month to set.
     */
    setMonth(month: number): void;
    /**
     * Gets the seconds (from 0-59).
     * @return The seconds.
     */
    getSeconds(): number;
    /**
     * Sets the seconds (from 0-59).
     *
     * If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setSeconds(60) results in setting seconds to 0 and adding one minute.
     * @param seconds Seconds to set.
     */
    setSeconds(seconds: number): void;
    /**
     * Gets the day of the month, according to universal time (from 1-31).
     * @return The day of the month, according to universal time.
     */
    getUTCDate(): number;
    /**
     * Sets the day of the month, according to universal time (from 1-31).
     *
     * If the value passed as a parameter is greater than the last day of current month or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCDate(32) when TZDate's month is May results in setting it to June 1.
     * @param date Date to set.
     */
    setUTCDate(date: number): void;
    /**
     * Gets the day of the week, according to universal time (from 0-6).
     * @return The day of the week, according to universal time.
     */
    getUTCDay(): number;
    /**
     * Gets the year, according to universal time.
     *
     * Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
     * For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
     * @return The year, according to universal time.
     */
    getUTCFullYear(): number;
    /**
     * Sets the year, according to universal time.
     * @param year Year to set.
     */
    setUTCFullYear(year: number): void;
    /**
     * Gets the hour, according to universal time (0-23).
     * @return The hour, according to universal time.
     */
    getUTCHours(): number;
    /**
     * Sets the hour, according to universal time (0-23).
     *
     * If the value passed as a parameter is greater than 23 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCHours(24) results in setting hour to 0 and adding one day.
     * @param hours Hours to set.
     */
    setUTCHours(hours: number): void;
    /**
     * Gets the milliseconds, according to universal time (from 0-999).
     * @return The milliseconds, according to universal time.
     */
    getUTCMilliseconds(): number;
    /**
     * Sets the milliseconds, according to universal time (from 0-999).
     *
     * If the value passed as a parameter is greater than 999 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCMilliseconds(1000) results in setting milliseconds to 0 and adding one second.
     * @param ms Milliseconds to set.
     */
    setUTCMilliseconds(ms: number): void;
    /**
     * Gets the minutes, according to universal time (from 0-59).
     * @return The minutes, according to universal time.
     */
    getUTCMinutes(): number;
    /**
     * Sets the minutes, according to universal time (from 0-59).
     *
     * If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCMinutes(60) results in setting minutes to 0 and adding one hour.
     * @param minutes Minutes to set.
     */
    setUTCMinutes(minutes: number): void;
    /**
     * Gets the month, according to universal time (from 0-11). <br>
     *   Note: January is denoted as 0, February as 1 and so on till December, which is denoted as 11.
     * @return The month, according to universal time.
     */
    getUTCMonth(): number;
    /**
     * Sets the month, according to universal time (from 0-11).
     *
     * If the value passed as a parameter is greater than 11 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCMonth(12) results in setting month to 0 and adding one year.
     * @param month Month to set.
     */
    setUTCMonth(month: number): void;
    /**
     * Gets the seconds, according to universal time (from 0-59).
     * @return The seconds, according to universal time.
     */
    getUTCSeconds(): number;
    /**
     * Sets the seconds, according to universal time (from 0-59).
     *
     * If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCSeconds(60) results in setting seconds to 0 and adding one minute.
     * @param seconds Seconds to set.
     */
    setUTCSeconds(seconds: number): void;
    /**
     * Gets the timezone identifier.
     *
     * Zero or more slashes separate different components, with the most general
     * descriptor first and the most specific one last. For example,
     * "Europe/Berlin", "America/Argentina/Buenos_Aires".
     *
     * This attribute uniquely identifies the timezone.
     * @return The string timezone identifier. If TZDate is invalid, it will return "Invalid Date".
     */
    getTimezone(): string;
    /**
     * Gets a copy of the TZDate converted to a given time zone.
     * @param tzid Timezone identifier to set.
     * @return The new TZDate in given Timezone.
     *
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type InvalidValuesError, if the provided TZID
     * is not recognized as a valid timezone identifier.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    toTimezone(tzid: string): TZDate;
    /**
     * Gets a copy of the TZDate converted to the local time zone.
     * @return The new TZDate in local Timezone.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    toLocalTimezone(): TZDate;
    /**
     * Gets a copy of the TZDate converted to Coordinated Universal Time (UTC).
     * @return The Date/Time in UTC.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    toUTC(): TZDate;
    /**
     * Calculates the difference with another TZDate object.
     *
     * Calculates the difference in time between `this` and the other object.
     * This comparison method takes timezones into consideration for the comparison.
     *
     * The TimeDuration that is returned is effectively `this` - other.
     * The return value is a duration in milliseconds both TZDate objects have a time component, in days, otherwise.
     * The result value will be:
     * - Negative, if other is in the future
     * - 0 if the two date/times are equal
     * - Positive, if other is in the past
     * @param other The other Date/Time to compare to.
     * @return The duration in milliseconds between the two date/time objects
     * (or in days for comparison between dates with no time component).
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    difference(other: TZDate): TimeDuration;
    /**
     * Checks whether the TZDate is equal to another.
     *
     * This method takes the timezones into consideration and will return ***true*** if
     * the two TZDate objects represent the same instant in different timezones.
     * @param other Other Date/Time to compare to.
     * @return ***true*** if the 2 date/times are the same.
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    equalsTo(other: TZDate): boolean;
    /**
     * Checks whether the TZDate is earlier than another.
     *
     * This method takes the timezones into consideration.
     *
     *
     * @param other The other Date/Time to compare to.
     *
     * @return ***true***, if the Date/Time is earlier than the one passed in argument.
     *
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    earlierThan(other: TZDate): boolean;
    /**
     * Checks whether the TZDate is later than another.
     *
     * This method takes the timezones into consideration.
     * @param other The other Date/Time to compare to.
     * @return ***true***, if the Date/Time is later than the one passed in argument.
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    laterThan(other: TZDate): boolean;
    /**
     * Gets a new date by adding a duration to the current TZDate object.
     *
     * If the length of duration is negative, the new date/time will be
     * earlier than it used to.
     *
     * Note that calling this method does not alter the current object.
     * @param duration TimeDuration to add.
     * @return The new TZDate by adding a duration.
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    addDuration(duration: TimeDuration): TZDate;
    /**
     * Gets the date portion of a TZDate object as a string, using locale conventions.
     * @return The date portion of the TZDate object as a string, using locale conventions. If TZDate is invalid, it will return "Invalid Date".
     */
    toLocaleDateString(): string;
    /**
     * Gets the time portion of a TZDate object as a string, using locale conventions.
     * @return The time portion of the TZDate object as a string, using locale conventions. If TZDate is invalid, it will return "Invalid Date".
     */
    toLocaleTimeString(): string;
    /**
     * Converts a TZDate object to a string, using locale conventions.
     * @return The string representation of the TZDate object, using locale conventions. If TZDate is invalid, it will return "Invalid Date".
     */
    toLocaleString(): string;
    /**
     * Gets the date portion of a TZDate object as a string.
     * @return The date portion of the TZDate object as a string. If TZDate is invalid, it will return "Invalid Date".
     */
    toDateString(): string;
    /**
     * Gets the time portion of a TZDate object as a string.
     * @return The time portion of the TZDate object as a string. If TZDate is invalid, it will return "Invalid Date".
     */
    toTimeString(): string;
    /**
     * Converts a TZDate object to a string.
     * @return The string representation of the TZDate object. If TZDate is invalid, it will return "Invalid Date".
     */
    toString(): string;
    /**
     * Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
     *
     * Returns the offset (in seconds) from UTC of the timezone, accounting for daylight
     * savings if it is in the timezone. For example, if time zone is GMT+8, it will return -32,400.
     * @return The offset from UTC in seconds.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    secondsFromUTC(): number;
    /**
     * Checks whether Daylight Saving Time(DST) is active for this TZDate.
     *
     * Indicates if daylight savings are in effect for the time zone and instant
     * identified by the TZDate object.
     * @return The flag indicating whether the daylight saving are in effect.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    isDST(): boolean;
    /**
     * Gets the date of the previous daylight saving time transition for the timezone.
     * @return The date of the previous daylight saving transition (before the instant identified by the TZDate).
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getPreviousDSTTransition(): TZDate | undefined;
    /**
     * Gets the date of the next daylight saving time transition for the timezone.
     * @return The date of the next daylight saving transition (after the instant identified by the TZDate).
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getNextDSTTransition(): TZDate | undefined;
}

/**
 * The TimeDuration interface that contains the length and its associated time unit.
 * @since 1.0
 */
export interface TimeDurationConstructor {
    new (length: number, unit: TimeDurationUnit): TimeDuration;
}

/**
 * The TimeDuration interface that contains the length and its associated time unit.
 *
 */
export class TimeDuration {
    constructor(length: number, unit: TimeDurationUnit);
    /**
     * The duration length.
     *
     * The unit of the duration length (milliseconds, seconds, minutes, hours, or days)
     * is determined by the duration unit attribute.
     */
    length: number;
    /**
     * The duration unit (milliseconds, seconds, minutes, hours, or days).
     *
     * The default value is "MSECS" (milliseconds unit).
     */
    unit: TimeDurationUnit;
    /**
     * Calculates the difference between two TimeDuration objects.
     *
     * Calculates the difference in time between `this` and `other`.
     * The TimeDuration that is returned is effectively `first` - `other` (that is: positive if the first parameter is larger).
     *
     * The returned TimeDuration is the biggest possible unit without losing the precision.
     * @param other Other TimeDuration object to compare to.
     * @return New TimeDuration object corresponding to the result of `this` - `other`.
     *
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    difference(other: TimeDuration): TimeDuration;
    /**
     * Checks whether the TimeDuration is equal to another.
     *
     * This method takes the units into consideration and will return true
     * if the two TimeDuration objects represent the same duration in different units.
     * @param other Other TimeDuration object to compare to.
     * @return ***true*** if the two TimeDuration object represent the same duration.
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    equalsTo(other: TimeDuration): boolean;
    /**
     * Checks whether the TimeDuration is lower than another.
     *
     * This method takes the units into consideration when doing the comparison.
     * @param other Other TimeDuration object to compare to.
     * @return ***true*** if the TimeDuration is less than `other`.
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    lessThan(other: TimeDuration): boolean;
    /**
     * Checks whether the TimeDuration is greater than another.
     *
     * This method takes the units into consideration when doing the comparison.
     * @param other Other TimeDuration object to compare to.
     * @return ***true*** if the TimeDuration is greater than `other`.
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throw WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    greaterThan(other: TimeDuration): boolean;
}

/**
 * Specifies the TimeDuration unit (milliseconds, seconds, minutes, hours or days).
 *
 * At least the following values must be supported:
 * - `MSECS` - Indicates a duration in milliseconds
 * - `SECS` - Indicates a duration in seconds
 * - `MINS` - Indicates a duration in minutes
 * - `HOURS` - Indicates a duration in hours
 * - `DAYS` - Indicates a duration in days
 */
export enum TimeDurationUnit {
    MSECS = 'MSECS',
    SECS = 'SECS',
    MINS = 'MINS',
    HOURS = 'HOURS',
    DAYS = 'DAYS',
}
