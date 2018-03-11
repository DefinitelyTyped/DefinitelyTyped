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

    acquire(priority?: number): PromiseLike<T>;
    release(resource: T): void;
    destroy(resource: T): void;
    drain(): PromiseLike<undefined>;
    clear(): PromiseLike<undefined[]>;
}

export interface Factory<T> {
    create(): PromiseLike<T>;
    destroy(client: T): PromiseLike<undefined>;
    validate?(client: T): PromiseLike<boolean>;
}

export interface Options {
    max?: number;
    min?: number;
    maxWaitingClients?: number;
    testOnBorrow?: boolean;
    acquireTimeoutMillis?: number;
    fifo?: boolean;
    priorityRange?: number;
    autostart?: boolean;
    evictionRunIntervalMillis?: number;
    numTestsPerRun?: number;
    softIdleTimeoutMillis?: number;
    idleTimeoutMillis?: number;
}

export function createPool<T>(factory: Factory<T>, opts?: Options): Pool<T>;
