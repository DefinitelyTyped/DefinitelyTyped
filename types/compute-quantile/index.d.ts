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
        sorted?: boolean | undefined;
    }
}

export = quantile;
