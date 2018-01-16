// Type definitions for lscache v1.0.7
// Project: https://github.com/pamelafox/lscache
// Definitions by: Chris Martinez <https://github.com/Chris-Martinezz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LSCache {

    /**
    * Stores the value in localStorage. Expires after specified number of minutes.
    * @param {string} key
    * @param {Object|string} value
    * @param {number} time
    */
    set(key: string, value: any, time?: number): void;
    /**
    * Retrieves specified value from localStorage, if not expired.
    * @param {string} key
    * @return {string|Object}
    */
    get(key: string): any;
    /**
    * Removes a value from localStorage.
    * Equivalent to 'delete' in memcache, but that's a keyword in JS.
    * @param {string} key
    */
    remove(key: string): void;
    /**
    * Flushes all lscache items and expiry markers without affecting rest of localStorage
    */
    flush(): void;
    /**
    * Flushes expired lscache items and expiry markers without affecting rest of localStorage
    */
    flushExpired(): void;
    /**
    * Appends CACHE_PREFIX so lscache will partition data in to different buckets.
    * @param {string} bucket
    */
    setBucket(bucket: string): void;
    /**
    * Resets the string being appended to CACHE_PREFIX so lscache will use the default storage behavior.
    */
    resetBucket(): void;
    /**
     * Test if the current browser supports localStorage
     * @return {boolean} true if supported else false
     */
    supported(): boolean;
    /**
     * Enable/Disable warning if set fails
     * @param {boolean} enabled
     */
    enableWarnings(enabled: boolean): void;
}
declare var lscache: LSCache;
declare module 'lscache' {
    var lscache: LSCache;
    export = lscache;
}
