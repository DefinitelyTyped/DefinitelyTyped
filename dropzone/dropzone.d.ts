// Type definitions for Dropzone 3.7.1
// Project: http://www.dropzonejs.com/
// Definitions by: Natan Vivo <https://github.com/nvivo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface DropzoneFile extends File {
    previewElement: HTMLElement;
    previewTemplate: HTMLElement;
    previewsContainer: HTMLElement;
    status: string;
    accepted: boolean;
}

interface DropzoneOptions {
    url?: string;
    method?: string;
    withCredentials?: boolean;
    parallelUploads?: number;
    maxFilesize?: number;
    paramName?: string;
    uploadMultiple?: boolean;
    headers?: any;
    addRemoveLinks?: boolean;
    previewsContainer?: string;
    clickable?: boolean;
    createImageThumbnails?: boolean;
    maxThumbnailFilesize?: number;
    thumbnailWidth?: number;
    thumbnailHeight?: number;
    maxFiles?: number;
    resize?: (file?: any) => any;
    init?: () => void;
    acceptedFiles?: string;
    accept?: (file: DropzoneFile, doneCallback: (...args) => void) => void;
    autoProcessQueue?: boolean;
    previewTemplate?: string;
    forceFallback?: boolean;
    fallback?: () => void;

    // dictionary options 
    dictDefaultMessage?: string;
    dictFallbackMessage?: string;
    dictFallbackText?: string;
    dictInvalidFileType?: string;
    dictFileTooBig?: string;
    dictResponseError?: string;
    dictCancelUpload?: string;
    dictCancelUploadConfirmation?: string;
    dictRemoveFile?: string;
    dictRemoveFileConfirmation?: string;
    dictMaxFilesExceeded?: string;
}

declare class Dropzone {
    constructor(container: string, options?: DropzoneOptions);
    static autoDiscover: boolean;
    static options: any;
    static confirm: (question: string, accepted: () => void, rejected?: () => void) => void;

    files: DropzoneFile[];

    on(eventName, callback: (...args) => any);
    off(eventName): void;

    removeFile(file: DropzoneFile): void;
    removeAllFiles(): void;
    processQueue(): void;
    getAcceptedFiles(): DropzoneFile[];
    getRejectedFiles(): DropzoneFile[];
    getQueuedFiles(): DropzoneFile[];
    getUploadingFiles(): DropzoneFile[];
}

interface JQuery {
    dropzone(options: DropzoneOptions): Dropzone;
}
