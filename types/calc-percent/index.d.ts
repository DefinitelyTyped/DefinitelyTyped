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
        decimal?: number | undefined;
        /**
         * Append a suffix.
         * @default ''
         */
        suffix?: string | undefined;
    }
}

export = calc;
