// Type definitions for Resumable.js v1.0.2
// Project: https://github.com/23/resumable.js
// Definitions by: Daniel McAssey <https://github.com/DanielMcAssey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Resumable {
  interface ConfigurationHash {
    /**
     * The target URL for the multipart POST request. This can be a string or a function that allows you you to construct and return a value, based on supplied params. (Default: /)
     **/
    target?: string;
    /**
     * The size in bytes of each uploaded chunk of data. The last uploaded chunk will be at least this size and up to two the size, see Issue #51 for details and reasons. (Default: 1*1024*1024)
     **/
    chunkSize?: number;
    /**
     * Force all chunks to be less or equal than chunkSize. Otherwise, the last chunk will be greater than or equal to chunkSize. (Default: false)
     **/
    forceChunkSize?: boolean;
    /**
     * Number of simultaneous uploads (Default: 3)
     **/
    simultaneousUploads?: number;
    /**
     * The name of the multipart POST parameter to use for the file chunk (Default: file)
     **/
    fileParameterName?: string;
    /**
     * The name of the chunk index (base-1) in the current upload POST parameter to use for the file chunk (Default: resumableChunkNumber)
     */
    chunkNumberParameterName?: string;
    /**
     * The name of the total number of chunks POST parameter to use for the file chunk (Default: resumableTotalChunks)
     */
    totalChunksParameterName?: string;
    /**
     * The name of the general chunk size POST parameter to use for the file chunk (Default: resumableChunkSize)
     */
    chunkSizeParameterName?: string;
    /**
     * The name of the total file size number POST parameter to use for the file chunk (Default: resumableTotalSize)
     */
    totalSizeParameterName?: string;
    /**
     * The name of the unique identifier POST parameter to use for the file chunk (Default: resumableIdentifier)
     */
    identifierParameterName?: string;
    /**
     * The name of the original file name POST parameter to use for the file chunk (Default: resumableFilename)
     */
    fileNameParameterName?: string;
    /**
     * The name of the file's relative path POST parameter to use for the file chunk (Default: resumableRelativePath)
     */
    relativePathParameterName?: string;
    /**
     * The name of the current chunk size POST parameter to use for the file chunk (Default: resumableCurrentChunkSize)
     */
    currentChunkSizeParameterName?: string;
    /**
     * The name of the file type POST parameter to use for the file chunk (Default: resumableType)
     */
    typeParameterName?: string;
    /**
     * Extra parameters to include in the multipart POST with data. This can be an object or a function. If a function, it will be passed a ResumableFile and a ResumableChunk object (Default: {})
     **/
    query?: Object;
    /**
     * Method for chunk test request. (Default: 'GET')
     **/
    testMethod?: string;
    /**
     * Method for chunk upload request. (Default: 'POST')
     **/
    uploadMethod?: string;
    /**
     * Extra prefix added before the name of each parameter included in the multipart POST or in the test GET. (Default: '')
     **/
    parameterNamespace?: string;
    /**
     * Extra headers to include in the multipart POST with data. This can be an object or a function that allows you to construct and return a value, based on supplied file (Default: {})
     **/
    headers?: Object | ((file: ResumableFile) => Object);
    /**
     * Method to use when POSTing chunks to the server (multipart or octet) (Default: multipart)
     **/
    method?: string;
    /**
     * Prioritize first and last chunks of all files. This can be handy if you can determine if a file is valid for your service from only the first or last chunk. For example, photo or video meta data is usually located in the first part of a file, making it easy to test support from only the first chunk. (Default: false)
     **/
    prioritizeFirstAndLastChunk?: boolean;
    /**
     * Make a GET request to the server for each chunks to see if it already exists. If implemented on the server-side, this will allow for upload resumes even after a browser crash or even a computer restart. (Default: true)
     **/
    testChunks?: boolean;
    /**
     * Optional function to process each chunk before testing & sending. Function is passed the chunk as parameter, and should call the preprocessFinished method on the chunk when finished. (Default: null)
     **/
    preprocess?: (chunk: ResumableChunk) => ResumableChunk;
    /**
     * Override the function that generates unique identifiers for each file. (Default: null)
     **/
    generateUniqueIdentifier?: () => string;
    /**
     * Indicates how many files can be uploaded in a single session. Valid values are any positive integer and undefined for no limit. (Default: undefined)
     **/
    maxFiles?: number;
    /**
     * A function which displays the please upload n file(s) at a time message. (Default: displays an alert box with the message Please n one file(s) at a time.)
     **/
    maxFilesErrorCallback?: (files: ResumableFile, errorCount: number) => void;
    /**
     * The minimum allowed file size. (Default: undefined)
     **/
    minFileSize?: boolean;
    /**
     * A function which displays an error a selected file is smaller than allowed. (Default: displays an alert for every bad file.)
     **/
    minFileSizeErrorCallback?:(file: ResumableFile, errorCount: number) => void;
    /**
     * The maximum allowed file size. (Default: undefined)
     **/
    maxFileSize?: boolean;
    /**
     * A function which displays an error a selected file is larger than allowed. (Default: displays an alert for every bad file.)
     **/
    maxFileSizeErrorCallback?: (file: ResumableFile, errorCount: number) => void;
    /**
     * The file types allowed to upload. An empty array allow any file type. (Default: [])
     **/
    fileType?: string[];
    /**
     * A function which displays an error a selected file has type not allowed. (Default: displays an alert for every bad file.)
     **/
    fileTypeErrorCallback?: (file: ResumableFile, errorCount: number) => void;
    /**
     * The maximum number of retries for a chunk before the upload is failed. Valid values are any positive integer and undefined for no limit. (Default: undefined)
     **/
    maxChunkRetries?: number;
    /**
     * The number of milliseconds to wait before retrying a chunk on a non-permanent error. Valid values are any positive integer and undefined for immediate retry. (Default: undefined)
     **/
    chunkRetryInterval?: number;
    /**
     * Standard CORS requests do not send or set any cookies by default. In order to include cookies as part of the request, you need to set the withCredentials property to true. (Default: false)
     **/
    withCredentials?: boolean;
  }
  
  class Resumable {
    constructor(options:ConfigurationHash);
    
    /**
     * A boolean value indicator whether or not Resumable.js is supported by the current browser.
     **/
    support: boolean;
    /**
     * A hash object of the configuration of the Resumable.js instance.
     **/
    opts: ConfigurationHash;
    /**
     * An array of ResumableFile file objects added by the user (see full docs for this object type below).
     **/
    files: ResumableFile[];
	
	defaults: ConfigurationHash;
    
    events: Event[];
    version: number;
    
    /**
     * Assign a browse action to one or more DOM nodes. Pass in true to allow directories to be selected (Chrome only).
     **/
    assignBrowse(domNode: Element, isDirectory: boolean): void;
    assignBrowse(domNodes: Element[], isDirectory: boolean): void;
    /**
     * Assign one or more DOM nodes as a drop target.
     **/
    assignDrop(domNode: Element): void;
    assignDrop(domNodes: Element[]): void;
    unAssignDrop(domNode: Element): void;
    unAssignDrop(domNodes: Element[]): void;
    /**
     * Start or resume uploading.
     **/
    upload(): void;
    uploadNextChunk(): void;
    /**
     * Pause uploading.
     **/
    pause(): void;
    /**
     * Cancel upload of all ResumableFile objects and remove them from the list.
     **/
    cancel(): void;
    fire(): void;
    /**
     * Returns a float between 0 and 1 indicating the current upload progress of all files.
     **/
    progress(): number;
    /**
     * Returns a boolean indicating whether or not the instance is currently uploading anything.
     **/
    isUploading(): boolean;
    /**
     * Add a HTML5 File object to the list of files.
     **/
    addFile(file: File, event: Event): void;
    /**
     * Cancel upload of a specific ResumableFile object on the list from the list.
     **/
    removeFile(file: ResumableFile): void;
    /**
     * Look up a ResumableFile object by its unique identifier.
     **/
    getFromUniqueIdentifier(uniqueIdentifier: string): void;
    /**
     * Returns the total size of the upload in bytes.
     **/
    getSize(): number;
    getOpt(o: string): any;
    
    // Events
	/**
	 * Change event handler
	 **/
	handleChangeEvent(e: Event): void;
	 
	 /**
	 * Drop event handler
	 **/
	handleDropEvent(e: Event): void;
	
    /**
     *  A specific file was completed.
     **/
    on(event: 'fileSuccess', callback: (file: ResumableFile) => void): void;
    /**
     *  Uploading progressed for a specific file.
     **/
    on(event: 'fileProgress', callback: (file: ResumableFile) => void): void;
    /**
     *  A new file was added. Optionally, you can use the browser event object from when the file was added.
     **/
    on(event: 'fileAdded', callback: (file: ResumableFile, event: DragEvent) => void): void;
    /**
     *  New files were added.
     **/
    on(event: 'filesAdded', callback: (files: ResumableFile[]) => void): void;
    /**
     *  Something went wrong during upload of a specific file, uploading is being retried.
     **/
    on(event: 'fileRetry', callback: (file: ResumableFile) => void): void;
    /**
     *  An error occurred during upload of a specific file.
     **/
    on(event: 'fileError', callback: (file: ResumableFile, message: string) => void): void;
    /**
     *  Upload has been started on the Resumable object.
     **/
    on(event: 'uploadStart', callback: () => void): void;
    /**
     *  Uploading completed.
     **/
    on(event: 'complete', callback: () => void): void;
    /**
     *  Uploading progress.
     **/
    on(event: 'progress', callback: () => void): void;
    /**
     *  An error, including fileError, occurred.
     **/
    on(event: 'error', callback: (message: string, file: ResumableFile) => void): void;
    /**
     *  Uploading was paused.
     **/
    on(event: 'pause', callback: () => void): void;
    /**
     *  Triggers before the items are cancelled allowing to do any processing on uploading files.
     **/
    on(event: 'beforeCancel', callback: () => void): void;
    /**
     *  Uploading was canceled.
     **/
    on(event: 'cancel', callback: () => void): void;
    /**
     *  Started preparing file for upload
     **/
    on(event: 'chunkingStart', callback: (file: ResumableFile) => void): void;
    /**
     *  Show progress in file preparation
     **/
    on(event: 'chunkingProgress', callback: (file: ResumableFile, ratio: number) => void): void;
    /**
     *  File is ready for upload
     **/
    on(event: 'chunkingComplete', callback: (file: ResumableFile) => void): void;
    /**
     * Listen to all the events listed above with the same callback function.
     **/
    on(event: 'catchAll', callback: () => void): void;
	/**
     * Listen for event from Resumable.js (see below)
     **/
    on(event: string, callback: Function): void;
  }

  interface ResumableFile {
    /**
     * A back-reference to the parent Resumable object.
     **/
    resumableObj: Resumable;
    /**
     * The correlating HTML5 File object.
     **/
    file: File;
    /**
     * The name of the file.
     **/
    fileName: string;
    /**
     * The relative path to the file (defaults to file name if relative path doesn't exist)
     **/
    relativePath: string;
    /**
     * Size in bytes of the file.
     **/
    size: number;
    /**
     * A unique identifier assigned to this file object. This value is included in uploads to the server for reference, but can also be used in CSS classes etc when building your upload UI.
     **/
    uniqueIdentifier: string;
    /**
     * An array of ResumableChunk items. You shouldn't need to dig into these.
     **/
    chunks: ResumableChunk[];


    /**
     * Returns a float between 0 and 1 indicating the current upload progress of the file. If relative is true, the value is returned relative to all files in the Resumable.js instance.
     **/
    progress: (relative: boolean) => number;
    /**
     * Abort uploading the file.
     **/
    abort: () => void;
    /**
     * Abort uploading the file and delete it from the list of files to upload.
     **/
    cancel: () => void;
    /**
     * Retry uploading the file.
     **/
    retry: () => void;
    /**
     * Rebuild the state of a ResumableFile object, including reassigning chunks and XMLHttpRequest instances.
     **/
    bootstrap: () => void;
    /**
     * Returns a boolean indicating whether file chunks is uploading.
     **/
    isUploading: () => boolean;
    /**
     * Returns a boolean indicating whether the file has completed uploading and received a server response.
     **/
    isComplete: () => boolean;
  }
  
  interface ResumableChunk {}
}

declare module 'resumablejs' {
  export = Resumable;
}
