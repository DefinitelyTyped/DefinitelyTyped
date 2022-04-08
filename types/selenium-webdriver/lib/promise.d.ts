import { EventEmitter } from '../';

/**
 * promise
 */

export namespace promise {
  // region Functions

  /**
   * Determines whether a {@code value} should be treated as a promise.
   * Any object whose 'then' property is a function will be considered a
   * promise.
   */
  function isPromise(value: any): boolean;

  /**
   * Creates a promise that will be resolved at a set time in the future.
   */
  function delayed(ms: number): Promise<void>;

  /**
   * Calls a function for each element in an array, and if the function returns
   * true adds the element to a new array.
   *
   * If the return value of the filter function is a promise, this function
   * will wait for it to be fulfilled before determining whether to insert the
   * element into the new array.
   *
   * If the filter function throws or returns a rejected promise, the promise
   * returned by this function will be rejected with the same reason. Only the
   * first failure will be reported; all subsequent errors will be silently
   * ignored.
   */
  function filter<T, V>(
      arr: T[]|Promise<T[]>, fn: (element: T, index: number, array: T[]) => V,
      // value
      optSelf?: any): Promise<V[]>;

  /**
   * Calls a function for each element in an array and inserts the result into a
   * new array, which is used as the fulfillment value of the promise returned
   * by this function.
   *
   * If the return value of the mapping function is a promise, this function
   * will wait for it to be fulfilled before inserting it into the new array.
   *
   * If the mapping function throws or returns a rejected promise, the
   * promise returned by this function will be rejected with the same reason.
   * Only the first failure will be reported; all subsequent errors will be
   * silently ignored.
   */
  function map<T, V>(
      arr: T[]|Promise<T[]>, fn: (self: any, type: T, index: number, array: T[]) => V,
      optSelf?: any): Promise<V[]>;

  /**
   * Wraps a function that expects a node-style callback as its final
   * argument. This callback expects two arguments: an error value (which will
   * be null if the call succeeded), and the success value as the second
   * argument. The callback will the resolve or reject the returned promise,
   * based on its arguments.
   */
  function checkedNodeCall<T>(fn: Function, ...varArgs: any[]): Promise<T>;

  /**
   * Returns a promise that will be resolved with the input value in a
   * fully-resolved state. If the value is an array, each element will be fully
   * resolved. Likewise, if the value is an object, all keys will be fully
   * resolved. In both cases, all nested arrays and objects will also be
   * fully resolved.  All fields are resolved in place; the returned promise
   * will resolve on {@code value} and not a copy.
   *
   * Warning: This function makes no checks against objects that contain
   * cyclical references:
   *
   *     var value = {};
   *     value['self'] = value;
   *     promise.fullyResolved(value);  // Stack overflow.
   */
  function fullyResolved(value: any): Promise<any>;

  /**
   * Registers a listener to invoke when a promise is resolved, regardless
   * of whether the promise's value was successfully computed. This function
   * is synonymous with the {@code finally} clause in a synchronous API:
   *
   *     // Synchronous API:
   *     try {
   *       doSynchronousWork();
   *     } finally {
   *       cleanUp();
   *     }
   *
   *     // Asynchronous promise API:
   *     doAsynchronousWork().finally(cleanUp);
   *
   * __Note:__ similar to the {@code finally} clause, if the registered
   * callback returns a rejected promise or throws an error, it will silently
   * replace the rejection error (if any) from this promise:
   *
   *     try {
   *       throw Error('one');
   *     } finally {
   *       throw Error('two');  // Hides Error: one
   *     }
   *
   *     let p = Promise.reject(Error('one'));
   *     promise.finally(p, function() {
   *       throw Error('two');  // Hides Error: one
   *     });
   */
  function thenFinally<R>(promise: any, callback: () => R | Promise<R>): Promise<R>;

  // endregion
}
