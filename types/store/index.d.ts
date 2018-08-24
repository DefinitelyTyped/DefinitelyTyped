// Type definitions for store 2.0
// Project: https://github.com/marcuswestin/store.js#readme
// Definitions by: Vincent Bortone <https://github.com/vbortone>
//                 harry0000 <https://github.com/harry0000>
//                 Roman Nuritdinov (Ky6uk) <https://github.com/Ky6uk>
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
    createStore(plugins?: Function[], namespace?: string): StoreJsAPI;
    addPlugin(plugin: Function): void;
    namespace(namespace: string): StoreJsAPI;
}

interface StoreJsEngine {
    createStore(storages: any[], plugins?: any[], namespace?: string): StoreJsAPI;
}

declare const store: StoreJsAPI;
declare module 'store' {
    export = store;
}
declare module 'store/dist/store.legacy' {
    export = store;
}
declare module 'store/dist/store.legacy.min' {
    export = store;
}
declare module 'store/dist/store.modern' {
    export = store;
}
declare module 'store/dist/store.modern.min' {
    export = store;
}

declare const engine: StoreJsEngine;
declare module 'store/src/store-engine' {
    export = engine;
}
declare module 'store/plugins/all' {
    export = Function;
}
declare module 'store/plugins/default' {
    export = Function;
}
declare module 'store/plugins/dump' {
    export = Function;
}
declare module 'store/plugins/events' {
    export = Function;
}
declare module 'store/plugins/expire' {
    export = Function;
}
declare module 'store/plugins/observe' {
    export = Function;
}
declare module 'store/plugins/operations' {
    export = Function;
}
declare module 'store/plugins/update' {
    export = Function;
}
declare module 'store/plugins/v1-backcompat' {
    export = Function;
}
