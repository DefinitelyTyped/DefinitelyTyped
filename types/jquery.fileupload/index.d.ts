/// <reference types="jquery"/>

// Interface options for the plugin
interface JQueryFileInputOptions {
    /**
     * The type of data that is expected back from the server.
     */
    dataType?: string | undefined;

    /**
     * The drop target element(s), by the default the complete document.
     * Set to null to disable drag & drop support:
     */
    dropZone?: Element | Element[] | JQuery | string | undefined;

    /**
     * The paste target element(s), by the default the complete document.
     * Set to null to disable paste support:
     */
    pasteZone?: Element | Element[] | JQuery | string | undefined;

    /**
     * The file input field(s), that are listened to for change events.
     * If undefined, it is set to the file input fields inside
     * of the widget element on plugin initialization.
     * Set to null to disable the change listener.
     */
    fileInput?: Element | Element[] | JQuery | string | undefined;

    /**
     * By default, the file input field is replaced with a clone after
     * each input field change event. This is required for iframe transport
     * queues and allows change events to be fired for the same file
     * selection, but can be disabled by setting the following option to false:
     */
    replaceFileInput?: boolean | undefined;

    /**
     * The parameter name for the file form data (the request argument name).
     * If undefined or empty, the name property of the file input field is
     * used, or "files[]" if the file input name property is also empty,
     * can be a string or an array of strings:
     */
    paramName?: any;

    /**
     * By default, each file of a selection is uploaded using an individual
     * request for XHR type uploads. Set to false to upload file
     * selections in one request each:
     */
    singleFileUploads?: boolean | undefined;

    /**
     * To limit the number of files uploaded with one XHR request,
     * set the following option to an integer greater than 0:
     */
    limitMultiFileUploads?: number | undefined;

    /**
     * The following option limits the number of files uploaded with one
     * XHR request to keep the request size under or equal to the defined
     * limit in bytes
     */
    limitMultiFileUploadSize?: number | undefined;

    /**
     * Multipart file uploads add a number of bytes to each uploaded file,
     * therefore the following option adds an overhead for each file used
     * in the limitMultiFileUploadSize configuration:
     */
    limitMultiFileUploadSizeOverhead?: number | undefined;

    /**
     * Set the following option to true to issue all file upload requests
     * in a sequential order:
     */
    sequentialUploads?: boolean | undefined;

    /**
     * To limit the number of concurrent uploads,
     * set the following option to an integer greater than 0:
     */
    limitConcurrentUploads?: number | undefined;

    /**
     * Set the following option to true to force iframe transport uploads:
     */
    forceIframeTransport?: boolean | undefined;

    /**
     * Set the following option to the location of a redirect url on the
     * origin server, for cross-domain iframe transport uploads:
     */
    redirect?: string | undefined;

    /**
     * The parameter name for the redirect url, sent as part of the form
     * data and set to 'redirect' if this option is empty:
     */
    redirectParamName?: string | undefined;

    // The HTTP request method must be "POST" or "PUT"
    type?: string | undefined;

    /**
     * Set the following option to the location of a postMessage window,
     * to enable postMessage transport uploads:
     */
    postMessage?: string | undefined;

    /**
     * By default, XHR file uploads are sent as multipart/form-data.
     * The iframe transport is always using multipart/form-data.
     * Set to false to enable non-multipart XHR uploads:
     */
    multipart?: boolean | undefined;

    /**
     * To upload large files in smaller chunks, set the following option
     * to a preferred maximum chunk size. If set to 0, null or undefined,
     * or the browser does not support the required Blob API, files will
     * be uploaded as a whole.
     */
    maxChunkSize?: number | undefined;

    /**
     * When a non-multipart upload or a chunked multipart upload has been
     * aborted, this option can be used to resume the upload by setting
     * it to the size of the already uploaded bytes. This option is most
     * useful when modifying the options object inside of the "add" or
     * "send" callbacks, as the options are cloned for each file upload.
     */
    uploadedBytes?: number | undefined;

    /**
     * By default, failed (abort or error) file uploads are removed from the
     * global progress calculation. Set the following option to false to
     * prevent recalculating the global progress data:
     */
    recalculateProgress?: boolean | undefined;

    /**
     * Interval in milliseconds to calculate and trigger progress events:
     */
    progressInterval?: number | undefined;

    /**
     * Interval in milliseconds to calculate progress bitrate:
     */
    bitrateInterval?: number | undefined;

    /**
     * By default, uploads are started automatically when adding files:
     */
    autoUpload?: boolean | undefined;

    /**
     * Error and info messages:
     */
    messages?: any;

    /**
     * Translation function, gets the message key to be translated
     * and an object with context specific data as arguments:
     */
    i18n?: any;

    /**
     * Additional form data to be sent along with the file uploads can be set
     * using this option, which accepts an array of objects with name and
     * value properties, a function returning such an array, a FormData
     * object (for XHR file uploads), or a simple object.
     * The form of the first fileInput is given as parameter to the function:
     */
    formData?: any;

    /**
     * The add callback is invoked as soon as files are added to the fileupload
     * widget (via file input selection, drag & drop, paste or add API call).
     * If the singleFileUploads option is enabled, this callback will be
     * called once for each file in the selection for XHR file uploads, else
     * once for each file selection.
     *
     * The upload starts when the submit method is invoked on the data parameter.
     * The data object contains a files property holding the added files
     * and allows you to override plugin options as well as define ajax settings.
     *
     * Listeners for this callback can also be bound the following way:
     * .bind('fileuploadadd', func);
     *
     * data.submit() returns a Promise object and allows to attach additional
     * handlers using jQuery's Deferred callbacks:
     * data.submit().done(func).fail(func).always(func);
     */
    add?: ((e: JQueryEventObject, data: JqueryFileUploadAddObject) => void) | undefined;

