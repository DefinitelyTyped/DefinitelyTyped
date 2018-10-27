// Type definitions for opossum 1.8
// Project: https://github.com/bucharest-gold/opossum
// Definitions by: Quinn Langille <https://github.com/quinnlangille>
//                 Willy Zhang <https://github.com/merufm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node"/>
import * as stream from "stream";
import { EventEmitter } from "events";

export type Action = (...args: any[]) => any;

export class CircuitBreaker extends EventEmitter {
    clearCache(): void;
    close(): void;
    disable(): void;
    enable(): void;
    fallback(func?: (...args: any[]) => any): this;
    fire(...args: any[]): Promise<any>;
    healthCheck(func: (...args: any[]) => Promise<any>, interval?: number): Promise<any>;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    open(): void;
    promisify(action: Action): Promise<Action>;
    stats(): stream.Transform;

    static readonly name: symbol;
    static readonly group: symbol;
    static readonly pendingClose: symbol;
    static readonly closed: symbol;
    static readonly opened: symbol;
    static readonly halfOpen: symbol;
    static readonly status: symbol;
    static readonly hystrixStats: symbol;
    static readonly enabled: symbol;
    static readonly warmUp: symbol;
}

export enum Event {
    cacheHit = 'cacheHit',
    cacheMiss = 'cacheMiss',
    close = 'close',
    failure = 'failure',
    fallback = 'fallback',
    fire = 'fire',
    halfOpen = 'halfOpen',
    healthCheckFailed = 'health-check-failed',
    open = 'open',
    reject = 'reject',
    semaphoreLocked = 'semaphore-locked',
    success = 'success',
    timeout = 'timeout'
}

export interface CircuitBreakerOptions {
    timeout?: number;
    maxFailures?: number;
    resetTimeout?: number;
    rollingCountTimeout?: number;
    rollingCountBuckets?: number;
    name?: string;
    rollingPercentilesEnabled?: boolean;
    capacity?: number;
    errorThresholdPercentage?: number;
    enabled?: boolean;
    allowWarmUp?: boolean;
}

export default function circuitBreaker(
    action: Action,
    options?: CircuitBreakerOptions
): CircuitBreaker;
