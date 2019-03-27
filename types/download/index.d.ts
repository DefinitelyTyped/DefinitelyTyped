// Type definitions for download 6.2
// Project: https://github.com/kevva/download
// Definitions by: Nico Jansen <https://github.com/nicojs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { DecompressOptions } from 'decompress';
import { GotBodyOptions, TimeoutOptions } from 'got';

declare namespace download {
    type RetryFunction = (retry: number, error: any) => number;

    interface DownloadOptions extends DecompressOptions, GotBodyOptions<string> {
        /**
         * If set to true, try extracting the file using decompress.
         */
        extract?: boolean;
        /**
         * Name of the saved file.
         */
        filename?: string;
        /**
         * Proxy endpoint
         */
        proxy?: string;
        /**
         * Request Headers
         */
        headers?: {
            [name: string]: string;
        };
    }
}

declare function download(url: string, destination?: string, options?: download.DownloadOptions): Promise<Buffer> & NodeJS.WritableStream & NodeJS.ReadableStream;

export = download;
