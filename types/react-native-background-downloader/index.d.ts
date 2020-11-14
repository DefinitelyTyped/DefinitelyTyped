// Type definitions for react-native-background-downloader 2.3
// Project: https://github.com/EkoLabs/react-native-background-downloader.git
// Definitions by: Junseong Park <https://github.com/Kweiza>
//                 Adam Hunter <https://github.com/adamrhunter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DownloadHeaders {
  [key: string]: string | null;
}

type SetHeaders = (h: DownloadHeaders) => void;

export interface TaskInfoObject {
    id: string;
    percent: number;
    bytesWritten: number;
    totalBytes: number;
}
export type TaskInfo = string | TaskInfoObject;

export type BeginHandler = (expectedBytes: number) => any;
export type ProgressHandler = (percent: number, bytesWritten: number, totalBytes: number) => any;
export type DoneHandler = () => any;
export type ErrorHandler = (error: any, errorCode: any) => any;
export enum DownloadTaskState {
  DOWNLOADING = 'DOWNLOADING',
  PAUSED = 'PAUSED',
  DONE = 'DONE',
  FAILED = 'FAILED',
  STOPPED = 'STOPPED',
}

export interface DownloadTask {
    constructor: (taskInfo: TaskInfo) => DownloadTask;

    id: string;
    state: DownloadTaskState;
    percent: number;
    bytesWritten: number;
    totalBytes: number;

    begin: (handler: BeginHandler) => DownloadTask;
    progress: (handler: ProgressHandler) => DownloadTask;
    done: (handler: DoneHandler) => DownloadTask;
    error: (handler: ErrorHandler) => DownloadTask;

    _beginHandler: BeginHandler;
    _progressHandler: ProgressHandler;
    _doneHandler: DoneHandler;
    _errorHandler: ErrorHandler;

    pause: () => any;
    resume: () => any;
    stop: () => any;
}

export type CheckForExistingDownloads = () => Promise<DownloadTask[]>;

export interface DownloadOption {
    id: string;
    url: string;
    destination: string;
    headers?: DownloadHeaders;
}

export type Download = (options: DownloadOption) => DownloadTask;

export interface Directories {
    documents: string;
}

export interface Network {
    WIFI_ONLY: string;
    ALL: string;
}

export interface Priority {
    HIGH: string;
    MEDIUM: string;
    LOW: string;
}

export const setHeaders: SetHeaders;
export const checkForExistingDownloads: CheckForExistingDownloads;
export const download: Download;
export const directories: Directories;
export const Network: Network;
export const Priority: Priority;

export interface RNBackgroundDownloader {
    setHeaders: SetHeaders;
    checkForExistingDownloads: CheckForExistingDownloads;
    download: Download;
    directories: Directories;
    Network: Network;
    Priority: Priority;
}

declare const RNBackgroundDownloader: RNBackgroundDownloader;
export default RNBackgroundDownloader;
