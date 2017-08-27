// Type definitions for retry 0.10
// Project: https://github.com/tim-kos/node-retry
// Definitions by: Stan Goldmann <https://github.com/krenor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface RetryOperation {
  /**
   * Defines the function that is to be retried and executes it for the first time right away.
   *
   * @param {function} callback The function that is to be retried
   * @param {number} callback.current Number of attempts callback has been executed so far.
   * @param {number} [options.timeout] A timeout in milliseconds.
   * @param {function} [options.callback] Callback to execute when the operation takes longer than the timeout.
   *
   * @return {void}
   */
  attempt(callback: (current: number) => void, options?: AttemptOptions): void;

  /**
   * Returns false when no error value is given, or the maximum amount of retries has been reached.
   * Otherwise it returns true, and retries the operation after the timeout for the current attempt number.
   *
   * @param {Error} [err]
   *
   * @return {boolean}
   */
  retry(err?: Error): boolean;

  /**
   * The number of attempts it took to call the retrying function before it was successful.
   *
   * @return {number}
   */
  attempts(): number;

  /**
   * A reference to the error object that occured most frequently.
   * Errors are compared using the error.message property.
   *
   * @return {(Error|null)} If no errors occured so far the value will be null.
   */
  mainError(): Error | null;

  /**
   * Returns an array of all errors that have been passed to RetryOperation.retry() so far.
   *
   * @return {Error[]}
   */
  errors(): Error[];

  /**
   * Stops the operation being retried. Useful for aborting the operation on a fatal error etc.
   */
  stop(): void;
}

export interface AttemptOptions {
    timeout?: number;
    callback?(): void;
}

/**
 * Create a new RetryOperation object.
 *
 * @param {number} [options.retries=10] The maximum amount of times to retry the operation.
 * @param {number} [options.factor=2] The exponential factor to use.
 * @param {number} [options.minTimeout=1000] The number of milliseconds before starting the first retry.
 * @param {number} [options.maxTimeout=Infinity] The maximum number of milliseconds between two retries.
 * @param {boolean} [options.randomize=false] Randomizes the timeouts by multiplying a factor between 1-2.
 * @param {boolean} [options.forever=false] Wether to retry forever.
 * @param {boolean} [options.unref=false] Wether to unref the setTimeout's.
 *
 * @return {RetryOperation}
 */
export function operation(options?: OperationOptions): RetryOperation;

export interface OperationOptions {
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
    randomize?: boolean;
    forever?: boolean;
    unref?: boolean;
}

/**
 * Get an array with timeouts and their return values in milliseconds.
 *
 * @param {number} [options.retries=10] The maximum amount of times to retry the operation.
 * @param {number} [options.factor=2] The exponential factor to use.
 * @param {number} [options.minTimeout=1000] The number of milliseconds before starting the first retry.
 * @param {number} [options.maxTimeout=Infinity] The maximum number of milliseconds between two retries.
 * @param {boolean} [options.randomize=false] Randomizes the timeouts by multiplying a factor between 1-2.
 *
 * @return {number[]}
 */
export function timeouts(options?: TimeoutsOptions): number[];

export interface TimeoutsOptions {
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
    randomize?: boolean;
}

/**
 * Create a new timeout (in milliseconds) based on the given parameters.
 *
 * @param {number} attempt  Representing for which retry the timeout should be calculated.
 * @param {number} [options.factor=2] The exponential factor to use.
 * @param {number} [options.minTimeout=1000] The number of milliseconds before starting the first retry.
 * @param {number} [options.maxTimeout=Infinity] The maximum number of milliseconds between two retries.
 * @param {boolean} [options.randomize=false] Randomizes the timeouts by multiplying a factor between 1-2.
 *
 * @return {number} timeout
 */
export function createTimeout(attempt: number, options?: CreateTimeoutOptions): number;

export interface CreateTimeoutOptions {
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
    randomize?: boolean;
}

/**
 * Wrap all functions of the object with retry.
 *
 * @param {object} object The object to be wrapped
 * @param {number} [options.retries=10] The maximum amount of times to retry the operation.
 * @param {number} [options.factor=2] The exponential factor to use.
 * @param {number} [options.minTimeout=1000] The number of milliseconds before starting the first retry.
 * @param {number} [options.maxTimeout=Infinity] The maximum number of milliseconds between two retries.
 * @param {boolean} [options.randomize=false] Randomizes the timeouts by multiplying a factor between 1-2.
 * @param {boolean} [options.forever=false] Wether to retry forever.
 * @param {boolean} [options.unref=false] Wether to unref the setTimeout's.
 * @param {string[]} [methods] Methods which need to be wrapped
 *
 * @return {void}
 */
export function wrap(object: object, options?: WrapOptions, methods?: string[]): void;

export interface WrapOptions {
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
    randomize?: boolean;
    forever?: boolean;
    unref?: boolean;
}
