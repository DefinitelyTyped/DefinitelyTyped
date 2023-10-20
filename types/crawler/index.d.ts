// Based on https://github.com/bda-research/node-crawler/issues/297

/// <reference types="cheerio" />

import { EventEmitter } from "events";
import { Url } from "url";

declare class Crawler extends EventEmitter {
    constructor(options: Crawler.CreateCrawlerOptions);
    readonly queueSize: number;

    on(channel: "schedule" | "request", listener: (options: Crawler.CrawlerRequestOptions) => void): this;
    on(channel: "limiterChange", listener: (options: Crawler.CrawlerRequestOptions, limiter: string) => void): this;
    on(channel: "drain", listener: () => void): this;

    queue(
        urisOrOptions:
            | string
            | ReadonlyArray<string>
            | Crawler.CrawlerRequestOptions
            | ReadonlyArray<Crawler.CrawlerRequestOptions>,
    ): void;

    direct(
        options: Omit<Crawler.CrawlerRequestOptions, "callback"> & {
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
        uri?: string | undefined;
        html?: string | undefined;
        proxy?: any;
        proxies?: any[] | undefined;
        limiter?: string | undefined;
        encoding?: string | undefined;
        priority?: number | undefined;
        jquery?: any;
        jQuery?: any;
        preRequest?: ((options: CrawlerRequestOptions, doRequest: (err?: Error) => void) => void) | undefined;
        callback?: ((err: Error, res: CrawlerRequestResponse, done: () => void) => void) | undefined;
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
        autoWindowClose?: boolean | undefined;
        forceUTF8?: boolean | undefined;
        gzip?: boolean | undefined;
        incomingEncoding?: string | undefined;
        jquery?: any;
        jQuery?: any;
        maxConnections?: number | undefined;
        method?: string | undefined;
        priority?: number | undefined;
        priorityRange?: number | undefined;
        rateLimit?: number | undefined;
        referer?: false | string | undefined;
        retries?: number | undefined;
        retryTimeout?: number | undefined;
        timeout?: number | undefined;
        skipDuplicates?: boolean | undefined;
        rotateUA?: boolean | undefined;
        userAgent?: string | string[] | undefined;
        homogeneous?: boolean | undefined;
        http2?: boolean | undefined;
        debug?: boolean | undefined;
        logger?: {
            log: (level: string, ...args: ReadonlyArray<any>) => void;
        } | undefined;
        seenreq?: any;
        headers?: Headers | undefined;
        preRequest?: ((options: CrawlerRequestOptions, doRequest: (err?: Error) => void) => void) | undefined;
        callback?: ((err: Error, res: CrawlerRequestResponse, done: () => void) => void) | undefined;
        [x: string]: any;
    }
}
