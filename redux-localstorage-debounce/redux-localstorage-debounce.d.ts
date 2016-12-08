// Type definitions for redux-localstorage-debounce v0.1.0
// Project: https://github.com/elgerlambert/redux-localstorage-debounce
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />
/// <reference path="../redux-localstorage/redux-localstorage.d.ts" />

declare namespace ReduxLocalStorage {

    namespace Debounce {
        interface DebounceOptions {
            maxWait?: number
            [key: string]: any
        }
        function debounce (wait: number, options?: number | DebounceOptions): <A>(adapter: StorageAdapter<A>) => StorageAdapter<A>
    }

}

declare module "redux-localstorage-debounce" {
    export default ReduxLocalStorage.Debounce.debounce
}
