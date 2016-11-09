// Type definitions for redux-localstorage v1.0.0-rc4
// Project: https://github.com/elgerlambert/redux-localstorage
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare namespace ReduxLocalStorage {

    interface ActionTypes {
        INIT: string
    }

    interface AdapterCallback {
        <A>(err?: any, result?: A): void
    }

    interface StorageAdapter<A> {
        0: A
        put(key: string, value: any, callback: AdapterCallback): void
        get(key: string, callback: AdapterCallback): void
        del(key: string, callback: AdapterCallback): void
    }

    interface StorageAdapterCreator<A> {
        (storage: A): StorageAdapter<A>
    }

    interface StorageAdapterEnhancer {}

    function mergePersistedState (merge?: <A1, A2>(initialState: A1, persistentState: A2) => A1 & A2): <A>(next: Redux.Reducer<A>) => Redux.Reducer<A>

    function persistState<A> (storage?: StorageAdapter<A>, key?: string, callback?: Function): Redux.GenericStoreEnhancer

}

declare module "redux-localstorage/lib/adapters/AsyncStorage" {
    const adapterCreator: ReduxLocalStorage.StorageAdapterCreator<any>
    export = adapterCreator
}

declare module "redux-localstorage/lib/adapters/localStorage" {
    const adapterCreator: ReduxLocalStorage.StorageAdapterCreator<Storage>
    export = adapterCreator
}

declare module "redux-localstorage/lib/adapters/sessionStorage" {
    const adapterCreator: ReduxLocalStorage.StorageAdapterCreator<Storage>
    export = adapterCreator
}

declare module "redux-localstorage" {
    import mergePersistedState = ReduxLocalStorage.mergePersistedState

    const actionTypes: ReduxLocalStorage.ActionTypes

    export type StorageAdapterEnhancer = ReduxLocalStorage.StorageAdapterEnhancer

    export {
        mergePersistedState,
        actionTypes
    }

    export default ReduxLocalStorage.persistState
}


