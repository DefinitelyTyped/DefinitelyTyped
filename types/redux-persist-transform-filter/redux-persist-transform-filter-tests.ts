import { createStore, Reducer, Store } from "redux";
import { createPersistor, Transform } from "redux-persist";
import createFilter from "redux-persist-transform-filter";

const reducer: Reducer<any> = (state: any, action: any) => ({ state, action });

const filter: Transform<any, any> = createFilter(
    "foo",
    ["foo.bar"],
    ["fizz.buzz"]
);

const store: Store<any> = createStore(reducer);

createPersistor(store, { transforms : [filter] });
