// Type definitions for node-downloader-helper 1.0
// Project: https://github.com/hgouveia/node-downloader-helper
// Definitions by: Rémy Jeancolas <https://github.com/RemyJeancolas>, Roberto Araujo <https://github.com/Roberto-Araujo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="node" />

import { EventEmitter } from 'events';
import { RequestOptions as HttpRequestOptions, OutgoingHttpHeaders } from 'http';
import { RequestOptions as HttpsRequestOptions } from 'https';
import { Readable as StreamReadable } from 'stream';

export interface Options {
    method?: string; // Request Method Verb
    headers?: OutgoingHttpHeaders; // Custom HTTP Header ex: Authorization, User-Agent
    fileName?: string; // Custom filename when saved
    forceResume?: boolean; // If the server does not return the "accept-ranges" header, can be force if it does support it
    override?: boolean; // if true it will override the file, otherwise will append '(number)' to the end of file
    httpRequestOptions?: HttpRequestOptions; // Override the http request options
    httpsRequestOptions?: HttpsRequestOptions; // Override the https request options, ex: to add SSL Certs
    retry?: {
        maxRetries: number,
        delay: number,
    }; // { maxRetries: number, delay: number in ms } or false to disable (default)
    removeOnStop?: boolean; // remove the file when is stopped (default:true)
    removeOnFail?: boolean; // remove the file when fail (default:true)
}

export interface Stats {
    total: number; // total size that needs to be downloaded in bytes
    name: string; // name of file
    downloaded: number; // downloaded size in bytes
    progress: number; // progress porcentage 0-100%
    speed: number; // download speed in bytes
}

export interface DownloadInfo {
    totalSize: number; // total file size got from the server
    fileName: string; // assigned name
    filePath: string; // download path
    isResumed: boolean; // if the download is a resume,
    downloadedSize: number; // the downloaded amount (only if is resumed otherwise always 0)
}

export interface FinalDownloadInfo {
    fileName: string; // assigned name
    filePath: string; // download path
    totalSize: number; // total file size got from the server
    onDiskSize: number; // total size of file on the disk
    downloadedSize: number; // the total size downloaded
}

export interface FilePaths {
    path: string; // modified path name
    fileName: string; // modified file name
    prevPath: string; // original path name
    prevFileName: string; // original file name
}

export interface DownloaderError {
    message: string; // Error message
    status: number | undefined; // Http status response if available
    body: string | undefined; // Http body response if available
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
    on(event: 'start' | 'timeout' | 'pause' | 'stop' | string, callback: () => void): this;
    on(event: 'download', callback: (downloadInfo: DownloadInfo) => void): this;
    on(event: 'end', callback: (finalDownloadInfo: FinalDownloadInfo) => void): this;
    on(event: 'resume', callback: (isResume: boolean) => void): this;
    on(event: 'renamed', callback: (filePaths: FilePaths) => void): this;
    on(event: 'retry', callback: (attempt: number, retryOpts: any) => void): this;
    on(event: 'progress', callback: (stats: Stats) => void): this;
    on(event: 'error', callback: (error: DownloaderError) => void): this;
    on(event: 'stateChanged', callback: (state: DH_STATES) => void): this;
}

export class DownloaderHelper extends EventEmitter {
    constructor(url: string, destFolder: string, options?: Options);
    start(): Promise<boolean>;
    pause(): Promise<boolean>;
    resume(): Promise<boolean>;
    stop(): Promise<boolean>;
    pipe(readableStream: StreamReadable, options?: any): StreamReadable; // Add pipes to the pipe list that will be applied later when the download starts
    unpipe(readableStream?: StreamReadable): void; // Unpipe an stream , if a stream is not specified, then all pipes are detached.
    getDownloadPath(): string;    // gets the full path where the file will be downloaded (available after the start phase)
    isResumable(): boolean; // return tru/false if the download can be resumable (available after the start phase)
    updateOptions(options: Options): void; // updates the options, can be use on pause/resume events
    getStats(): Stats; // returns stats from the current download, these are the same stats sent via progress event
}
