import _Vue, { PluginObject } from "vue";

declare module "vue/types/vue" {
    interface Vue {
        $ls: WebStorage;
    }

    interface VueConstructor {
        ls: WebStorage;
    }
}

export enum Types {
    Session = "session",
    Local = "local",
    Memory = "memory",
}

export interface Options {
    namespace?: string | undefined;
    name?: string | undefined;
    storage?: Types | undefined;
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
