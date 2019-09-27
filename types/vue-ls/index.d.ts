// Type definitions for vue-ls 3.2
// Project: https://github.com/RobinCK/vue-ls#readme
// Definitions by: Prateek Malhotra <https://github.com/someone1>
//                 Oleg Spakov <https://github.com/lexasss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import _Vue, { PluginFunction } from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $ls: WebStorage;
    }

    interface VueConstructor {
        ls: WebStorage;
    }
}

declare class WebStorage {
    length: number;

    constructor(storage: StorageTypes);
    get(name: string, def?: any): any;
    set(name: string, value: any, expire?: number): void;
    key(index: number): string | null;
    remove(name: string): void;
    clear(): void;
    on(name: string, callback: () => void): void;
    off(name: string, callback: () => void): void;
    setOptions(options?: StorageOptions): void;
}

export interface StorageOptions {
    namespace?: string;
    name?: string;
    storage?: StorageTypes;
}

export enum StorageTypes {
    Session = 'session',
    Local = 'local',
    Memory = 'memory',
}

declare const _default: {
    install: PluginFunction<StorageOptions>;
};

export default _default;
