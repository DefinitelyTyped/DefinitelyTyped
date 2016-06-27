// Type definitions for Redlock
// Project: https://github.com/mike-marcacci/node-redlock
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="bluebird" />

declare namespace Redlock {
	interface LockError extends Error {}

	interface NodeifyCallback<T> {
		(err: any, value?: T): void;
	}

	interface Lock {
		redlock: Redlock;
		resource: string;
		value: any;
		expiration: number;

		unlock(callback?: NodeifyCallback<void>): Promise<void>;

		extend(ttl: number, callback?: NodeifyCallback<Lock>): Promise<Lock>;
	}

	interface RedlockOptions {
		driftFactor?: number;
		retryCount?: number;
		retryDelay?: number;
	}
}

declare class Redlock {
	LockError: Redlock.LockError;

	driftFactor: number;
	retryCount: number;
	retryDelay: number;

	servers: any[]; // array of redis.RedisClient

	constructor(clients: any[], options?: Redlock.RedlockOptions);

	acquire(resource: string, ttl: number, callback?: Redlock.NodeifyCallback<Redlock.Lock>): Promise<Redlock.Lock>;
	lock(resource: string, ttl: number, callback?: Redlock.NodeifyCallback<Redlock.Lock>): Promise<Redlock.Lock>;

	disposer(resource: string, ttl: number): any; // return bluebird.Disposer

	release(lock: Redlock.Lock, callback?: Redlock.NodeifyCallback<void>): Promise<void>;
	unlock(lock: Redlock.Lock, callback?: Redlock.NodeifyCallback<void>): Promise<void>;

	extend(lock: Redlock.Lock, ttl: number, callback?: Redlock.NodeifyCallback<Redlock.Lock>): Promise<Redlock.Lock>;

	_lock(resource: string, value: string, ttl: number, callback?: Redlock.NodeifyCallback<Redlock.Lock>): Promise<Redlock.Lock>;

	_random(): string;
}

export = Redlock;
