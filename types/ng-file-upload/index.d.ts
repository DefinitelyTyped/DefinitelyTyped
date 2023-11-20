/// <reference types="angular" />
import * as angular from "angular";

declare var angularFileUploadDefaultExport: string;
export = angularFileUploadDefaultExport;

declare module "angular" {
    export namespace angularFileUpload {
        interface ImageDimensions {
            height: number;
            width: number;
        }

        interface FileUploadOptions {
            /**
             * Standard HTML accept attr, browser specific select popup window
             */
            ngfAccept?: string | undefined;
            /**
             * Default true, allow dropping files only for Chrome webkit browser
             */
            ngfAllowDir?: boolean | undefined;
            /**
             * Default false, enable firefox image paste by making element contenteditable
             */
            ngfEnableFirefoxPaste?: boolean | undefined;
            /**
             * Default false, hides element if file drag&drop is not
             */
            ngfHideOnDropNotAvailable?: boolean | undefined;
            /**
             * Validate error name: minDuration
             */
            ngfMinDuration?: number | string | undefined;
            /**
             * Validate error name: minSize
             */
            ngfMinSize?: number | string | undefined;
            /**
             * Validate error name: minRatio
             */
            ngfMinRatio?: number | string | undefined;
            /**
             * Validate error name: maxDuration
             */
            ngfMaxDuration?: number | string | undefined;
            /**
             * Maximum number of files allowed to be selected or dropped, validate error name: maxFiles
             */
            ngfMaxFiles?: number | undefined;
            /**
             * Validate error name: maxSize
             */
            ngfMaxSize?: number | string | undefined;
            /**
             * Validate error name: maxTotalSize
             */
            ngfMaxTotalSize?: number | string | undefined;
            /**
             * Allows selecting multiple files
             */
            ngfMultiple?: boolean | undefined;
            /**
             * List of comma separated valid aspect ratio of images in float or 2:3 format
             */
            ngfRatio?: string | undefined;
            /**
             * Default false, whether to propagate drag/drop events.
             */
            ngfStopPropagation?: boolean | undefined;
            /**
             * Default false, if true file.$error will be set if the dimension or duration
             * values for validations cannot be calculated for example image load error or unsupported video by the browser.
             * By default it would assume the file is valid if the duration or dimension cannot be calculated by the browser.
             */
            ngfValidateForce?: boolean | undefined;
        }

        interface ResizeIfFunction {
            (width: number, height: number): boolean;
        }

        interface FileResizeOptions {
            centerCrop?: boolean | undefined;
            height?: number | undefined;
            pattern?: string | undefined;
            ratio?: number | string | undefined;
            resizeIf?: ResizeIfFunction | undefined;
            restoreExif?: boolean | undefined;
            quality?: number | undefined;
            type?: string | undefined;
            width?: number | undefined;
        }

        interface IUploadService {
            /**
             * Convert a single file or array of files to a single or array of
             * base64 data url representation of the file(s).
             * Could be used to send file in base64 format inside json to the databases
             *
             * @param  {Array<File>}
             * @return {angular.IPromise}
             */
            base64DataUrl(files: File | Array<File>): angular.IPromise<Array<string> | string>;
            /**
             * Convert the file to blob url object or base64 data url based on boolean disallowObjectUrl value
             *
             * @param {File} file
             * @param  {boolean} [disallowObjectUrl]
             * @return {angular.IPromise<string>}
             */
            dataUrl(file: File, disallowObjectUrl?: boolean): angular.IPromise<Blob | string>;
            /**
             * Alternative way of uploading, send the file binary with the file's content-type.
             * Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
             * This is equivalent to angular $http() but allow you to listen to the progress event for HTML5 browsers.
             *
             * @param {IRequestConfig} config
             * @return {angular.IPromise<ImageDimensions>}
             */
            http<T>(config: IRequestConfig): IUploadPromise<T>;
            /**
             * Get image file dimensions
             *
             * @param  {File} file
             * @return {angular.IPromise<ImageDimensions>}
             */
            imageDimensions(file: File): angular.IPromise<ImageDimensions>;
            /**
             * Returns boolean showing if image resize is supported by this browser
             *
             * @return {boolean}
             */
            isResizeSupported(): boolean;
            /**
             * Returns boolean showing if resumable upload is supported by this browser
             *
             * @return {boolean}
             */
            isResumeSupported(): boolean;
            /**
             * Returns true if there is an upload in progress. Can be used to prompt user before closing browser tab
             *
             * @return {boolean}
             */
            isUploadInProgress(): boolean;
            /**
             * Converts the value to json to send data as json string. Same as angular.toJson(obj)
             *
             * @param  {Object} obj
             * @return {string}
             */
            json(obj: Object): string;
            /**
             * Converts the object to a Blob object with application/json content type
             * for jsob byte streaming support
             *
             * @param  {Object} obj
             * @return {Blob}
             */
            jsonBlob(obj: Object): Blob;
            /**
             * Returns a file which will be uploaded with the newName instead of original file name
             *
             * @param  {File} file
             * @param  {string} newName
             * @return {File}
             */
            rename(file: File, newName: string): Blob;
            /**
             * Resizes an image. Returns a promise
             *
             * @param  {File} file
             * @param  {number} [width]
             * @param  {number} [height]
             * @param  {number} [quality]
             * @param  {string} [type]
             * @param  {number} [ratio]
             * @param  {boolean} [centerCrop]
             * @return {angular.IPromise<string>}
             */
            resize(file: File, options: FileResizeOptions): angular.IPromise<File>;
            /**
             * Set the default values for ngf-select and ngf-drop directives
             *
             * @param {FileUploadOptions} defaultFileUploadOptions
             */
            setDefaults(defaultFileUploadOptions: FileUploadOptions): void;
            /**
             * Upload a file. Returns a Promise,
             *
             * @param {IFileUploadConfigFile} config
             * @return {IUploadPromise<T>}
             */
            upload<T>(config: IFileUploadConfigFile): IUploadPromise<T>;
        }

