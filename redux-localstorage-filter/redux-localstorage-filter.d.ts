// Type definitions for redux-localstorage-filter v0.1.1
// Project: https://github.com/elgerlambert/redux-localstorage-filter
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />
/// <reference path="../redux-localstorage/redux-localstorage.d.ts" />

declare namespace ReduxLocalStorage {

    namespace Filter {
        function getSubset (obj: any, paths: Array<string>): any
        function filter (paths?: string | Array<string>): <A>(adapter: StorageAdapter<A>) => StorageAdapter<A>
    }

}

declare module "redux-localstorage-filter" {
    import getSubset = ReduxLocalStorage.Filter.getSubset

    export {
        getSubset
    }

    export default ReduxLocalStorage.Filter.filter

}
