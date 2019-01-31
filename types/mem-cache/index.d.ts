// Type definitions for mem-cache 1.0
// Project: https://github.com/silviom/node-mem-cache
// Definitions by: Pedro Mutter <https://github.com/MutterPedro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

interface CacheOptions {
    timeout?: number;
    doesNotRenewTimeout?: boolean;
    timeoutDisabled?: boolean;
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
