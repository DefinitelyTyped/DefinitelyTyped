// Type definitions for lscache 1.3
// Project: https://github.com/pamelafox/lscache
// Definitions by: Chris Martinez <https://github.com/Chris-Martinezz>
//                 c-py <https://github.com/c-py>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LSCache {

    /**
    * Stores the value in localStorage. Expires after specified number of minutes.
    * @param {string} key
    * @param {Object|string} value
    * @param {number} time
    * @return true if the value was inserted successfully
    */
    set(key: string, value: any, time?: number): boolean;
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
    * Returns whether local storage is supported.
    * Currently exposed for testing purposes.
    * @return {boolean}
    */
    supported(): boolean;
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
    * @returns {number} The currently set number of milliseconds each time unit represents in
    *   the set() function's "time" argument.
    */
    getExpiryMilliseconds(): number;
    /**
    * Sets the number of milliseconds each time unit represents in the set() function's
    *   "time" argument.
    * Sample values:
    *  1: each time unit = 1 millisecond
    *  1000: each time unit = 1 second
    *  60000: each time unit = 1 minute (Default value)
    *  360000: each time unit = 1 hour
    * @param {number} milliseconds
    */
   setExpiryMilliseconds(milliseconds: number): void;
    /**
    * Sets whether to display warnings when an item is removed from the cache or not.
    */
    enableWarnings(enabled: boolean): void;
}
declare var lscache: LSCache;
declare module 'lscache' {
    var lscache: LSCache;
    export = lscache;
}
