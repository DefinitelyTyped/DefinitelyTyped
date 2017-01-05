import { createStore, Reducer, Store } from "redux"
import { createPersistor, Persistor, PersistTransformer } from "redux-persist"
import createFilter from "redux-persist-transform-filter"

const reducer: Reducer<any> = (state: any, action: any) => ({})

const filter: PersistTransformer = createFilter(
    "foo",
    ["foo.bar"],
    ["fizz.buzz"]
)

const store: Store<any> = createStore(reducer)

const persistor: Persistor = createPersistor(store, { transforms : [filter] })
