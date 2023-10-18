export = afterAllResults;

/**
 * Runs multiple async functions in parallel and collects all their results in an array.
 *
 * **Note:** It is important that all `next()` calls are done on the same
 * tick as the initial call to `afterAll()`!
 *
 * @example
 * import afterAll = require('after-all-results');
 *
 * const next = afterAll((err, results: [string, number]) => {
 *   // all done!
 *   console.log(results);
 * });
 *
 * someAsyncFunctionProducingString(next());
 * anotherAsyncFunctionProducingNumber(next());
 *
 * @example
 * import afterAll = require('after-all-results');
 *
 * const next = afterAll((err, results: [string, boolean]) => {
 *   // results will be an array of `arg1` from below
 *   console.log('Done with everything!');
 * });
 *
 * // some exemplary async functions
 * declare function async1(cb: (err: Error | null, arg1: string, arg2: number) => void): void;
 * declare function async2(cb: (err: Error | null, arg1: boolean, arg2: string) => void): void;
 *
 * async1(
 *   next((err, ...args) => {
 *     const [arg1, arg2] = args as [string, number];
 *     console.log('Done with first call to async');
 *   }),
 * );
 *
 * async2(
 *   next((err, ...args) => {
 *     const [arg1, arg2] = args as [boolean, string];
 *     console.log('Done with second call to async');
 *   }),
 * );
 */
declare function afterAllResults<TResults extends any[]>(
    done: (err: Error | null, results: TResults) => void,
): (
    callback?: (err: Error | null, ...args: unknown[]) => void,
) => (err: Error | null, result: ArrayElementType<TResults>) => void;

type ArrayElementType<TArr extends unknown[]> = TArr extends ReadonlyArray<infer T> ? T : never;
