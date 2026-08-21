// store.js exposes a simple API for cross browser local storage

interface StoreJSStatic {
    enabled: boolean;
    disabled: boolean;
    version: string;
    set(key: string, value: any): any;
    get(key: string, defaultVal?: any): any;
    has(key: string): boolean;
    remove(key: string): void;
    clear(): void;
    transact(key: string, defaultVal: any, transactionFn?: (val: any) => void): void;
    getAll(): any;
    forEach(command: (key: string, value: any) => void): void;
    serialize(value: any): string;
    deserialize(value: string): any;
}

declare var store: StoreJSStatic;
declare module "store" {
    export = store;
}
