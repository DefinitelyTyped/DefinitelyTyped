// Type definitions for retry 0.10
// Project: https://github.com/tim-kos/node-retry
// Definitions by: Stan Goldmann <https://github.com/krenor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface RetryOperation {
  /**
   * Defines the function that is to be retried and executes it for the first time right away.
   *
   * @param callback The function that is to be retried
   * @param callback.current Number of attempts callback has been executed so far.
   * @param [options.timeout] A timeout in milliseconds.
   * @param [options.callback] Callback to execute when the operation takes longer than the timeout.
   *
   */
  attempt(callback: (current: number) => void, options?: AttemptOptions): void;

  /**
   * Returns false when no error value is given, or the maximum amount of retries has been reached.
   * Otherwise it returns true, and retries the operation after the timeout for the current attempt number.
   *
   *
   */
  retry(err?: Error): boolean;

  /**
   * The number of attempts it took to call the retrying function before it was successful.
   *
   */
  attempts(): number;

  /**
   * A reference to the error object that occured most frequently.
   * Errors are compared using the error.message property.
   *
   * @return If no errors occured so far the value will be null.
   */
  mainError(): Error | null;

  /**
   * Returns an array of all errors that have been passed to RetryOperation.retry() so far.
   *
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
 * @param [options.retries=10] The maximum amount of times to retry the operation.
 * @param [options.factor=2] The exponential factor to use.
 * @param [options.minTimeout=1000] The number of milliseconds before starting the first retry.
 * @param [options.maxTimeout=Infinity] The maximum number of milliseconds between two retries.
 * @param [options.randomize=false] Randomizes the timeouts by multiplying a factor between 1-2.
 * @param [options.forever=false] Wether to retry forever.
 * @param [options.unref=false] Wether to unref the setTimeout's.
 *
 */
export function operation(options?: OperationOptions): RetryOperation;

export interface OperationOptions {
    /**
     * The maximum amount of times to retry the operation.
     * @default 10
     */
    retries?: number;
    /**
     * The exponential factor to use.
     * @default 2
     */
    factor?: number;
    /**
     * The number of milliseconds before starting the first retry.
     * @default 1000
     */
    minTimeout?: number;
    /**
     * The maximum number of milliseconds between two retries.
     * @default Infinity
     */
    maxTimeout?: number;
    /**
     * Randomizes the timeouts by multiplying a factor between 1-2.
     * @default false
     */
    randomize?: boolean;
    forever?: boolean;
    unref?: boolean;
}

/** Get an array with timeouts and their return values in milliseconds. */
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
 * @param attempt  Representing for which retry the timeout should be calculated.
 * @return timeout
 */
export function createTimeout(attempt: number, options?: CreateTimeoutOptions): number;

export interface CreateTimeoutOptions {
    /**
     * The exponential factor to use.
     * @default 2
     */
    factor?: number;
    /**
     * The number of milliseconds before starting the first retry.
     * @default 1000
     */
    minTimeout?: number;
    /**
     * The maximum number of milliseconds between two retries.
     * @default Infinity
     */
    maxTimeout?: number;
    /**
     * Randomizes the timeouts by multiplying a factor between 1-2.
     * @default false
     */
    randomize?: boolean;
}

/**
 * Wrap all functions of the object with retry.
 *
 * @param object The object to be wrapped
 * @param methods Methods which need to be wrapped
 *
 */
export function wrap(object: object, options?: WrapOptions, methods?: string[]): void;

export interface WrapOptions {
    /**
     * The maximum amount of times to retry the operation.
     * @default 10
     */
    retries?: number;
    /**
     * The exponential factor to use.
     * @default 2
     */
    factor?: number;
    /**
     * The number of milliseconds before starting the first retry.
     * @default 1000
     */
    minTimeout?: number;
    /**
     * The maximum number of milliseconds between two retries.
     * @default Infinity
     */
    maxTimeout?: number;
    /**
     * Randomizes the timeouts by multiplying a factor between 1-2.
     * @default false
     */
    randomize?: boolean;
    /**
     * Whether to retry forever.
     * @default false
     */
    forever?: boolean;
    /**
     * Whether to unref the setTimeout's.
     * @default false
     */
    unref?: boolean;
}
