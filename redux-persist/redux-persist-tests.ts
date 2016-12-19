// Redux Persist Test
// ================================================================================
/// <reference path="redux-persist.d.ts"/>
/// <reference path="../redux/redux.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import { createStore, Store, Reducer } from "redux"
import {
    autoRehydrate,
    createPersistor,
    createTransform,
    getStoredState,
    persistStore,
    purgeStoredState,
    PersistConfig,
    AutoRehydrateConfig,
    PersistCallback,
    Persistor,
    RehydrateOptions,
    Transformer
} from "redux-persist"
import { KEY_PREFIX, REHYDRATE } from "redux-persist/constants"
import { asyncLocalStorage, asyncSessionStorage } from "redux-persist/storages"

const reducer: Reducer<any> = (state: any, action: any) => ({})

const persistCallback: PersistCallback<any> = (err: any, response: any) => {}

const transform: Transformer = createTransform({}, {}, { whitelist : ["foo"] })

const persistConfig: PersistConfig = {
    blacklist  : ["foo"],
    whitelist  : ["bar"],
    storage    : asyncLocalStorage,
    transforms : [transform],
    debounce   : 1000,
    keyPrefix  : KEY_PREFIX
}

const rehydrateOptions: RehydrateOptions = { serial : true }

const autoRehydrateConfig: AutoRehydrateConfig = {
    stateReconcile: (state: any, inboundState: any, reducedState: any, log: boolean) => ({})
}

const store: Store<any> = createStore(reducer, autoRehydrate(autoRehydrateConfig))
const persistor: Persistor = persistStore(store, persistConfig, persistCallback)

purgeStoredState({ whitelist : ["foo"] }, ["bar"])

getStoredState(persistConfig, (err: any, restoredState: any) => {
    const store: Store<any> = createStore(reducer, restoredState)
    const persistor: Persistor = createPersistor(store, persistConfig)
    const secondaryPersistor: Persistor = createPersistor(store, { storage : asyncSessionStorage })
    persistor.pause()
    persistor.resume()
    persistor.purge(["foo", "bar"])
    persistor.rehydrate(restoredState, rehydrateOptions)
})
