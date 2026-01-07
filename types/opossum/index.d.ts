/// <reference types="node"/>
import { EventEmitter } from "events";

declare class CircuitBreaker<TI extends unknown[] = unknown[], TR = unknown> extends EventEmitter {
    static isOurError(error: Error): boolean;
    static newStatus(options: CircuitBreaker.StatusOptions): CircuitBreaker.Status;

    constructor(action: (...args: TI) => Promise<TR>, options?: CircuitBreaker.Options<TI>);

    /**
     * Gets the name of this circuit
     */
    readonly name: string;

    /**
     * Gets the name of this circuit group
     */
    readonly group: string;

    /**
     * Gets whether the circuit is enabled or not
     */
    readonly enabled: boolean;
    /**
     * Gets whether this circuit is in the pendingClosed state
     */
    readonly pendingClose: boolean;

    /**
     * True if the circuit is currently closed. False otherwise.
     */
    readonly closed: boolean;

    /**
     * True if the circuit is currently opened. False otherwise.
     */
    readonly opened: boolean;

    /**
     * True if the circuit is currently half opened. False otherwise.
     */
    readonly halfOpen: boolean;

    /**
     * Determines if the circuit has been shutdown.
     */
    readonly isShutdown: boolean;

    /**
     * The current {@link CircuitBreaker.Status} of this {@link CircuitBreaker}
     */
    readonly status: CircuitBreaker.Status;

    /**
     * Get the current stats for the circuit.
     */
    readonly stats: CircuitBreaker.Stats;

    /**
     * Gets whether the circuit is currently in warm up phase
     */
    readonly warmUp: boolean;

    /**
     * Gets the volume threshold for this circuit
     */
    readonly volumeThreshold: number;

    /**
     * Execute the action for this circuit using context as this.
     * If the action fails or times out, the returned promise will be rejected.
     * If the action succeeds, the promise will resolve with the resolved value from action.
     * If a fallback function was provided, it will be invoked in the event of any failure or timeout.
     * Any parameters in addition to `context` will be passed to the circuit function.
     */
    call(context: any, ...args: TI): Promise<TR>;

    /**
     * Returns the current state of the circuit
     */
    toJSON(): { state: CircuitBreaker.State; status: CircuitBreaker.Stats };

    /**
     * Clears the cache of this {@link CircuitBreaker}
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
     * Provide a fallback function for this {@link CircuitBreaker}.
     * This function will be executed when the circuit is fired and fails.
     * It will always be preceded by a `failure` event, and `breaker.fire` returns a rejected Promise.
     */
    fallback(func: ((...args: any[]) => any) | CircuitBreaker): this;

    /**
     * Execute the action for this circuit.
     * If the action fails or times out, the returned promise will be rejected.
     * If the action succeeds, the promise will resolve with the resolved value from action.
     * If a fallback function was provided, it will be invoked in the event of any failure or timeout.
     * Any parameters passed to this function will be proxied to the circuit function.
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

    /**
     * Emitted after `options.resetTimeout` has elapsed, allowing for a single attempt to call the service again.
     * If that attempt is successful, the circuit will be closed. Otherwise it remains open.
     */
    on(event: "halfOpen", listener: (resetTimeout: number) => void): this;
    /**
     * Emitted when the breaker is reset allowing the action to execute again.
     */
    on(event: "close", listener: () => void): this;
    /**
     * Emitted when the breaker opens because the action has failure percentage greater than `options.errorThresholdPercentage`.
     */
    on(event: "open", listener: () => void): this;
    /**
     * Emitted when the circuit breaker has been shut down.
     */
    on(event: "shutdown", listener: () => void): this;
    /**
     * Emitted when the circuit breaker action is executed.
     */
    on(event: "fire", listener: (args: TI) => void): this;
    /**
     * Emitted when the circuit breaker is using the cache and finds a value.
     */
    on(event: "cacheHit", listener: () => void): this;
    /**
     * Emitted when the circuit breaker does not find a value in the cache, but the cache option is enabled.
     */
    on(event: "cacheMiss", listener: () => void): this;
    /**
     * Emitted when the circuit breaker is open and failing fast.
     */
    on(event: "reject", listener: (err: Error) => void): this;
    /**
     * Emitted when the circuit breaker action takes longer than `options.timeout`.
     */
    on(event: "timeout", listener: (err: Error) => void): this;
    /**
     * Emitted when the circuit breaker action succeeds.
     */
    on(event: "success", listener: (result: TR, latencyMs: number) => void): this;
    /**
     * Emitted when the rate limit has been reached and there are no more locks to be obtained.
     */
    on(event: "semaphoreLocked", listener: (err: Error) => void): this;
    /**
     * Emitted with the user-supplied health check function returns a rejected promise.
     */
    on(event: "healthCheckFailed", listener: (err: Error) => void): this;
    /**
     * Emitted when the circuit breaker executes a fallback function.
     */
    on(event: "fallback", listener: (result: unknown, err: Error) => void): this;
    /**
     * Emitted when the circuit breaker action fails.
     */
    on(event: "failure", listener: (err: Error, latencyMs: number, args: TI) => void): this;
}

