// Type definitions for onetime 3.0
// Project: https://github.com/sindresorhus/onetime#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export = oneTime;

/**
 * Ensure a function is only called once. When called multiple times it will return the return value from the first call.
 *
 * @param fn Function that should only be called once.
 * @returns A function that only calls `fn` once.
 */
declare function oneTime<T extends any[], R>(
    fn: (...args: T) => R,
    options?: oneTime.Options
): (...args: T) => R;

declare namespace oneTime {
    /**
     * Get the number of times `fn` has been called.
     *
     * @param fn Function to get call count from.
     * @returns A number representing how many times `fn` has been called.
     *
     * @example
     * const foo = onetime(() => {});
     * foo();
     * foo();
     * foo();
     *
     * console.log(onetime.callCount(foo));
     * //=> 3
     */
    function callCount(fn: (...args: any[]) => any): number | undefined;

    interface Options {
        /**
         * Throw an error when called more than once.
         * @default false
         */
        throw?: boolean;
    }
}
