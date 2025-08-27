declare namespace CacheDB {
    interface Config {
        type: "json" | "arrayBuffer" | "blob" | "text" | string;
    }
    type ReadMethodData = object | ArrayBuffer | Blob | string | null;
    type WriteValue =
        | ReadableStream
        | Blob
        | ArrayBufferView
        | ArrayBuffer
        | FormData
        | URLSearchParams
        | string;
}

declare class CacheDB {
    constructor(namespace?: string, prefix?: string);

    namespace: string;
    prefix: string;

    read(key: string, config?: CacheDB.Config): Promise<CacheDB.ReadMethodData>;
    write(
        key: string | number | boolean,
        value: CacheDB.WriteValue,
        config?: CacheDB.Config,
    ): Promise<boolean>;
    delete(key: string): Promise<boolean>;
}

export = CacheDB;
export as namespace CacheDB;
