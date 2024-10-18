/// <reference types="node" />

export = leveldown;

declare var leveldown: leveldown.Constructor;

declare namespace leveldown {
    type Bytes = string | Buffer;
    type ErrCallback = (error: any) => void;
    type ErrNumberCallback = (error: any, value: number) => void;
    type ErrBufferCallback = (error: any, value: Buffer) => void;
    type ErrStringCallback = (error: any, value: string) => void;
    type KeyAsStringCallback = (error: any, key: string, value: Buffer) => void;
    type ValueAsStringCallback = (error: any, key: Buffer, value: string) => void;
    type KeyAndValueAsStringCallback = (error: any, key: string, value: string) => void;
    type KeyAndValueAsBufferCallback = (error: any, key: Buffer, value: Buffer) => void;

    interface PutBatch {
        type: "put";
        key: Bytes;
        value: Bytes;
    }

    interface DelBatch {
        type: "del";
        key: Bytes;
    }

    type Batch = PutBatch | DelBatch;

    interface OpenOptions {
        createIfMissing?: boolean | undefined;
        errorIfExists?: boolean | undefined;
        compression?: boolean | undefined;
        cacheSize?: number | undefined;
    }

    interface OpenAdvancedOptions extends OpenOptions {
        writeBufferSize?: number | undefined;
        blockSize?: number | undefined;
        maxOpenFiles?: number | undefined;
        blockRestartInterval?: number | undefined;
        maxFileSize?: number | undefined;
    }

    interface WriteOptions {
        sync?: boolean | undefined;
    }

    interface ReadOptions {
        fillCache?: boolean | undefined;
    }

    interface BufferReadOptions extends ReadOptions {
        asBuffer?: true | undefined;
    }

    interface StringReadOptions extends ReadOptions {
        asBuffer: false;
    }

    interface IteratorOptions {
        gt?: Bytes | undefined;
        lt?: Bytes | undefined;
        gte?: Bytes | undefined;
        lte?: Bytes | undefined;
        reverse?: boolean | undefined;
        keys?: boolean | undefined;
        values?: boolean | undefined;
        limit?: number | undefined;
        fillCache?: boolean | undefined;
    }

    interface KeyAsStringIteratorOptions extends IteratorOptions {
        keyAsBuffer: false;
        valueAsBuffer?: true | undefined;
    }

    interface ValueAsStringIteratorOptions extends IteratorOptions {
        keyAsBuffer?: true | undefined;
        valueAsBuffer: false;
    }

    interface KeyAndValueAsStringIteratorOptions extends IteratorOptions {
        keyAsBuffer: false;
        valueAsBuffer: false;
    }

    interface KeyAndValueAsBufferIteratorOptions extends IteratorOptions {
        keyAsBuffer?: true | undefined;
        valueAsBuffer?: true | undefined;
    }

    interface Iterator {
        seek(key: Bytes): void;
        end(callback: ErrCallback): void;
    }

    interface KeyAsStringIterator extends Iterator {
        next(callback: KeyAsStringCallback): void;
    }

    interface ValueAsStringIterator extends Iterator {
        next(callback: ValueAsStringCallback): void;
    }

    interface KeyAndValueAsStringIterator extends Iterator {
        next(callback: KeyAndValueAsStringCallback): void;
    }

    interface KeyAndValueAsBufferIterator extends Iterator {
        next(callback: KeyAndValueAsBufferCallback): void;
    }

    interface LevelDown {
        open(callback: ErrCallback): void;
        open(options: OpenOptions, callback: ErrCallback): void;
        close(callback?: ErrCallback): void;
        put(key: Bytes, value: Bytes, callback: ErrCallback): void;
        put(key: Bytes, value: Bytes, options: WriteOptions, callback: ErrCallback): void;
        get(key: Bytes, callback: ErrBufferCallback): void;
        get(key: Bytes, options: BufferReadOptions, callback: ErrBufferCallback): void;
        get(key: Bytes, options: StringReadOptions, callback: ErrStringCallback): void;
        del(key: Bytes, callback?: ErrCallback): void;
        del(key: Bytes, options: WriteOptions, callback?: ErrCallback): void;
        batch(operations: Batch[], callback?: ErrCallback): void;
        batch(operations: Batch[], options?: WriteOptions, callback?: ErrCallback): void;
        approximateSize(start: Bytes, end: Bytes, callback: ErrNumberCallback): void;
        compactRange(start: Bytes, end: Bytes, callback: ErrCallback): void;
        getProperty(property: string): string;
        iterator(options?: KeyAsStringIteratorOptions): KeyAsStringIterator;
        iterator(options?: ValueAsStringIteratorOptions): ValueAsStringIterator;
        iterator(options?: KeyAndValueAsStringIteratorOptions): KeyAndValueAsStringIterator;
        iterator(options?: KeyAndValueAsBufferIteratorOptions): KeyAndValueAsBufferIterator;
    }

    interface Constructor {
        (location: string): LevelDown;
        destroy(location: string, callback: ErrCallback): void;
        repair(location: string, callback: ErrCallback): void;
    }
}
