import { Reducer } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import expireReducer, { Config } from "redux-persist-expire";

const reducer: Reducer = (state: any, action: any) => ({ state, action });

const config: Config = {
    persistedAtKey: "key",
    expireSeconds: null,
    expiredState: {},
    autoExpire: true,
};

persistReducer({
    key: "key",
    storage,
    transforms: [expireReducer("key", config)]
}, reducer);
