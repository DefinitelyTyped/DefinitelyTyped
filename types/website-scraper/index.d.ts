// Type definitions for website-scraper v1.2.x
// Project: https://github.com/s0ph1e/node-website-scraper
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="request" />

import * as request from 'request';

declare namespace websiteScraper {
    interface Url {
        url: string;
        filename: string;
    }

    interface SubDirectory {
        directory: string;
        extensions: string[];
    }

    interface Source {
        selector: string;
        attr?: string;
    }

    interface RequestOptions {
        headers: request.Headers;
    }

    interface Options {
        urls: (string | Url)[];
        directory: string;
        urlFilter?: (url: string) => boolean;
        filenameGenerator?: string;
        defaultFilename?: string;
        prettifyUrls?: boolean;
        sources?: Source[];
        subdirectories?: SubDirectory[] | null;
        request?: RequestOptions;
        recursive?: boolean;
        maxDepth?: number;
        ignoreErrors?: boolean;
        maxRecursiveDepth?: number;
        requestConcurrency?: number;
        plugins?: object[];
    }

    interface Resource {
        url: string;
        filename: string;
        assets: Resource[];
    }

    interface Callback {
        (error: any | null, result: Resource[] | null): void;
    }

    interface Scrape {
        (options: Options, callback: Callback): void;
        (options: Options): Promise<Resource[]>;
    }
}

declare const websiteScraper: websiteScraper.Scrape;

export = websiteScraper;
