import { createStore, Reducer, Store } from "redux"
import { createPersistor, Persistor, PersistTransformer } from "redux-persist"
import createCompressor = require("redux-persist-transform-compress")

const reducer: Reducer<any> = (state: any, action: any) => ({})

const compressor: PersistTransformer = createCompressor({ whitelist : ["foo"] })

const store: Store<any> = createStore(reducer)

const persistor: Persistor = createPersistor(store, { transforms : [compressor] })
