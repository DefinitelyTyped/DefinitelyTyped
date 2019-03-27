// Type definitions for @keyv/mysql 1.1
// Project: https://github.com/lukechilds/keyv-mysql
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Store } from 'keyv';
import { EventEmitter } from 'events';

export = KeyvMysql;

declare class KeyvMysql extends EventEmitter implements Store<string | undefined> {
    readonly ttlSupport: false;
    namespace?: string;

    constructor(uri?: string);
    constructor(options?: KeyvMysql.Options); // tslint:disable-line:unified-signatures

    get(key: string): Promise<string | undefined>;
    set(key: string, value: string | undefined): Promise<any>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
}

declare namespace KeyvMysql {
    interface Options {
        uri?: string;
        table?: string;
        keySize?: number;
    }
}
