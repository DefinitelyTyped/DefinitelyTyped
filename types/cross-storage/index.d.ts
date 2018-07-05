// Type definitions for cross-storage v0.8.1
// Project: https://github.com/zendesk/cross-storage
// Definitions by: Daniel Chao <http://dchao.co/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface CrossStorageClientOptions {
    timeout?: number;
    promise?: any;
    frameId?: string;
}

type CrossStorageMethod = "get" | "set" | "del" | "getKeys" | "clear";

interface SubDomain {
    origin: RegExp;
    allow: CrossStorageMethod[];
}

export declare class CrossStorageClient {

    /**
     * Constructs a new cross storage client given the url to a hub. By default, an iframe is created 
     * within the document body that points to the url. It also accepts an options object, which may include 
     * a timeout, frameId, and promise. The timeout, in milliseconds, is applied to each request and defaults 
     * to 5000ms. The options object may also include a frameId, identifying an existing frame on which to 
     * install its listeners. If the promise key is supplied the constructor for a Promise, that Promise 
     * library will be used instead of the default window.Promise.
     */
    constructor(hubUrl: string, opts: CrossStorageClientOptions)

    /**
     * Returns a promise that is fulfilled when a connection has been established with the cross storage 
     * hub. Its use is required to avoid sending any requests prior to initialization being complete.
     */
    onConnect(): Promise<void>;

    /**
     * Sets a key to the specified value, optionally accepting a ttl to passively expire the key after a 
     * number of milliseconds. Returns a promise that is fulfilled on success, or rejected if any errors 
     * setting the key occurred, or the request timed out.
     */
    set(key: string, value: any, ttl?: number): Promise<void>;
    /**
     * Accepts one or more keys for which to retrieve their values. Returns a promise that is settled on 
     * hub response or timeout. On success, it is fulfilled with the value of the key if only passed a 
     * single argument. Otherwise it's resolved with an array of values. On failure, it is rejected with 
     * the corresponding error message.
     */
    get(key: string): Promise<any>;
    get(...keys: string[]): Promise<any[]>;

    /**
     * Accepts one or more keys for deletion. Returns a promise that is settled on hub response or timeout.
     */
    del(...keys: string[]): Promise<void>;

    /**
     * Returns a promise that, when resolved, passes an array of keys currently in storage.
     */
    getKeys(): Promise<string[]>;

    /**
     * Returns a promise that, when resolved, passes an array of keys currently in storage.
     */
    clear(): Promise<void>;

    /**
     * Deletes the iframe and sets the connected state to false. The client can no longer be used after 
     * being invoked.
     */
    close(): void;
}

export declare class CrossStorageHub {
    /**
     * Accepts an array of objects with two keys: origin and allow. The value of origin is expected to be 
     * a RegExp, and allow, an array of strings. The cross storage hub is then initialized to accept requests 
     * from any of the matching origins, allowing access to the associated lists of methods. Methods may 
     * include any of: get, set, del, getKeys and clear. A 'ready' message is sent to the parent window once 
     * complete.
     */
    static init(subdomains: SubDomain[]): void;
}
