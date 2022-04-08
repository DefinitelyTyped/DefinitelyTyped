// Type definitions for romans 1.0
// Project: https://github.com/qbunt/romanize#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A no dependency, simple lib for converting from decimal notation to roman numerals and back again
 */
export as namespace romans;

/**
 * property containing all roman numeral characters
 * [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
 */
export const allChars: string[];

/**
 *  property containing [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
 */
export const allNumerals: number[];

/**
 * takes in a floating point number, returns a roman numeral string
 * @param decimal
 */
export function romanize(decimal: number): string;

/**
 * takes in a roman numeral string, returns a number
 * @param romanStr
 */
export function deromanize(romanStr: string): number;
