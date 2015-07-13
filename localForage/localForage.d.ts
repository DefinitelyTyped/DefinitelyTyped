// Type definitions for Mozilla's localForage
// Project: https://github.com/mozilla/localforage
// Definitions by: yuichi david pichsenmeister <https://github.com/3x14159265>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module lf {
    interface ILocalForage<T> {
        /**
         * Removes every key from the database, returning it to a blank slate.
         */
        clear(callback: IErrorCallback): void
        /**
         * Iterate over all value/key pairs in datastore.
         */
        iterate(iterateCallback: IIterateCallback<T>): void
        /**
         * Get the name of a key based on its ID.
         */
        key(keyIndex: number, callback: IKeyCallback): void
        /**
         * Get the list of all keys in the datastore.
         */
        keys(callback: IKeysCallback): void;
        /**
         * Gets the number of keys in the offline store (i.e. its “length”).
         */
        length(callback: INumberCallback): void
        /**
         * Gets an item from the storage library and supplies the result to a callback.
         * If the key does not exist, getItem() will return null.
         */
        getItem(key: string, callback: ICallback<T>): void
        getItem(key: string): IPromise<T>
        /**
         * Saves data to an offline store.
         */
        setItem(key: string, value: T, callback: ICallback<T>): void
        setItem(key: string, value: T): IPromise<T>
        /**
         * Removes the value of a key from the offline store.
         */
        removeItem(key: string, callback: IErrorCallback): void
        removeItem(key: string): IPromise<T>
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

    interface IPromise<T> {
        then(callback: ICallback<T>): void
    }
}