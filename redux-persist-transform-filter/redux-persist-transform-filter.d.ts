// Type definitions for redux-persist-transform-filter v0.0.4
// Project: https://github.com/edy/redux-persist-transform-filter
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux-persist/redux-persist.d.ts" />

declare namespace ReduxPersist {
    namespace TransformFilter {
        function createFilter (reducerName: string, inboundPaths?: Array<string>, outboundPaths?: Array<string>): Transformer
    }

}

declare module "redux-persist-transform-filter" {
    export default ReduxPersist.TransformFilter.createFilter
}
