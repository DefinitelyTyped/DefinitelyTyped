// Type definitions for node-downloader-helper 1.0
// Project: https://github.com/hgouveia/node-downloader-helper
// Definitions by: Rémy Jeancolas <https://github.com/RemyJeancolas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import { EventEmitter } from 'events';
import { RequestOptions as HttpRequestOptions, OutgoingHttpHeaders } from 'http';
import { RequestOptions as HttpsRequestOptions } from 'https';

export interface Options {
    method?: string; // Request Method Verb
    headers?: OutgoingHttpHeaders; // Custom HTTP Header ex: Authorization, User-Agent
    fileName?: string; // Custom filename when saved
    forceResume?: boolean; // If the server does not return the "accept-ranges" header, can be force if it does support it
    override?: boolean; // if true it will override the file, otherwise will append '(number)' to the end of file
    httpRequestOptions?: HttpRequestOptions; // Override the http request options
    httpsRequestOptions?: HttpsRequestOptions; // Override the https request options, ex: to add SSL Certs
}

export interface Stats {
    total: number; // total size that needs to be downloaded in bytes
    downloaded: number; // downloaded size in bytes
    progress: number; // progress porcentage 0-100%
    speed: number; // download speed in bytes
}

export enum DH_STATES {
    IDLE = 'IDLE',
    STARTED = 'STARTED',
    DOWNLOADING = 'DOWNLOADING',
    PAUSED = 'PAUSED',
    RESUMED = 'RESUMED',
    STOPPED = 'STOPPED',
    FINISHED = 'FINISHED',
    FAILED = 'FAILED'
}

export interface DownloaderHelper {
    on(event: 'start' | 'download' | 'end' | 'pause' | 'resume' | 'stop' | string, callback: () => void): this;
    on(event: 'progress', callback: (stats: Stats) => void): this;
    on(event: 'error', callback: (error: Error) => void): this;
    on(event: 'stateChanged', callback: (state: DH_STATES) => void): this;
}

export class DownloaderHelper extends EventEmitter {
    constructor(url: string, destFolder: string, options?: Options);
    start(): Promise<boolean>;
    pause(): Promise<boolean>;
    resume(): Promise<boolean>;
    stop(): Promise<boolean>;
}
