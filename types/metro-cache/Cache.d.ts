import { CacheStore } from './types';

/**
 * Main cache class. Receives an array of cache instances, and sequentially
 * traverses them to return a previously stored value. It also ensures setting
 * the value in all instances.
 *
 * All get/set operations are logged via Metro's logger.
 */
export default class Cache<T> {
    constructor(stores: ReadonlyArray<CacheStore<T>>);
    get(key: Buffer): Promise<T | null>;
    set(key: Buffer, value: T): void;
    get isDisabled(): boolean;
}
