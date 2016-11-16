// Type definitions for redux-persist 4.0.0-alpha7
// Project: https://github.com/rt2zz/redux-persist
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare namespace ReduxPersist {

    interface PersistAction<S> extends Redux.Action {
        payload?: S
        error?: any
    }

    interface DefaultStorages {
        asyncLocalStorage: PersistStorage
        asyncSessionStorage: PersistStorage
    }

    interface RehydrateOptions {
        serial?: boolean
    }

    interface Persistor {
        purge(keys?: Array<string>): void
        rehydrate<A>(incoming: A, options?: RehydrateOptions): A
        pause(): void
        resume(): void
    }

    interface PersistCallback<A> {
        (err: any, response?: A): void
    }

    interface Transformer {
        in(state: any, key: string): any
        out(state: any, key: string): any
    }

    interface PersistStorage {
        setItem(key: string, value: any, callback?: PersistCallback<void>): Promise<void>
        getItem<A>(key: string, callback?: PersistCallback<A>): Promise<A>
        removeItem(key: string, callback?: PersistCallback<void>): Promise<void>
        getAllKeys<A>(callback?: PersistCallback<A>): Promise<A>
        [key: string]: any
    }

    interface StateReconciler {
        <A, B ,C>(state: A, inboundState: B, reducedState: C, log?: boolean): C
    }

    interface AutoRehydrateConfig {
        stateReconcile?: StateReconciler
    }

    interface PersistConfig {
        whitelist?: Array<string>
        blacklist?: Array<string>
        transforms?: Array<Transformer>
        storage?: PersistStorage
        debounce?: number
        keyPrefix?: string
    }

    function autoRehydrate (config?: AutoRehydrateConfig): Redux.GenericStoreEnhancer

    function createPersistor<A> (store: Redux.Store<A>, config?: PersistConfig): Persistor

    function createTransform (inbound: any, outbound: any, config?: PersistConfig): Transformer

    function getStoredState(config?: PersistConfig, callback?: PersistCallback<any>): Promise<any>

    function persistStore<A> (store: Redux.Store<A>, config?: PersistConfig, callback?: PersistCallback<any>): Persistor

    function purgeStoredState (config?: PersistConfig, keys?: Array<string>): Promise<void>

    /* Access to `storages` is deprecated from 4.0.0 */
    const storages: DefaultStorages

}

declare module "redux-persist/constants" {
    export const KEY_PREFIX: string
    export const REHYDRATE: string
}

declare module "redux-persist/storages" {
    const storages: ReduxPersist.DefaultStorages
    export = storages
}

declare module "redux-persist" {
    export = ReduxPersist
}
