// Type definitions for opossum 1.9
// Project: https://github.com/nodeshift/opossum
// Definitions by: Quinn Langille <https://github.com/quinnlangille>
//                 Lance Ball <https://github.com/lance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node"/>
import * as stream from "stream";

export type Action = () => any;

export class CircuitBreaker {
    clearCache(): void;
    close(): void;
    disable(): void;
    enable(): void;
    fallback(): CircuitBreaker;
    fire(): Promise<any>;
    healthCheck(func: () => Promise<any>, interval: number): Promise<any>;
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
    static readonly volumeThreshold: symbol;
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
    volumeThreshold?: number;
}

export default function circuitBreaker(
    action: Action,
    options?: CircuitBreakerOptions
): CircuitBreaker;
