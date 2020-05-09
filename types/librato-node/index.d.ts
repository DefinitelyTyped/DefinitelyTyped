// Type definitions for librato-node 5.0
// Project: https://github.com/goodeggs/librato-node
// Definitions by: Jim Geurts <https://github.com/jgeurts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="node" />

export interface CustomSource {
    source: string;
}

export interface LibratoRequestOptions {
    method?: string;
    uri?: string;
    headers?: { [index: string]: string };
    maxAttempts?: number;
    retryDelay?: number;
    delayStrategy?: () => number;
    authorization?: string;
    'user-agent'?: string;
}

export interface LibratoConfig {
    email: string;
    token: string;
    prefix?: string;
    source?: string;
    requestOptions?: LibratoRequestOptions;
    period?: number;
    simulate?: false;
}

export interface LibratoSimulate {
    simulate: true;
}

export function configure(config: LibratoConfig | LibratoSimulate): void;
export function increment(name: string, value?: number, opts?: CustomSource): void;
export function measure(name: string, value: number, opts?: CustomSource): void;
export function timing(name: string, fn: (done: () => void) => void, cb: ((err?: Error | null) => void)): void;
export function timing(name: string, fn: (done: () => void) => void, opts?: CustomSource, cb?: ((err?: Error | null) => void)): void;
export function timing<T>(name: string, fn: (done: (err: Error | null | undefined, result: T) => T) => void, cb: ((err?: Error | null) => void)): T;
export function timing<T>(name: string, fn: (done: (err: Error | null | undefined, result: T) => T) => void, opts?: CustomSource, cb?: ((err?: Error | null) => void)): T;
export function start(): void;
export function stop(cb?: (err?: Error) => void): void;
export function flush(cb?: (err?: Error) => void): void;
export function middleware(config?: {
    requestCountKey?: string;
    responseTimeKey?: string;
    statusCodeKey?: string;
}): (req: object, res: object, next: () => void | Promise<void>) => void;

export function on(event: 'error', handler: (err: Error) => void): void;
export function on(event: 'SIGINT', handler: () => void): void;
