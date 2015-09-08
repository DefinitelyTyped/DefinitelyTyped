// Type definitions for Redlock
// Project: https://github.com/mike-marcacci/node-redlock
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />

declare module RedlockTypes {
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

	class Redlock {
		LockError: LockError;

		driftFactor: number;
		retryCount: number;
		retryDelay: number;

		servers: any[]; // array of redis.RedisClient

		constructor(clients: any[], options?: RedlockOptions);
		//new (clients: any[], options?: IRedlockOptions);

		acquire(resource: string, ttl: number, callback?: NodeifyCallback<Lock>): Promise<Lock>;
		lock(resource: string, ttl: number, callback?: NodeifyCallback<Lock>): Promise<Lock>;

		disposer(resource: string, ttl: number): any; // return bluebird.Disposer

		release(lock: Lock, callback?: NodeifyCallback<void>): Promise<void>;
		unlock(lock: Lock, callback?: NodeifyCallback<void>): Promise<void>;

		extend(lock: Lock, ttl: number, callback?: NodeifyCallback<Lock>): Promise<Lock>;

		_lock(resource: string, value: string, ttl: number, callback?: NodeifyCallback<Lock>): Promise<Lock>;

		_random(): string;
	}
}

declare module "redlock" {
	import Redlock = RedlockTypes.Redlock;
	export = Redlock;
}
