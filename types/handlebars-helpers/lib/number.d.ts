/**
 * Format a number to it's equivalent in bytes. If a string is passed,
 * it's length will be formatted and returned.
 *
 * **Examples:**
 *
 *   - `'foo' => 3 B`
 *   - `13661855 => 13.66 MB`
 *   - `825399 => 825.39 kB`
 *   - `1396 => 1.4 kB`
 *
 * @param {Number|String} `number`
 * @return {String}
 * @api public
 */
export function bytes(number: number | string, precision: any, options: any): string;
/**
 * Add commas to numbers
 *
 * @param {Number} `num`
 * @return {Number}
 * @api public
 */
export function addCommas(num: number): number;
/**
 * Convert a string or number to a formatted phone number.
 *
 * @param {Number|String} `num` The phone number to format, e.g. `8005551212`
 * @return {Number} Formatted phone number: `(800) 555-1212`
 * @source http://bit.ly/QlPmPr
 * @api public
 */
export function phoneNumber(num: number | string): number;
/**
 * Abbreviate numbers to the given number of `precision`. This is for
 * general numbers, not size in bytes.
 *
 * @param {Number} `number`
 * @param {Number} `precision`
 * @return {String}
 * @api public
 */
export function toAbbr(number: number, precision: number): string;
/**
 * Returns a string representing the given number in exponential notation.
 *
 * ```handlebars
 * {{toExponential number digits}};
 * ```
 * @param {Number} `number`
 * @param {Number} `fractionDigits` Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
 * @return {Number}
 * @api public
 */
export function toExponential(number: number, digits: any): number;
/**
 * Formats the given number using fixed-point notation.
 *
 * ```handlebars
 * {{toFixed "1.1234" 2}}
 * //=> '1.12'
 * ```
 * @param {Number} `number`
 * @param {Number} `digits` (Optional) The number of digits to appear after the decimal point; this may be a value between 0 and 20. If this argument is omitted, it is treated as 0.
 * @return {String} A string representing the given number using fixed-point notation.
 * @api public
 */
export function toFixed(number: number, digits: number): string;
/**
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */
export function toFloat(number: number): number;
/**
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */
export function toInt(number: number): number;
/**
 * Returns a string representing the `Number` object to the specified precision.
 *
 * ```handlebars
 * {{toPrecision "1.1234" 2}}
 * //=> '1.1'
 * ```
 * @param {Number} `number`
 * @param {Number} `precision` (Optional) An integer specifying the number of significant digits. If precison is not between 1 and 100 (inclusive), it will be coerced to `0`.
 * @return {String} A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits.
 * @api public
 */
export function toPrecision(number: number, precision: number): string;
