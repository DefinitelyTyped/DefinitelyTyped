// Type definitions for retry v0.10.1
// Project: https://github.com/tim-kos/node-retry
// Definitions by: Stan Goldmann <https://github.com/krenor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Options } from './options'
export * from './options'

export interface RetryOperation {
    /**
     * Defines the function that is to be retried and executes it for the first time right away.
     *
     * @param {function} callback The function that is to be retried
     * @param {current} [callback.current] Number of attempts callback has been executed so far.
     * @param {Options.Attempt} [options]
     *
     *
     * @return {void}
     */
    attempt(callback: (current?: number) => void, options?: Options.Attempt): void

    /**
     * Returns false when no error value is given, or the maximum amount of retries has been reached.
     * Otherwise it returns true, and retries the operation after the timeout for the current attempt number.
     *
     * @param {(Error|any)} [err]
     *
     * @return {boolean}
     */
    retry(err?: Error | any): boolean

    /**
     * The number of attempts it took to call the retrying function before it was successful.
     *
     * @return {number}
     */
    attempts(): number

    /**
     * A reference to the error object that occured most frequently.
     * Errors are compared using the error.message property.
     *
     * @return {(Error|null)} If no errors occured so far the value will be null.
     */
    mainError(): Error | null

    /**
     * Returns an array of all errors that have been passed to RetryOperation.retry() so far.
     *
     * @return {Error[]}
     */
    errors(): Error[]

    /**
     * Stopts the operation being retried. Useful for aborting the operation on a fatal error etc.
     */
    stop(): void
}
/**
 * Create a new RetryOperation object.
 *
 * @param {Options.Operation} [options]
 *
 * @return {RetryOperation}
 */
export function operation(options?: Options.Operation): RetryOperation

/**
 * Get an array with timeouts and their return values in milliseconds.
 *
 * @param {Options.Timeouts} [options]
 *
 * @return {number[]}
 */
export function timeouts(options?: Options.Timeouts): number[]

/**
 * Create a new timeout (in milliseconds) based on the given parameters.
 *
 * @param {number} attempt  Representing for which retry the timeout should be calculated.
 * @param {Options.Timeout} [options]
 *
 * @return {number} timeout
 */
export function createTimeout(attempt: number, options?: Options.Timeout): number

/**
 * Wrap all functions of the object with retry.
 *
 * @param {object} object The object to be wrapped
 * @param {Options.Operation} [options]
 * @param {string[]} [methods] Methods which need to be wrapped
 *
 * @return {void}
 */
export function wrap(object: object, options?: Options.Operation, methods?: string[]): void
