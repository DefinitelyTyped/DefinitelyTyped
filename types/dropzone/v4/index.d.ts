/// <reference types="jquery"/>

import * as $ from "jquery";

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
        optWidth?: number | undefined;
        optHeight?: number | undefined;
    }

    export interface DropzoneFile extends File {
        previewElement: HTMLElement;
        previewTemplate: HTMLElement;
        previewsContainer: HTMLElement;
        status: string;
        accepted: boolean;
        xhr?: XMLHttpRequest | undefined;
    }

    export interface DropzoneOptions {
        url?: string | undefined;
        method?: string | undefined;
        withCredentials?: boolean | undefined;
        parallelUploads?: number | undefined;
        uploadMultiple?: boolean | undefined;
        maxFilesize?: number | undefined;
        paramName?: string | undefined;
        createImageThumbnails?: boolean | undefined;
        maxThumbnailFilesize?: number | undefined;
        thumbnailWidth?: number | undefined;
        thumbnailHeight?: number | undefined;
        filesizeBase?: number | undefined;
        maxFiles?: number | undefined;
        params?: {} | undefined;
        headers?: {} | undefined;
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

        accept?(file: DropzoneFile, done: (error?: string | Error) => void): void;
        init?(): void;
        forceFallback?: boolean | undefined;
        fallback?(): void;
        resize?(file: DropzoneFile): DropzoneResizeInfo;

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

        success?(file: DropzoneFile, response: Object | string): void;
        successmultiple?(files: DropzoneFile[], responseText: string): void;

        canceled?(file: DropzoneFile): void;
        canceledmultiple?(file: DropzoneFile[]): void;

        complete?(file: DropzoneFile): void;
        completemultiple?(file: DropzoneFile[]): void;

        maxfilesexceeded?(file: DropzoneFile): void;
        maxfilesreached?(files: DropzoneFile[]): void;
        queuecomplete?(): void;

        previewTemplate?: string | undefined;
    }
}

declare class Dropzone {
    constructor(container: string | HTMLElement, options?: Dropzone.DropzoneOptions);

    static autoDiscover: boolean;
    static options: any;
    static confirm: (question: string, accepted: () => void, rejected?: () => void) => void;

    static ADDED: string;
    static QUEUED: string;
    static ACCEPTED: string;
    static UPLOADING: string;
    static PROCESSING: string;
    static CANCELED: string;
    static ERROR: string;
    static SUCCESS: string;

    files: Dropzone.DropzoneFile[];

    enable(): void;

    disable(): void;

    destroy(): Dropzone;

    addFile(file: Dropzone.DropzoneFile): void;

    removeFile(file: Dropzone.DropzoneFile): void;

    removeAllFiles(cancelIfNecessary?: boolean): void;

    processQueue(): void;

    cancelUpload(file: Dropzone.DropzoneFile): void;

    processFiles(files: Dropzone.DropzoneFile[]): void;

    processFile(file: Dropzone.DropzoneFile): void;

    uploadFile(file: Dropzone.DropzoneFile): void;

    getAcceptedFiles(): Dropzone.DropzoneFile[];

    getRejectedFiles(): Dropzone.DropzoneFile[];

    getQueuedFiles(): Dropzone.DropzoneFile[];

    getUploadingFiles(): Dropzone.DropzoneFile[];

    accept(file: Dropzone.DropzoneFile, done: (error?: string | Error) => void): void;

    getActiveFiles(): Dropzone.DropzoneFile[];

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

    on(eventName: "success", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
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

    emit(eventName: "success", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "successmultiple", files: Dropzone.DropzoneFile[]): Dropzone;

    emit(eventName: "canceled", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "canceledmultiple", file: Dropzone.DropzoneFile[]): Dropzone;

    emit(eventName: "complete", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "completemultiple", file: Dropzone.DropzoneFile[]): Dropzone;

    emit(eventName: "maxfilesexceeded", file: Dropzone.DropzoneFile): Dropzone;
    emit(eventName: "maxfilesreached", files: Dropzone.DropzoneFile[]): Dropzone;
    emit(eventName: "queuecomplete"): Dropzone;
}

interface JQuery {
    dropzone(options: Dropzone.DropzoneOptions): Dropzone;
}

export = Dropzone;
export as namespace Dropzone;
