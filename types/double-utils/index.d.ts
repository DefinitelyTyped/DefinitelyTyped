/**
 * @returns The sign bit. `0` is positive, `1` is negative.
 *
 * @example
 * import * as doubleUtils from 'double-utils'
 *
 * console.log(doubleUtils.sign(Math.PI))
 */
export function sign(double: number): 0 | 1;
/**
 * @returns The exponent part, which is a number between `[0, 2048)`.
 *
 * @example
 * import * as doubleUtils from 'double-utils'
 *
 * console.log(doubleUtils.exp(Math.PI))
 */
export function exp(double: number): number;
/**
 * @returns The fractional (or mantissa) part, which is a 52-bit number.
 *
 * @example
 * import * as doubleUtils from 'double-utils'
 *
 * console.log(doubleUtils.frac(Math.PI))
 */
export function frac(double: number): number;
/**
 * @returns All parts of a double, decomposed.
 *
 * @example
 * import * as doubleUtils from 'double-utils'
 *
 * console.log(doubleUtils.decompose(Math.PI))
 */
export function decompose(double: number): [sign: number, exp: number, frac: number];
/**
 * Print the number as a bit string.
 *
 * @param double The number to print.
 * @param guide Whether to print an optional guide.
 *
 * @example
 * import * as doubleUtils from 'double-utils'
 *
 * console.log(doubleUtils.format(Math.PI))
 */
export function format(
    double: number,
    /** @default true */
    guide?: boolean,
): string;
