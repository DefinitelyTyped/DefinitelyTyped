// Type definitions for Angular File Upload 1.6.7
// Project: https://github.com/danialfarid/angular-file-upload
// Definitions by: John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.angularFileUpload  {

    interface IUploadService {

        http<T>(config: ng.IRequestConfig): IUploadPromise<T>;
        upload<T>(config: IFileUploadConfig): IUploadPromise<T>;
		
    }

    interface IUploadPromise<T> extends IHttpPromise<T> {

        progress(callback: IUploadProgressCallback<T>): IUploadPromise<T>;
		error(callback: IUploadDoneCallback<T>): IUploadPromise<T>;
		success(callback: IUploadDoneCallback<T>): IUploadPromise<T>;
    }

    interface IFileUploadConfig extends ng.IRequestConfig {

        file: File;
        fileName?: string;
    }

	interface IUploadProgressCallback<T> extends angular.IHttpPromiseCallback<T> {
		(event: IUploadProgressEvent)
	}

	interface IUploadProgressEvent extends ProgressEvent {
		config?: IFileUploadConfig;
	}

	interface IUploadDoneCallback<T> {
		(data: any, status: number, response: any, headers: any, config: IFileUploadConfig)
	}
	
} 
