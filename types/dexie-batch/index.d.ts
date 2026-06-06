import { Dexie } from "dexie";

declare namespace DexieBatch {
    interface Options {
        batchSize: number;
        limit?: number | undefined;
    }
    type Callback<T> = (item: T, index: number) => void;
}

declare class DexieBatch {
    private readonly opts: DexieBatch.Options;

    constructor(opts: DexieBatch.Options);

    isParallel(): boolean;

    each<T>(collection: Dexie.Collection<T>, callback: DexieBatch.Callback<T>): Dexie.Promise<number>;
    eachBatch<T>(collection: Dexie.Collection<T>, callback: DexieBatch.Callback<T[]>): Dexie.Promise<number>;
    eachBatchParallel<T>(collection: Dexie.Collection<T>, callback: DexieBatch.Callback<T[]>): Dexie.Promise<number>;
    eachBatchSerial<T>(
        collection: Dexie.Collection<T>,
        callback: DexieBatch.Callback<T[]>,
        batchIdx?: number,
    ): Dexie.Promise<number>;
}

export as namespace DexieBatch;
export = DexieBatch;
