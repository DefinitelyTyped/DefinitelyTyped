// Type definitions for multimap 1.1
// Project: https://github.com/villadora/multi-map
// Definitions by: Tyler Allen <https://github.com/tallenstudios>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 3.1

interface Multimap {
    /**
     * Number of values
     */
    size: number;

    /**
     * Number of keys
     */
    count: number;

    clear(): void;

    /**
     * @param key
     * @param val
     * @return true if any thing changed
     */
    delete(key: any, val?: any): boolean;

    /**
     * @param iter
     */
    forEach(iter: any): void;

    /**
     * @param iter
     */
    forEachEntry(iter: any): void;

    /**
     * @param key
     */
    get(key: any): any;

    /**
     * @param key
     * @param val
     * @return whether the map contains 'key' or 'key=>val' pair
     */
    has(key: any, val?: any): boolean;

    /**
     * @return all the keys in the map
     */
    keys(): { next: () => { value: any, done: boolean } };

    /**
     * @param key
     * @param val
     */
    set(key: any, val: any, ...args: any[]): void;

    /**
     * @return all the values in the map
     */
    values(): { next: () => { value: any, done: boolean } };
}

declare class Multimap { constructor(iterable?: any); }

export = Multimap;
