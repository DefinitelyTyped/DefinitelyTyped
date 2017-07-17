// Type definitions for Plupload 2.0
// Project: http://www.plupload.com/
// Definitions by: Patrick Bußmann <https://github.com/patrickbussmann/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface plupload_settings {
    /** Required Options */
    browse_button: any,
    url: string,

    /** Filters */
    filters?: plupload_filters,

    /** Control the request */
    headers?: any;
    max_retries?: number;
    multipart?: boolean;
    multipart_params?: any;

    /** Chunk */
    chunk_size?: number|string;

    /** Client-Side Image Resize */
    resize?: plupload_resize;

    /** Drag&Drop Files from the Desktop */
    drop_element?: string;

    /** Useful Options */
    multi_selection?: boolean;
    required_features?: string|any;
    unique_names?: boolean;

    /** Optional */
    runtimes?: string;
    file_data_name?: string;
    container?: any;
    flash_swf_url?: string;
    silverlight_xap_url?: string;

    /** Events */
    init?: plupload_events;
}

interface plupload_filters {
    mime_types?: plupload_filters_mime_types[];
    max_file_size?: number|string;
    prevent_duplicates?: boolean;
}

interface plupload_filters_mime_types {
    title: string;
    extensions: string;
}

interface plupload_resize {
    width?: number;
    height?: number;
    crop?: boolean;
    quality?: number;
    preserve_headers?: boolean;
}

interface plupload_queue_progress {
    size: number;
    loaded: number;
    uploaded: number;
    failed: number;
    queued: number;
    percent: number;
    bytesPerSec: number;
    reset(): void;
}

interface plupload_event {
    (uploader: plupload): any;
}

interface plupload_event_file {
    (uploader: plupload, file: any): any;
}

interface plupload_event_files {
    (uploader: plupload, files: any[]): any;
}

interface plupload_event_OptionChanged {
    (uploader: plupload, name: string, value: any, oldValue: any): any;
}

interface plupload_event_FileUploaded {
    (uploader: plupload, file: any, response: plupload_response): any;
}

interface plupload_event_ChunkUploaded {
    (uploader: plupload, file: any, response: plupload_chunk_response): any;
}

interface plupload_event_Error {
    (uploader: plupload, error: plupload_error): any;
}

interface plupload_events {
    Init?: plupload_event;
    PostInit?: plupload_event;
    OptionChanged?: plupload_event_OptionChanged;
    Refresh?: plupload_event;
    StateChanged?: plupload_event;
    UploadFile?: plupload_event_file;
    BeforeUpload?: plupload_event_file;
    QueueChanged?: plupload_event;
    UploadProgress?: plupload_event_file;
    FilesRemoved?: plupload_event_files;
    FileFiltered?: plupload_event_file;
    FilesAdded?: plupload_event_files;
    FileUploaded?: plupload_event_FileUploaded;
    ChunkUploaded?: plupload_event_ChunkUploaded;
    UploadComplete?: plupload_event_files;
    Error?: plupload_event_Error;
    Destroy?: plupload_event;
}

interface plupload_response {
    response: string;
    status: number;
    responseHeaders: string;
}

interface plupload_chunk_response extends plupload_response {
    offset: number;
    total: number;
}

interface plupload_error extends plupload_response {
    code: number;
    message: string;
    file: any;
}

declare class plupload {
    static Uploader(settings: plupload_settings):void;

    static VERSION: string;

    static STOPPED: number;
    static STARTED: number;
    static QUEUED: number;
    static UPLOADING: number;
    static FAILED: number;
    static DONE: number;
    static GENERIC_ERROR: number;
    static HTTP_ERROR: number;
    static IO_ERROR: number;
    static SECURITY_ERROR: number;
    static INIT_ERROR: number;
    static FILE_SIZE_ERROR: number;
    static FILE_EXTENSION_ERROR: number;
    static FILE_DUPLICATE_ERROR: number;
    static IMAGE_FORMAT_ERROR: number;
    static MEMORY_ERROR: number;
    static IMAGE_DIMENSIONS_ERROR: number;

    static mimeTypes: any;
    static ua: any;

    static typeOf(o: any): string;
    static extend(target: any): any;
    static guid(guid: string): string;

    /** Properties */
    id: string;
    state: number;
    features: string;
    runtime: string;
    files: any;
    settings: any;
    total: plupload_queue_progress;

    /** Methods */
    init(): any;
    setOption(option: string|any, value?: any): any;
    getOption(option?: string): any;
    refresh(): any;
    start(): any;
    stop(): any;
    disableBrowse(disable: boolean): any;
    getFile(id: string): any;
    addFile(file: any, fileName?: string): any;
    removeFile(file: any): any;
    splice(start?: number, length?: number): any;
    trigger(name: string, Multiple: any): any;
    hasEventListener(name: string): any;
    bind(name: string, func: any, scope: any): any;
    unbind(name: string, func: any): any;
    unbindAll(): any;
    destroy(): any;
}
