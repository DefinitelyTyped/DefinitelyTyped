/// <reference types="node" />

import { EventEmitter } from "events";

/**
 * Basic object cache with get/set/has/del methods and event emission.
 */
declare class CacheBase extends EventEmitter {
    constructor(prop?: string | object, cache?: object);

    /** Set a value on the cache */
    set(key: string, value: any): this;

    /** Get a value from the cache */
    get(key: string): any;

    /** Set a value only if it doesn't already exist */
    prime(key: string, value: any): this;

    /** Set a default value */
    default(key: string, value: any): this;

    /** Add unique values to an array at a key */
    union(key: string, value: any): this;

    /** Check if a key exists */
    has(key: string): boolean;

    /** Check if a key exists as an own property */
    hasOwn(key: string): boolean;

    /** Delete one or more keys */
    del(key: string | string[]): this;

    /** Clear the entire cache */
    clear(): this;

    /** Visit a method over object or array values */
    visit(key: string, value: any): this;

    /** Array of all enumerable property names */
    readonly keys: string[];

    /** Number of keys in the cache */
    readonly size: number;
}

export = CacheBase;
