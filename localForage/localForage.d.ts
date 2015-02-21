// Type definitions for Mozilla's localForage
// Project: https://github.com/mozilla/localforage
// Definitions by: david pichsenmeister <https://github.com/3x14159265>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface INodeCallback<T> {
    (err: any, result: T): void;
}

interface IPromise<T> {
    then(successCallback: (result: T) => void, failureCallback: (err: any) => void): void;
}

interface INoArgPromise {
    then(successCallback: () => void, failureCallback: (err: any) => void): void;
}

declare module localforage {

    export enum Driver {}
    export var INDEXEDDB: Driver;
    export var WEBSQL: Driver;
    export var LOCALSTORAGE: Driver;

    interface ConfigParams {
        driver?: Driver | [Driver];
        name?: string;
        size?: number;
        storeName?: string;
        version?: number;
        description?: string;
    }

    export function setDriver(driver: Driver | [Driver]): void;
    export function config(params: ConfigParams): void;

    export function getItem<T>(key: string, callback?: INodeCallback<T>): IPromise<T>;
    export function setItem<T>(key: string, value: T, callback?: INodeCallback<T>): IPromise<T>;
    export function removeItem(key: string, callback?: (err: any /* some error object? */) => void): INoArgPromise;
    export function clear(callback?: (err: any /* some error object? */) => void): INoArgPromise;
    export function key(index: number, callback?: INodeCallback<string>): IPromise<string>;
    export function keys(callback?: INodeCallback<[string]>): IPromise<[string]>;
    export function length(callback?: INodeCallback<number>): IPromise<number>;
}

declare module "localforage" {
    export = localforage;
}
