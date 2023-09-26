import { EventEmitter } from "events";

interface CacheOptions {
    timeout?: number | undefined;
    doesNotRenewTimeout?: boolean | undefined;
    timeoutDisabled?: boolean | undefined;
}

declare class Cache extends EventEmitter {
    keys: string[];
    length: number;

    constructor(options?: number | CacheOptions);

    set(key: string, value: any, timeout?: number): void;
    get(key: string): any;
    remove(key: string): void;
    clean(): void;
}

export = Cache;