declare namespace CircuitBreaker {
    interface Options<TI extends unknown[] = unknown[]> {
        /**
         * A {@link Status} object that might have pre-prime stats
         */
        status?: Status | undefined;

        /**
         * The time in milliseconds that action should be allowed to execute before timing out.
         * Timeout can be disabled by setting this to `false`.
         * @default 10000 (10 seconds)
         */
        timeout?: number | false | undefined;

        /**
         * The number of times the circuit can fail before opening.
         * @default 10
         * @deprecated
         * @see {@link Options.errorThresholdPercentage}
         */
        maxFailures?: number | undefined;

        /**
         * The time in milliseconds to wait before setting the breaker to `halfOpen` state, and trying the action again.
         * @default 30000 (30 seconds)
         */
        resetTimeout?: number | undefined;

        /**
         * Sets the duration of the statistical rolling window, in milliseconds.
         * This is how long Opossum keeps metrics for the circuit breaker to use and for publishing.
         * @default 10000
         */
        rollingCountTimeout?: number | undefined;

        /**
         * Sets the number of buckets the rolling statistical window is divided into.
         * So, if `options.rollingCountTimeout` is 10,000, and `options.rollingCountBuckets` is 10, then the
         * statistical window will be 1,000 per 1 second snapshots in the statistical window.
         * @default 10
         */
        rollingCountBuckets?: number | undefined;

        /**
         * The circuit name to use when reporting stats.
         * Defaults to the name of the function this circuit controls then falls back to a UUID
         */
        name?: string | undefined;

        /**
         * (Undocumented)
         * A grouping key for reporting.
         * Defaults to the computed value of `name`
         */
        group?: string | undefined;

        /**
         * This property indicates whether execution latencies should be tracked and calculated as percentiles.
         * If they are disabled, all summary statistics (mean, percentiles) are returned as -1.
         * @default false
         */
        rollingPercentilesEnabled?: boolean | undefined;

        /**
         * The number of concurrent requests allowed.
         * If the number currently executing function calls is equal to `options.capacity`, further calls
         * to `fire()` are rejected until at least one of the current requests completes.
         * @default Number.MAX_SAFE_INTEGER
         */
        capacity?: number | undefined;

        /**
         * The error percentage at which to open the circuit and start short-circuiting requests to fallback.
         * @default 50
         */
        errorThresholdPercentage?: number | undefined;

        /**
         * Whether this circuit is enabled upon construction.
         * @default true
         */
        enabled?: boolean | undefined;

        /**
         * Determines whether to allow failures without opening the circuit during a brief warmup period (`rollingCountTimeout`)
         * This can help in situations where no matter what your `errorThresholdPercentage` is, if the
         * first execution times out or fails, the circuit immediately opens.
         * @default false
         */
        allowWarmUp?: boolean | undefined;

