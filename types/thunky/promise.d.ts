export = thunkyp;

/**
 * Delay the evaluation of an async function and cache the result.
 *
 * @param fn The async function to execute.
 *
 * @example
 * import thunkyp = require('thunky/promise');
 *
 * const ready = thunkyp(async () => {
 *   // ... do async stuff
 *   return 42;
 * });
 *
 * // same semantics as the callback version
 * await ready();
 */
declare function thunkyp<TFn extends (...args: any[]) => any>(
    fn: TFn,
): ReturnType<TFn> extends Promise<any> ? TFn : (...args: Parameters<TFn>) => Promise<ReturnType<TFn>>;
