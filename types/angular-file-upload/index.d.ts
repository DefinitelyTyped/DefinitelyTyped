// Type definitions for angular-file-upload 2.5.0
// Project: https://github.com/nervgh/angular-file-upload
// Definitions by: Cyril Gandon <https://github.com/cyrilgandon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as angular from 'angular';

export as namespace fileUploaderLib;

export = FileUploader;

declare function MyFunction(): FileUploader.FileUploader;

declare namespace FileUploader {

    export interface FileUploaderFactory {
        new(options?: {}): FileUploader;
    }
    export interface FileUploader {
        // **Properties**

        /**
         * Path on the server to upload files
         */
        url: string;
        /**
         * Name of the field which will contain the file, default is file
         */
        alias: string;
        /**
         * Items to be uploaded
         */
        queue: FileItem[];
        /**
         * Upload queue progress percentage. Read only.
         */
        progress: number;
        /**
         * Headers to be sent along with the files. HTML5 browsers only.
         */
        headers: {};
        /**
         * Data to be sent along with the files
         */
        formData: any[];
        /**
         * Filters to be applied to the files before adding them to the queue. If the filter returns true the file will be added to the queue
         */
        filters: IUploaderFilter[];
        /**
         * Automatically upload files after adding them to the queue
         */
        autoUpload: boolean;
        /**
         * It's a request method. By default POST. HTML5 browsers only.
         */
        method: string;
        /**
         * Remove files from the queue after uploading
         */
        removeAfterUpload: boolean;
        /**
         * true if uploader is html5-uploader. Read only.
         */
        isHTML5: boolean;
        /**
         * true if an upload is in progress. Read only.
         */
        isUploading: boolean;
        /**
         * maximum count of files
         */
        queueLimit: number;
        /**
         * enable CORS. HTML5 browsers only.
         */
        withCredentials: boolean;

        // **Methods**

        /**
         * Add items to the queue
         */
        addToQueue(files: FileList | File | HTMLInputElement, options: {}, filters: string): void;
        /**
         * Remove an item from the queue, where value is {FileItem} or index of item.
         */
        removeFromQueue(value: FileItem | number): void;
        /**
         * Removes all elements from the queue.
         */
        clearQueue(): void;
        /**
         * Uploads an item, where value is {FileItem} or index of item.
         */
        uploadItem(value: FileItem | number): void;
        /**
         * Cancels uploading of item, where value is {FileItem} or index of item.
         */
        cancelItem(value: FileItem | number): void;
        /**
         * Upload all pending items on the queue.
         */
        uploadAll(): void;
        /**
         * Cancels all current uploads.
         */
        cancelAll(): void;
        /**
         * Destroys a uploader.
         */
        destroy(): void;
        /**
         * Returns true if value is {File}.
         */
        isFile(value: any): boolean;
        /**
         * Returns true if value is {FileLikeObject}.
         */
        isFileLikeObject(value: any): boolean;
        /**
         * Returns the index of the {FileItem} queue element.
         */
        getIndexOfItem(fileItem: FileItem): number;
        /**
         * Return items are ready to upload.
         */
        getReadyItems(): FileItem[];
        /**
         * Return an array of all pending items on the queue
         */
        getNotUploadedItems(): FileItem[];

        // **Callbacks**

        /**
         * Fires after adding all the dragged or selected files to the queue.
         */
        onAfterAddingAll(addedItems: FileItem[]): void;
        /**
         * When adding a file failed
         */
        onWhenAddingFileFailed(item: FileItem, filter: any, options: any): void;
        /**
         * Fires after adding a single file to the queue.
         */
        onAfterAddingFile(item: FileItem): void;
        /**
         * Fires before uploading an item.
         */
        onBeforeUploadItem(item: FileItem): void;
        /**
         * On file upload progress.
         */
        onProgressItem(item: FileItem, progress: number): void;
        /**
         * On file successfully uploaded
         */
        onSuccessItem(item: FileItem, response: Response, status: number, headers: Headers): void;
        /**
         * On upload error
         */
        onErrorItem(item: FileItem, response: Response, status: number, headers: Headers): void;
        /**
         * On cancel uploading
         */
        onCancelItem(item: FileItem, response: Response, status: number, headers: Headers): void;
        /**
         * On file upload complete (independently of the sucess of the operation)
         */
        onCompleteItem(item: FileItem, response: Response, status: number, headers: Headers): void;
        /**
         * On upload queue progress
         */
        onProgressAll(progress: number): void;
        /**
         * On all loaded when uploading an entire queue, or on file loaded when uploading a single independent file
         */
        onCompleteAll(): void;
    }
    export interface FileLikeObject {
        lastModifiedDate: Date;
        name: string;

        /**
         * Size of object in octet
         */
        size: number;
        type: string;
    }
    export interface FileItem {

        // **Properties**
        file: FileLikeObject;
        /**
         * Path on the server in which this file will be uploaded
         */
        url: string;
        /**
         * Name of the field which will contain the file, default is file
         */
        alias: string;
        /**
         * Headers to be sent along with this file. HTML5 browsers only.
         */
        headers: {};
        /**
         * Data to be sent along with this file
         */
        formData: any[];
        /**
         * It's a request method. By default POST. HTML5 browsers only.
         */
        method: string;
        /**
         * enable CORS. HTML5 browsers only.
         */
        withCredentials: boolean;
        /**
         * Remove this file from the queue after uploading
         */
        removeAfterUpload: boolean;
        /**
         * A sequence number upload. Read only.
         */
        index: number;
        /**
         * File upload progress percentage. Read only.
         */
        progress: number;
        /**
         * File is ready to upload. Read only.
         */
        isReady: boolean;
        /**
         * true if the file is being uploaded. Read only.
         */
        isUploading: boolean;
        /**
         * true if the file was uploaded. Read only.
         */
        isUploaded: boolean;
        /**
         * true if the file was uploaded successfully. Read only.
         */
        isSuccess: boolean;
        /**
         * true if uploading was canceled. Read only.
         */
        isCancel: boolean;
        /**
         * true if occurred error while file uploading. Read only.
         */
        isError: boolean;
        /**
         * Reference to the parent Uploader object for this file. Read only.
         */
        uploader: FileUploader;

        // **Methods**

        /**
         * Cancels uploading of this file
         */
        cancel(): void;

        /**
         * Remove this file from the queue
         */
        remove(): void;

        /**
         * Upload this file
         */
        upload(): void;

        // **Callbacks**

        /**
         *  Fires before uploading an item.
         */
        onBeforeUpload(): void;
        /**
         * On file upload progress.
         */
        onProgress(progress: number): void;
        /**
         * On file successfully uploaded
         */
        onSuccess(response: Response, status: number, headers: Headers): void;
        /**
         * On upload error
         */
        onError(response: Response, status: number, headers: Headers): void;
        /**
         * On cancel uploading
         */
        onCancel(response: Response, status: number, headers: Headers): void;
        /**
         * On file upload complete (independently of the sucess of the operation)
         */
        onComplete(response: Response, status: number, headers: Headers): void;

    }

    type SyncFilter = (item: File | FileLikeObject, options?: {}) => boolean;
    type AsyncFilter = (item: File | FileLikeObject, options?: {}, deferred?: angular.IDeferred<any>) => void;

    export interface IUploaderFilter {
        name: string;
        fn: SyncFilter | AsyncFilter;
    }
}
