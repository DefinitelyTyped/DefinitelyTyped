// Type definitions for opossum 1.8
// Project: https://github.com/bucharest-gold/opossum
// Definitions by: Quinn Langille <https://github.com/quinnlangille>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node"/>
import * as stream from "stream";

export type Action = () => any;

export class CircuitBreaker {
    promisify(action: Action): Promise<Action>;
    stats(): stream.Transform;
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
