// Type definitions for opossum 1.10
// Project: https://github.com/nodeshift/opossum
// Definitions by: Quinn Langille <https://github.com/quinnlangille>
//                 Willy Zhang <https://github.com/merufm>
//                 Lance Ball <https://github.com/lance>
//                 Matt R. Wilson <https://github.com/mastermatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node"/>
import * as stream from "stream";
import { EventEmitter } from "events";

export type Action = (...args: any[]) => any;

export class CircuitBreaker extends EventEmitter {
    constructor(action: Action, options: CircuitBreakerOptions);

    readonly name: string;
    readonly group: string;
    readonly enabled: boolean;
    readonly pendingClose: boolean;
    readonly closed: boolean;
    readonly opened: boolean;
    readonly halfOpen: boolean;
    readonly isShutdown: boolean;
    readonly status: Status;
    readonly stats: Stats;
    readonly hystrixStats: HystrixStats;
    readonly warmUp: boolean;
    readonly volumeThreshold: number;

    clearCache(): void;
    open(): void;
    close(): void;
    disable(): void;
    enable(): void;
    fallback(func: Action | CircuitBreaker): this;
    fire(...args: any[]): Promise<any>;
    healthCheck(
        func: (...args: any[]) => Promise<any>,
        interval?: number
    ): void;
    shutdown(): void;
}

export enum Event {
    cacheHit = "cacheHit",
    cacheMiss = "cacheMiss",
    close = "close",
    failure = "failure",
    fallback = "fallback",
    fire = "fire",
    halfOpen = "halfOpen",
    healthCheckFailed = "health-check-failed",
    open = "open",
    reject = "reject",
    semaphoreLocked = "semaphore-locked",
    success = "success",
    timeout = "timeout"
}

export interface CircuitBreakerOptions {
    /**
     * The time in milliseconds that action should be allowed to execute before timing out.
     * Timeout can be disabled by setting this to `false`.
     */
    timeout?: number | false;

    /**
     * The number of times the circuit can fail before opening.
     * @deprecated see options.errorThresholdPercentage
     */
    maxFailures?: number;

    /**
     * The time in milliseconds to wait before setting the breaker to `halfOpen` state, and trying the action again.
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
     * Defaults to the name of the action function then falls back to a UUID
     */
    name?: string;

    /**
     * A grouping key for reporting.
     * Defaults to the computed value of options.name
     */
    group?: string;

    /**
     * This property indicates whether execution latencies should be tracked and calculated as percentiles.
     * If they are disabled, all summary statistics (mean, percentiles) are returned as -1.
     * @default true
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
     */
    errorThresholdPercentage?: number;

    /**
     * Whether this circuit is enabled upon construction.
     * @default true
     */
    enabled?: boolean;

    /**
     * Determines whether to allow failures without opening the circuit during a brief warmup period
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
     * If set to true, the value from the first call to `fire` will be cached an subsequent calls
     * will not execute the `action` function, but return the cached value instead.
     * @default false
     */
    cache?: boolean;
}

export interface Status extends EventEmitter {
    stats: Stats;
    window: Window;

    increment(property: string, latencyRunTime?: number): void;
    open(): void;
    close(): void;
}

export interface Bucket {
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

export type Window = Bucket[];

export interface Stats extends Bucket {
    latencyMean: number;
}

export class HystrixStats {
    constructor(circuit: CircuitBreaker);

    getHystrixStream(): stream.Transform;
}

export function promisify(action: Action): (...args: any[]) => Promise<any>;
export const stats: stream.Transform;

interface index {
    (action: Action, options: CircuitBreakerOptions): CircuitBreaker;

    promisify: (action: Action) => (...args: any[]) => Promise<any>;
    stats: stream.Transform;
}

export const circuitBreaker: index;
export default circuitBreaker;
