// Type definitions for @keyv/redis 1.3
// Project: https://github.com/lukechilds/keyv-redis
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Store } from 'keyv';
import { ClientOpts } from 'redis';
import { EventEmitter } from 'events';

export = KeyvRedis;

declare class KeyvRedis extends EventEmitter implements Store<string | undefined> {
    readonly ttlSupport: true;
    namespace?: string;

    constructor(options?: KeyvRedis.Options);
    constructor(uri: string, options?: KeyvRedis.Options);

    get(key: string): Promise<string | undefined>;
    set(key: string, value: string | undefined, ttl?: number): Promise<number>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
}

declare namespace KeyvRedis {
    interface Options extends ClientOpts {
        uri?: string;
    }
}
