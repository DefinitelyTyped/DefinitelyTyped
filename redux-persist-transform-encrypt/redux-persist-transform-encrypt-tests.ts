// Redux Persist Transform Encrypt Test
// ================================================================================
/// <reference path="redux-persist-transform-encrypt.d.ts"/>
/// <reference path="../redux/redux.d.ts"/>
/// <reference path="../redux-persist/redux-persist.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import { createStore, Reducer, Store } from "redux"
import { createPersistor, Persistor, Transformer } from "redux-persist"
import * as createEncryptor from "redux-persist-transform-encrypt"

const reducer: Reducer<any> = (state: any, action: any) => ({})

const encryptor: Transformer = createEncryptor({ secretKey : "foo" })

const store: Store<any> = createStore(reducer)

const persistor: Persistor = createPersistor(store, { transforms : [encryptor] })
