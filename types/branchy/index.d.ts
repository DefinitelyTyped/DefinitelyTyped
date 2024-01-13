import BetterQueue = require("better-queue");

export = branchy;

/**
 * Comfortly run Node.js functions in a separate process.
 *
 * @example
 * import branchy = require('branchy')
 *
 * (async () => {
 *   // Synchronous "add", returns number
 *   const adder = (a: number, b: number) => a + b
 *
 *   // Asynchronous "add" in a child process, returns Promise that resolves to number
 *   const forkedAdder = branchy(adder)
 *
 *   // Don't forget to wrap in async function
 *   await forkedAdder(2, 3) // 5
 * })();
 */
declare function branchy<TFn extends (...args: any[]) => unknown>(
    callback: TFn,
    options?: branchy.Options<TFn>,
): (
    ...args: Parameters<TFn>
) => ReturnType<TFn> extends PromiseLike<infer TRet> ? Promise<TRet> : Promise<ReturnType<TFn>>;
declare function branchy(callback: string, options?: branchy.Options): (...args: any[]) => Promise<unknown>;

declare namespace branchy {
    /**
     * Creates a concurrency context to apply to branchy tasks.
     *
     * @param options Concurrency options
     *
     * @example
     * import branchy = require('branchy')
     *
     * const ctx = branchy.createContext({
     *   concurrent: 2
     * })
     *
     * const inc = branchy((num: number) => num + 1, { concurrent: ctx })
     * const dec = branchy((num: number) => num - 1, { concurrent: ctx })
     *
     * // This opens 2 processes
     * inc(1)
     * inc(2)
     * inc(3)
     *
     * // This correctly queues dec() calls after inc() calls
     * dec(1)
     * dec(2)
     * dec(3)
     */
    function createContext<T = any, K = any>(
        options?: Partial<BetterQueue.QueueOptions<T, K>>,
    ): ConcurrencyContext<T, K>;

    interface Options<TFn extends (...args: any[]) => unknown = (...args: any[]) => unknown> {
        /**
         * @default Infinity
         */
        concurrent?: ConcurrencyOptions<TFn> | ConcurrencyOptions["threads"] | ConcurrencyContext<TFn>;
    }

    interface ConcurrencyOptions<TFn extends (...args: any[]) => unknown = (...args: any[]) => unknown> {
        /**
         * Concurrency control can be enabled by specifying number of concurrent threads.
         *
         * To restrict concurrency to the number of available CPU cores, the value `'auto'` can be used.
         *
         * @default Infinity
         */
        threads?: number | "auto" | undefined;
        /**
         * By default, the queue starts processes in the order functions were called
         * ([first-in, first-out](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics))).
         * However the queue can be made to handle the latest calls first (technically making it a
         * [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))) by setting the strategy.
         *
         * @example
         * import branchy = require('branchy')
         *
         * branchy((a: number, b: number) => a + b, {
         *   concurrent: {
         *     strategy: 'stack'
         *   }
         * })
         */
        strategy?: "stack" | undefined;
        /**
         * The priority of each call can be specified depending on its arguments.
         *
         * @example
         * import branchy = require('branchy')
         *
         * const call = branchy((name: string) => console.log('Call %s', name), {
         *   concurrent: {
         *     threads: 1, // Only one at a time for demoing purposes
         *     priority: name => (name === 'Ghostbusters' ? 100 : 1)
         *   }
         * })
         *
         * call('Alice')
         * call('Bob')
         * call('Ghostbusters')
         *
         * // "Call Ghostbusters", "Call Alice", "Call Bob"
         */
        priority?: (...args: Parameters<TFn>) => number | Promise<number>;
    }

    interface ConcurrencyContext<T = any, K = any> extends BetterQueue<T, K> {}
}
