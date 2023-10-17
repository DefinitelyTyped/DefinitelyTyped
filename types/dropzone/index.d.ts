/// <reference types="jquery"/>

declare namespace Dropzone {
    export interface DropzoneResizeInfo {
        srcX?: number | undefined;
        srcY?: number | undefined;
        trgX?: number | undefined;
        trgY?: number | undefined;
        srcWidth?: number | undefined;
        srcHeight?: number | undefined;
        trgWidth?: number | undefined;
        trgHeight?: number | undefined;
    }

    export interface DropzoneFileUpload {
        progress: number;
        total: number;
        bytesSent: number;
        uuid: string;
        totalChunkCount?: number | undefined;
    }

    export interface DropzoneFile extends File {
        dataURL?: string | undefined;
        previewElement: HTMLElement;
        previewTemplate: HTMLElement;
        previewsContainer: HTMLElement;
        status: string;
        accepted: boolean;
        xhr?: XMLHttpRequest | undefined;
        upload?: DropzoneFileUpload | undefined;
    }

    export interface DropzoneMockFile {
        name: string;
        size: number;
        [index: string]: any;
    }

    export interface DropzoneDictFileSizeUnits {
        tb?: string | undefined;
        gb?: string | undefined;
        mb?: string | undefined;
        kb?: string | undefined;
        b?: string | undefined;
    }

    export interface DropzoneOptions {
        url?: ((files: ReadonlyArray<DropzoneFile>) => string) | string | undefined;
        method?: ((files: ReadonlyArray<DropzoneFile>) => string) | string | undefined;
        withCredentials?: boolean | undefined;
        timeout?: number | undefined;
        parallelUploads?: number | undefined;
        uploadMultiple?: boolean | undefined;
        chunking?: boolean | undefined;
        forceChunking?: boolean | undefined;
        chunkSize?: number | undefined;
        parallelChunkUploads?: boolean | undefined;
        retryChunks?: boolean | undefined;
        retryChunksLimit?: number | undefined;
        maxFilesize?: number | undefined;
        paramName?: string | undefined;
        createImageThumbnails?: boolean | undefined;
        maxThumbnailFilesize?: number | undefined;
        thumbnailWidth?: number | undefined;
        thumbnailHeight?: number | undefined;
        thumbnailMethod?: "contain" | "crop" | undefined;
        resizeWidth?: number | undefined;
        resizeHeight?: number | undefined;
        resizeMimeType?: string | undefined;
        resizeQuality?: number | undefined;
        resizeMethod?: "contain" | "crop" | undefined;
        filesizeBase?: number | undefined;
        maxFiles?: number | undefined;
        params?: {} | undefined;
        headers?: { [key: string]: string } | undefined;
        clickable?: boolean | string | HTMLElement | (string | HTMLElement)[] | undefined;
        ignoreHiddenFiles?: boolean | undefined;
        acceptedFiles?: string | undefined;
        renameFilename?(name: string): string;
        autoProcessQueue?: boolean | undefined;
        autoQueue?: boolean | undefined;
        addRemoveLinks?: boolean | undefined;
        previewsContainer?: boolean | string | HTMLElement | undefined;
        hiddenInputContainer?: HTMLElement | undefined;
        capture?: string | undefined;

        dictDefaultMessage?: string | undefined;
        dictFallbackMessage?: string | undefined;
        dictFallbackText?: string | undefined;
        dictFileTooBig?: string | undefined;
        dictInvalidFileType?: string | undefined;
        dictResponseError?: string | undefined;
        dictCancelUpload?: string | undefined;
        dictCancelUploadConfirmation?: string | undefined;
        dictRemoveFile?: string | undefined;
        dictRemoveFileConfirmation?: string | undefined;
        dictMaxFilesExceeded?: string | undefined;
        dictFileSizeUnits?: DropzoneDictFileSizeUnits | undefined;
        dictUploadCanceled?: string | undefined;

