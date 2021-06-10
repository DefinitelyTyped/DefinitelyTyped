// Type definitions for date-and-time 0.13
// Project: https://github.com/knowledgecode/date-and-time
// Definitions by: Daniel Plisetsky <https://github.com/danplisetsky>
//                 Justin Grant <https://github.com/justingrant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PreparseResult {
    /** Year */
    Y: number;
    /** Month */
    M: number;
    /** Day */
    D: number;
    /** 24-hour */
    H: number;
    /** Meridiem */
    A: number;
    /** 12-hour */
    h: number;
    /** Minute */
    m: number;
    /** Second */
    s: number;
    /** Millisecond */
    S: number;
    /** Timezone offset */
    Z: number;
    /** Pointer offset */
    _index: number;
    /** Length of the date string */
    _length: number;
    /** Token matching count */
    _match: number;
}

/** @deprecated */
export type getDelta = () => number;

export interface SubtractResult {
    toMilliseconds: () => number;
    toSeconds: () => number;
    toMinutes: () => number;
    toHours: () => number;
    toDays: () => number;
}
/** @deprecated Use `SubtractResult` instead */
export type Subtract = SubtractResult;

/**
 * Compiling a format string
 * @param formatString - Format string
 * @returns The compiled object
 */
export function compile(formatString: string): string[];

/**
 * Pre-parsing a date string
 * @param dateString - Date string
 * @param formatter - Format string or a compiled object
 * @returns The date structure
 */
export function preparse(dateString: string, formatString: string | string[]): PreparseResult;

/**
 * Formatting a date
 * @param dateObj - Date object
 * @param formatter - Format string or a compiled object
 * @param utc - Output as UTC?
 * @returns The formatted string
 *
 */
export function format(dateObj: Date, formatString: string | string[], utc?: boolean): string;

/**
 * Parsing a date string
 * @param dateString - Date string
 * @param formatter - Format string or a compiled object
 * @param [utc] - Input as UTC
 * @returns The constructed date
 */
export function parse(dateString: string, formatter: string | string[], utc?: boolean): Date;

/**
 * Validation
 * @param dateValue - Date string or preparsed date structure
 * @param formatter - Format string or a compiled object
 * @returns Whether the date string is a valid date
 */
export function isValid(dateValue: string | PreparseResult, formatter?: string | string[]): boolean;

/**
 * Adding years
 * @param dateObj - Date object
 * @param years - Number of years to add
 * @returns The date after adding the value
 */
export function addYears(dateObj: Date, years: number): Date;

/**
 * Adding months
 * @param dateObj - Date object
 * @param months - Number of months to add
 * @returns The date after adding the value
 */
export function addMonths(dateObj: Date, months: number): Date;

/**
 * Adding days
 * @param dateObj - Date object
 * @param days - Number of days to add
 * @returns The date after adding the value
 */
export function addDays(dateObj: Date, days: number): Date;

/**
 * Adding hours
 * @param dateObj - Date object
 * @param hours - Number of hours to add
 * @returns The date after adding the value
 */
export function addHours(dateObj: Date, hours: number): Date;

/**
 * Adding minutes
 * @param dateObj - Date object
 * @param minutes - Number of minutes to add
 * @returns The date after adding the value
 */
export function addMinutes(dateObj: Date, minutes: number): Date;

/**
 * Adding seconds
 * @param dateObj - Date object
 * @param seconds - Number of seconds to add
 * @returns The date after adding the value
 */
export function addSeconds(dateObj: Date, seconds: number): Date;

/**
 * Adding milliseconds
 * @param dateObj - Date object
 * @param milliseconds - Number of milliseconds to add
 * @returns The date after adding the value
 */
export function addMilliseconds(dateObj: Date, milliseconds: number): Date;

/**
 * Subtracting
 * @param date1 - Date object
 * @param date2 - Date object
 * @returns The result object subtracting date2 from date1
 */
export function subtract(date1: Date, date2: Date): SubtractResult;

/**
 * Leap year
 * @param y - Year as a number
 * @returns Whether the year is a leap year
 */
export function isLeapYear(y: number): boolean;

/**
 * Comparison of dates
 * @param date1 - Date object
 * @param date2 - Date object
 * @returns Whether the dates are the same day (times are ignored)
 */
export function isSameDay(date1: Date, date2: Date): boolean;

/**
 * Change locale or setting a new locale definition
 * @param [code] - Language code
 * @param [locale] - locale definition
 * @returns Current language code
 */
export function locale(code?: string, locale?: Record<string, unknown>): string;

/**
 * Locale extension
 * @param extension - Locale extension
 */
export function extend(extension: Record<string, unknown>): void;

/**
 * Plugin import or definition
 * @param name - Plugin name
 * @param extension - Locale extension
 */
export function plugin(name: string, extension?: Record<string, unknown>): void;
