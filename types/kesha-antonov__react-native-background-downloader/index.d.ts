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

export interface BeginHandlerObject {
    expectedBytes: number;
    headers: { [key: string]: string };
}

export type BeginHandler = ({ expectedBytes, headers }: BeginHandlerObject) => any;
export type ProgressHandler = (percent: number, bytesWritten: number, totalBytes: number) => any;
export type DoneHandler = () => any;
export type ErrorHandler = (error: any, errorCode: any) => any;
export type DownloadTaskState = "DOWNLOADING" | "PAUSED" | "DONE" | "FAILED" | "STOPPED";

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
export type EnsureDownloadsAreRunning = () => Promise<void>;

export interface DownloadOption {
    id: string;
    url: string;
    destination: string;
    headers?: DownloadHeaders | undefined;
}

export type Download = (options: DownloadOption) => DownloadTask;
export type CompleteHandler = (id: string) => void;

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
export const ensureDownloadsAreRunning: EnsureDownloadsAreRunning;
export const download: Download;
export const completeHandler: CompleteHandler;
export const directories: Directories;
export const Network: Network;
export const Priority: Priority;

export interface RNBackgroundDownloader {
    setHeaders: SetHeaders;
    checkForExistingDownloads: CheckForExistingDownloads;
    ensureDownloadsAreRunning: EnsureDownloadsAreRunning;
    download: Download;
    completeHandler: CompleteHandler;
    directories: Directories;
    Network: Network;
    Priority: Priority;
}

declare const RNBackgroundDownloader: RNBackgroundDownloader;
export default RNBackgroundDownloader;
