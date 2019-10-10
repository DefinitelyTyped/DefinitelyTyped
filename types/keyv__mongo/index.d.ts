// Type definitions for @keyv/mongo 1.0
// Project: https://github.com/lukechilds/keyv-mongo
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Store } from 'keyv';
import { EventEmitter } from 'events';

export = KeyvMongo;

declare class KeyvMongo<TValue> extends EventEmitter implements Store<TValue> {
    readonly ttlSupport: false;
    namespace?: string;

    constructor(uri?: string);
    constructor(options?: KeyvMongo.Options); // tslint:disable-line:unified-signatures

    get(key: string): Promise<TValue | undefined>;
    set(key: string, value: TValue, ttl?: number): Promise<any>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
}

declare namespace KeyvMongo {
    interface Options {
        uri?: string;
        url?: string;
        collection?: string;
    }
}
