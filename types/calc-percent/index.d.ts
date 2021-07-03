// Type definitions for calc-percent 1.0
// Project: https://github.com/kevva/calc-percent
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Calculate percentage
 * @param val - Value which should be calculated.
 * @param total - Total that val should be compared against.
 * @param [opts]
 */
declare function calc(val: number, total: number, opts?: calc.Options): string;

declare namespace calc {
    interface Options {
        /**
         * Number of decimals
         * @default 0
         */
        decimal?: number;
        /**
         * Append a suffix.
         * @default ''
         */
        suffix?: string;
    }
}

export = calc;
