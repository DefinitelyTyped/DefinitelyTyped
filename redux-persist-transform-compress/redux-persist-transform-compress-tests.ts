import { createStore, Reducer, Store } from "redux"
import { createPersistor, Transform } from "redux-persist"
import createCompressor = require("redux-persist-transform-compress")

const reducer: Reducer<any> = (state: any, action: any) => ({ state, action })

const compressor: Transform<any, any> = createCompressor({ whitelist : ["foo"] })

const store: Store<any> = createStore(reducer)

createPersistor(store, { transforms : [compressor] })
