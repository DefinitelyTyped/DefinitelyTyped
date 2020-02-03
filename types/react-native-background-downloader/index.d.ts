// Type definitions for react-native-background-downloader 2.3
// Project: https://github.com/EkoLabs/react-native-background-downloader.git
// Definitions by: Junseong Park <https://github.com/Kweiza>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type SetHeaders = (h: object) => any;

interface TaskInfoObject {
    id: string;
    percent: number;
    bytesWritten: number;
    totalBytes: number;
}
type TaskInfo = string | TaskInfoObject;

type BeginHandler = (expectedBytes: number) => any;
type ProgressHandler = (percent: number, bytesWritten: number, totalBytes: number) => any;
type DoneHandler = () => any;
type ErrorHandler = (error: any, errorCode: any) => any;
interface DownloadTask {
    constructor: (taskInfo: TaskInfo) => DownloadTask;

    state: string;
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

type CheckForExistingDownloads = () => Promise<DownloadTask[]>;

interface DownloadOption {
    id: string;
    url: string;
    destination: string;
    headers?: object;
}

type Download = (options: DownloadOption) => DownloadTask;

interface Directories {
    documents: string;
}

interface Network {
    WIFI_ONLY: string;
    ALL: string;
}

interface Priority {
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

interface RNBackgroundDownloader {
    setHeaders: SetHeaders;
    checkForExistingDownloads: CheckForExistingDownloads;
    download: Download;
    directories: Directories;
    Network: Network;
    Priority: Priority;
}

declare const RNBackgroundDownloader: RNBackgroundDownloader;
export default RNBackgroundDownloader;
