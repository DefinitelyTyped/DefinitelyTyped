// Type definitions for Mozilla's localForage
// Project: https://github.com/mozilla/localforage
// Definitions by: yuichi david pichsenmeister <https://github.com/3x14159265>, Aleksey Blokhin <https://github.com/arma-gast>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module lf {
    interface IOptions {
        driver?      : string | Array<string>;
        name?        : string;
        version?     : string;
        size?        : number;
        storeName?   : string;
        description? : string;
    }

    interface ILocalForageInstance<T> {
        INDEXEDDB    : string;
        LOCALSTORAGE : string;
        WEBSQL       : string;

        /**
         * Creates new instance of LocalForage with supplied options.
         */
        createInstance(options? : IOptions) : ILocalForage<T>;

        /**
         * Sets database information. Returns instance of Error if datastore
         * is ready and fully initialised. Otherwise returns true.
         */
        config(options? : IOptions) : boolean | Error;

        /**
         * Returns configuration values for the datastore.
         */
        config(storeName : string) : IOptions;

        /**
         * Determines if datastore is ready to be used.
         */
        ready(callback? : (error : any) => void) : Promise<void>;

        /**
         * Removes every key from the datastore, returning it to a blank slate.
         */
        clear(callback? : (error : any) => void) : Promise<void>;

        /**
         * Gets the number of keys in the datastore (i.e. its "length").
         */
        length(callback? : (error : any, length : number) => void) : Promise<number>;

        /**
         * Get the name of a key based on its ID.
         */
        key(n : number, callback? : (error : any, key : string) => void) : Promise<string>;

        /**
         * Get the list of all keys in the datastore.
         */
        keys(callback? : (error : any, keys : Array<string>) => void) : Promise<Array<string>>;

        /**
         * Iterate over all value/key pairs in datastore.
         */
        iterate<U>(iterateCallback : (value : T, key : string, iterationNumber : number) => U, successCallback? : (error : any, value : U) => void) : Promise<U>;

        /**
         * Gets an item from the datastore and supplies the result to a promise (callback).
         * If the key does not exist, getItem() will supply null to promise (callback).
         */
        getItem(key : string, callback? : (error : any, value : T) => void) : Promise<T>;

        /**
         * Saves data to the datastore.
         */
        setItem(key : string, value : T, callback? : (error : any, value : T) => void) : Promise<T>;

        /**
         * Removes the value of a key from the datastore.
         */
        removeItem(key : string, callback? : (error : any) => void) : Promise<void>;
    }

    interface ILocalForage<T> extends ILocalForageInstance<T> {
        /**
         * Creates new instance of LocalForage with supplied options.
         */
        new(options? : IOptions) : ILocalForageInstance<T>;
    }
}
