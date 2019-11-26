// Type definitions for opossum 4.1
// Project: https://github.com/nodeshift/opossum, https://nodeshift.dev/opossum
// Definitions by: Quinn Langille <https://github.com/quinnlangille>
//                 Willy Zhang <https://github.com/merufm>
//                 Lance Ball <https://github.com/lance>
//                 Matt R. Wilson <https://github.com/mastermatt>
//                 Tom Jenkinson <https://github.com/tjenkinson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node"/>
import { EventEmitter } from 'events';

declare class CircuitBreaker<TI extends unknown[] = unknown[], TR = unknown> extends EventEmitter {
    static isOurError(error: any): boolean;

    constructor(action: (...args: TI) => Promise<TR>, options?: CircuitBreaker.Options);

    readonly name: string;
    readonly group: string;
    readonly enabled: boolean;
    readonly pendingClose: boolean;
    readonly closed: boolean;
    readonly opened: boolean;
    readonly halfOpen: boolean;
    readonly isShutdown: boolean;
    readonly status: CircuitBreaker.Status;
    readonly stats: CircuitBreaker.Stats;
    readonly warmUp: boolean;
    readonly volumeThreshold: number;

    /**
     * Clears the cache of this CircuitBreaker
     */
    clearCache(): void;

    /**
     * Closes the breaker, allowing the action to execute again
     */
    close(): void;

    /**
     * Opens the breaker.
     * Each time the breaker is fired while the circuit is opened, a failed Promise is
     * returned, or if any fallback function has been provided, it is invoked.
     */
    open(): void;

    /**
     * Shuts down this circuit breaker.
     * All subsequent calls to the circuit will fail, returning a rejected promise.
     */
    shutdown(): void;

    /**
     * Disables this circuit, causing all calls to the circuit's function to be
     * executed without circuit or fallback protection.
     */
    disable(): void;

    /**
     * Enables this circuit. If the circuit is the disabled state, it will be re-enabled.
     * If not, this is essentially a noop.
     */
    enable(): void;

    /**
     * Provide a fallback function for this CircuitBreaker.
     * This function will be executed when the circuit is fired and fails.
     * It will always be preceded by a `failure` event, and `breaker.fire` returns a rejected Promise.
     */
    fallback(func: ((...args: any[]) => any) | CircuitBreaker): this;

    /**
     * Execute the action for this circuit.
     * If the action fails or times out, the returned promise will be rejected.
     * If the action succeeds, the promise will resolve with the resolved value from action.
     * If a fallback function was provided, it will be invoked in the event of any failure or timeout.
     */
    fire(...args: TI): Promise<TR>;

    /**
     * Provide a health check function to be called periodically.
     * The function should return a Promise. If the promise is rejected the circuit will open.
     * This is in addition to the existing circuit behavior as defined by the
     * `errorThresholdPercentage` option passed to the constructor.
     * For example, if the health check function provided here always returns a resolved promise,
     * the circuit can still trip and open if there are failures exceeding the configured threshold.
     * The health check function is executed within the circuit breaker's execution context,
     * so this within the function is the circuit breaker itself.
     *
     * The interval is the amount of time between calls to the health check function.
     * Default: 5000 (5 seconds)
     */
    healthCheck(func: () => Promise<void>, interval?: number): void;

    /* tslint:disable:unified-signatures */
    on(event: 'halfOpen', listener: (resetTimeout: number) => void): this;
    on(event: 'close', listener: () => void): this;
    on(event: 'open', listener: () => void): this;
    on(event: 'shutdown', listener: () => void): this;
    on(event: 'fire', listener: (args: TI) => void): this;
    on(event: 'cacheHit', listener: () => void): this;
    on(event: 'cacheMiss', listener: () => void): this;
    on(event: 'reject', listener: (err: Error) => void): this;
    on(event: 'timeout', listener: (err: Error) => void): this;
    on(event: 'success', listener: (result: TR, latencyMs: number) => void): this;
    on(event: 'semaphoreLocked', listener: (err: Error) => void): this;
    on(event: 'healthCheckFailed', listener: (err: Error) => void): this;
    on(event: 'fallback', listener: (result: unknown, err: Error) => void): this;
    on(event: 'failure', listener: (err: Error, latencyMs: number, args: TI) => void): this;
    /* tslint:enable:unified-signatures */
}

