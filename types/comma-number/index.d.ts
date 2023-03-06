// Type definitions for comma-number 2.1
// Project: https://github.com/elidoran/comma-number
// Definitions by: Corey Rice <https://github.com/coreyar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function commaNumber(
    inputNumber: number | string,
    optionalSeparator?: string,
    optionalDecimalChar?: string,
): string;

declare namespace commaNumber {
    function bindWith(separator: string, decimalChar: string): (num: number | string) => string;
}

export = commaNumber;
