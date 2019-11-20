// Type definitions for dexie-batch 0.4
// Project: https://github.com/raphinesse/dexie-batch#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Dexie } from 'dexie';

declare namespace DexieBatch {
    interface Options {
        batchSize: number;
        limit?: number;
    }
    type Callback<T> = (item: T, index: number) => void;
}

declare class DexieBatch {
    private readonly opts: DexieBatch.Options;

    constructor(opts: DexieBatch.Options);

    isParallel(): boolean;

    each<T>(collection: Dexie.Collection<T, any>, callback: DexieBatch.Callback<T>): Dexie.Promise<number>;
    eachBatch<T>(collection: Dexie.Collection<T, any>, callback: DexieBatch.Callback<T[]>): Dexie.Promise<number>;
    eachBatchParallel<T>(collection: Dexie.Collection<T, any>, callback: DexieBatch.Callback<T[]>): Dexie.Promise<number>;
    eachBatchSerial<T>(collection: Dexie.Collection<T, any>, callback: DexieBatch.Callback<T[]>, batchIdx?: number): Dexie.Promise<number>;
}

export as namespace DexieBatch;
export = DexieBatch;
