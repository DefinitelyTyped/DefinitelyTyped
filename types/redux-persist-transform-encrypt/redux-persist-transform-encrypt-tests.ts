import { createStore, Reducer, Store } from "redux";
import { createPersistor, Transform } from "redux-persist";
import createEncryptor, { EncryptorConfig } from "redux-persist-transform-encrypt";
import createAsyncEncryptor from "redux-persist-transform-encrypt/async";

const reducer: Reducer<any> = (state: any, action: any) => ({ state, action });

const config: EncryptorConfig = { secretKey : "foo" };
const encryptor: Transform<any, any> = createEncryptor(config);
const asyncEncryptor: Transform<any, any> = createAsyncEncryptor(config);

const store: Store<any> = createStore(reducer);

createPersistor(store, { transforms : [encryptor, asyncEncryptor] });
