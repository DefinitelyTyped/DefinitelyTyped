// Type definitions for redux-persist-transform-compress v4.0.0
// Project: https://github.com/rt2zz/redux-persist-transform-compress
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux-persist/redux-persist.d.ts" />

declare namespace ReduxPersist {
    namespace TransformCompress {
        function createCompressor (config?: PersistConfig): Transformer
    }
}

declare module "redux-persist-transform-compress" {
    const createCompressor: typeof ReduxPersist.TransformCompress.createCompressor
    export = createCompressor
}
