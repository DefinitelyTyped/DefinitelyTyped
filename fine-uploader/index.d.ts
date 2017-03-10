// Type definitions for FineUploader for 5.11
// Project: http://fineuploader.com/
// Definitions by: Bradford Wagner <https://github.com/bradfordwagner/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace qq {
    interface BlobsOptions {
        defaultName?: string;
    }

    interface CameraOptions {
        button?: HTMLElement;
        ios?: boolean;
    }

    interface ChunkingOptions {
        concurrent?: ChunkingConcurrentOptions;
        enabled?: boolean;          // default false
        mandatory?: boolean;        // default false
        partSize?: number;          // default 2,000,000
        paramNames?: ChunkingParamNames;
        success?: ChunkingSuccess;
    }

    interface ChunkingConcurrentOptions {
        enabled?: boolean;          // default false
    }

    interface ChunkingParamNames {
        chunkSize?: string;         // default: qqchunksize
        partByteOffset?: string;    // default: qqpartbyteoffset
        partIndex?: string;         // default: qqpartindex
        totalParts?: string;        // default: qqtotalparts
    }

    interface ChunkingSuccess {
        endpoint?: string | null;   // default: null
    }

    interface CorsOptions {
        allowXdr?: boolean;         // default: false
        expected?: boolean;         // default: false
        sendCredentials: boolean;   // default: false
    }

    interface DeleteFileOptions<H, P> {
        customHeader?: H;           // default: {}
        enabled?: boolean;          // default false
        endpoint?: string;          // default: /server/upload
        method?: string;            // default: DELETE
        params?: P;                 // default: {}
    }

    interface ExtraButtonsOptions<V> {
        element: HTMLElement | undefined;   // default: undefined
        fileInputTitle?: string;            // default: file input
        folders?: boolean;                  // default: false
        multiple?: boolean;                 // default: true
        validation?: V;                     // default: 'validation'
    }

    interface FormOptions {
        element?: string | HTMLElement; // default: qq-form
        autoUpload?: boolean;           // default: false
        interceptSubmit?: boolean;      // default: true
    }

    interface MessagesOptions {
        emptyError?: string;                    // default: {file} is empty, please select files again without it.
        maxHeightImageError?: string;           // default: Image is too tall.
        maxWidthImageError?: string;            // default: Image is too wide.
        minHeightImageError?: string;           // default: Image is not tall enough.
        minWidthImageError?: string;            // default: Image is not wide enough.
        minSizeError?: string;                  // default: {file} is too small, minimum file size is {minSizeLimit}.
        noFilesError?: string;                  // default: No files to upload.
        onLeave?: string;                       // default: The files are being uploaded, if you leave now the upload will be canceled.
        retryFailTooManyItemsError?: string;    // default: Too many items ({netItems}) would be uploaded. Item limit is {itemLimit}.
        typeError?: string;                     // default: {file} has an invalid extension. Valid extension(s): {extensions}.
        // tslint:disable-next-line:max-line-length
        unsupportedBrowserIos8Safari?: string;  // default: Unrecoverable error - this browser does not permit file uploading of any kind due to serious bugs in iOS8 Safari. Please use iOS8 Chrome until Apple fixes these issues.
    }

    interface PasteOptions {
        defaultName?: string;                   // default: pasted_image
        targetElement?: HTMLElement | null;     // default: null
    }

    interface ResumeOptions {
        recordsExpireIn?: number;   // default: 7
        enabled?: boolean;          // default: false
        paramNames?: ResumeParamNameOptions;
    }

    interface ResumeParamNameOptions {
        resuming: string;   // default: qqresume
    }

    interface RetryOptions {
        autoAttemptDelay?: number;              // default: 5
        enableAuto?: boolean;                   // default: false
        maxAutoAttempts?: number;               // default: 3
        preventRetryResponseProperty?: string;  // default: preventRetry
    }

    interface RequestOptions <H, P> {
        customHeaders?: H;          // default: {}
        endpoint?: string;          // default: /server/upload
        filenameParam?: string;     // default: qqfilename
        forceMultipart?: boolean;   // default: true
        inputName?: string;         // default: qqfile
        method?: string;            // default: POST
        params?: P;                 // default: {}
        paramsInBody?: boolean;     // default: true
        uuid?: string;              // default: qquuid
        totalFileSizeName?: string; // default: qqtotalfilesize
    }

    interface ScalingOptions {
        customResizer?: (
            blob: File | Blob,
            height: number,
            image: HTMLImageElement,
            sourceCanvas: HTMLCanvasElement,
            targetCanvas: HTMLCanvasElement,
            width: number) => Promise<File | Blob> | undefined; // default: undefined
        defaultQuality?: number;        // default: 80
        defaultType?: string | null;    // default: null
        failureText?: string;           // default: Failed to scale
        includeExif?: boolean;          // default: false
        orient?: boolean;               // default: true
        sendOriginal?: boolean;         // default: false
        sizes?: Size[];                 // default: []
    }

    /**
     * From Documentation:
     * An array containing size objects that describe scaled versions of each submitted image that should be generated and uploaded.
     * A size object should usually contain a name String property (which will be appended to the file name of the scaled file), and must always contain a maxSize integer property.
     * A type MIME string property is optional.
     */
    interface Size {
        name: string;
        maxSize: number;
        type?: string;
    }

    interface SessionOptions<H, P> {
        customHeaders?: H;          // default: {}
        endpoint?: string | null;   // default: null
        params?: P;                 // default: {}
        refreshOnReset?: boolean;   // default: true
    }

    interface TextOptions {
        defaultResponseError?: string;  // default: Upload failure reason unknown
        fileInputTitle?: string;        // default: file input
        sizeSymbols?: string[];         // default: ['kB', 'MB', 'GB', 'TB', 'PB', 'EB']
    }

    interface ValidationOptions {
        acceptFiles?: MimeType[] | null;    // default: null
        allowedExtensions?: string[];       // default: []
        itemLimit?: number;                 // default: 0
        minSizeLimit?: number;              // default: 0
        sizeLimit?: number;                 // default: 0
        stopOnFirstInvalidFile?: boolean;   // default: true
        image?: ValidationImageOptions;
    }

    interface ValidationImageOptions {
        maxHeight?: number;     // default: 0
        maxWidth?: number;      // default: 0
        minWidth?: number;      // default: 0
        minHeight?: number;     // default: 0
    }

    interface WorkaroundOptions {
        iosEmptyVideos?: boolean;       // default: true
        ios8BrowserCrash?: boolean;     // default: false
        ios8SafariUploads?: boolean;    // default: true
    }

    interface ChunkData {
        partIndex: number;
        startByte: number;
        endByte: number;
        totalParts: number;
    }

    interface ValidateMetadata {
        name: string;
        size?: number;
    }

    interface CallbackOptions {
        onAutoRetry?: (id: number, name: string, attemptNumber: number) => void;
        onCancel?: (id: number, name: string) => void;
        onComplete?: <T>(id: number, name: string, responseJSON: T, xhr: XMLHttpRequest) => void; // ignore xhr: XDomainRequest as it is not compatible for all versions of TypeScript
        onAllComplete?: (succeeded: number[], failed: number[]) => void;
        onDelete?: (id: number) => void;
        onDeleteComplete?: (id: number, xhr: XMLHttpRequest, isError: boolean) => void; // ignore xhr: XDomainRequest as it is not compatible for all versions of TypeScript
        onError?: (id: number, name: string, errorReason: string, xhr: XMLHttpRequest) => void; // ignore xhr: XDomainRequest as it is not compatible for all versions of TypeScript
        onManualRetry?: (id: number, name: string) => boolean; // return false to prevent this and all future retries
        onPasteReceived?: (blob: Blob) => void;
        onProgress?: (id: number, name: string, uploadedBytes: number, totalBytes: number) => void;
        onResume?: <T>(id: number, name: string, chunkData: T) => void;
        onSessionRequestComplete?: <T>(response: T[], success: boolean, xhrOrXdr: XMLHttpRequest) => void;  // ignore xhr: XDomainRequest as it is not compatible for all versions of TypeScript
        onStatusChange?: (id: number, oldStatus: string, newStatus: string) => void;
        onSubmit?: (id: number, name: string) => void;
        onSubmitDelete?: (id: number) => void;
        onSubmitted?: (id: number, name: string) => void;
        onTotalProgress?: (totalUploadedBytes: number, totalBytes: number) => void;
        onUpload?: (id: number, name: string) => void;
        onUploadChunk?: (id: number, name: string, chunkData: ChunkData) => void;
        // ignore xhr: XDomainRequest as it is not compatible for all versions of TypeScript
        onUploadChunkSuccess?: <T>(id: number, chunkData: ChunkData, responseJSON: T, xhr: XMLHttpRequest) => void;
        onValidate?: (data: ValidateMetadata, buttonContainer: HTMLElement) => void;
        onValidateBatch?: (fileOrBlobDataArray: ValidateMetadata[], buttomContainer: HTMLElement) => void;
    }

    interface BasicOptions {
        // core options
        autoUpload?: boolean;       // default true
        button?: HTMLElement;
        debug?: boolean;
        disableCancelForFormUploads?: boolean;
        formatFileName?: (rawFileName: string) => string; // rawFilename to display filename
        maxConnections?: number;
        multiple?: boolean;

        blobs?: BlobsOptions;
        camera?: CameraOptions;
        chunking?: ChunkingOptions;
        cors?: CorsOptions;
        deleteFile?: DeleteFileOptions<any, any>;
        extraButtons?: ExtraButtonsOptions<any>;
        form?: FormOptions;
        messages?: MessagesOptions;
        paste?: PasteOptions;
        resume?: ResumeOptions;
        retry?: RetryOptions;
        request?: RequestOptions<any, any>;
        scaling?: ScalingOptions;
        session?: SessionOptions<any, any>;
        text?: TextOptions;
        validation?: ValidationOptions;
        workarounds?: WorkaroundOptions;

        callbacks?: CallbackOptions;
    }

    interface BlobWrapper {
        blob: Blob;
        name: string;
    }

    interface CanvasWrapper {
        canvas: HTMLCanvasElement;
        name: string;
        quality: number; // 1-100
        type: MimeType;
    }

    interface ResizeInfo {
        blob: File | Blob;
        height: number;
        image: HTMLImageElement;
        sourceCanvas: HTMLCanvasElement;
        targetCanvas: HTMLCanvasElement;
        width: number;
    }

    interface ResumableItem {
        name: string;
        uuid: string;
        partIdx: number;
    }

    interface FilterOption {
        id?: number;
        uuid?: string;
        originalName?: string;
        name?: string;
        status?: string;
        size?: number;
    }

    interface ScaleImageOptions {
        maxSize: number;
        orient?: boolean;       // default: true
        type?: string;           // default: type or reference image
        quality?: number;       // 0-100 - default: 80
        includeExif?: boolean;  // default: false
        customResizer?: (resizeInfo: ResizeInfo) => Promise<File | Blob>;
    }

    class FineUploaderBasic {
        constructor(options: BasicOptions)

        addFiles<T>(files: File[] | HTMLInputElement[] | Blob[] | BlobWrapper[] | HTMLCanvasElement[] | CanvasWrapper[] | FileList, params: T, endpoint: string): void;
        addInitialFiles<T>(initialFiles: T[]): void;
        cancel(id: number): void;
        cancelAll(): void;
        clearStoredFiles(): void;
        continueUpload(id: number): boolean; // true if successful
        deleteFile(id: number): void;

        /**
         * TODO: need someone who has used this to update the returned promise related fields
         */
        drawThumbnail(id: number, targetContainer: HTMLElement, maxSize: number, fromServer: boolean, customResizer: (resizeInfo: ResizeInfo) => Promise<File | Blob>): Promise<any>
        getButton(id: number): HTMLElement;
        getFile(id: number): File | Blob;
        getInProgress(): number;
        getName(id: number): string;
        getParentId(scaledFileId: number): number;
        getRemainingAllowedItems(): number;
        getResumableFilesData(): ResumableItem[];
        getSize(id: number): number;
        getUploads<T>(filter: FilterOption): T | T[];
        getUuid(id: number): string;
        log(message: string, level: string): void;
        pauseUpload(id: number): boolean; // true if successful
        reset(): void;
        retry(id: number): void;
        scaleImage(id: number, options: ScaleImageOptions): Promise<Blob>;
        setCustomHeaders<H>(customHeaders: H, id: number): void;
        setEndpoint(path: string, identifier: number | HTMLElement): void;
        setDeleteFileCustomHeaders<H>(customHeaders: H, id: number): void;
        setDeleteFileEndpoint(path: string, identifier: number | HTMLElement): void;
        setDeleteFileParams<P>(params: P, id: number): void;
        setItemLimit(newItemLimit: number): void;
        setForm(formElementOrId: HTMLFormElement | string): void;
        setName(id: number, name: string): void;
        setParams<P>(params: P, id: number): void;
        setUuid(id: number, uuid: string): void;
        uploadStoredFiles(): void; // throws NoFilesError

        // ui
        addExtraDropzone(element: HTMLElement): void;
        getDropTarget(id: number): HTMLElement;
        getId(element: HTMLElement): number;
        getItemByFileId(id: number): HTMLElement;
        removeExtraDropzone(element: HTMLElement): void;
    }
}
