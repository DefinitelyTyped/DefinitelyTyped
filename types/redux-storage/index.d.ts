// Type definitions for redux-storage 4.0.1
// Project: https://github.com/michaelcontento/redux-storage
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="redux" />

declare module "redux-storage" {
    import { Reducer, Store, Middleware } from "redux";

    /**
     * Action constants
     */
    export const LOAD: string;
    export const SAVE: string;

    /**
     * Storage engine interface
     */
    export interface StorageEngine {
        /**
         * Load
         */
        load(): PromiseLike<any>;
        /**
         * Save
         * @param state
         */
        save(state: any): PromiseLike<any>;
    }

    export interface StateMerger {
        (oldState: any, newState: any): any;
    }

    /**
     * Storage reducer
     * @param reducer
     * @param merger
     */
    export function reducer<TState>(reducer: Reducer<TState>, merger?: StateMerger): Reducer<TState>;

    /**
     * Create storage middleware
     * @param engine
     * @param actionBlacklist
     * @param actionWhitelist
     */
    export function createMiddleware(engine: StorageEngine, actionBlacklist?: string[], actionWhitelist?: string[]): Middleware;

    /**
     * Loader interface
     */
    interface Loader<TState> {
        (store: Store<TState>): PromiseLike<any>;
    }

    /**
     * Create state loader
     * @param engine
     */
    export function createLoader<TState>(engine: StorageEngine): Loader<TState>;

}

declare module "redux-storage-decorator-filter" {
    import { StorageEngine } from "redux-storage";

    interface FilterList {
        [key: number]: string | string[];
    }

    /**
     * Filter decorator for redux-storage to only store a subset of the whole state tree.
     * @param {StorageEngine} engine the redux storage engine
     * @param {FilterList} [whitelist=[]] keys that will be stored.
     * @param {FilterList} [blacklist=[]] keys that won't be stored.
     * @example
     * import filter from 'redux-storage-decorator-filter';
     * engine = filter(engine, [
     *     'whitelisted-key',
     * ['nested', 'key'],
     * ['another', 'very', 'nested', 'key']
     * ], [
     *     'blacklisted-key',
     *     ['nested', 'blacklisted-key']
     * ]);
     */
    export default function (engine: StorageEngine, whitelist?: FilterList, blacklist?: FilterList): StorageEngine;
}

declare module "redux-storage-engine-localstorage" {
    import { StorageEngine } from "redux-storage";

    export interface LocalStorageEngine extends StorageEngine { }

    /**
     * Create local storage
     * @param key localstorage key
     */
    export default function createEngine(key: string): LocalStorageEngine;
}

declare module "redux-storage-engine-reactnativeasyncstorage" {
    import { StorageEngine } from "redux-storage";

    export interface ReactNativeAsyncStorageEngine extends StorageEngine { }

    /**
     * Create React Native Async Storage
     * @param key React Native Async Storage key
     */
    export default function createEngine(key: string): ReactNativeAsyncStorageEngine;
}

declare module "redux-storage-merger-immutablejs" {
    import { StateMerger } from "redux-storage";

    const immutableStateMerger: StateMerger;
    export default immutableStateMerger;
}