declare namespace CircuitBreaker {
    interface Options {
        /**
         * The time in milliseconds that action should be allowed to execute before timing out.
         * @default 10000 (10 seconds)
         */
        timeout?: number;

        /**
         * The number of times the circuit can fail before opening.
         * @default 10
         * @deprecated see options.errorThresholdPercentage
         */
        maxFailures?: number;

        /**
         * The time in milliseconds to wait before setting the breaker to `halfOpen` state, and trying the action again.
         * @default 30000 (30 seconds)
         */
        resetTimeout?: number;

        /**
         * Sets the duration of the statistical rolling window, in milliseconds.
         * This is how long Opossum keeps metrics for the circuit breaker to use and for publishing.
         * @default 10000
         */
        rollingCountTimeout?: number;

        /**
         * Sets the number of buckets the rolling statistical window is divided into.
         * So, if options.rollingCountTimeout is 10,000, and options.rollingCountBuckets is 10, then the
         * statistical window will be 1,000 1 second snapshots in the statistical window.
         * @default 10
         */
        rollingCountBuckets?: number;

        /**
         * The circuit name to use when reporting stats.
         * Defaults to the name of the function this circuit controls then falls back to a UUID
         */
        name?: string;

        /**
         * A grouping key for reporting.
         * Defaults to the computed value of `name`
         */
        group?: string;

        /**
         * This property indicates whether execution latencies should be tracked and calculated as percentiles.
         * If they are disabled, all summary statistics (mean, percentiles) are returned as -1.
         * @default false
         */
        rollingPercentilesEnabled?: boolean;

        /**
         * The number of concurrent requests allowed.
         * If the number currently executing function calls is equal to options.capacity, further calls
         * to `fire()` are rejected until at least one of the current requests completes.
         * @default MAX_SAFE_INTEGER
         */
        capacity?: number;

        /**
         * The error percentage at which to open the circuit and start short-circuiting requests to fallback.
         * @default 50
         */
        errorThresholdPercentage?: number;

        /**
         * Whether this circuit is enabled upon construction.
         * @default true
         */
        enabled?: boolean;

        /**
         * Determines whether to allow failures without opening the circuit during a brief warmup period (`rollingCountDuration`)
         * This can help in situations where no matter what your `errorThresholdPercentage` is, if the
         * first execution times out or fails, the circuit immediately opens.
         * @default false
         */
        allowWarmUp?: boolean;

        /**
         * The minimum number of requests within the rolling statistical window that must exist before
         * the circuit breaker can open. This is similar to `allowWarmUp` in that no matter how many
         * failures there are, if the number of requests within the statistical window does not exceed
         * this threshold, the circuit will remain closed.
         * @default 0
         */
        volumeThreshold?: number;

        /**
         * An optional function that will be called when the circuit's function fails (returns a rejected Promise).
         * If this function returns truthy, the circuit's `failPure` statistics will not be incremented.
         * This is useful, for example, when you don't want HTTP 404 to trip the circuit, but still want to handle it as a failure case.
         */
        errorFilter?: () => boolean;

        /**
         * Whether the return value of the first successful execution of the circuit's function will be cached.
         * Once a value has been cached that value will be returned for every subsequent execution: the cache can be cleared using `clearCache`.
         * (The metrics cacheHit and cacheMiss reflect cache activity.)
         * @default false
         */
        cache?: boolean;
    }

    interface Status extends EventEmitter {
        stats: Stats;
        window: Window;

        on(event: 'snapshot', listener: (snapshot: Stats) => void): this;
    }

    interface Bucket {
        failures: number;
        fallbacks: number;
        successes: number;
        rejects: number;
        fires: number;
        timeouts: number;
        cacheHits: number;
        cacheMisses: number;
        semaphoreRejections: number;
        percentiles: { [percentile: number]: number };
        latencyTimes: number[];
    }

    type Window = Bucket[];

    interface Stats extends Bucket {
        latencyMean: number;
    }
}

export = CircuitBreaker;
