// Type definitions for generic-pool 3.1
// Project: https://github.com/coopernurse/node-pool#readme
// Definitions by: Jerray Fu <https://github.com/jerray>
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

    acquire(priority?: number): Promise<T>;
    release(resource: T): void;
    destroy(resource: T): void;
    drain(): Promise<undefined>;
    clear(): Promise<undefined[]>;
}

export interface Factory<T> {
    create(): Promise<T>;
    destroy(client: T): Promise<undefined>;
    validate?(client: T): Promise<boolean>;
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