        accept?(file: DropzoneFile, done: (error?: string | Error) => void): void;
        chunksUploaded?(file: DropzoneFile, done: (error?: string | Error) => void): void;
        init?(this: Dropzone): void;
        forceFallback?: boolean | undefined;
        fallback?(): void;
        resize?(file: DropzoneFile, width?: number, height?: number, resizeMethod?: string): DropzoneResizeInfo;

        drop?(e: DragEvent): void;
        dragstart?(e: DragEvent): void;
        dragend?(e: DragEvent): void;
        dragenter?(e: DragEvent): void;
        dragover?(e: DragEvent): void;
        dragleave?(e: DragEvent): void;
        paste?(e: DragEvent): void;

        reset?(): void;

        addedfile?(file: DropzoneFile): void;
        addedfiles?(files: DropzoneFile[]): void;
        removedfile?(file: DropzoneFile): void;
        thumbnail?(file: DropzoneFile, dataUrl: string): void;

        error?(file: DropzoneFile, message: string | Error, xhr: XMLHttpRequest): void;
        errormultiple?(files: DropzoneFile[], message: string | Error, xhr: XMLHttpRequest): void;

        processing?(file: DropzoneFile): void;
        processingmultiple?(files: DropzoneFile[]): void;

        uploadprogress?(file: DropzoneFile, progress: number, bytesSent: number): void;
        totaluploadprogress?(totalProgress: number, totalBytes: number, totalBytesSent: number): void;

        sending?(file: DropzoneFile, xhr: XMLHttpRequest, formData: FormData): void;
        sendingmultiple?(files: DropzoneFile[], xhr: XMLHttpRequest, formData: FormData): void;

        success?(file: DropzoneFile): void;
        successmultiple?(files: DropzoneFile[], responseText: string): void;

        canceled?(file: DropzoneFile): void;
        canceledmultiple?(file: DropzoneFile[]): void;

        complete?(file: DropzoneFile): void;
        completemultiple?(file: DropzoneFile[]): void;

        maxfilesexceeded?(file: DropzoneFile): void;
        maxfilesreached?(files: DropzoneFile[]): void;
        queuecomplete?(): void;

        transformFile?(file: DropzoneFile, done: (file: string | Blob) => void): void;

        previewTemplate?: string | undefined;
    }

    export interface DropzoneListener {
        element: HTMLElement;
        events: {
            [key: string]: (e: Event) => any;
        };
    }
}

declare class Dropzone {
    constructor(container: string | HTMLElement, options?: Dropzone.DropzoneOptions);

    static autoDiscover: boolean;
    static blacklistedBrowsers: RegExp[];
    static confirm: (question: string, accepted: () => void, rejected?: () => void) => void;
    static createElement(string: string): HTMLElement;
    static dataURItoBlob(dataURI: string): Blob;
    static discover(): Dropzone[];
    static elementInside(element: HTMLElement, container: HTMLElement): boolean;
    static forElement(element: string | HTMLElement): Dropzone;
    static getElement(element: string | HTMLElement, name?: string): HTMLElement;
    static getElements(elements: string | HTMLElement | Array<string | HTMLElement>): HTMLElement[];
    static instances: Dropzone[];
    static isBrowserSupported(): boolean;
    static isValidFile(file: File, acceptedFiles: string): boolean;
    static options: { [key: string]: Dropzone.DropzoneOptions | false };
    static optionsForElement(element: HTMLElement): Dropzone.DropzoneOptions | undefined;
    static version: string;

    static ADDED: string;
    static QUEUED: string;
    static ACCEPTED: string;
    static UPLOADING: string;
    static PROCESSING: string;
    static CANCELED: string;
    static ERROR: string;
    static SUCCESS: string;

    element: HTMLElement;
    files: Dropzone.DropzoneFile[];
    hiddenFileInput?: HTMLInputElement | undefined;
    listeners: Dropzone.DropzoneListener[];
    defaultOptions: Dropzone.DropzoneOptions;
    options: Dropzone.DropzoneOptions;
    previewsContainer: HTMLElement;
    version: string;

