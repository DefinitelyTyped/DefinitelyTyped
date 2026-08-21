/// <reference types="node" />

import {
    AbstractBatch,
    AbstractChainedBatch,
    AbstractGetOptions,
    AbstractIterator,
    AbstractIteratorOptions,
    AbstractLevelDOWN,
    AbstractOpenOptions,
    AbstractOptions,
    ErrorCallback,
    ErrorValueCallback,
} from "abstract-leveldown";

export type Bytes = string | Buffer;
export type ErrorSizeCallback = (err: Error | undefined, size: number) => void;

export interface LevelDown extends AbstractLevelDOWN<Bytes, Bytes> {
    open(cb: ErrorCallback): void;
    open(options: LevelDownOpenOptions, cb: ErrorCallback): void;

    get(key: Bytes, cb: ErrorValueCallback<Bytes>): void;
    get(key: Bytes, options: LevelDownGetOptions, cb: ErrorValueCallback<Bytes>): void;

    put(key: Bytes, value: Bytes, cb: ErrorCallback): void;
    put(key: Bytes, value: Bytes, options: LevelDownPutOptions, cb: ErrorCallback): void;

    del(key: Bytes, cb: ErrorCallback): void;
    del(key: Bytes, options: LevelDownDelOptions, cb: ErrorCallback): void;

    batch(): AbstractChainedBatch<Bytes, Bytes>;
    batch(array: AbstractBatch[], cb: ErrorCallback): AbstractChainedBatch<Bytes, Bytes>;
    batch(
        array: AbstractBatch[],
        options: LevelDownBatchOptions,
        cb: ErrorCallback,
    ): AbstractChainedBatch<Bytes, Bytes>;

    clear(cb: ErrorCallback): void;
    clear(options: LevelDownClearOptions, cb: ErrorCallback): void;

    approximateSize(start: Bytes, end: Bytes, cb: ErrorSizeCallback): void;
    compactRange(start: Bytes, end: Bytes, cb: ErrorCallback): void;
    getProperty(property: string): string;
    iterator(options?: LevelDownIteratorOptions): LevelDownIterator;
}

interface LevelDownConstructor {
    new(location: string): LevelDown;
    (location: string): LevelDown;
    destroy(location: string, cb: ErrorCallback): void;
    repair(location: string, cb: ErrorCallback): void;
}

export interface LevelDownOpenOptions extends AbstractOpenOptions {
    compression?: boolean | undefined;
    cacheSize?: number | undefined;
    writeBufferSize?: number | undefined;
    blockSize?: number | undefined;
    maxOpenFiles?: number | undefined;
    blockRestartInterval?: number | undefined;
    maxFileSize?: number | undefined;
}

export interface LevelDownGetOptions extends AbstractGetOptions {
    fillCache?: boolean | undefined;
}

export interface LevelDownPutOptions extends AbstractOptions {
    sync?: boolean | undefined;
}

export interface LevelDownDelOptions extends AbstractOptions {
    sync?: boolean | undefined;
}

export interface LevelDownBatchOptions extends AbstractOptions {
    sync?: boolean | undefined;
}

export interface LevelDownIteratorOptions extends AbstractIteratorOptions<Bytes> {
    fillCache?: boolean | undefined;
}

export interface LevelDownClearOptions {
    gt?: Bytes | undefined;
    gte?: Bytes | undefined;
    lt?: Bytes | undefined;
    lte?: Bytes | undefined;
    reverse?: boolean | undefined;
    limit?: number | undefined;
}

export interface LevelDownIterator extends AbstractIterator<Bytes, Bytes> {
    seek(key: Bytes): void;
    binding: any;
    cache: any;
    finished: any;
    fastFuture: any;
}

declare const LevelDOWN: LevelDownConstructor;
export default LevelDOWN;