    // The plugin options are used as settings object for the ajax calls.
    // The following are jQuery ajax settings required for the file uploads:
    processData?: boolean | undefined;

    contentType?: string | undefined;

    cache?: boolean | undefined;
    timeout?: number | undefined;

    active?: Function | undefined;
    progress?: ((e: JQueryEventObject, data: JQueryFileUploadProgressObject) => void) | undefined;
    send?: ((e: JQueryEventObject, data: JQueryFileUploadProgressObject) => void) | undefined;

    // Validation

    /**
     * The maximum allowed file size in bytes.
     * Type: integer
     * Default: undefined
     * Example: 10000000 // 10 MB
     * Note: This option has only an effect for browsers supporting the File API.
     * @see https://github.com/blueimp/jQuery-File-Upload/wiki/Options#maxfilesize
     */
    maxFileSize?: number | undefined;

    // Other callbacks:
    submit?: Function | undefined;
    done?: ((e: JQueryEventObject, data: JQueryFileUploadDone) => void) | undefined;
    fail?: ((e: JQueryEventObject, data: JQueryFileUploadDone) => void) | undefined;
    always?: ((e: JQueryEventObject, data: JQueryFileInputOptions) => void) | undefined;
    progressall?: ((e: JQueryEventObject, data: JQueryFileUploadProgressAllObject) => void) | undefined;
    start?: ((e: JQueryEventObject) => void) | undefined;
    stop?: ((e: JQueryEventObject) => void) | undefined;
    change?: ((e: JQueryEventObject, data: JQueryFileUploadChangeObject) => void) | undefined;
    paste?: ((e: JQueryEventObject, data: JQueryFileUploadFilesObject) => void) | undefined;
    drop?: ((e: JQueryEventObject, data: JQueryFileUploadFilesObject) => void) | undefined;
    dragover?: ((e: JQueryEventObject) => void) | undefined;
    chunksend?: ((e: JQueryEventObject, data: JQueryFileUploadChunkObject) => void) | undefined;
    chunkdone?: ((e: JQueryEventObject, data: JQueryFileUploadChunkObject) => void) | undefined;
    chunkfail?: ((e: JQueryEventObject, data: JQueryFileUploadChunkObject) => void) | undefined;
    chunkalways?: ((e: JQueryEventObject, data: JQueryFileUploadChunkObject) => void) | undefined;

    // Others
    url?: string | undefined;
    files?: any;

    // Cross-site XMLHttpRequest file uploads
    xhrFields?: any;
}

interface JQueryFileUpload extends JQuery {
    contentType: string;
}

interface JQuery {
    // Interface to the main method of jQuery File Upload
    fileupload(settings: JQueryFileInputOptions | string): JQueryFileUpload;
    fileupload(action: string, settings: JQueryFileInputOptions | string): JQueryFileUpload;
    fileupload(action: string, message: string, settings: JQueryFileInputOptions | string): JQueryFileUpload;
}

interface JqueryFileUploadEnhancedPromise<T> extends JQueryPromise<T> {
    success: JQueryPromise<T>["done"];
    error: JQueryPromise<T>["fail"];
    complete: JQueryPromise<T>["always"];
}

interface JQuerySupport {
    fileInput?: boolean | undefined;
}

interface JQueryFileUploadChangeObject {
    fileInput?: JQuery | undefined;
    fileInputClone?: JQuery | undefined;
    files: File[];
    form?: JQuery | undefined;
    originalFiles: File[];
}

interface JqueryFileUploadConvenienceObject {
    abort: () => JqueryFileUploadEnhancedPromise<any>;
    process: (resolveFunc?: Function, rejectFunc?: Function) => JqueryFileUploadEnhancedPromise<any>;
    processing: () => JqueryFileUploadEnhancedPromise<any>;
    progress: () => JqueryFileUploadEnhancedPromise<any>;
    response: () => JqueryFileUploadEnhancedPromise<any>;
    submit<T>(): JqueryFileUploadEnhancedPromise<T>;
    state: () => JqueryFileUploadEnhancedPromise<any>;
}

interface JqueryFileUploadAddObject extends JQueryFileUploadChangeObject, JqueryFileUploadConvenienceObject {
    paramName?: string | string[] | undefined;
}

interface JQueryFileUploadProgressAllObject {
    loaded?: number | undefined;
    total?: number | undefined;
    bitrate?: number | undefined;
}

interface JQueryFileUploadXhr {
    jqXHR: JQueryXHR;
    result: any;
    textStatus: string;
    errorThrown: any;
    headers: { [key: string]: any };
}

interface JQueryFileUploadFilesObject {
    files: File[];
}

interface JQueryFileUploadChunkObject extends JQueryFileInputOptions, JQueryFileUploadXhr {
    blob: any;
    chunkSize: number;
    contentRange: string;
    errorThrown: any;
}

interface JQueryFileUploadProgressObject extends JQueryFileInputOptions, JQueryFileUploadProgressAllObject {
}

interface JQueryFileUploadDone extends JQueryFileInputOptions, JQueryFileUploadXhr {
}
