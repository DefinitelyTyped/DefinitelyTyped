// Type definitions for open-graph-scraper 4.3
// Project: https://github.com/jshemas/openGraphScraper#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { PassThrough } from 'stream';

declare namespace run {
    interface SuccessResult {
        error: false;
        result: {
            ogDescription?: string;
            ogImage?: {
                height: string;
                type: string;
                url: string;
                width: string;
            };
            ogTitle?: string;
            ogType?: string;
            ogUrl?: string;
            requestUrl: string;
            success: true;
        };
        response: PassThrough;
    }

    interface ErrorResult {
        error: true;
        result: {
            error: string;
            errorDetails: Error;
            success: false;
        };
    }

    interface Options {
        /** By default, OGS will only send back the first image/video it finds (default: `false`). */
        allMedia?: boolean;
        /** Pass in an array of sites you don't want `og`s to run on. */
        blacklist?: string[];
        /** Set the accept-encoding to `gzip/deflate` (default: `true`). */
        decompress?: boolean;
        /** Setting this to `null` might help with running `og`s on non english websites (default: `utf8`). */
        encoding?: string | null;
        /** Defines if redirect responses should be followed automatically (default: `true`). */
        followRedirect?: boolean;
        /** An object containing request headers. Useful for setting the user-agent. */
        headers?: Record<string, string>;
        /** You can pass in an HTML string to run `og`s on it (use without `options.url`). */
        html?: string;
        /** Max number of redirects `og`s will follow (default: `10`). */
        maxRedirects?: number;
        /** Fetch other images if no open graph ones are found (default: `true`). */
        ogImageFallback?: boolean;
        /** Only fetch open graph info and don't fall back on anything else (default: `false`). */
        onlyGetOpenGraphInfo?: boolean;
        /** Sets the peekSize for the request (default: `1024`). */
        peekSize?: number;
        /** Number of times `og`s will retry the request (default: `2`). */
        retry?: number;
        /** Runs charset and icons on the request payload (default: `false`). */
        runChar?: boolean;
        /** Timeout of the request in ms (default: `2000`). */
        timeout?: number;
        /** URL of the site. */
        url: string;
        /** Returns the charset in the `og`s payload (default: `false`). */
        withCharset?: boolean;
    }
}

declare function run(options: run.Options): Promise<run.SuccessResult | run.ErrorResult>;
declare function run(
    options: run.Options,
    callback: (error: boolean, results: run.SuccessResult | run.ErrorResult, response: PassThrough) => void,
): void;

export = run;