    enable(): void;

    disable(): void;

    destroy(): Dropzone;

    addFile(file: Dropzone.DropzoneFile): void;

    removeFile(file: Dropzone.DropzoneFile): void;

    removeAllFiles(cancelIfNecessary?: boolean): void;

    resizeImage(
        file: Dropzone.DropzoneFile,
        width?: number,
        height?: number,
        resizeMethod?: string,
        callback?: (...args: any[]) => void,
    ): void;

    processQueue(): void;

    cancelUpload(file: Dropzone.DropzoneFile): void;

    createThumbnail(
        file: Dropzone.DropzoneFile,
        width?: number,
        height?: number,
        resizeMethod?: string,
        fixOrientation?: boolean,
        callback?: (...args: any[]) => void,
    ): any;

    displayExistingFile(
        mockFile: Dropzone.DropzoneMockFile,
        imageUrl: string,
        callback?: () => void,
        crossOrigin?: "anonymous" | "use-credentials",
        resizeThumbnail?: boolean,
    ): any;

    createThumbnailFromUrl(
        file: Dropzone.DropzoneFile,
        width?: number,
        height?: number,
        resizeMethod?: string,
        fixOrientation?: boolean,
        callback?: (...args: any[]) => void,
        crossOrigin?: string,
    ): any;

    processFiles(files: Dropzone.DropzoneFile[]): void;

    processFile(file: Dropzone.DropzoneFile): void;

    uploadFile(file: Dropzone.DropzoneFile): void;

    uploadFiles(files: Dropzone.DropzoneFile[]): void;

    getAcceptedFiles(): Dropzone.DropzoneFile[];

    getActiveFiles(): Dropzone.DropzoneFile[];

    getAddedFiles(): Dropzone.DropzoneFile[];

    getRejectedFiles(): Dropzone.DropzoneFile[];

    getQueuedFiles(): Dropzone.DropzoneFile[];

    getUploadingFiles(): Dropzone.DropzoneFile[];

    accept(file: Dropzone.DropzoneFile, done: (error?: string | Error) => void): void;

    getFilesWithStatus(status: string): Dropzone.DropzoneFile[];

    enqueueFile(file: Dropzone.DropzoneFile): void;

    enqueueFiles(file: Dropzone.DropzoneFile[]): void;

    createThumbnail(file: Dropzone.DropzoneFile, callback?: (...args: any[]) => void): any;

    createThumbnailFromUrl(file: Dropzone.DropzoneFile, url: string, callback?: (...args: any[]) => void): any;

    on(eventName: string, callback: (...args: any[]) => void): Dropzone;

    off(): Dropzone;
    off(eventName: string, callback?: (...args: any[]) => void): Dropzone;

    emit(eventName: string, ...args: any[]): Dropzone;

    on(eventName: "drop", callback: (e: DragEvent) => any): Dropzone;
    on(eventName: "dragstart", callback: (e: DragEvent) => any): Dropzone;
    on(eventName: "dragend", callback: (e: DragEvent) => any): Dropzone;
    on(eventName: "dragenter", callback: (e: DragEvent) => any): Dropzone;
    on(eventName: "dragover", callback: (e: DragEvent) => any): Dropzone;
    on(eventName: "dragleave", callback: (e: DragEvent) => any): Dropzone;
    on(eventName: "paste", callback: (e: DragEvent) => any): Dropzone;

    on(eventName: "reset"): Dropzone;

