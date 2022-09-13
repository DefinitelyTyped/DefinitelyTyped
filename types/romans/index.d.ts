// Type definitions for romans 2.0
// Project: https://github.com/qbunt/romanize#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// internal for type mapping
declare const roman_map: {
    M: 1000;
    CM: 900;
    D: 500;
    CD: 400;
    C: 100;
    XC: 90;
    L: 50;
    XL: 40;
    X: 10;
    IX: 9;
    V: 5;
    IV: 4;
    I: 1;
};

export type RomanCharacter = keyof typeof roman_map;
export type RomanNumeral = typeof roman_map[RomanCharacter];

/**
 * property containing all roman numeral characters
 * [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
 */
export const allChars: RomanCharacter[];
/**
 *  property containing [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
 */
export const allNumerals: RomanNumeral[];

/**
 * takes in a floating point number, returns a roman numeral string
 * @param decimal
 * @throws {Error} if `decimal` is not an unsigned integer
 */
export function romanize(decimal: number): string;

/**
 * takes in a roman numeral string, returns a number
 * @param romanStr
 * @throws {Error} if `romanStr` is not valid roman numeral
 */
export function deromanize(romanStr: string): number;

export {};
