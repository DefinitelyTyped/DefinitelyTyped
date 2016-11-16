// Type definitions for redux-persist-transform-encrypt v0.1.2
// Project: https://github.com/maxdeviant/redux-persist-transform-encrypt
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux-persist/redux-persist.d.ts" />

declare namespace ReduxPersist {
    namespace TransformEncrypt {
        interface PersistEncryptorConfig {
            secretKey: string
        }

        function createEncryptor (config: PersistEncryptorConfig): Transformer
    }
}

declare module "redux-persist-transform-encrypt" {
    const createEncryptor: typeof ReduxPersist.TransformEncrypt.createEncryptor
    export = createEncryptor
}
