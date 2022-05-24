// Type definitions for resumable-chunk-upload
// Project: https://github.com/heryTz/resumable-chunk-upload
// Definitions by: Hery Nirintsoa <https://github.com/herytz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface UploadProgress {
    /** Percentage */
    percent: number;

    /** File size already loaded in byte */
    loaded: number;

    /** Remaining time in second */
    remaining: number;
}

export default class Uploader {
    /**
     * File to upload (required).
     */
    setFile(file: File): this;

    /**
     * Define the url used to retrieve the number of the last uploaded chunk (required).
     */
    setUploadStatusUrl(url: string): this;

    /**
     * Define the url used to upload alls chunks one by one until termination (required).
     */
    setUploadUrl(url: string): this;

    /**
     * Starts the upload and gives the last xhr object of the request on completion.
     *
     * This makes it possible to obtain the data returned by the back at the end of the upload
     * to carry out other processing in case.
     */
    upload(): Promise<XMLHttpRequest>;

    /**
     * Change file ID. By default, this value will be the file size + the date of the
     * last modification.
     */
    setFileId(id: string|number): this;

    /**
     * Change chunk size. By default, this value will be 10 Mo.
     *
     * Note: Do not try to put the size of the pieces too small in production because it may
     * slow down the upload.
     */
    setChunkSize(size: number): this;

    /**
     * Add specific headers like {"Authorization": "Bearer xx-token"}.
     */
    setHeaders(headers: Record<string, string|number>): this;

    /**
     * Add a tiemout for each request.
     */
    setRequestTimeout(time: number): this;

    /**
     * Listen progress event. It can have a throttle time in the second parameter.
     * The defaut throttle time is 3000 ms.
     */
    onProgress(
        callback: (info: UploadProgress) => void,
        throttleTime?: number
    ): this;

    /**
     * Abort upload request.
     */
    abort(): void;
}

export type UploadErrorMessage =
'GET_LAST_CHUNK_UPLOADED' |
'UPLOAD_FILE_ERROR' |
'UPLOAD_ABORTED' |
'REQUEST_TIMEOUT' |
'NO_FILE' |
'NO_FILE_ID' |
'NO_UPLOAD_STATUS_URL' |
'NO_UPLOAD_URL';

export class UploadError<T extends unknown> {
    /**
     * One of these static attributes.
     */
    message: UploadErrorMessage;

    /**
     * See below the details.
     */
    data: T;
}