    on(eventName: "addedfile", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
    on(eventName: "addedfiles", callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;
    on(eventName: "removedfile", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
    on(eventName: "thumbnail", callback: (file: Dropzone.DropzoneFile, dataUrl: string) => any): Dropzone;

    on(eventName: "error", callback: (file: Dropzone.DropzoneFile, message: string | Error) => any): Dropzone;
    on(
        eventName: "errormultiple",
        callback: (files: Dropzone.DropzoneFile[], message: string | Error) => any,
    ): Dropzone;

    on(eventName: "processing", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
    on(eventName: "processingmultiple", callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;

    on(
        eventName: "uploadprogress",
        callback: (file: Dropzone.DropzoneFile, progress: number, bytesSent: number) => any,
    ): Dropzone;
    on(
        eventName: "totaluploadprogress",
        callback: (totalProgress: number, totalBytes: number, totalBytesSent: number) => any,
    ): Dropzone;

    on(
        eventName: "sending",
        callback: (file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, formData: FormData) => any,
    ): Dropzone;
    on(
        eventName: "sendingmultiple",
        callback: (files: Dropzone.DropzoneFile[], xhr: XMLHttpRequest, formData: FormData) => any,
    ): Dropzone;

    on(eventName: "success", callback: (file: Dropzone.DropzoneFile, response: Object | string) => any): Dropzone;
    on(eventName: "successmultiple", callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;

    on(eventName: "canceled", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
    on(eventName: "canceledmultiple", callback: (file: Dropzone.DropzoneFile[]) => any): Dropzone;

    on(eventName: "complete", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
    on(eventName: "completemultiple", callback: (file: Dropzone.DropzoneFile[]) => any): Dropzone;

    on(eventName: "maxfilesexceeded", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
    on(eventName: "maxfilesreached", callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;
    on(eventName: "queuecomplete"): Dropzone;

    emit(eventName: "drop", e: DragEvent): Dropzone;
    emit(eventName: "dragstart", e: DragEvent): Dropzone;
    emit(eventName: "dragend", e: DragEvent): Dropzone;
    emit(eventName: "dragenter", e: DragEvent): Dropzone;
    emit(eventName: "dragover", e: DragEvent): Dropzone;
    emit(eventName: "dragleave", e: DragEvent): Dropzone;
    emit(eventName: "paste", e: DragEvent): Dropzone;

    emit(eventName: "reset"): Dropzone;

    emit(eventName: "addedfile", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "addedfiles", files: Dropzone.DropzoneFile[]): Dropzone;
    emit(eventName: "removedfile", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "thumbnail", file: Dropzone.DropzoneFile, dataUrl: string): Dropzone;

    emit(eventName: "error", file: Dropzone.DropzoneFile, message: string | Error): Dropzone;
    emit(eventName: "errormultiple", files: Dropzone.DropzoneFile[], message: string | Error): Dropzone;

    emit(eventName: "processing", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "processingmultiple", files: Dropzone.DropzoneFile[]): Dropzone;

    emit(eventName: "uploadprogress", file: Dropzone.DropzoneFile, progress: number, bytesSent: number): Dropzone;
    emit(eventName: "totaluploadprogress", totalProgress: number, totalBytes: number, totalBytesSent: number): Dropzone;

    emit(eventName: "sending", file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, formData: FormData): Dropzone;
    emit(
        eventName: "sendingmultiple",
        files: Dropzone.DropzoneFile[],
        xhr: XMLHttpRequest,
        formData: FormData,
    ): Dropzone;

    emit(eventName: "success", file: Dropzone.DropzoneFile, response: object | string): Dropzone;
    emit(eventName: "successmultiple", files: Dropzone.DropzoneFile[]): Dropzone;

    emit(eventName: "canceled", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "canceledmultiple", file: Dropzone.DropzoneFile[]): Dropzone;

    emit(eventName: "complete", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "completemultiple", file: Dropzone.DropzoneFile[]): Dropzone;

    emit(eventName: "maxfilesexceeded", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "maxfilesreached", files: Dropzone.DropzoneFile[]): Dropzone;
    emit(eventName: "queuecomplete"): Dropzone;
}

declare global {
    interface JQuery {
        dropzone(options: Dropzone.DropzoneOptions): Dropzone;
    }

    interface HTMLElement {
        dropzone: Dropzone;
    }
}

export = Dropzone;
export as namespace Dropzone;
