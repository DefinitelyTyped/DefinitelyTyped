// Type definitions for CacheFactory 1.4.0
// Project: https://github.com/jmdobry/CacheFactory
// Definitions by: Vaggelis Mparmpas <https://github.com/vag1830>, Daniel Massa <https://github.com/danielmassa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CacheFactory {
	export interface IStoreImplementation {
		getItem(key: string): string;

		setItem(key: string, value: string): void;

		removeItem(key: string): void;
	}

	export interface CacheGetOptions {
		/*
		 * A callback function to be executed whenever an expired item is removed from a cache when the cache is in passive
		 * or aggressive mode. Will be passed the key and value of the expired item.
		 *
		 * Will be passed a third done argument if the cache is in passive mode. This allows you to synchronously access the
		 * key and value of the expired item when you make the cache#get(key[, options]) call that is the reason the expired
		 * item is being removed in the first place. Default: null.
		 */
		onExpire?(key: string, value: any): any;
	}

	export interface CachePutOptions {
		/*
		 * The number of milliseconds until a newly inserted item expires. Default: Number.MAX_VALUE.
		 */
		maxAge?: number;

		/*
		 * If inserting a promise into a cache, also insert the rejection value if the promise rejects. Default: false.
		 */
		storeOnReject?: boolean;

		/*
		 * If inserting a promise into a cache, also insert the resolved value if the promise resolves. Default: false.
		 */
		storeOnResolve?: boolean;

		created?: Date;
		access?: Date;
		expires?: Date;
	}

	export interface CacheTouchOptions extends CachePutOptions { }

	export interface CacheOptions {
		/*
		 * If set, remove all items from a cache on an interval after the given number of milliseconds. Default: null.
		 */
		cacheFlushInterval?: number;

		/*
		 * Maximum number of items a cache can hold. Adding more items than the capacity will cause the cache to operate
		 * like an LRU cache, removing the least recently used items to stay under capacity. Default: Number.MAX_VALUE.
		 */

		capacity?: number;

		/*
		 * Determines the behavior of a cache when an item expires. Default: none.
		 *
		 * Possible values:
		 *
		 * none - cache will do nothing when an item expires.
		 * passive - cache will do nothing when an item expires. Expired items will remain in the cache until requested,
		 *           at which point they are removed, and undefined is returned.
		 * aggressive - cache will remove expired items as soon as they are discovered.
		 */
		deleteOnExpire?: string;

		/*
		 * Determines whether a cache is disabled. Default: false.
		 */
		disabled?: boolean;

		/*
		 * The number of milliseconds until a newly inserted item expires. Default: Number.MAX_VALUE.
		 */
		maxAge?: number;

		/*
		 * Determines how often a cache will scan for expired items when in aggressive mode. Default: 1000 (milliseconds).
		 */
		recycleFreq?: number;

		/*
		 * If inserting a promise into a cache, also insert the rejection value if the promise rejects. Default: false.
		 */
		storeOnReject?: boolean;

		/*
		 * If inserting a promise into a cache, also insert the resolved value if the promise resolves. Default: false.
		 */
		storeOnResolve?: boolean;

		/*
		 * Provide a custom storage medium, e.g. a polyfill for localStorage. Default: null.
		 *
		 * Must implement:
		 *
		 * setItem - Same API as localStorage.setItem(key, value)
		 * getItem - Same API as localStorage.getItem(key)
		 * removeItem - Same API as localStorage.removeItem(key)
		 */
		storageImpl?: IStoreImplementation;

		/*
		 * Determines the storage medium used by a cache. Default: memory.
		 *
		 * Possible values:
		 *
		 * memory - cache will hold data in memory. Data is cleared when the page is refreshed.
		 * localStorage - cache will hold data in localStorage if available. Data is not cleared when the page is refreshed.
		 * sessionStorage - cache will hold data in sessionStorage if available. Data is not cleared when the page is refreshed.
		 */
		storageMode?: string;

		/*
		 * Determines the namespace of a cache when storageMode is set to localStorage or sessionStorage. Make it a shorter
		 * string to save space. Default: angular-cache.caches.
		 */
		storagePrefix?: string;

		/*
		 * A callback function to be executed whenever an expired item is removed from a cache when the cache is in passive
		 * or aggressive mode. Will be passed the key and value of the expired item.
		 *
		 * Will be passed a third done argument if the cache is in passive mode. This allows you to synchronously access the
		 * key and value of the expired item when you make the cache#get(key[, options]) call that is the reason the expired
		 * item is being removed in the first place. Default: null.
		 */
		onExpire?(key: string, value: any): any;
	}

	export interface ICache {

		$$id: string;

		/**
		 * Return the item with the given key.options, if provided, must be an object.
		 *
		 * If the cache is in passive mode, then options.onExpire can be a function that will be called with the key
		 * and value of the requested item if the requested item is expired, with the get call itself returning undefined.
		 * @param key
		 * @returns {}
		 */
		get<T>(key: string, options?: CacheGetOptions): T;

		/**
		 * Insert the item with the given key and value into the cache.options, if provided, must be an object.
		 *
		 * If inserting a promise, options.storeOnReject determines whether to insert the rejection value if the promise
		 * rejects (overriding the default storeOnReject setting for the cache). If inserting a promise, options.storeOnResolve
		 * determines whether to insert the resolved value if the promise resolves (overriding the default storeOnResolve setting for the cache).
		 *
		 * @param key
		 * @param value
		 * @param options
		 */
		put<T>(key: string, value: T, options?: CachePutOptions): void;

		/**
		 * Remove and return the item with the given key, if it is in the cache.
		 * @param key
		 * @returns {}
		 */
		remove<T>(key: string): T;

		/**
		 * Remove all items in the cache.
		 */
		removeAll(): void;

		/**
		 * Remove and return all expired items in the cache.
		 * @returns {}
		 */
		removeExpired(): { [key: string]: any };

		/**
		 * Completely destroy this cache and its data.
		 * @returns {}
		 */
		destroy(): void;

		/**
		 * Returns an object containing information about the cache.
		 *
		 * @param key
		 */
		info(): CacheInfo;

		/**
		 * Returns an object containing information about the item with the given key, if the item is in the cache.
		 *
		 * @param key
		 */
		info(key: string): CacheItemInfo;

		/**
		 * Return the keys of all items in the cache as an object.
		 * @returns {}
		 */
		keySet(): any;

		/**
		 * Return the keys of all items in the cache as an array.
		 * @returns []
		 */
		keys(): Array<string>;

		/**
		 * Enable the cache.
		 */
		enable(): void;

		/**
		 * Disable the cache.
		 */
		disable(): void;

		/**
		 * cache#touch() will "touch" all items in the cache.
		 * cache#touch(key) will "touch" the item with the given key.
		 *
		 * @param key
		 */
		touch(key?: string, options?: CacheTouchOptions): void;

		/**
		 * Set the cacheFlushInterval for the cache.
		 * @param cacheFlushInterval
		 */
		setCacheFlushInterval(cacheFlushInterval: number): void;

		/**
		 * Set the capacity for the cache.Setting this lower than the current item count will result in those items being removed.
		 * @param capacity
		 */
		setCapacity(capacity: number): void;

		/**
		 * Set the deleteOnExpire for the cache.
		 * @param deleteOnExpire
		 */
		setDeleteOnExpire(deleteOnExpire: string): void;

		/**
		 * Set the maxAge for the cache.
		 */
		setMaxAge(maxAge: number): void;

		/**
		 * Set the onExpire for the cache.
		 * @param onExpire
		 */
		setOnExpire(onExpire: Function): void;

		/**
		 * Set the recycleFreq for the cache.
		 * @param recycleFreq
		 */
		setRecycleFreq(recycleFreq: number): void;

		/**
		 * Set the storageMode for the cache.This will move data from the current storage medium to the new one.
		 * @param storageMode
		 */
		setStorageMode(storageMode: string): void;

		/**
		 * Set multiple options for the cache at a time.Setting strict to true will reset options for the cache
		 * that are not specifically set in the options hash to CacheFactoryProvider.defaults.
		 * @param options
		 */
		setOptions(options: CacheOptions, strict?: boolean): void;

		/**
		 * Return the values of all items in the cache as an array.
		 * @returns Array<any>
		 */
		values(): Array<any>
	}

	export interface ICacheFactory {

		BinaryHeap: IBinaryHeap;
		utils: IUtils;
		defaults: CacheOptions;

		/**
		 * Create a cache. cache must not already exist. cacheId must be a string. options is an optional argument and must be an object.
		 * Any options you pass here will override any default options.
		 * @param cacheId
		 * @param options
		 * @returns ICache
		 */
		(cacheId: string, options?: CacheOptions): ICache;

		/**
		 * Create a cache. cache must not already exist. cacheId must be a string. options is an optional argument and must be an object.
		 * Any options you pass here will override any default options.
		 * @param cacheId
		 * @param options
		 * @returns ICache
		 */
		createCache(cacheId: string, options?: CacheOptions): ICache;

		/**
		 * Return the cache with the given cacheId.
		 * @param cacheId The id of the cache storage.
		 * @returns ICache
		 */
		get(cacheId: string, options?: CacheOptions): ICache;

		/**
		 * Return an object of key- value pairs, the keys being cache ids and the values being the result of .info() being called on each cache.
		 * @returns CacheInfo
		 */
		info(): CacheInfo;

		/**
		 * Return the ids of all registered caches as an object.
		 * @returns {[key: string]: ICache}
		 */
		keySet(): { [key: string]: ICache };

		/**
		 * Return the ids of all registered caches as an array.
		 * @returns Array<string>
		 */
		keys(): Array<string>;

		/**
		 * Destroy the cache with the given cacheId.
		 * @param cacheId
		 */
		destroy(cacheId: string): void;

		/**
		 * Destroy all registered caches.
		 */
		destroyAll(): void;

		/**
		 * Remove all data from all registered caches.
		 */
		clearAll(): void;

		/**
		 * Enable all registered caches.
		 */
		enableAll(): void;

		/**
		 * Disable all registered caches.
		 */
		disableAll(): void;

		/**
		 * Call.touch() on all registered caches.
		 */
		touchAll(): void;

		/**
		 * Call.removeExpired() on all registered caches.Returns a hash of any expired items, keyed by cache id.
		 * @returns {}
		 */
		removeExpiredFromAll(): Array<{ [key: string]: Array<{ [key: string]: any }> }>;
	}

	export interface IUtils {
		isNumber(value: any): boolean;
		isString(value: any): boolean;
		isObject(value: any): boolean;
		isFunction(value: any): boolean;
		equals(a: any, b: any): boolean;
		fromJson(value: any): {}
		Promise: any;
	}

	export interface HeapItem {
		key: string;
		accessed: Date;
	}

	export interface IBinaryHeap {
		(w?: IWeightFunc, c?: ICompareFunc): void;

		heap: Array<HeapItem>;
		weightFunc: IWeightFunc;
		compareFunc: ICompareFunc;

		push(node: HeapItem): void;
		pop(): HeapItem;
		peek(): HeapItem;
		remove(node: HeapItem): HeapItem;
		removeAll(): void;
		size(): Number;
	}

	export interface IWeightFunc {
		<T>(x: T): T;
	}

	export interface ICompareFunc {
		<T>(x: T, y: T): boolean;
	}

	export interface CacheInfo {
		size: Number;
		caches: { [key: string]: any };
		capacity: Number;
		maxAge: Number;
		deleteOnExpire: string;
		onExpire: Function;
		cacheFlushInterval: Number;
		recycleFreq: Number;
		storageMode: string;
		storageImpl: IStoreImplementation;
		disabled: boolean;
		storagePrefix: string;
		storeOnResolve: boolean;
		storeOnReject: boolean;
	}

	export interface CacheItemInfo {
		created: Date;
		accessed: Date;
		expires: Date;
		isExpired: boolean;
	}
}

declare const CacheFactory: CacheFactory.ICacheFactory;
export = CacheFactory;
export as namespace CacheFactory;
