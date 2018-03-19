// Type definitions for keyv 3.0
// Project: https://github.com/lukechilds/keyv
// Definitions by: AryloYeung <https://github.com/Arylo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

// import * as events from 'events';

interface KeyvOptions {
    namespace?: string;
    serialize: (data: any) => string;
    deserialize: (data: string) => any;
    uri?: string;
    store?: any;
    ttl?: number;
    adapter?: string;
}

declare class Keyv extends NodeJS.EventEmitter {
    constructor(uri?: string, opts?: KeyvOptions);
    constructor(opts?: KeyvOptions);
    get(key: string): Promise<any>;
    set(key: string, value: any, ttl?: number): Promise<boolean>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
}

export = Keyv;
