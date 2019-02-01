// Type definitions for cordova-plugin-background-download 0.5
// Project: https://github.com/sgrebnov/cordova-plugin-background-download
// Definitions by: Tobias Gimpel <https://github.com/mrbullfinsh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/**
 * Provides an advanced file transfer functionality that persists beyond app termination and
 * runs in the background. Background transfer doesn't support concurrent downloads of the same uri.
 */
declare var BackgroundTransfer: BackgroundTransferInterface;
interface BackgroundTransferInterface {
    BackgroundDownloader: typeof BackgroundDownloader;
}

declare class BackgroundDownloader {
    /**
     * Initializes a new instance of BackgroundDownloader object.
     * Used to configure downloads prior to the actual creation of the download operation using CreateDownload.
     *
     * @param uriMatcher The regexp to compare location of the resources with already downloading ones.
     */
    constructor(uriMatcher?: RegExp);
    /**
     * Initializes a DownloadOperation object that contains the specified Uri and the file that the response is written to.
     *
     * @param uri The location of the resource.
     * @param resultFile The file that the response will be written to.
     * @param notificationTitle The title for downloading in notification.
     */
    createDownload(uri: string, resultFile: File, notificationTitle?: string): DownloadOperation;
}

declare class DownloadOperation {
    /**
     * Performs an asynchronous download operation in the background.
     *
     * @param uri The location of the resource.
     * @param resultFile The file that the response will be written to.
     * @param uriMatcher The regexp to compare location of the resources with already downloading ones.
     * @param notificationTitle The title for downloading in notification.
     */
    constructor(uri: string, resultFile: File, uriMatcher?: RegExp, notificationTitle?: string);
    /**
     * Starts an asynchronous download operation.
     */
    startAsync(): BackgroundDownloadPromise;
    /**
     * Stops a download operation.
     */
    stop(): void;
}

interface BackgroundDownloadProgress {
    bytesReceived: number;
    totalBytesToReceive: number;
}

declare class BackgroundDownloadPromise {
    /**
     * Provides a mechanism for managing interactions with asynchronous APIs based on Promises.
     * See 'Asynchronous programming in JavaScript' for more details
     * http://msdn.microsoft.com/en-us/library/windows/apps/hh700330.aspx
     * http://msdn.microsoft.com/en-us/library/windows/apps/br211867.aspx
     * Note. Functionality is limited, support of .then and .cancel methods only, other methods are in progress.
     */
    constructor();
    static Deferral: typeof Deferral;
    _completeCallbacks: Array<() => void>;
    _errorCallbacks: Array<(error: any) => void>;
    _progressCallbacks: Array<(progress: BackgroundDownloadProgress) => void>;
    _chainedDefer: Deferral;
    _state: 'pending' | 'resolved' | 'rejected' | 'cancelled';
    result: any;
    then(onComplete?: () => void, onError?: (error: any) => void, onProgress?: (progress: BackgroundDownloadProgress) => void): BackgroundDownloadPromise;
    /**
     * Attempts to cancel the fulfillment of a promised value. If the promise hasn't already been fulfilled and
     * cancellation is supported, the promise enters the error state with a value of Error("Canceled").
     * http://msdn.microsoft.com/en-us/library/windows/apps/br211667.aspx
     * @param flag
     */
    cancel(flag?: boolean): void;
    executeCallback(callback: (() => void) | ((error: any) => void) | ((progress: BackgroundDownloadProgress) => void), args: any): void;
}

declare class Deferral {
    constructor();
    resolve(data: any): void;
    reject(error: any): void;
    notify(value: any): void;
    bind(promise: BackgroundDownloadPromise): void;
}
