/** cache for map data tiles. */
export class DataCache {
    /**
     * if younger than this, use data in the cache rather than fetching from the server
     * @default 180
     */
    REQUEST_CACHE_FRESH_AGE: number;

    /**
     * maximum cache age. entries are deleted from the cache after this time
     * @default 300
     */
    REQUEST_CACHE_MAX_AGE: number;

    /** if more than this many entries, expire early */
    REQUEST_CACHE_MAX_ITEMS: number;
    /** or more than this total size */
    REQUEST_CACHE_MAX_CHARS: number;

    store(key: string, data: any, freshTime?: number): void;
    remove(key: string): void;
    get(key: string): any;
    getTime(key: string): number;
    getFresh(key: string): boolean | undefined;
    startExpireInterval(periodInSecond: number): void;
    stopExpireInterval(): void;
    private runExpire(): void;

    debug(): string;
}
