// Type definitions for D3JS d3-format module v1.0.2
// Project: https://github.com/d3/d3-format/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Specification of locale to use when creating a new FormatLocaleObject
 */
export interface FormatLocaleDefinition {
    /**
     * The decimal point (e.g., ".")
     */
    decimal: '.' | ',';
    /**
     * The group separator (e.g., ","). Note that the thousands property is a misnomer, as\
     * the grouping definition allows groups other than thousands.
     */
    thousands: '.' | ',';
    /**
     * The array of group sizes (e.g., [3]), cycled as needed.
     */
    grouping: number[];
    /**
     * The currency prefix and suffix (e.g., ["$", ""])
     */
    currency: [string, string];
}


export interface FormatLocaleObject {

    /**
     * Returns a new format function for the given string specifier. The returned function
     * takes a number as the only argument, and returns a string representing the formatted number.
     *
     * @param specifier A Specifier string
     */
    format(specifier: string): (n: number) => string;

    /**
     * Returns a new format function for the given string specifier. The returned function
     * takes a number as the only argument, and returns a string representing the formatted number.
     * The returned function will convert values to the units of the appropriate SI prefix for the
     * specified numeric reference value before formatting in fixed point notation.
     *
     * @param specifier A Specifier string
     * @param value The reference value to determine the appropriate SI prefix.
     */
    formatPrefix(specifier: string, value: number): (n: number) => string;
}


export interface FormatSpecifier {
    fill: string;
    align: string;
    sign: string;
    symbol: string;
    zero: boolean;
    width: number;
    comma: boolean;
    precision: number;
    type: string;
    toString(): string;
}

/**
 * Create a new locale-based object which exposes format(...) and formatPrefix(...)
 * methods for the specified locale.
 */
export function formatLocale(locale: FormatLocaleDefinition): FormatLocaleObject;

/**
 * Create a new locale-based object which exposes format(...) and formatPrefix(...)
 * methods for the specified locale definition. The specified locale definition will be
 * set as the new default locale definition.
 */
export function formatDefaultLocale(defaultLocale: FormatLocaleDefinition): FormatLocaleObject;

/**
 * Returns a new format function for the given string specifier. The returned function
 * takes a number as the only argument, and returns a string representing the formatted number.
 *
 * Uses the current default locale.
 *
 * @param specifier A Specifier string
 */
export function format(specifier: string): (n: number) => string;

/**
 * Returns a new format function for the given string specifier. The returned function
 * takes a number as the only argument, and returns a string representing the formatted number.
 * The returned function will convert values to the units of the appropriate SI prefix for the
 * specified numeric reference value before formatting in fixed point notation.
 *
 *  Uses the current default locale.
 *
 * @param specifier A Specifier string
 * @param value The reference value to determine the appropriate SI prefix.
 */
export function formatPrefix(specifier: string, value: number): (n: number) => string;

/**
 * Parses the specified specifier, returning an object with exposed fields that correspond to the
 * format specification mini-language and a toString method that reconstructs the specifier.
 *
 * @param specifier A specifier string.
 */
export function formatSpecifier(specifier: string): FormatSpecifier;

/**
 * Returns a suggested decimal precision for fixed point notation given the specified numeric step value.
 *
 * @param step The step represents the minimum absolute difference between values that will be formatted.
 * (This assumes that the values to be formatted are also multiples of step.)
 */
export function precisionFixed(step: number): number;

/**
 * Returns a suggested decimal precision for use with locale.formatPrefix given the specified
 * numeric step and reference value.
 *
 * @param step The step represents the minimum absolute difference between values that will be formatted.
 * (This assumes that the values to be formatted are also multiples of step.)
 * @param value Reference value determines which SI prefix will be used.
 */
export function precisionPrefix(step: number, value: number): number;


/**
 * Returns a suggested decimal precision for format types that round to significant digits
 * given the specified numeric step and max values.
 *
 * @param step The step represents the minimum absolute difference between values that will be formatted.
 * (This assumes that the values to be formatted are also multiples of step.)
 * @param max max represents the largest absolute value that will be formatted.
 */
export function precisionRound(step: number, max: number): number;
