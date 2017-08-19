// Type definitions for node-cache v3.0.0
// Project: https://github.com/tcs-de/nodecache
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace NodeCache {
	interface NodeCache {
		/** container for cached data */
		data: Data;

		/** module options */
		options: Options;

		/** statistics container */
		stats: Stats;

		/**
		 * get a cached key and change the stats
		 *
		 * @param key cache key or an array of keys
		 * @param cb Callback function
		 */
		get<T>(
			key: string,
			cb?: Callback<T>
		): T;

		/**
		 * get multiple cached keys at once and change the stats
		 *
		 * @param keys an array of keys
		 * @param cb Callback function
		 */
		mget<T>(
			keys: string[],
			cb?: Callback<{[key: string]: T}>
		): {[key: string]: T};

		/**
		 * set a cached key and change the stats
		 *
		 * @param key cache key
		 * @param value A element to cache. If the option `option.forceString` is `true` the module trys to translate
		 * it to a serialized JSON
		 * @param ttl The time to live in seconds.
		 * @param cb Callback function
		 */
		set<T>(
			key: string,
			value: T,
			ttl: number|string,
			cb?: Callback<boolean>
		): boolean;

		set<T>(
			key: string,
			value: T,
			cb?: Callback<boolean>
		): boolean;

		/**
		 * remove keys
		 * @param keys cache key to delete or a array of cache keys
		 * @param cb Callback function
		 * @returns Number of deleted keys
		 */
		del(
			keys: string|string[],
			cb?: Callback<number>
		): number;

		/**
		 * reset or redefine the ttl of a key. If `ttl` is not passed or set to 0 it's similar to `.del()`
		 */
		ttl(
			key: string,
			ttl: number,
			cb?: Callback<boolean>
		): boolean;

		ttl(
			key: string,
			cb?: Callback<boolean>,
			ttl?: number
		): boolean;

		/**
		 * list all keys within this cache
		 * @param cb Callback function
		 * @returns An array of all keys
		 */
		keys(cb?: Callback<string[]>): string[];

		/**
		 * get the stats
		 *
		 * @returns Stats data
		 */
		getStats(): Stats;

		/**
		 * flush the hole data and reset the stats
		 */
		flushAll(): void;

		/**
		 * This will clear the interval timeout which is set on checkperiod option.
		 */
		close(): void;
	}

	interface Data {
		[key: string]: WrappedValue<any>;
	}

	interface Options {
		forceString?: boolean;
		objectValueSize?: number;
		arrayValueSize?: number;
		stdTTL?: number;
		checkperiod?: number;
		useClones?: boolean;
		errorOnMissing?: boolean;
	}

	interface Stats {
		hits: number;
		misses: number;
		keys: number;
		ksize: number;
		vsize: number;
	}

	interface WrappedValue<T> {
		// ttl
		t: number;
		// value
		v: T;
	}

	interface Callback<T> {
		(err: any, data: T): void;
	}
}

import events = require("events");

import Data = NodeCache.Data;
import Options = NodeCache.Options;
import Stats = NodeCache.Stats;
import Callback = NodeCache.Callback;

declare class NodeCache extends events.EventEmitter implements NodeCache.NodeCache {
	/** container for cached data */
	data: Data;

	/** module options */
	options: Options;

	/** statistics container */
	stats: Stats;

	constructor(options?: Options);

	/**
	 * get a cached key and change the stats
	 *
	 * @param key cache key or an array of keys
	 * @param cb Callback function
	 */
	get<T>(
		key: string,
		cb?: Callback<T>
	): T;

	/**
	 * get multiple cached keys at once and change the stats
	 *
	 * @param keys an array of keys
	 * @param cb Callback function
	 */
	mget<T>(
		keys: string[],
		cb?: Callback<{[key: string]: T}>
	): {[key: string]: T};

	/**
	 * set a cached key and change the stats
	 *
	 * @param key cache key
	 * @param value A element to cache. If the option `option.forceString` is `true` the module trys to translate
	 * it to a serialized JSON
	 * @param ttl The time to live in seconds.
	 * @param cb Callback function
	 */
	set<T>(
		key: string,
		value: T,
		ttl: number|string,
		cb?: Callback<boolean>
	): boolean;

	set<T>(
		key: string,
		value: T,
		cb?: Callback<boolean>
	): boolean;

	/**
	 * remove keys
	 * @param keys cache key to delete or a array of cache keys
	 * @param cb Callback function
	 * @returns Number of deleted keys
	 */
	del(
		keys: string|string[],
		cb?: Callback<number>
	): number;

	/**
	 * reset or redefine the ttl of a key. If `ttl` is not passed or set to 0 it's similar to `.del()`
	 */
	ttl(
		key: string,
		ttl: number,
		cb?: Callback<boolean>
	): boolean;

	ttl(
		key: string,
		cb?: Callback<boolean>,
		ttl?: number
	): boolean;

	/**
	 * list all keys within this cache
	 * @param cb Callback function
	 * @returns An array of all keys
	 */
	keys(cb?: Callback<string[]>): string[];

	/**
	 * get the stats
	 *
	 * @returns Stats data
	 */
	getStats(): Stats;

	/**
	 * flush the hole data and reset the stats
	 */
	flushAll(): void;

	/**
	 * This will clear the interval timeout which is set on checkperiod option.
	 */
	close(): void;
}

export = NodeCache;

