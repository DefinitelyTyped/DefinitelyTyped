// Type definitions for download 6.2
// Project: https://github.com/kevva/download
// Definitions by: Nico Jansen <https://github.com/nicojs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

interface TimeoutOptions {
    connect?: number;
    socket?: number;
    request?: number;
}
type RetryFunction = (retry: number, error: any) => number;

interface DownloadOptions {
    body?: string | Buffer | NodeJS.ReadableStream;
    encoding?: string | null;
    query?: string | object;
    timeout?: number | TimeoutOptions;
    retries?: number | RetryFunction;
    followRedirect?: boolean;
    decompress?: boolean;
    useElectronNet?: boolean;
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
}

declare namespace download {}
declare function download(url: string, destination?: string, options?: DownloadOptions): Promise<Buffer> & NodeJS.WritableStream & NodeJS.ReadableStream;

export = download;
