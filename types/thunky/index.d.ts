export = thunky;

/**
 * Delay the evaluation of a paramless async function and cache the result
 * (see [thunk](http://en.wikipedia.org/wiki/Thunk_%28functional_programming%29)).
 *
 * If the thunk callback is called with an `Error` object as the first argument it will not cache the result.
 *
 * @param fn The function to execute.
 *
 * @example
 * import thunky = require('thunky');
 *
 * const test = thunky((callback) => { // the inner function should only accept a callback
 *   console.log('waiting 1s and returning random number');
 *   setTimeout(() => {
 *     callback(Math.random());
 *   }, 1000);
 * });
 *
 * test((num) => {  // inner function is called the first time we call test
 *   console.log(num); // prints random number
 * });
 *
 * test((num) => {  // subsequent calls waits for the first call to finish and return the same value
 *   console.log(num); // prints the same random number as above
 * });
 */
declare function thunky<TFn extends (callback: (...args: any[]) => any) => void>(fn: TFn): TFn;
