// Type definitions for deasync 0.1
// Project: https://github.com/abbr/deasync
// Definitions by: Matt Rollins <https://github.com/Sicilica>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = deasync;

type CallbackWithResult<TResult> = (err: any, result: TResult) => void;
type CallbackWithoutResult = (err?: any) => void;

/**
 * Turns async function into sync.
 *
 * ```js
 * var deasync = require('deasync');
 * var cp = require('child_process');
 * var exec = deasync(cp.exec);
 * // output result of ls -la
 * try {
 *     console.log(exec('ls -la'));
 * }
 * catch (err) {
 *     console.log(err);
 * }
 * // done is printed last, as supposed, with cp.exec wrapped in deasync; first without.
 * console.log('done');
 * ```
 * @param fn An async function with conventional API signature `function(p1,...pn,function cb(error,result){})`.
 * @returns A sync function that returns `result` and throws `error` as exception if not null.
 */
declare function deasync<TResult>(fn: (callback: CallbackWithResult<TResult>) => void): () => TResult;
declare function deasync(fn: (callback: CallbackWithoutResult) => void): () => void;
declare function deasync<T1, TResult>(fn: (arg1: T1, callback: CallbackWithResult<TResult>) => void): (arg1: T1) => TResult;
declare function deasync<T1>(fn: (arg1: T1, callback: CallbackWithoutResult) => void): (arg1: T1) => void;
declare function deasync<T1, T2, TResult>(fn: (arg1: T1, arg2: T2, callback: CallbackWithResult<TResult>) => void): (arg1: T1, arg2: T2) => TResult;
declare function deasync<T1, T2>(fn: (arg1: T1, arg2: T2, callback: CallbackWithoutResult) => void): (arg1: T1, arg2: T2) => void;
declare function deasync<T1, T2, T3, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: CallbackWithResult<TResult>) => void): (arg1: T1, arg2: T2, arg3: T3) => TResult;
declare function deasync<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: CallbackWithoutResult) => void): (arg1: T1, arg2: T2, arg3: T3) => void;
declare function deasync<T1, T2, T3, T4, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: CallbackWithResult<TResult>) => void
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult;
declare function deasync<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: CallbackWithoutResult) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void;
declare function deasync<T1, T2, T3, T4, T5, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: CallbackWithResult<TResult>) => void
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult;
declare function deasync<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: CallbackWithoutResult) => void
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void;
declare function deasync<T1, T2, T3, T4, T5, T6, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: CallbackWithResult<TResult>) => void
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => TResult;
declare function deasync<T1, T2, T3, T4, T5, T6>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: CallbackWithoutResult) => void
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void;
declare function deasync(fn: (...args: any[]) => void): (...args: any[]) => any;
declare namespace deasync {
    type PredicateFunction = () => boolean;
    /**
     * For async function with unconventional API, for instance `function asyncFunction(p1,function cb(res){})`,
     * use `loopWhile(predicateFunc)`.
     *
     * ```js
     * var done = false;
     * var data;
     * asyncFunction(p1, function cb(res) {
     *     data = res;
     *     done = true;
     * });
     * require('deasync').loopWhile(function () { return !done; });
     * // data is now populated
     * ```
     * @param pred The function that returns boolean loop condition.
     */
    function loopWhile(pred: PredicateFunction): void;
    function runLoopOnce(): void;
    /**
     * Sleep (a wrapper of setTimeout).
     *
     * ```js
     * function SyncFunction() {
     *     var ret;
     *     setTimeout(function () {
     *         ret = "hello";
     *     }, 3000);
     *     while (ret === undefined) {
     *         require('deasync').sleep(100);
     *     }
     *     // returns hello with sleep; undefined without
     *     return ret;
     * }
     * ```
     * @param ms The time, in milliseconds that the timer should wait.
     */
    function sleep(ms: number): void;
}
