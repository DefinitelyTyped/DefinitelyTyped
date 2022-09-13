// Type definitions for stopcock 1.1
// Project: https://github.com/lpinca/stopcock
// Definitions by: BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = stopcock;

/**
 * Limits the execution rate of a function using the token bucket algorithm.
 *
 * Useful for scenarios such as REST APIs consumption where the amount of requests per unit of time
 * should not exceed a given threshold.
 *
 * @param fn The function to rate limit calls to.
 * @param limit The maximum number of allowed calls per `interval`.
 * @param interval The timespan where `limit` is calculated.
 * @param size The maximum size of the internal queue. Defaults to `2^32 - 1` which is the maximum array size in JavaScript.
 * @returns A function that returns a promise which resolves to the value returned by the original `fn` function.
 *          When the queue is at capacity the promise is rejected.
 *
 * @example
 * import stopcock = require('stopcock');
 *
 * async function request(i: number): Promise<string> {
 *   return `${i} - ${new Date().toISOString()}`;
 * }
 *
 * function log(data: any) {
 *   console.log(data);
 * }
 *
 * const get = stopcock(request, { bucketSize: 5 });
 *
 * for (let i = 0; i < 10; i++) {
 *   get(i).then(log);
 * }
 *
 * // 0 - 2017-03-30T16:46:39.938Z
 * // 1 - 2017-03-30T16:46:39.940Z
 * // 2 - 2017-03-30T16:46:39.940Z
 * // 3 - 2017-03-30T16:46:39.940Z
 * // 4 - 2017-03-30T16:46:39.940Z
 * // 5 - 2017-03-30T16:46:40.443Z
 * // 6 - 2017-03-30T16:46:40.943Z
 * // 7 - 2017-03-30T16:46:41.441Z
 * // 8 - 2017-03-30T16:46:41.942Z
 * // 9 - 2017-03-30T16:46:42.439Z
 */
declare function stopcock<TFn extends (...args: any[]) => unknown>(
    fn: TFn,
    options?: stopcock.Options,
): stopcock.LimiterFunction<TFn>;

declare namespace stopcock {
    interface Options {
        /**
         * The maximum number of allowed calls per `interval`.
         * @default 2
         */
        limit?: number | undefined;
        /**
         * The timespan where `limit` is calculated.
         * @default 1000
         */
        interval?: number | undefined;
        /**
         * The capacity of the bucket.
         * @default 40
         */
        bucketSize?: number | undefined;
        /**
         * The maximum size of the internal queue.
         * @default 2^32-1 (the maximum array size in JavaScript)
         */
        queueSize?: number | undefined;
    }

    interface LimiterFunction<TFn extends (...args: any[]) => unknown> {
        (...args: Parameters<TFn>): ReturnType<TFn> extends PromiseLike<infer TRetVal>
            ? Promise<TRetVal>
            : Promise<ReturnType<TFn>>;

        /**
         * The internal queue size.
         */
        readonly size: number;
    }
}
