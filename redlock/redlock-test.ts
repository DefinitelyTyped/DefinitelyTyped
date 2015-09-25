/// <reference path="./redlock.d.ts" />

import Redlock = require('redlock');

import NodeifyCallback = RedlockTypes.NodeifyCallback;
import Lock = RedlockTypes.Lock;
import RedlockOptions = RedlockTypes.RedlockOptions;

module RedlockTest {
	// constructor
	{
		let redlock: Redlock;
		let client: any;
		let options: RedlockOptions;
		redlock = new Redlock([client]);
		redlock = new Redlock([client], options);
	}

	// acquire, lock
	{
		let redlock: Redlock;
		let resource: string;
		let ttl: number;
		let callback: NodeifyCallback<Lock>;
		let result: Promise<Lock>;
		result = redlock.acquire(resource, ttl);
		result = redlock.acquire(resource, ttl, callback);
		result = redlock.lock(resource, ttl);
		result = redlock.lock(resource, ttl, callback);
	}

	// disposer
	{
		let redlock: Redlock;
		let resource: string;
		let ttl: number;
		let result: any;
		result = redlock.acquire(resource, ttl);
	}

	// release, unlock
	{
		let redlock: Redlock;
		let lock: Lock;
		let callback: NodeifyCallback<void>;
		let result: Promise<void>;
		result = redlock.release(lock);
		result = redlock.release(lock, callback);
		result = redlock.unlock(lock);
		result = redlock.unlock(lock, callback);
	}

	// extend
	{
		let redlock: Redlock;
		let lock: Lock;
		let ttl: number;
		let callback: NodeifyCallback<Lock>;
		let result: Promise<Lock>;
		result = redlock.extend(lock, ttl);
		result = redlock.extend(lock, ttl, callback);
	}

	// _lock
	{
		let redlock: Redlock;
		let resource: string;
		let value: string;
		let ttl: number;
		let callback: NodeifyCallback<Lock>;
		let result: Promise<Lock>;
		result = redlock._lock(resource, value, ttl);
		result = redlock._lock(resource, value, ttl, callback);
	}

	// _random
	{
		let redlock: Redlock;
		let result: string;
		result = redlock._random();
	}
}

module LockTest {
	// unlock
	{
		let lock: Lock;
		let callback: NodeifyCallback<void>;
		let result: Promise<void>;
		result = lock.unlock();
		result = lock.unlock(callback);
	}

	// extend
	{
		let lock: Lock;
		let ttl: number;
		let callback: NodeifyCallback<Lock>;
		let result: Promise<Lock>;
		result = lock.extend(ttl);
		result = lock.extend(ttl, callback);
	}
}
