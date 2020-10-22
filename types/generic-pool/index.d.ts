// Type definitions for generic-pool 3.1
// Project: https://github.com/coopernurse/node-pool#readme
// Definitions by: Jerray Fu <https://github.com/jerray>
//                 Will Boyce <https://github.com/wrboyce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from "events";

export class Pool<T> extends EventEmitter {
    spareResourceCapacity: number;
    size: number;
    available: number;
    borrowed: number;
    pending: number;
    max: number;
    min: number;

    start(): void;
    acquire(priority?: number): PromiseLike<T>;
    release(resource: T): PromiseLike<void>;
    destroy(resource: T): PromiseLike<void>;
    drain(): PromiseLike<void>;
    clear(): PromiseLike<void>;
    use<U>(cb: (resource: T) => U | PromiseLike<U>): PromiseLike<U>;
    isBorrowedResource(resource: T): boolean;
}

export interface Factory<T> {
    create(): PromiseLike<T>;
    destroy(client: T): PromiseLike<void>;
    validate?(client: T): PromiseLike<boolean>;
}

export interface Options {
    max?: number;
    min?: number;
    maxWaitingClients?: number;
    testOnBorrow?: boolean;
    testOnReturn?: boolean;
    acquireTimeoutMillis?: number;
    fifo?: boolean;
    priorityRange?: number;
    autostart?: boolean;
    evictionRunIntervalMillis?: number;
    numTestsPerEvictionRun?: number;
    softIdleTimeoutMillis?: number;
    idleTimeoutMillis?: number;
}

export function createPool<T>(factory: Factory<T>, opts?: Options): Pool<T>;
