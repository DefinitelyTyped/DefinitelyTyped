import { createStore, Store, Reducer } from "redux"
import {
    autoRehydrate,
    createPersistor,
    createTransform,
    getStoredState,
    persistStore,
    purgeStoredState,
    PersistConfig,
    PersistAutoRehydrateConfig,
    PersistCallback,
    Persistor,
    PersistorRehydrateOptions,
    PersistTransformer
} from "redux-persist"
import { KEY_PREFIX, REHYDRATE } from "redux-persist/constants"
import { asyncLocalStorage, asyncSessionStorage } from "redux-persist/storages"

const reducer: Reducer<any> = (state: any, action: any) => ({})

const persistCallback: PersistCallback<any> = (err: any, response: any) => {}

const transform: PersistTransformer = createTransform({}, {}, { whitelist : ["foo"] })

const persistConfig: PersistConfig = {
    blacklist  : ["foo"],
    whitelist  : ["bar"],
    storage    : asyncLocalStorage,
    transforms : [transform],
    debounce   : 1000,
    keyPrefix  : KEY_PREFIX
}

const rehydrateOptions: PersistorRehydrateOptions = { serial : true }

const autoRehydrateConfig: PersistAutoRehydrateConfig<any, any, any> = {
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
