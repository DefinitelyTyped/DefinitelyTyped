// Type definitions for multimap 1.1
// Project: https://github.com/villadora/multi-map
// Definitions by: Tyler Allen <https://github.com/tallenstudios>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 3.1

declare class Multimap {
    constructor(iterable?: any);

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
    keys(): { [Symbol.iterator](): any, next: () => { value: any, done: boolean } };

    /**
     * @param key
     * @param val
     */
    set(key: any, val: any, ...args: any[]): void;

    /**
     * @return all the values in the map
     */
    values(): { [Symbol.iterator](): any, next: () => { value: any, done: boolean } };
}

export = Multimap;
