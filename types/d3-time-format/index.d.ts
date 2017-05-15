// Type definitions for d3JS d3-time-format module 2.0
// Project: https://github.com/d3/d3-time-format/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 2.0.2

/**
 * Specification of time locale to use when creating a new TimeLocaleObject
 */
export interface TimeLocaleDefinition {
    /**
     * The date and time (%c) format specifier (e.g., "%a %b %e %X %Y").
     */
    dateTime: string;
    /**
     * The date (%x) format specifier (e.g., "%m/%d/%Y").
     */
    date: string;
    /**
     *  The time (%X) format specifier (e.g., "%H:%M:%S").
     */
    time: string;
    /**
     * The A.M. and P.M. equivalents (e.g., ["AM", "PM"]).
     */
    periods: [string, string];
    /**
     * The full names of the weekdays, starting with Sunday.
     */
    days: [string, string, string, string, string, string, string];
    /**
     * The abbreviated names of the weekdays, starting with Sunday.
     */
    shortDays: [string, string, string, string, string, string, string];
    /**
     * The full names of the months (starting with January).
     */
    months: [string, string, string, string, string, string, string, string, string, string, string, string];
    /**
     * the abbreviated names of the months (starting with January).
     */
    shortMonths: [string, string, string, string, string, string, string, string, string, string, string, string];
}

export interface TimeLocaleObject {
    format(specifier: string): (date: Date) => string;
    parse(specifier: string): (dateString: string) => (Date | null);
    utcFormat(specifier: string): (date: Date) => string;
    utcParse(specifier: string): (dateString: string) => (Date | null);
}

/**
 * Create a new time-locale-based object which exposes time-formatting
 * methods for the specified locale definition.
 */
export function timeFormatLocale(timeLocale: TimeLocaleDefinition): TimeLocaleObject;

/**
 * Create a new time-locale-based object which exposes time-formatting
 * methods for the specified locale definition. The new time locale definition
 * will be set as the new default time locale.
 */
export function timeFormatDefaultLocale(defaultTimeLocale: TimeLocaleDefinition): TimeLocaleObject;

export function timeFormat(specifier: string): (date: Date) => string;

export function timeParse(specifier: string): (dateString: string) => (Date | null);

export function utcFormat(specifier: string): (date: Date) => string;

export function utcParse(specifier: string): (dateString: string) => (Date | null);

export function isoFormat(date: Date): string;

export function isoParse(dateString: string): Date;
