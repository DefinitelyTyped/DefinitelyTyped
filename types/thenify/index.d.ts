interface ThenifyOptions {
    /** If true, multiple callback arguments are returned as an array. Defaults to true. */
    multiArgs?: boolean | string[] | undefined;
    /** If true, the returned function also accepts a callback as the last argument. */
    withCallback?: boolean | undefined;
}

/**
 * Promisify a callback-style function.
 * The original function should accept a callback `(err, result)` as its last argument.
 *
 * @param fn - The callback-style function to promisify
 * @param options - Options for promisification
 * @returns A new function that returns a Promise
 */
declare function thenify(fn: (...args: any[]) => any, options?: ThenifyOptions): (...args: any[]) => Promise<any>;

declare namespace thenify {
    /**
     * Promisify a callback-style function while maintaining backward compatibility with callbacks.
     * The returned function will accept either a callback or return a Promise.
     *
     * @param fn - The callback-style function to promisify
     * @param options - Options for promisification
     * @returns A new function that returns a Promise or accepts a callback
     */
    function withCallback(
        fn: (...args: any[]) => any,
        options?: ThenifyOptions,
    ): (...args: any[]) => Promise<any>;
}

export = thenify;
