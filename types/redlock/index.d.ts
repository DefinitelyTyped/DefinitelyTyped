// Type definitions for redlock 4.0
// Project: https://github.com/mike-marcacci/node-redlock
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
//                 BendingBender <https://github.com/BendingBender>
//                 Doug Ayers <https://github.com/douglascayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import * as Promise from 'bluebird';
import { EventEmitter } from 'events';

export = Redlock;

declare namespace Redlock {
    type Callback<T> = (err: any, value?: T) => void;

    class Lock {
        redlock: Redlock;
        resource: string;
        value: string | null;
        expiration: number;
        attempts: number;
        constructor(redlock: Redlock, resource: string, value: string | null, expiration: number, attempts: number);
        unlock(callback?: Callback<void>): Promise<void>;
        extend(ttl: number, callback?: Callback<Lock>): Promise<Lock>;
    }

    type LockScriptFunction = (origScript: string) => string;
    type UnlockScriptFunction = LockScriptFunction;
    type ExtendScriptFunction = LockScriptFunction;

    interface Options {
        driftFactor?: number;
        retryCount?: number;
        retryDelay?: number;
        retryJitter?: number;
        lockScript?: LockScriptFunction | string;
        unlockScript?: UnlockScriptFunction | string;
        extendScript?: ExtendScriptFunction | string;
    }

    class LockError extends Error {
        readonly name: 'LockError';
        attempts: number;
        constructor(message?: string);
    }

    interface CompatibleRedisClient {
        eval(args: any[], callback?: (err: Error | null, res: any) => void): any;
        eval(...args: any[]): any;
    }
}

declare class Redlock extends EventEmitter {
    LockError: typeof Redlock.LockError;
    Lock: typeof Redlock.Lock;
    driftFactor: number;
    retryCount: number;
    retryDelay: number;
    retryJitter: number;
    servers: Redlock.CompatibleRedisClient[];

    constructor(clients: Redlock.CompatibleRedisClient[], options?: Redlock.Options);

    quit(callback?: Redlock.Callback<void>): Promise<void>;

    acquire(resource: string | string[], ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;
    lock(resource: string | string[], ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;

    disposer(resource: string, ttl: number, errorHandler?: Redlock.Callback<void>): Promise.Disposer<Redlock.Lock>;

    release(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;
    unlock(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;

    extend(lock: Redlock.Lock, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;

    addListener(event: 'clientError', listener: (err: any) => void): this;
    on(event: 'clientError', listener: (err: any) => void): this;
    once(event: 'clientError', listener: (err: any) => void): this;
    removeListener(event: 'clientError', listener: (err: any) => void): this;
}
