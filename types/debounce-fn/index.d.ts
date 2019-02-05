// Type definitions for debounce-fn 1.0
// Project: https://github.com/sindresorhus/debounce-fn#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export = debounce;

/**
 * Returns a debounced function that delays calling the `input` function until after `wait` milliseconds
 * have elapsed since the last time the debounced function was called.
 *
 * It comes with a `.cancel()` method to cancel any scheduled `input` function calls.
 */
declare function debounce<TArgs extends any[], TResult>(
    input: (...args: TArgs) => TResult,
    options?: debounce.Options
): ((...args: TArgs) => TResult | undefined) & { cancel(): void };

declare namespace debounce {
    interface Options {
        /**
         * Time to wait until the `input` function is called.
         * @default 0
         */
        wait?: number;
        /**
         * Trigger the function on the leading edge instead of the trailing edge of the `wait` interval.
         * For example, can be useful for preventing accidental double-clicks on a "submit" button
         * from firing a second time.
         */
        immediate?: boolean;
    }
}
