// Type definitions for compute-quantile 1.0
// Project: https://github.com/compute-io/quantile
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Computes a quantile for a numeric array.
 */
declare function quantile(array: ArrayLike<number>, quantile: number, options?: quantile.Options): number;

declare namespace quantile {
    interface Options {
        /**
         * If the input `array` is already sorted in `__ascending__` order, you can set the `sorted` option to `true`.
         *
         * @default
         * false
         */
        sorted?: boolean;
    }
}

export = quantile;
