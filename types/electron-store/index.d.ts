// Type definitions for electron-store 1.2
// Project: https://github.com/sindresorhus/electron-store
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
//                 Jakub Synowiec <https://github.com/jsynowiec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'electron-store' {
    type JSONValue = string | number | boolean | JSONObject | JSONArray;

    interface JSONObject {
        [x: string]: JSONValue;
    }

    interface JSONArray extends Array<JSONValue> {}

    interface ElectronStoreOptions<T = JSONObject> {
    /**
     * Default config.
     */
    defaults?: T;

    /**
     * Name of the config file (without extension).
     */
    name?: string;

    /**
     * Storage file location. *Don't specify this unless absolutely necessary!*
     */
    cwd?: string;
    }

    class ElectronStore<T> implements Iterable<[keyof T, JSONValue]> {
    constructor(options?: ElectronStoreOptions<T>);

    /**
     * Sets an item.
     */
    set<K extends keyof T>(key: K, value: T[K]): void;
    set(key: string, value: any): void;

    /**
     * Sets multiple items at once.
     */
    set<K extends keyof T>(object: Pick<T, K> | T): void;
    set(object: JSONObject): void

    /**
     * Retrieves an item.
     */
    get<K extends keyof T>(key: K, defaultValue?: JSONValue): T[K];
    get(key: string, defaultValue?: any): any;

    /**
     * Checks if an item exists.
     */
    has<K extends keyof T>(key: K | string): boolean;

    /**
     * Deletes an item.
     */
    delete<K extends keyof T>(key: K | string): void;

    /**
     * Deletes all items.
     */
    clear(): void;

    /**
     * Open the storage file in the user's editor.
     */
    openInEditor(): void;

    /**
     * Gets the item count.
     */
    size: number;

    /**
     * Gets all the config as an object or replace the current config with an object.
     */
    store: {};

    /**
     * Gets the path to the config file.
     */
    path: string;

    [Symbol.iterator](): Iterator<[keyof T, JSONValue]>;
    }

    export = ElectronStore;
}
