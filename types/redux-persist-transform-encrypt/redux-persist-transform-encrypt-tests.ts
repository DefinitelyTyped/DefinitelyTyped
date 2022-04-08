import { createStore, Reducer, Store } from "redux";
import { createPersistor, Transform } from "redux-persist";
import createEncryptor, { EncryptorConfig } from "redux-persist-transform-encrypt";
import createAsyncEncryptor, { AsyncEncryptorConfig } from "redux-persist-transform-encrypt/async";

const reducer: Reducer<any> = (state: any, action: any) => ({ state, action });

const config: EncryptorConfig = {
    secretKey: "foo",
    onError: (err: Error) => { err.message; }
};
const encryptor: Transform<any, any> = createEncryptor(config);

const configNoError: EncryptorConfig = { secretKey: "foo" };
const encryptorNoError: Transform<any, any> = createEncryptor(configNoError);

const asyncConfig: AsyncEncryptorConfig = { secretKey: "foo" };
const asyncEncryptor: Transform<any, any> = createAsyncEncryptor(asyncConfig);

const store: Store<any> = createStore(reducer);

createPersistor(store, { transforms : [encryptor, encryptorNoError, asyncEncryptor] });
