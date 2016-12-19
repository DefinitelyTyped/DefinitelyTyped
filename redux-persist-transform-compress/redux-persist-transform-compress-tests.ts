// Redux Persist Transform Compress Test
// ================================================================================
/// <reference path="redux-persist-transform-compress.d.ts"/>
/// <reference path="../redux/redux.d.ts"/>
/// <reference path="../redux-persist/redux-persist.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import { createStore, Reducer, Store } from "redux"
import { createPersistor, Persistor, Transformer } from "redux-persist"
import * as createCompressor from "redux-persist-transform-compress"

const reducer: Reducer<any> = (state: any, action: any) => ({})

const compressor: Transformer = createCompressor({ whitelist : ["foo"] })

const store: Store<any> = createStore(reducer)

const persistor: Persistor = createPersistor(store, { transforms : [compressor] })
