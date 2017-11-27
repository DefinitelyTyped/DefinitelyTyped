// Type definitions for redlock 3.0
// Project: https://github.com/mike-marcacci/node-redlock
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
        constructor(redlock: Redlock, resource: string, value: string | null, expiration: number);
        unlock(callback?: Callback<void>): Promise<void>;
        extend(ttl: number, callback?: Callback<Lock>): Promise<Lock>;
    }

    interface Options {
        driftFactor?: number;
        retryCount?: number;
        retryDelay?: number;
        retryJitter?: number;
        lockScript?(origLockScript: string): string;
        unlockScript?(origUnlockScript: string): string;
        extendScript?(origExtendScript: string): string;
    }

    class LockError extends Error {
        readonly name: 'LockError';
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

    acquire(resource: string, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;
    lock(resource: string, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;

    disposer(resource: string, ttl: number, errorHandler?: Redlock.Callback<void>): Promise.Disposer<Redlock.Lock>;

    release(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;
    unlock(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;

    extend(lock: Redlock.Lock, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;

    addListener(event: 'clientError', listener: (err: any) => void): this;
    on(event: 'clientError', listener: (err: any) => void): this;
    once(event: 'clientError', listener: (err: any) => void): this;
    removeListener(event: 'clientError', listener: (err: any) => void): this;
}
