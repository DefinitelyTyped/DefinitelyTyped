// Type definitions for @keyv/sqlite 2.0
// Project: https://github.com/lukechilds/keyv-sqlite
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Store } from 'keyv';
import { EventEmitter } from 'events';

export = KeyvSqlite;

declare class KeyvSqlite extends EventEmitter implements Store<string | undefined> {
    readonly ttlSupport: false;
    namespace?: string;

    constructor(options?: KeyvSqlite.Options);

    get(key: string): Promise<string | undefined>;
    set(key: string, value: string | undefined): Promise<any>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
}

declare namespace KeyvSqlite {
    interface Options {
        uri?: string;
        busyTimeout?: number;
        table?: string;
        keySize?: number;
    }
}
