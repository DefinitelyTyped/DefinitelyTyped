/// <reference types="node" />

import { EventEmitter } from "events";

export interface Page<U> {
    id: string;
    title: any;
    startedDateTime: string;
    pageTimings: {
        onContentLoad: number;
        onLoad: number;
    };
    _user: U;
}

export interface Entry {
    pageref: string;
    startedDateTime: string;
    time: number;
    request: {
        method: any;
        url: any;
        httpVersion: any;
        cookies: never[];
        headers: Array<{
            name: string;
            value: any;
        }>;
        queryString: Array<{
            name: string;
            value: any;
        }>;
        headersSize: number;
        bodySize: number;
        postData: {
            mimeType: any;
            params: Array<{
                name: string;
                value: any;
            }>;
            text: any;
        } | undefined;
    };
    response: {
        status: any;
        statusText: any;
        httpVersion: any;
        cookies: never[];
        headers: Array<{
            name: string;
            value: any;
        }>;
        redirectURL: any;
        headersSize: number;
        bodySize: number;
        _transferSize: any;
        content: {
            size: any;
            mimeType: any;
            compression: number | undefined;
            text: any;
            encoding: string | undefined;
        };
    };
    cache: {};
    _fromDiskCache: any;
    timings: {
        blocked: any;
        dns: number;
        connect: number;
        send: number;
        wait: number;
        receive: number;
        ssl: number;
    };
    serverIPAddress: any;
    connection: string;
    _initiator: any;
    _priority: any;
    _webSocketMessages: any;
    _resourceType: any;
}

export interface HAR<U> {
    log: {
        version: string;
        creator: {
            name: string;
            version: string;
            comment: string;
        };
        pages: Array<Page<U>>;
        entries: Array<(Entry | null)>;
    };
}

export type LoaderEvents = "load" | "done" | "fail" | "har";
export interface LoaderEventCallback<U> {
    "load": (url: string, index: number, urls: readonly string[]) => void;
    "done": (url: string, index: number, urls: readonly string[]) => void;
    "fail": (url: string, err: any, index: number, urls: readonly string[]) => void;
    "har": (har: HAR<U>) => void;
}

export interface RunOptions<T> {
    /** Chrome Debugging Protocol host. Defaults to localhost */
    host?: string | undefined;
    /** Chrome Debugging Protocol port. Defaults to 9222 */
    port?: number | string | undefined;
    /** frame width in DIP. Defaults to a Chrome-defined value */
    width?: number | undefined;
    /** frame height in DIP. Defaults to a Chrome-defined value */
    height?: number | undefined;
    /** if true also capture the requests body. Defaults to false */
    content?: boolean | undefined;
    /** if true allow caching. Defaults to false */
    cache?: boolean | undefined;
    /** milliseconds to wait before giving up with a URL */
    timeout?: number | undefined;
    /** number of retries on page load failure. Defaults to 0 */
    retry?: number | undefined;
    /** time to wait before starting a new attempt. Defaults to 0 */
    retryDelay?: number | undefined;
    /** stop after the first failure (incompatible with parallel mode) */
    abortOnFailure?: boolean | undefined;
    /** maximum POST data size (in bytes) to be returned. Defaults to unlimited */
    postData?: number | undefined;
    /** if true load the URLs in parallel (warning: this may spoil time-based metrics). Defaults to false */
    parallel?: boolean | undefined;
    /**
     * function returning a Promise executed before each page load
     *
     * @param url the current URL
     * @param client CDP client instance
     * @param index index of url in urls
     * @param urls input URL array
     * @returns Promise executed before each page load
     */
    preHook?: ((url: string, client: any, index: number, urls: readonly string[]) => Promise<void>) | undefined;
    /**
     * function returning a Promise executed after each page load event
     *
     * If this hook resolves to a value then it is included in the resulting HAR object as the value of the _user key of the this URL's page object.
     * @param url the current URL
     * @param client CDP client instance
     * @param index index of url in urls
     * @param urls input URL array
     * @returns Promise executed after each page load event
     */
    postHook?: ((url: string, client: any, index: number, urls: readonly string[]) => Promise<T>) | undefined;
}

export class Loader<U> extends EventEmitter {
    addListener<K extends LoaderEvents>(eventName: K, listener: LoaderEventCallback<U>[K]): this;
}
export function run<U = undefined>(urls: readonly string[], options: RunOptions<U>): Loader<U>;

export interface LogOptions {
    /** if true also expect the requests body. Defaults to false. */
    content?: boolean;
}

export interface Log {
    method: string;
    params: Record<string, any>;
}

export function fromLog(url: string, log: Log[], options: LogOptions): HAR<never>;
