import { EventEmitter } from 'events';

export class CacheEntry<T> extends EventEmitter {
  get(callback?: (err: Error, result: T) => void): T | undefined;
  set(value: T): void;
  clear(): void;
}

export class Cache {
  /**
   * Clear cache entries prefix matching given key
   * @param key Key prefix of cache entry to clear
   */
  clear(key?: string): void;

  /**
   * Retrieve cache entry, or create if not exists
   * @param key Key of cache entry
   */
  get<T>(key?: string): CacheEntry<T>;
}