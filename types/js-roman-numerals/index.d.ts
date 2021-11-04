// Type definitions for js-roman-numerals 1.1
// Project: https://github.com/bcotrim/roman-numerals
// Definitions by: Ricardo Mello <https://github.com/ricmello>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

declare class RomanNumeral {
    constructor(value: number | string);
    toInt(): number;
    toString(): string;
}

export = RomanNumeral;
