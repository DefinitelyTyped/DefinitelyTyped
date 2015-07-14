// Type definitions for Angular File Upload 4.2.1
// Project: https://github.com/danialfarid/ng-file-upload
// Definitions by: John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.angularFileUpload  {

    interface IUploadService {

        http<T>(config: IRequestConfig): IUploadPromise<T>;
        upload<T>(config: IFileUploadConfig): IUploadPromise<T>;
    }

    interface IUploadPromise<T> extends IHttpPromise<T> {
        abort(): IUploadPromise<T>;
        progress(callback: IHttpPromiseCallback<T>): IUploadPromise<T>;
        xhr(callback: IHttpPromiseCallback<T>): IUploadPromise<T>;
    }

    interface IFileUploadConfig extends IRequestConfig {

        file: File;
        fileName?: string;
    }

    interface IFileProgressEvent extends ProgressEvent {

        config: IFileUploadConfig;
    }
} 