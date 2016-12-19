// Redux Persist Transform Filter Test
// ================================================================================
/// <reference path="redux-persist-transform-filter.d.ts"/>
/// <reference path="../redux/redux.d.ts"/>
/// <reference path="../redux-persist/redux-persist.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import { createStore, Reducer, Store } from "redux"
import { createPersistor, Persistor, Transformer } from "redux-persist"
import { default as createFilter } from "redux-persist-transform-filter"

const reducer: Reducer<any> = (state: any, action: any) => ({})

const filter: Transformer = createFilter(
   "foo",
    ["foo.bar"],
    ["fizz.buzz"]
)

const store: Store<any> = createStore(reducer)

const persistor: Persistor = createPersistor(store, { transforms : [filter] })
