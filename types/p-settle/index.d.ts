// Type definitions for p-settle 2.0
// Project: https://github.com/sindresorhus/p-settle#readme
// Definitions by: Nate Silva <https://github.com/natesilva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pSettle {
  interface SettledResult<T> {
      isFulfilled: boolean;
      isRejected: boolean;
      /** If the promise was fulfilled, the resolved value */
      value?: T;
      /** If the promise was rejected, the reason */
      reason?: any;
  }
}

/**
 * Returns a Promise that is fulfilled when all promises in `input` are settled.
 *
 * The fulfilled value is an array of objects with the following properties:
 *
 * * `isFulfilled`
 * * `isRejected`
 * * `value` or `reason` (Depending on whether the promise fulfilled or rejected)
 *
 * @param input
 */
declare function pSettle<T>(input: Iterable<PromiseLike<T>>): Promise<Array<pSettle.SettledResult<T>>>;

export = pSettle;
