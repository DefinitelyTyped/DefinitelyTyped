// Type definitions for promise-retry 1.1.1
// Project: https://github.com/IndigoUnited/node-promise-retry
// Definitions by: Jamie Birch <https://www.github.com/shirakaba/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { WrapOptions } from "../retry";
/**
 * A function that is retryable, by having implicitly-bound params for both an error handler and an attempt number.
 *
 * @param retry The retry callback upon any rejection. Essentially throws the error on in the form of a { retried: err }
 * wrapper, and tags it with a 'code' field of value "EPROMISERETRY" so that it is recognised as needing retrying. Call
 * this from the catch() block when you want to retry a rejected attempt.
 * @param attempt The number of the attempt.
 * @returns A Promise for anything (eg. a HTTP response).
 */
export declare type RetryableFn = ((retry: (error: any) => never, attempt: number) => Promise<any>);
/**
 * Wrap all functions of the object with retry. The params can be entered in either order, just like in the original library.
 *
 * @param retryableFn The function to retry. Should include its own 
 * @param options The options for how long/often to retry the function for.
 * @returns The Promise resolved by the input retryableFn, or rejected (if not retried) from its catch block.
 */
export declare function promiseRetry(retryableFn: RetryableFn | WrapOptions, options?: WrapOptions | RetryableFn): Promise<any>;
