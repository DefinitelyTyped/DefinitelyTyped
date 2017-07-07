// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface UploaderOption {
    drop_element?: string,
    browse_button?: string,
    url: string,
    qiniu?: object,
    filters?: {
        mime_type: Array<{
            title?: string,
            extensions?: string
        }>,
        max_file_size?: string,
        prevent_duplicates?: string
    },
    fileList?: string,
    fileTemplate?: string,
    fileFormater?($file: JQuery, file: FileObj, status: STATUS): void;
    fileIconCreator?(fileType: string, file: FileObj, uploader: Uploader): void;
    staticFiles?: Array<{
        id?: string,
        name?: string,
        type?: string,
        size?: string,
        origSize?: string,
        lastModifiedDate?: Date
    }>;
    rename?: boolean,
    renameExtension?: boolean,
    renameByClick?: boolean,
    autoUpload?: boolean,
    browseByClickList?: boolean,
    dropPlaceholder?: boolean,
    previewImageIcon?: boolean,
    sendFileName?: boolean,
    sendFileId?: boolean,
    responseHandler?: boolean | Function,
    limitFilesCount?: boolean | number,
    deleteConfirm?: boolean | string,
    removeUploaded?: boolean,
    statusCreator?(total: UploadProgress, state: STATUS, uploader: Uploader): void;
    previewImageSize?: { width: number, height: number },
    uploadedMessage?: boolean,
    deleteActionOnDone?: boolean,
    renameActionOnDone?: boolean,
    headers?: object,
    multipart?: boolean,
    multipart_params?: object | Function,
    max_retries?: number,
    chunk_size?: string,
    resize?: {
        width?: number,
        height?: number,
        crop?: boolean,
        quuality?: number,
        preserve_headers?: boolean
    },
    multi_selection?: boolean,
    unique_names?: boolean,
    runtimes?: string,
    file_data_name?: string,
    flash_swf_url?: string,
    silverlight_xap_url?: string,
    lang?: string,

    onInit?(): void,
    onFilesAdded?(fiels: Array<FileObj>): void;
    onUploadProgress?(file: FileObj): void;
    onFileUploaded?(file: FileObj, responseObject: ResponseObject): void
    onUploadComplete?(files: Array<FileObj>): void,
    onFilesRemoved?(files: Array<FileObj>): void,
    onChunkUploaded?(file: FileObj, responseObject: ResponseObject): void,
    onUploadFile?(file: FileObj): void,
    onBeforeUpload?(file: FileObj): void,
    onStateChanged?(status: STATUS): void,
    onQueueChanged?(): void,
    onError?(error: { error: ERRORS, message: string, file: FileObj }): void
}
interface ResponseObject {
    response?: string,
    responseHeaders?: object,
    status?: number,
    offset?: number,
    total?: number
}
declare enum STATUS {
    STOPPED = 1, STARTED = 2, QUEUED = 1, UPLOADING = 2, FAILED = 3, DONE = 4
}
interface FileObj {
    id?: string,
    name?: string,
    type?: string,
    ext?: string,
    isImage?: boolean,
    previewImage?: string,
    size?: number,
    origSize?: number,
    loaded?: number,
    percent?: number,
    status?: STATUS,
    lastModifiedDate?: Date,
    getNative(): File,
    destroy(): void
}
interface UploadProgress {
    size?: number,
    loaded?: number,
    uploaded?: number,
    failed?: number,
    queued?: number,
    percent?: number,
    bytesPerSec?: number
}
declare enum ERRORS {
    GENERIC_ERROR = -100,
    HTTP_ERROR = -200,
    IO_ERROR = -300,
    SECURITY_ERROR = -400,
    INIT_ERROR = -500,
    FILE_SIZE_ERROR = -600,
    FILE_EXTENSION_ERROR = -601,
    FILE_DUPLICATE_ERROR = -602,
    IMAGE_FORMAT_ERROR = -700,
    IMAGE_MEMORY_ERROR = -701,
    IMAGE_DIMENSIONS_ERROR = -702
}
interface Uploader {
    showMessage(message: string, type: string, time?: number): void;
    hideMessage(): void;
    start(): void,
    stop(): void,
    getState(): STATUS,
    isStarted(): boolean,
    isStopped(): boolean,
    getFiles(): Array<FileObj>;
    getTotal(): UploadProgress,
    disableBrowse(disable: boolean): void,
    getFile(id: string): FileObj,
    showFile(file: FileObj | Array<FileObj>): void;
    removeFile(file: FileObj): void;
    destroy(): void,
    showStatus(): void
}
interface UplaoderStatic {

}
interface JQuery {
    uploader(option: UploaderOption): JQuery;
    
}