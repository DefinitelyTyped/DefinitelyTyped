// Type definitions for redlock 2.x
// Project: https://github.com/mike-marcacci/node-redlock
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as redis from 'redis';
import * as Promise from 'bluebird';

export = Redlock;

declare namespace Redlock {
    type Callback<T> = (err: any, value?: T) => void;

    class Lock {
        redlock: Redlock;
        resource: string;
        value: any;
        expiration: number;
        constructor(redlock: Redlock, resource: string, value: any, expiration: number);
        unlock(callback?: Callback<void>): Promise<void>;
        extend(ttl: number, callback?: Callback<Lock>): Promise<Lock>;
    }

    interface Options {
        driftFactor?: number;
        retryCount?: number;
        retryDelay?: number;
    }

    class LockError extends Error {
        readonly name: 'LockError';
        constructor(message?: string);
    }
}

declare class Redlock {
    LockError: typeof Redlock.LockError;
    Lock: typeof Redlock.Lock;

    driftFactor: number;
    retryCount: number;
    retryDelay: number;

    servers: redis.RedisClient[];

    constructor(clients: any[], options?: Redlock.Options);

    acquire(resource: string, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;
    lock(resource: string, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;

    disposer(resource: string, ttl: number, errorHandler?: Redlock.Callback<void>): Promise.Disposer<Redlock.Lock>; // bluebird Disposer

    release(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;
    unlock(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;

    extend(lock: Redlock.Lock, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;
    _lock(resource: string, value: string, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;
}
