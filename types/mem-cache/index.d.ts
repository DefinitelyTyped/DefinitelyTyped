// Type definitions for mem-cache v1.0.0
// Project: https://github.com/silviom/node-mem-cache
// Definitions by: Pedro Mutter <https://github.com/MutterPedro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

export interface CacheOptions {
    timeout?: number;
    doesNotRenewTimeout?: boolean;
    timeoutDisabled?: boolean;
}

export default class Cache extends EventEmitter {
    keys: string[];
    length: number;

    constructor(options?: number | CacheOptions);

    set(key: string, value: any, timeout?: number): void;
    get(key: string): any;
    remove(key: string): void;
    clean(): void;
}
