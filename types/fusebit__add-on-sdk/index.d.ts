/**
 * Method of invocation for the call coming into Fusebit.
 */
export type Method = "GET" | "POST" | "PUT" | "DELETE" | "CRON";

/**
 * Identifying information for an item in Fusebit storage.
 */
export interface StorageItem {
    storageId: string;
    tags: object;
    etag: string;
    expires: string;
}

/**
 * Fusebit storage data object.
 */
export interface StorageDataObject {
    etag: string;
    tags: object;
    expires: string;
    data: any;
}

/**
 * Options which can be passed to Storage.list() to control the data
 * that is returned from the method.
 */
export interface ListStorageOptions {
    count?: number;
    next?: string;
}

export interface ListStorageResult {
    items: StorageItem[];
    next?: string;
}

export interface StorageClient {
    // https://fusebit.io/docs/reference/fusebit-http-api/#operation/getStorage
    get(storageSubId: string): Promise<StorageDataObject>;

    // https://fusebit.io/docs/reference/fusebit-http-api/#operation/putStorage
    put(data: any, storageSubId: string): Promise<StorageDataObject>;

    // https://fusebit.io/docs/reference/fusebit-http-api/#operation/deleteStorage
    delete(
        storageSubId: string,
        recursive?: boolean,
        forceRecursive?: boolean,
    ): Promise<void>;

    // https://fusebit.io/docs/reference/fusebit-http-api/#operation/getStorageList
    list(
        storageSubId: string,
        options?: ListStorageOptions,
    ): Promise<ListStorageResult>;
}

export interface FusebitContext {
    accountId: string;
    subscriptionId: string;
    boundaryId: string;
    functionId: string;
    configuration: { [key: string]: string };
    method: Method;
    baseUrl?: string;
    url?: string;
    path?: string;
    query?: { [key: string]: string | string[] };
    headers?: { [key: string]: string };
    body?: any;
    fusebit: {
        functionAccessToken: string;
        caller: {
            permissions: string[];
            accessToken: string;
        };
    };
    storage: StorageClient;
}

export function createStorageClient(
    ctx: FusebitContext,
    accessToken: string,
    storageIdPrefix: string,
): Promise<StorageClient>;

export function debug(message: string, ...params: any[]): void;

export function getFunctionUrl(
    ctx: FusebitContext,
    accessToken: string,
    boundaryId: string,
    functionId: string,
): Promise<string>;
