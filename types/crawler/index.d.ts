// Type definitions for crawler 1.2
// Project: https://github.com/bda-research/node-crawler
// Definitions by: Ruben Rizzi <https://github.com/raynor85>
//                 wakhh <https://github.com/wakhh>
//                 Paweł Zmarzły <https://github.com/pzmarzly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

/// <reference types="cheerio" />

import { EventEmitter } from 'events';
import { Headers, RequestAsJSON } from 'request';

declare class Crawler extends EventEmitter {
    constructor(options: Crawler.CreateCrawlerOptions);
    queueSize: number;
    on(channel: 'schedule', listener: (options: Crawler.CrawlerRequestOptions) => void): this;
    on(channel: 'limiterChange', listener: (options: Crawler.CrawlerRequestOptions, limiter: string) => void): this;
    on(channel: 'request', listener: (options: Crawler.CrawlerRequestOptions) => void): this;
    on(channel: 'drain', listener: () => void): this;
    queue(uri: string): void;
    queue(uri: ReadonlyArray<string>): void;
    queue(options: Crawler.CrawlerRequestOptions | ReadonlyArray<Crawler.CrawlerRequestOptions>): void;
    direct(
        options: Omit<Crawler.CrawlerRequestOptions, 'callback'> & {
            callback: (error: Error, response: Crawler.CrawlerRequestResponse) => void;
        },
    ): void;
    setLimiterProperty(limiter: string, property?: string, value?: any): void;
}

export = Crawler;

declare namespace Crawler {
    export interface CrawlerRequestOptions {
        uri?: string;
        html?: string;
        proxy?: any;
        proxies?: any[];
        limiter?: string;
        encoding?: string;
        priority?: number;
        jQuery?: any;
        preRequest?: (options: CrawlerRequestOptions, doRequest: (err?: Error) => void) => void;
        callback?: (err: Error, res: CrawlerRequestResponse, done: () => void) => void;
        [x: string]: any;
    }

    export interface CrawlerRequestResponse {
        body: Buffer | string;
        request: RequestAsJSON;
        options: CrawlerRequestOptions;
        $: cheerio.CheerioAPI;
        [x: string]: any;
    }

    export interface CreateCrawlerOptions {
        autoWindowClose?: boolean;
        forceUTF8?: boolean;
        gzip?: boolean;
        incomingEncoding?: string;
        jquery?: any;
        jQuery?: any;
        maxConnections?: number;
        method?: string;
        priority?: number;
        priorityRange?: number;
        rateLimit?: number;
        referer?: false | string;
        retries?: number;
        retryTimeout?: number;
        timeout?: number;
        skipDuplicates?: boolean;
        rotateUA?: boolean;
        userAgent?: string | ReadonlyArray<string>;
        homogeneous?: boolean;
        debug?: boolean;
        logger?: {
            log: (level: string, ...args: ReadonlyArray<any>) => void;
        };
        seenreq?: any;
        headers?: Headers;
        preRequest?: (options: CrawlerRequestOptions, doRequest: (err?: Error) => void) => void;
        callback?: (err: Error, res: CrawlerRequestResponse, done: () => void) => void;
        [x: string]: any;
    }
}
