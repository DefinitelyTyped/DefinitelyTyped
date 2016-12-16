// Type definitions for redux-persist-transform-encrypt 0.1
// Project: https://github.com/maxdeviant/redux-persist-transform-encrypt#readme
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PersistTransformer } from "redux-persist";

export as namespace ReduxPersistEncryptor;

export = createEncryptor;

declare function createEncryptor (config: createEncryptor.EncryptorConfig): PersistTransformer;

declare namespace createEncryptor {
    export interface EncryptorConfig {
        secretKey: string;
    }
}
