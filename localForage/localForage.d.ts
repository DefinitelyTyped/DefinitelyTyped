// Type definitions for Mozilla's localForage
// Project: https://github.com/mozilla/localforage
// Definitions by: david pichsenmeister <https://github.com/3x14159265>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

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

    interface NodeCallback<T> {
        (err: any, result: T): void;
    }

    export function setDriver(driver: Driver | [Driver]): void;
    export function config(params: ConfigParams): void;

    export function getItem<T>(key: string, callback?: NodeCallback<T>): Promise<T>;
    export function setItem<T>(key: string, value: T, callback?: NodeCallback<T>): Promise<T>;
    export function removeItem(key: string, callback?: (err: any /* some error object? */) => void): Promise<void>;
    export function clear(callback?: (err: any /* some error object? */) => void): Promise<void>;
    export function key(index: number, callback?: NodeCallback<string>): Promise<string>;
    export function keys(callback?: NodeCallback<[string]>): Promise<[string]>;
    export function length(callback?: NodeCallback<number>): Promise<number>;
}

declare module "localforage" {
    export = localforage;
}
