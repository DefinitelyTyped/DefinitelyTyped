// Type definitions for js-roman-numerals 1.1.0
// Project: https://github.com/bcotrim/roman-numerals
// Definitions by: Reece Dunham <https://rdil.rocks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

export namespace RomanNumeral {
    constructor(value: number): void;
    constructor(value: String): void;
    toInt(): number;
    toString(): String;
}
