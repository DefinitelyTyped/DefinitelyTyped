// Type definitions for store.js 2.0
// Project: https://github.com/marcuswestin/store.js/
// Definitions by: Vincent Bortone <https://github.com/vbortone>
//                 harry0000 <https://github.com/harry0000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Cross-browser storage for all use cases, used across the web.

interface StoreJsAPI {
    readonly version: string;
    readonly enabled: boolean;
    get(key: string, optionalDefaultValue?: any): any;
    set(key: string, value: any): any;
    remove(key: string): void;
    each(callback: (val: any, namespacedKey: string) => void): void;
    clearAll(): void;
    hasNamespace(namespace: string): boolean;
    createStore(plugins?: any[], namespace?: string): StoreJsAPI;
    addPlugin(plugin: any): void;
    namespace(namespace: string): StoreJsAPI;
}

interface StoreJsEngine {
    createStore(storages: any[], plugins?: any[], namespace?: string): StoreJsAPI;
}

declare const store: StoreJsAPI;
declare module 'store' {
    export = store;
}

declare const engine: StoreJsEngine;
declare module 'store/src/store-engine' {
    export = engine;
}
