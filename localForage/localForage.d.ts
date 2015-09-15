// Type definitions for Mozilla's localForage
// Project: https://github.com/mozilla/localforage
// Definitions by: yuichi david pichsenmeister <https://github.com/3x14159265>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module lf {

    interface ILocalForage extends ILocalForageStatic {
        /**
         * Removes every key from the database, returning it to a blank slate.
         */
        clear(callback: IErrorCallback): void;
        /**
         * Iterate over all value/key pairs in datastore.
         */
        iterate<T>(iterateCallback: IIterateCallback<T>): void;
        /**
         * Get the name of a key based on its ID.
         */
        key(keyIndex: number, callback: IKeyCallback): void;
        /**
         * Get the list of all keys in the datastore.
         */
        keys(callback: IKeysCallback): void;
        /**
         * Gets the number of keys in the offline store (i.e. its “length”).
         */
        length(callback: INumberCallback): void;
        /**
         * Gets an item from the storage library and supplies the result to a callback.
         * If the key does not exist, getItem() will return null.
         */
        getItem<T>(key: string, callback: ICallback<T>): void;
        getItem<T>(key: string): Promise<T>;
        /**
         * Saves data to an offline store.
         */
        setItem<T>(key: string, value: T, callback: ICallback<T>): void;
        setItem<T>(key: string, value: T): Promise<T>;
        /**
         * Removes the value of a key from the offline store.
         */
        removeItem(key: string, callback: IErrorCallback): void;
        removeItem(key: string): Promise<void>;
    }

    interface ILocalForageStatic {
        INDEXEDDB: string;
        LOCALSTORAGE: string;
        WEBSQL: string;

        /**
         * Set and persist localForage options. This must be called before any other calls to localForage are made, but can be called after localForage is loaded. 
         * If you set any config values with this method they will persist after driver changes, so you can call config() then setDriver()
         * @param {ILocalForageConfig} options?
         */
        config(options?: ILocalForageConfig): boolean;
        createInstance(options?: ILocalForageConfig): ILocalForage;
        defineDriver(driverObject?: any): void;
        /**
         * Force usage of a particular driver or drivers, if available.
         * @param {string} driver
         */
        setDriver(driver: string): void;
        supports(driverName: string): boolean;
    }

    interface ILocalForageConfig {
        description?: string;
        driver?: string;
        name?: string;
        size?: number;
        storeName?: string;
        version?: number;
    }

    interface ICallback<T> {
        (err: any, value: T): void
    }

    interface IIterateCallback<T> {
        (value: T, key: string, iterationNumber: number): void
    }

    interface IErrorCallback {
        (err: any): void
    }

    interface IKeyCallback {
        (err: any, keyName: string): void
    }

    interface IKeysCallback {
        (err: any, keys: Array<string>): void
    }

    interface INumberCallback {
        (err: any, numberOfKeys: number): void
    }
}

declare module "localforage" {
    var localforage: lf.ILocalForage;
    export default localforage;
}