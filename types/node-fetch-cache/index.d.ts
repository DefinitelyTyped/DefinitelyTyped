// Type definitions for node-fetch-cache 3.0
// Project: https://github.com/mistval/node-fetch-cache#readme
// Definitions by: Yusuke Fujiki <https://github.com/fujikky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import fetch, { Response } from "node-fetch";

declare class NFCResponse extends Response {
    ejectFromCache(): Promise<void>;
}

interface Cache {
    get(key: string): Promise<any>;
    remove(key: string): Promise<void>;
    set(key: string, bodyStream: Response["body"], metaData: any): Promise<any>;
}

interface MemoryCacheOptions {
    ttl?: number;
}

export class MemoryCache implements Cache {
    constructor(options?: MemoryCacheOptions);
    get(key: string): Promise<any>;
    remove(key: string): Promise<void>;
    set(key: string, bodyStream: Response["body"], metaData: any): Promise<any>;
}

interface FileSystemCacheOptions {
    ttl?: number;
    cacheDirectory?: string;
}

export class FileSystemCache implements Cache {
    constructor(options?: FileSystemCacheOptions);
    get(key: string): Promise<any>;
    remove(key: string): Promise<void>;
    set(key: string, bodyStream: Response["body"], metaData: any): Promise<any>;
}

type FetchBuilder = (cache: Cache) => FetchCache;
type FetchCache = ((...args: Parameters<typeof fetch>) => Promise<NFCResponse>) & {
    withCache: FetchBuilder;
};

declare const defaultFetch: FetchCache;
export default defaultFetch;

export const fetchBuilder: FetchCache;
