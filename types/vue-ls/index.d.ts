// Type definitions for vue-ls 3.2
// Project: https://github.com/RobinCK/vue-ls#readme
// Definitions by: Prateek Malhotra <https://github.com/someone1>
//                 Oleg Spakov <https://github.com/lexasss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import _Vue, { PluginObject } from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $ls: WebStorage;
    }

    interface VueConstructor {
        ls: WebStorage;
    }
}

export enum Types {
    Session = 'session',
    Local = 'local',
    Memory = 'memory',
}

export interface Options {
    namespace?: string;
    name?: string;
    storage?: Types;
}

export class WebStorage {
    length: number;

    constructor(storage: Types);
    get(name: string, def?: any): any;
    set(name: string, value: any, expire?: number): void;
    key(index: number): string | null;
    remove(name: string): void;
    clear(): void;
    on(name: string, callback: () => void): void;
    off(name: string, callback: () => void): void;
    setOptions(options?: Options): void;
}

declare const VueStorage: PluginObject<Options>;

// forced to use deault export, the reason is discussed on https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38653#discussion_r331455390
export default VueStorage;
