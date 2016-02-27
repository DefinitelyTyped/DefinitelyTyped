// Type definitions for ngCordova file-transfer plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Phil McCloghry-Laing <https://github.com/pmccloghrylaing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../cordova/plugins/FileTransfer.d.ts" />
/// <reference path="../cordova/plugins/FileSystem.d.ts" />

declare module ngCordova {
    export interface IFileTransferService {
        download(url: string, filePath: string, options?: IFileDownloadOptions, trustAllHosts?: boolean): IFileTransferPromise<FileEntry>;
        upload(url: string, filePath: string, options?: IFileUploadOptions, trustAllHosts?: boolean): IFileTransferPromise<FileUploadResult>;
    }

    export interface IFileTransferPromise<T> extends ng.IPromise<T> {
        then<TResult>(successCallback: (promiseValue: T) => ng.IPromise<TResult> | TResult, errorCallback?: (error: FileTransferError) => ng.IPromise<TResult> | TResult, notifyCallback?: (state: any) => any): ng.IPromise<TResult>;
        catch<TResult>(onRejected: (error: FileTransferError) => ng.IPromise<TResult> | TResult): ng.IPromise<TResult>;
    }

    export interface IFileDownloadOptions extends FileDownloadOptions {
        encodeURI?: boolean;
        timeout?: number;
    }

    export interface IFileUploadOptions extends FileUploadOptions {
        encodeURI?: boolean;
         timeout?: number;
    }
}
