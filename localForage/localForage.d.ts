// Type definitions for Mozilla's localForage
// Project: https://github.com/mozilla/localforage
// Definitions by: david pichsenmeister <https://github.com/3x14159265>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module lf {

    export enum Driver {}
    export var INDEXEDDB: Driver;
    export var WEBSQL: Driver;
    export var LOCALSTORAGE: Driver;

    interface IConfigParams {
        driver?: Driver | [Driver];
        name?: string;
        size?: number;
        storeName?: string;
        version?: number;
        description?: string;
    }

    interface ILocalForage<T> {
        setDriver(driver: Driver | [Driver]): void
        config(params: IConfigParams): void
        clear(): void
        key(index: number): T
        length: number
        getItem(key: string, callback: ICallback<T>): void
        getItem(key: string): IPromise<T>
        setItem(key: string, value: T, callback: ICallback<T>): void
        setItem(key: string, value: T): IPromise<T>
        removeItem(key: string, callback: ICallback<T>): void
        removeItem(key: string): IPromise<T>
    }

    interface ICallback<T> {
        (data: T): void
    }

    interface IPromise<T> {
        then(callback: ICallback<T>): void
    }
}

declare module 'localforage' {
    export = lf;
}