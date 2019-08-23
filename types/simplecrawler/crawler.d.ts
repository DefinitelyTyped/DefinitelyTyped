/// <reference types="node" />
import { EventEmitter } from 'events';
import { Agent as HTTPAgent, IncomingMessage } from 'http';
import { Agent as HTTPSAgent } from 'https';

import Cache from './cache';
import CookieJar from './cookies';
import FetchQueue, { QueueItem } from './queue';

type HTTPMethods = 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

interface RequestOptions {
    method: HTTPMethods;
    host: string;
    port?: number;
    agent: HTTPAgent | HTTPSAgent;
    headers: {
        Accept: string;
        'User-Agent': string;
        Host: string;
        'Accept-Encoding'?: string;
        Referer?: string;
        cookie?: string;
        Authorization?: string;
        'Proxy-Authorization'?: string;
        [key: string]: any;
    };
}

declare class Crawler extends EventEmitter {
    initialURL: string;
    host: string;
    interval: number;
    maxConcurrency: number;
    timeout: number;
    listenerTTL: number;
    userAgent: string;
    queue: FetchQueue;
    respectRobotsTxt: boolean;
    allowInitialDomainChange: boolean;
    decompressResponses: boolean;
    decodeResponses: boolean;
    filterByDomain: boolean;
    scanSubdomains: boolean;
    ignoreWWWDomain: boolean;
    stripWWWDomain: boolean;
    cache?: Cache;
    useProxy: boolean;
    proxyHostname: string;
    proxyPort: number;
    proxyUser?: string;
    proxyPass?: string;
    needsAuth: boolean;
    authUser?: string;
    authPass?: string;
    acceptCookies: boolean;
    cookies: CookieJar;
    customHeaders: object;
    domainWhitelist: string[];
    allowedProtocols: RegExp[];
    maxResourceSize: number;
    supportedMimeTypes: Array<string | RegExp>;
    downloadUnsupported: boolean;
    urlEncoding: string;
    stripQuerystring: boolean;
    sortQueryParameters: boolean;
    discoverRegex: Array<(() => void) | RegExp>;
    parseHTMLComments: boolean;
    parseScriptTags: boolean;
    maxDepth: number;
    ignoreInvalidSSL: boolean;
    httpAgent: HTTPAgent;
    httpsAgent: HTTPSAgent;

    constructor(initialURL: string);

    start(): this;

    urlIsAllowed(url: string): boolean;

    getRequestOptions(queueItem: QueueItem): RequestOptions;

    getRobotsTxt(url: string, callback: (error?: Error, href?: string, responseBody?: string) => void): this;

    protocolSupported(url: string): boolean;

    mimeTypeSupported(mimetype: string): boolean;

    processURL(url: string, referer?: QueueItem): QueueItem;

    cleanURL(url: string, queueItem: QueueItem): string;

    cleanExpandResources(urlMatch: string[], queueItem: QueueItem): string[];

    discoverResources(resourceText: string): string[];

    domainValid(host: string): boolean;

    queueLinkedItems(resourceData: string | Buffer, queueItem: QueueItem): this;

    queueURL(url: string, referrer?: QueueItem, force?: boolean): boolean;

    fetchQueueItem(queueItem: QueueItem): this;

    decodeBuffer(buffer: Buffer, contentTypeHeader?: string): string;

    handleResponse(queueItem: QueueItem, response: IncomingMessage, timeCommenced?: Date): string;

    /**
     * @deprecated
     */
    crawl(): never;

    stop(abortRequestsInFlight?: boolean): this;

    wait(): () => void;

    addDownloadCondition(callback: (queueItem: QueueItem, response: IncomingMessage) => void): number;

    removeDownloadCondition(id: number | (() => void)): boolean;

    addFetchCondition(callback: (queueItem: QueueItem, referrerQueueItem: QueueItem) => void): number;

    removeFetchCondition(id: number | (() => void)): boolean;

    on(event: 'crawlstart' | 'complete', listener: () => void): this;
    on(event: 'discoverycomplete', listener: (queueItem: QueueItem, resources: string[]) => void): this;
    on(event: 'invaliddomain' | 'fetchdisallowed' | 'queueduplicate', listener: (queueItem: QueueItem) => void): this;
    on(event: 'fetchconditionerror' | 'downloadconditionerror', listener: (queueItem: QueueItem, error: any) => void): this;
    on(event: 'fetchprevented', listener: (queueItem: QueueItem, fetchCondition: () => boolean) => void): this;
    on(event: 'queueerror', listener: (error?: QueueItem, queueItem?: QueueItem) => void): this;
    on(event: 'queueadd', listener: (queueItem?: QueueItem, referrer?: QueueItem) => void): this;
    on(event: 'fetchtimeout', listener: (queueItem: QueueItem, timeout: number) => void): this;
    on(event: 'fetchclienterror', listener: (queueItem: QueueItem, error?: object) => void): this;
    on(event: 'fetchstart', listener: (queueItem: QueueItem, requestOptions: RequestOptions) => void): this;
    on(event: 'cookieerror', listener: (queueItem: QueueItem, error: Error, cookie: string) => void): this;
    on(event: 'fetchheaders' | 'downloadprevented' | 'fetch404' | 'fetch410' | 'fetcherror' | 'fetchdataerror', listener: (queueItem: QueueItem, response: IncomingMessage) => void): this;
    on(event: 'notmodified', listener: (queueItem: QueueItem, response: IncomingMessage, cacheObject: Cache) => void): this;
    on(event: 'fetchredirect', listener: (queueItem: QueueItem, redirectQueueItem: QueueItem, response: IncomingMessage) => void): this;
    on(event: 'fetchcomplete' | 'gziperror', listener: (queueItem: QueueItem, responseBody: string | Buffer, response: IncomingMessage) => void): this;
    on(event: 'robotstxterror', listener: (error: Error) => void): this;
}

export = Crawler;
