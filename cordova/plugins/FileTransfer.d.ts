// Type definitions for Apache Cordova FileTransfer plugin.
// Project: https://github.com/apache/cordova-plugin-file-transfer
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

/// <reference path="FileSystem.d.ts"/>

/**
 * The FileTransfer object provides a way to upload files using an HTTP multi-part POST request,
 * and to download files as well.
 */
interface FileTransfer {
    /** Called with a ProgressEvent whenever a new chunk of data is transferred.  */
    onprogress: (event: ProgressEvent) => void;
    /**
     * Sends a file to a server.
     * @param fileURL           Filesystem URL representing the file on the device. For backwards compatibility,
     *                                this can also be the full path of the file on the device.
     * @param server            URL of the server to receive the file, as encoded by encodeURI().
     * @param successCallback   A callback that is passed a FileUploadResult object.
     * @param errorCallback     A callback that executes if an error occurs retrieving the FileUploadResult. 
     *                               Invoked with a FileTransferError object.
     * @param options           Optional parameters.
     * @param trustAllHosts     Optional parameter, defaults to false. If set to true, it accepts all security certificates.
     *                               This is useful since Android rejects self-signed security certificates.
     *                               Not recommended for production use. Supported on Android and iOS.
     */
    upload(
        fileURL: string,
        server: string,
        successCallback: (result: FileUploadResult) => void,
        errorCallback: (error: FileTransferError) => void,
        options?: FileUploadOptions,
        trustAllHosts?: boolean): void;
    /**
     * downloads a file from server.
     * @param source            URL of the server to download the file, as encoded by encodeURI().
     * @param target            Filesystem url representing the file on the device. For backwards compatibility,
     *                               this can also be the full path of the file on the device.
     * @param successCallback   A callback that is passed a FileEntry object. (Function)
     * @param errorCallback     A callback that executes if an error occurs when retrieving the fileEntry.
     *                               Invoked with a FileTransferError object.
     * @param options           Optional parameters.
     * @param trustAllHosts     Optional parameter, defaults to false. If set to true, it accepts all security certificates.
     *                               This is useful since Android rejects self-signed security certificates.
     *                               Not recommended for production use. Supported on Android and iOS.
     */
    download(
        source: string,
        target: string,
        successCallback: (fileEntry: FileEntry) => void,
        errorCallback: (error: FileTransferError) => void,
        options?: FileDownloadOptions,
        trustAllHosts?: boolean): void;
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError object
     * which has an error code of FileTransferError.ABORT_ERR.
     */
    abort(): void;
}

declare var FileTransfer: {
    new (): FileTransfer;
};

/** A FileUploadResult object is passed to the success callback of the FileTransfer object's upload() method. */
interface FileUploadResult {
    /** The number of bytes sent to the server as part of the upload. */
    bytesSent: number;
    /** The HTTP response code returned by the server. */
    responseCode: number;
    /** The HTTP response returned by the server. */
    response: string;
    /** The HTTP response headers by the server. Currently supported on iOS only.*/
    headers: any;
}

/** Optional parameters for upload method. */
interface FileUploadOptions {
    /** The name of the form element. Defaults to file. */
    fileKey?: string;
    /** The file name to use when saving the file on the server. Defaults to image.jpg. */
    fileName?: string;
    /** The HTTP method to use - either `PUT` or `POST`. Defaults to `POST`. */
    httpMethod?: string;
    /** The mime type of the data to upload. Defaults to image/jpeg. */
    mimeType?: string;
    /** A set of optional key/value pairs to pass in the HTTP request. */
    params?: Object;
    /** Whether to upload the data in chunked streaming mode. Defaults to true. */
    chunkedMode?: boolean;
    /** A map of header name/header values. Use an array to specify more than one value. */
    headers?: Object[];
}

/** Optional parameters for download method. */
interface FileDownloadOptions {
    /** A map of header name/header values. Use an array to specify more than one value. */
    headers?: Object[];
}

/** A FileTransferError object is passed to an error callback when an error occurs. */
interface FileTransferError {
    /**
     * One of the predefined error codes listed below.
     *     FileTransferError.FILE_NOT_FOUND_ERR
     *     FileTransferError.INVALID_URL_ERR
     *     FileTransferError.CONNECTION_ERR
     *     FileTransferError.ABORT_ERR
     *     FileTransferError.NOT_MODIFIED_ERR
     */
    code: number;
    /** URL to the source. */
    source: string;
    /** URL to the target. */
    target: string;
    /** HTTP status code. This attribute is only available when a response code is received from the HTTP connection. */
    http_status: number;
    /* Response body. This attribute is only available when a response is received from the HTTP connection. */
    body: string;
    /* Exception that is thrown by native code */
    exception: any;
}

declare var FileTransferError: {
    /** Constructor for FileTransferError object */
    new (code?: number, source?: string, target?: string, status?: number, body?: any, exception?: any): FileTransferError;
    FILE_NOT_FOUND_ERR: number;
    INVALID_URL_ERR: number;
    CONNECTION_ERR: number;
    ABORT_ERR: number;
    NOT_MODIFIED_ERR: number;
}