        /**
         * The minimum number of requests within the rolling statistical window that must exist before
         * the circuit breaker can open. This is similar to `allowWarmUp` in that no matter how many
         * failures there are, if the number of requests within the statistical window does not exceed
         * this threshold, the circuit will remain closed.
         * @default 0
         */
        volumeThreshold?: number | undefined;

        /**
         * An optional function that will be called when the circuit's function fails (returns a rejected Promise).
         * If this function returns truthy, the circuit's `failPure` statistics will not be incremented.
         * This is useful, for example, when you don't want HTTP 404 to trip the circuit, but still want to handle it as a failure case.
         */
        errorFilter?: ((err: any) => boolean) | undefined;

        /**
         * Whether the return value of the first successful execution of the circuit's function will be cached.
         * Once a value has been cached that value will be returned for every subsequent execution: the cache can be cleared using `clearCache`.
         * (The metrics cacheHit and cacheMiss reflect cache activity.)
         * @default false
         */
        cache?: boolean | undefined;

        /**
         * The cache time to live (TTL) in milliseconds.
         * The default value is 0, which means the cache will never be cleared.
         * @default 0 (no TTL)
         */
        cacheTTL?: number;

        /**
         * An optional function that will be called to generate a cache key for the circuit's function.
         * The function is passed the original `fire` arguments. If no `cacheKey` function is supplied, a `JSON.stringify` of the arguments will be used as the key.
         * @default (...args) => JSON.stringify(args)
         */
        cacheGetKey?: ((...args: TI) => string) | undefined;

        /**
         * Transport for cache storage. By default, the cache is stored in memory.
         * If a cacheTransport is provided, the cache will be stored there instead.
         */
        cacheTransport?: CacheTransport | undefined;

        /**
         * If present, Opossum can signal upon timeout and properly abort your on going requests instead of leaving it in the background.
         */
        abortController?: AbortController | undefined;

        /**
         *  Automatically recreates the instance of AbortController whenever the circuit transitions to
         * 'halfOpen' or 'closed' state. This ensures that new requests are not
         * impacted by previous signals that were triggered when the circuit was 'open'.
         * @default false
         */
        autoRenewAbortController?: boolean | undefined;

        /**
         * Whether to enable the periodic snapshots that are emitted by the Status class.
         * Passing false will result in snapshots not being emitted
         * @default true
         */
        enableSnapshots?: boolean | undefined;

        /**
         * Optional EventEmitter to be passed in to control the buckets instead of the bucket-interval timer
         */
        rotateBucketController?: EventEmitter | undefined;
    }

    interface Status extends EventEmitter {
        stats: Stats;
        window: Window;

        on(event: "snapshot", listener: (snapshot: Stats) => void): this;
    }

    interface StatusOptions extends
        Pick<
            CircuitBreaker.Options,
            | "rollingCountBuckets"
            | "rollingCountTimeout"
            | "rollingPercentilesEnabled"
            | "enableSnapshots"
            | "rotateBucketController"
        >
    {
        /**
         * object of previous stats
         */
        stats?: Stats;
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

    interface State {
        name: string;
        enabled: boolean;
        closed: boolean;
        open: boolean;
        halfOpen: boolean;
        warmUp: boolean;
        shutdown: boolean;
        lastTimerAt: symbol;
    }

    /**
     * Simple in-memory cache implementation
     */
    interface MemoryCache {
        /**
         * Get cache value by key
         * @param {string} key Cache key
         * @returns Response from cache
         */
        get(key: string): unknown | undefined;

        /**
         * Set cache key with value and ttl
         * @param {string} key Cache key
         * @param {any} value Value to cache
         * @param {number} ttl Time to live in milliseconds
         */
        set(key: string, value: any, ttl: number): void;

        /**
         * Clear cache
         */
        flush(): void;
    }

    type CacheTransport = MemoryCache;
}

export = CircuitBreaker;
