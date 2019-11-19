// Type definitions for multimap 1.1
// Project: https://github.com/villadora/multi-map
// Definitions by: Tyler Allen <https://github.com/tallenstudios>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Multimap {

    /**
     * Number of values
     */
    size: number;

    /**
     * Number of keys
     */
    count: number;

    /**
     * 
     */
    clear(): void;

    /**
     * @param {any} key
     * @param {any} val
     * @return {boolean} true if any thing changed
     */
    delete(key: any, val: any): boolean;

    /**
     * @param {any} key
     * @return {boolean} true if any thing changed
     */
    delete(key: any): boolean;

    /**
     * 
     * @param iter 
     */
    forEach(iter: any): void;

    /**
     * 
     * @param iter 
     */
    forEachEntry(iter: any): void;

    /**
     * 
     * @param {any} key 
     */
    get(key: any): any;

    /**
     * @param {any} key
     * @param {any=} val
     * @return {boolean} whether the map contains 'key' or 'key=>val' pair
     */
    has(key: any, val: any): boolean;

    /**
     * @param {any} key
     * @return {boolean} whether the map contains 'key'
     */
    has(key: any): boolean;

    /**
     * @return {Array} all the keys in the map
     */
    keys(): { next: () => { value: any, done: boolean } };

    /**
     * 
     * @param {any} key 
     * @param {any} val 
     */
    set(key: any, val: any, ...args: any): void;

    /**
     * @return {any[]} all the values in the map
     */
    values(): { next: () => { value: any, done: boolean } };

}

interface multimapConstructor {
    new(): Multimap;
    new(iterable: any): Multimap;
}

declare const Multimap: multimapConstructor;

export = Multimap;
