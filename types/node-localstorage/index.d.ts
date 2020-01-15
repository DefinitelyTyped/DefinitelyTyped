// Type definitions for node-localstorage 1.3
// Project: https://github.com/lmaccherone/node-localstorage
// Definitions by: Allen Gammel <https://github.com/intolerance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { EventEmitter } from 'events';

/**
 * A drop-in substitute for the browser native localStorage API that runs on node.js.
 * Copyright (c) 2012, Lawrence S. Maccherone, Jr. -- https://github.com/lmaccherone/node-localstorage
 * (MIT License)
 */
export class LocalStorage extends EventEmitter {
    /**
     * The number of keys in the local storage.
     */
    length: number;
    /**
     * Clears the local storage
     */
    clear(): void;
    /**
     * Gets the value of the given [key]
     * @param key The key whose value you want to retrieve.
     */
    getItem(key: string): string | null;
    /**
     * Retrieves the value of the key at the [index].
     * @param index The index of the key in which you want to return the value of.
     */
    key(index: number): string;
    /**
     * Removes the specified [key] from local storage.
     * @param key The key you want to remove.
     */
    removeItem(key: string): void;
    /**
     * Stores a `key` and it's `value` in to the local store.
     * @param key Unique identifier for the new local storage item
     * @param value The value of the item
     */
    setItem(key: string, value: string): void;
    /**
     * Internal event `storage` is fired on the `removeItem`, `setItem` and `clear` methods, if subscribed.
     * @param eventName The only `eventName` that is supported is `storage`.
     * @param callback The call back type is of `StorageEvent`.
     */
    on(eventName: 'storage', callback: (event: StorageEvent) => void): this;
    /**
     * Creates a new LocalStorage instance
     * @param location The location in which the local storage resides
     * @param quota The partitioned size of the local storage
     */
    constructor(location: string, quota?: number);
}
export class JSONStorage extends LocalStorage {
    /**
     * Gets the value of the given `key`. This method performs a `JSON.parse` on the `value` before returning it.
     * @param key The key whose value you want to retrieve.
     * @returns `Array of Objects` or an `Object`. This `getItem` method performs a `JSON.parse` on the `value` before returning it.
     */
    getItem(key: string): any;
    /**
     * Stores a `key` and it's `value` in to the local store. The given `value` will have `JSON.stringify` performed on it prior to storing.
     * @param key Unique identifier for the new local storage item
     * @param value The value associated with the `key`. This `setItem` method performs a `JSON.stringify` on the value before storage. The `value` *must* be a valid `JSON` object.
     */
    setItem(key: string, value: any): void;
    /**
     * Creates a new LocalStorage instance
     * @param location The location in which the local storage resides
     * @param quota The partitioned size of the local storage
     */
    constructor(location: string, quota?: number);
}

/**
 * Contains information regarding a `storage` event.
 */
export class StorageEvent {
    /**
     * Affected `key`.
     */
    key: string;
    /**
     * Previous `value` associated with the `key`.
     */
    oldValue: string;
    /**
     * Current `value` associated with the `key`.
     */
    newValue: string;
    /**
     * The current `process.pid` for the calling process.
     */
    url: string;
    /**
     * The location of the storage area. Defaults to `localStorage`.
     */
    storageArea: string;
    /**
     * Creates an object containing information regarding a `storage` event.
     * @param key Affected `key`.
     * @param oldValue Previous `value` associated with the `key`.
     * @param newValue Current `value` associated with the `key`.
     * @param url The current `process.pid` for the calling process.
     * @param storageArea The location of the storage area. Defaults to `localStorage`.
     */
    constructor(key: string, oldValue: string, newValue: string, url: string, storageArea: string);
}

/**
 * Provides a specific `Error` object for **Quota Exceeded Errors**.
 */
export class QUOTA_EXCEEDED_ERR extends Error {
    /**
     * Message explaining the error.
     */
    message: string;
    /**
     * Creates a specific `Error` object for **Quota Exceeded Errors**.
     * @param message Message explaining the error.
     */
    constructor(message: string);
}
