import { FileUploaderFactory, FileUploader, FileItem } from 'angular-file-upload';
import * as angular from 'angular';

angular.module('app', ['angularFileUpload'])

    .controller('AppController', ['FileUploader', (
        FileUploader: FileUploaderFactory
    ) => {
        const uploader: FileUploader = new FileUploader({
            url: 'upload.php'
        });

        uploader.onAfterAddingFile = (fileItem: FileItem) => {
            console.log(fileItem);
        };

        // FILTERS

        // a sync filter
        const syncFilter = (item: File, options: {}) => {
            console.log('syncFilter');
            return true;
        };
        uploader.filters.push({
            name: 'syncFilter',
            fn: syncFilter
        });

        // an async filter
        const asyncFilter = (item: File, options: {}, deferred: angular.IDeferred<any>) => {
            console.log('asyncFilter');
            setTimeout(deferred.resolve, 1e3);
        };
        uploader.filters.push({
            name: 'asyncFilter',
            fn: asyncFilter
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = (item /*{File|FileLikeObject}*/, filter, options) => {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = (fileItem) => {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = (addedFileItems) => {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = (item) => {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = (fileItem, progress) => {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = (progress) => {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = (fileItem, response, status, headers) => {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = (fileItem, response, status, headers) => {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = (fileItem, response, status, headers) => {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = (fileItem, response, status, headers) => {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = () => {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);
    }]);
