// Type definitions for date-and-time 0.6
// Project: https://github.com/knowledgecode/date-and-time
// Definitions by: Daniel Plisetsky <https://github.com/danplisetsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type getDelta = () => number;

export interface Subtract {
    toMilliseconds: getDelta;
    toSeconds: getDelta;
    toMinutes: getDelta;
    toHours: getDelta;
    toDays: getDelta;
}

/**
 * Formatting a date
 * @param dateObj - Date object
 * @param formatString - Format string
 * @param [utc] - Output as UTC
 * @returns The formatted string
 *
 */
export function format(
    dateObj: Date,
    formatString: string,
    utc?: boolean
): string;

/**
 * Parsing a date string
 * @param dateString - date string
 * @param formatString - format string
 * @param [utc] - input as UTC
 * @returns the constructed date or NaN
 */
export function parse(
    dateString: string,
    formatString: string,
    utc?: boolean
): Date | number;

/**
 * Validation
 * @param dateString - Date string
 * @param formatString - Format string
 * @returns Whether the date string is a valid date
 */
export function isValid(dateString: string, formatString: string): boolean;

/**
 * Adding years
 * @param dateObj - Date object
 * @param years - Adding year
 * @returns The date after adding the value
 */
export function addYears(dateObj: Date, years: number): Date;

/**
 * Adding months
 * @param dateObj - Date object
 * @param months - Adding month
 * @returns The date after adding the value
 */
export function addMonths(dateObj: Date, months: number): Date;

/**
 * Adding days
 * @param dateObj - Date object
 * @param days - Adding day
 * @returns The date after adding the value
 */
export function addDays(dateObj: Date, days: number): Date;

/**
 * Adding hours
 * @param dateObj - Date object
 * @param hours - Adding hour
 * @returns The date after adding the value
 */
export function addHours(dateObj: Date, hours: number): Date;

/**
 * Adding minutes
 * @param dateObj - Date object
 * @param minutes - Adding minute
 * @returns The date after adding the value
 */
export function addMinutes(dateObj: Date, minutes: number): Date;

/**
 * Adding seconds
 * @param dateObj - date object
 * @param seconds - adding second
 * @returns The date after adding the value
 */
export function addSeconds(dateObj: Date, seconds: number): Date;

/**
 * Adding milliseconds
 * @param dateObj - Date object
 * @param milliseconds - Adding millisecond
 * @returns The date after adding the value
 */
export function addMilliseconds(dateObj: Date, milliseconds: number): Date;

/**
 * Subtracting
 * @param date1 - Date object
 * @param date2 - Date object
 * @returns The result object after subtracting the date
 */
export function subtract(date1: Date, date2: Date): Subtract;

/**
 * Leap year
 * @param dateObj - Date object
 * @returns Whether the year is a leap year
 */
export function isLeapYear(dateObj: Date): boolean;

/**
 * Comparison of dates
 * @param date1 - Target for comparison
 * @param date2 - Target for comparison
 * @returns Whether the dates are the same day (times are ignored)
 */
export function isSameDay(date1: Date, date2: Date): boolean;

/**
 * Setting a locale
 * @param [code] - Language code
 * @returns Current language code
 */
export function locale(code?: string): string;

/**
 * Getting a definition of locale
 * @param [code] - Language code
 * @returns Definition of locale
 */
export function getLocales(code?: string): any;

/**
 * Adding a new definition of locale
 * @param code - Language code
 * @param options - Definition of locale
 * @returns
 */
export function setLocales(code: string, options: any): void;