        interface IUploadPromise<T> extends IHttpPromise<T> {
            /**
             * Cancel/abort the upload in progress.
             *
             * @return {IUploadPromise<T>}
             */
            abort(): IUploadPromise<T>;
            progress(callback: (event: IFileProgressEvent) => void): IUploadPromise<T>;
            /**
             * Access or attach event listeners to the underlying XMLHttpRequest
             *
             * @param  {IHttpPromiseCallback<T>}
             * @return {IUploadPromise<T>}
             */
            xhr(callback: IHttpPromiseCallback<T>): IUploadPromise<T>;
        }

        interface IFileUploadConfigFile extends IRequestConfig {
            /**
             * Specify the file and optional data to be sent to the server.
             * Each field including nested objects will be sent as a form data multipart.
             * Samples: {pic: file, username: username}
             * {files: files, otherInfo: {id: id, person: person,...}} multiple files (html5)
             * {profiles: {[{pic: file1, username: username1}, {pic: file2, username: username2}]} nested array multiple files (html5)
             * {file: file, info: Upload.json({id: id, name: name, ...})} send fields as json string
             * {file: file, info: Upload.jsonBlob({id: id, name: name, ...})} send fields as json blob, 'application/json' content_type
             * {picFile: Upload.rename(file, 'profile.jpg'), title: title} send file with picFile key and profile.jpg file name
             */
            data: any;
            /**
             * upload.php script, node.js route, or servlet url
             */
            url: string;
            /**
             * Add which HTTP method to use: 'POST' or 'PUT' (html5)
             */
            method: string;
            /**
             * This is to accommodate server implementations expecting nested data object keys in .key or [key] format.
             * Example: data: {rec: {name: 'N', pic: file}} sent as: rec[name] -> N, rec[pic] -> file
             * data: {rec: {name: 'N', pic: file}, objectKey: '.k'} sent as: rec.name -> N, rec.pic -> file
             */
            objectKey?: string | undefined;
            /**
             * This is to accommodate server implementations expecting array data object keys in '[i]' or '[]' or
             * ''(multiple entries with same key) format.
             * Example: data: {rec: [file[0], file[1], ...]} sent as: rec[0] -> file[0], rec[1] -> file[1],...
             * data: {rec: {rec: [f[0], f[1], ...], arrayKey: '[]'} sent as: rec[] -> f[0], rec[] -> f[1],...
             */
            arrayKey?: string | undefined;
            /**
             * Uploaded file size so far on the server
             */
            resumeSizeUrl?: string | undefined;
            /**
             * Reads the uploaded file size from resumeSizeUrl GET response
             */
            resumeSizeResponseReader?: Function | undefined;
            /**
             * Function that returns a prommise which will be resolved to the upload file size on the server.
             */
            resumeSize?: Function | undefined;
            /**
             * Upload in chunks of specified size
             */
            resumeChunkSize?: number | string | undefined;
            /**
             * Default false, experimental as hotfix for potential library conflicts with other plugins
             */
            disableProgress?: boolean | undefined;
        }

        interface IFileProgressEvent extends ProgressEvent {
            config: IFileUploadConfigFile;
        }
    }
}
