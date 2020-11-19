// Type definitions for crawler 1.2
// Project: https://github.com/bda-research/node-crawler
// Definitions by: Paweł Zmarzły <https://github.com/pzmarzly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

// Based on https://github.com/bda-research/node-crawler/issues/297

/// <reference types="cheerio" />

import { EventEmitter } from 'events';
import { Url } from 'url';

declare class Crawler extends EventEmitter {
    constructor(options: Crawler.CreateCrawlerOptions);
    readonly queueSize: number;

    on(channel: 'schedule' | 'request', listener: (options: Crawler.CrawlerRequestOptions) => void): this;
    on(channel: 'limiterChange', listener: (options: Crawler.CrawlerRequestOptions, limiter: string) => void): this;
    on(channel: 'drain', listener: () => void): this;

    queue(
        urisOrOptions:
            | string
            | ReadonlyArray<string>
            | Crawler.CrawlerRequestOptions
            | ReadonlyArray<Crawler.CrawlerRequestOptions>,
    ): void;

    direct(
        options: Omit<Crawler.CrawlerRequestOptions, 'callback'> & {
            callback: (error: Error, response: Crawler.CrawlerRequestResponse) => void;
        },
    ): void;

    setLimiterProperty(limiter: string, property?: string, value?: any): void;
}

export = Crawler;

declare namespace Crawler {
    // Following 2 types are taken from `request` definitions.
    // as importing `request` v2.88.2 definitions cause DT tests to fail.
    interface Headers {
        [key: string]: any;
    }

    interface RequestAsJSON {
        uri: Url;
        method: string;
        headers: Headers;
    }

    interface CrawlerRequestOptions {
        uri?: string;
        html?: string;
        proxy?: any;
        proxies?: any[];
        limiter?: string;
        encoding?: string;
        priority?: number;
        jquery?: any;
        jQuery?: any;
        preRequest?: (options: CrawlerRequestOptions, doRequest: (err?: Error) => void) => void;
        callback?: (err: Error, res: CrawlerRequestResponse, done: () => void) => void;
        [x: string]: any;
    }

    interface CrawlerRequestResponse {
        body: Buffer | string;
        request: RequestAsJSON;
        options: CrawlerRequestOptions;
        $: cheerio.CheerioAPI;
        [x: string]: any;
    }

    interface CreateCrawlerOptions {
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
        userAgent?: string | string[];
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
