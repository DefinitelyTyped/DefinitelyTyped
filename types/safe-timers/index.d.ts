export const maxInterval: number;

export class Timeout {
    /**
     * Cancels timeout.
     */
    clear(): void;
}

/**
 * Creates and returns a `Timeout` instance that will call `callback` after at least `interval` milliseconds have passed.
 * All arguments passed after the `interval` will be passed to the `callback` once it gets invoked.
 */
export function setTimeout<T extends any[]>(callback: (...args: T) => void, interval: number, ...args: T): Timeout;

/**
 * Creates and returns a `Timeout` instance that will call `callback` when our clock reaches the given `timestamp` (in milliseconds).
 * All arguments passed after the `timestamp` will be passed to the `callback` once it gets invoked.
 */
export function setTimeoutAt<T extends any[]>(callback: (...args: T) => void, timestamp: number, ...args: T): Timeout;

/**
 * Cancels `timeout`.
 */
export function clearTimeout(timeout: Timeout): void;

export class Interval {
    /**
     * Cancels interval.
     */
    clear(): void;
}

/**
 * Creates and returns an `Interval` instance that will call `callback` after at least every `interval` milliseconds.
 * All arguments passed after the `interval` will be passed to the `callback` when it gets invoked.
 */
export function setInterval<T extends any[]>(callback: (...args: T) => void, interval: number, ...args: T): Interval;

/**
 * Cancels `interval`.
 */
export function clearInterval(interval: Interval): void;
