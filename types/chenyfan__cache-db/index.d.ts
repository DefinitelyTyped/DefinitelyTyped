// Type definitions for @chenyfan/cache-db 0.0
// Project: https://www.npmjs.com/package/@chenyfan/cache-db
// Definitions by: AHdark <https://github.com/AH-dark>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CacheDB {
    export type Config = "json" | "arrayBuffer" | "blob" | "text" | string;
    export type ReadMethodData = any | ArrayBuffer | Blob | string | null;
    export type WriteValue =
        | ReadableStream
        | Blob
        | ArrayBufferView
        | ArrayBuffer
        | FormData
        | URLSearchParams
        | string;
}

declare class CacheDB {
    constructor (namespace?: string, prefix?: string);

    namespace: string;
    prefix: string;

    read(key: string, config?: CacheDB.Config): Promise<CacheDB.ReadMethodData>;
    write(
        key: string | number | boolean,
        value: CacheDB.WriteValue,
        config?: CacheDB.Config
    ): Promise<boolean>;
    delete(key: string): Promise<boolean>;
}

export = CacheDB;
