/// <reference types="request" />

import * as request from "request";

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
        attr?: string | undefined;
    }

    interface RequestOptions {
        headers: request.Headers;
    }

    interface Options {
        urls: (string | Url)[];
        directory: string;
        urlFilter?: ((url: string) => boolean) | undefined;
        filenameGenerator?: string | undefined;
        defaultFilename?: string | undefined;
        prettifyUrls?: boolean | undefined;
        sources?: Source[] | undefined;
        subdirectories?: SubDirectory[] | null | undefined;
        request?: RequestOptions | undefined;
        recursive?: boolean | undefined;
        maxDepth?: number | undefined;
        ignoreErrors?: boolean | undefined;
        maxRecursiveDepth?: number | undefined;
        requestConcurrency?: number | undefined;
        plugins?: object[] | undefined;
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
