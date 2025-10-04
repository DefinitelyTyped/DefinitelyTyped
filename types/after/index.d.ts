/**
 * Callback function type for the main callback
 */
type Callback<T = any> = (err: Error | null, result?: T) => void;

/**
 * Error callback function type
 */
type ErrorCallback = (err: Error) => void;

/**
 * Proxy function returned by after() that tracks call count
 */
interface AfterProxy<T = any> {
    (err: Error | null, result?: T): void;
    count: number;
}

/**
 * Creates a callback function that will only execute after being called a specified number of times.
 *
 * @param count - The number of times the returned function must be called before executing the callback
 * @param callback - The callback function to execute after the specified count is reached
 * @param err_cb - Optional error callback function for handling errors after the first error occurs
 * @returns A proxy function that tracks call count, or immediately executes the callback if count is 0
 *
 * @example
 * ```typescript
 * import after = require('after');
 *
 * const done = after(3, (err, result) => {
 *   if (err) console.error(err);
 *   else console.log('All done!', result);
 * });
 *
 * // Call done 3 times
 * done(null, 'first');
 * done(null, 'second');
 * done(null, 'third'); // This will trigger the callback
 * ```
 */
declare function after<T = any>(
    count: number,
    callback: Callback<T>,
    err_cb?: ErrorCallback
): AfterProxy<T> | undefined;

export = after;
