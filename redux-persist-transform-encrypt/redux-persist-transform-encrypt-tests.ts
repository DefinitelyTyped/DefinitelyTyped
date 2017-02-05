import { createStore, Reducer, Store } from "redux"
import { createPersistor, Persistor, PersistTransformer } from "redux-persist"
import { EncryptorConfig } from "redux-persist-transform-encrypt"
import * as createEncryptor from "redux-persist-transform-encrypt"

const reducer: Reducer<any> = (state: any, action: any) => ({})

const config: EncryptorConfig = { secretKey : "foo" }
const encryptor: PersistTransformer = createEncryptor(config)

const store: Store<any> = createStore(reducer)

const persistor: Persistor = createPersistor(store, { transforms : [encryptor] })
