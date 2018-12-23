// Type definitions for @keyv/postgres 1.0
// Project: https://github.com/lukechilds/keyv-postgres
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Store } from 'keyv';
import { EventEmitter } from 'events';

export = KeyvPostgres;

declare class KeyvPostgres extends EventEmitter implements Store<string | undefined> {
    readonly ttlSupport: false;
    namespace?: string;

    constructor(options?: KeyvPostgres.Options);

    get(key: string): Promise<string | undefined>;
    set(key: string, value: string | undefined): Promise<any>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
}

declare namespace KeyvPostgres {
    interface Options {
        uri?: string;
        table?: string;
        keySize?: number;
    }
}
