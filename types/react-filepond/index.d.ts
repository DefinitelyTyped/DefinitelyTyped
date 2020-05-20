// Type definitions for react-filepond 5.0
// Project: https://github.com/pqina/react-filepond, https://pqina.nl/filepond
// Definitions by: Zach Posten <https://github.com/zposten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// See the docs for more info on any given prop
// https://pqina.nl/filepond/docs/patterns/api/filepond-instance/#setting-options

import * as React from 'react';

// This line shuts off automatic exporting for this module
// I want to do this so that I can have internal types to this module that make
// understanding the type definition more clear, while at the same time only
// exporting the API that react-filepond exports.
export {};

type FilePondOrigin =
    | 'input' // Added by user
    | 'limbo' // Temporary server file
    | 'local' // Existing server file
    ;

export interface FileProps {
    src: string;
    name?: string;
    size?: number;
    type?: string;
    origin?: FilePondOrigin;
    metadata?: {[key: string]: any};
}

// Note that this duplicates the JS File type declaration, but is necessary
// to avoid duplicating the name 'File' in this module
// see: https://developer.mozilla.org/en-US/docs/Web/API/File
// see: https://github.com/Microsoft/dtslint/issues/173
// see: https://stackoverflow.com/q/53876793/2517147
type ActualFileObject = Blob & {readonly lastModified: number; readonly name: string};

export class File extends React.Component<FileProps> {
    file: ActualFileObject;
    fileSize: number;
    fileType: string;
    filename: string;
    fileExtension: string;
    filenameWithoutExtension: string;
    id: string;
    serverId: string;
    status: number;
    archived: boolean;

    /** Aborts loading of this file */
    abortLoad: () => void;
    /** Aborts processing of this file */
    abortProcessing: () => void;
    /**
     * Retrieve metadata saved to the file, pass a key to retrieve
     * a specific part of the metadata (e.g. 'crop' or 'resize').
     * If no key is passed, the entire metadata object is returned.
     */
    getMetadata: (key?: string) => any;
    /** Add additional metadata to the file */
    setMetadata: (key: string, value: any) => void;
}

interface ServerUrl {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    withCredentials?: boolean;
    headers?: {[key: string]: string|boolean|number};
    timeout?: number;

    /**
     * Called when server response is received, useful for getting
     * the unique file id from the server response
     */
    onload?: () => any;
    /**
     * Called when server error is received, receives the response
     * body, useful to select the relevant error data
     */
    onerror?: (responseBody: any) => any;
    /**
     * Called with the formdata object right before it is sent,
     * return extended formdata object to make changes
     */
    ondata?: (data: any) => any;
}

type ProgressServerConfigFunction = (
    /**
     * Flag indicating if the resource has a length that can be calculated.
     * If not, the totalDataAmount has no significant value.  Setting this to
     * false switches the FilePond loading indicator to infinite mode.
     */
    isLengthComputable: boolean,
    /** The amount of data currently transferred */
    loadedDataAmount: number,
    /** The total amount of data to be transferred */
    totalDataAmount: number,
) => void;

type ProcessServerConfigFunction = (
    /** The name of the input field */
    fieldName: string,
    /** The actual file object to send */
    file: ActualFileObject,
    metadata: {[key: string]: any},
    /**
     * Should call the load method when done and pass the returned server file id.
     * This server file id is then used later on when reverting or restoring a file
     * so that your server knows which file to return without exposing that info
     * to the client.
     */
    load: (p: string | {[key: string]: any}) => void,
    /** Can call the error method is something went wrong, should exit after */
    error: (errorText: string) => void,
    /**
     * Should call the progress method to update the progress to 100% before calling load()
     * Setting computable to false switches the loading indicator to infinite mode
     */
    progress: ProgressServerConfigFunction,
    /** Let FilePond know the request has been cancelled */
    abort: () => void
) => void;

type RevertServerConfigFunction = (
    /** Server file id of the file to restore */
    uniqueFieldId: any,
    /** Should call the load method when done */
    load: () => void,
    /** Can call the error method is something went wrong, should exit after */
    error: (errorText: string) => void,
) => void;

type RestoreServerConfigFunction = (
    uniqueFileId: any,
    /** Should call the load method with a file object or blob when done */
    load: (file: ActualFileObject) => void,
    /** Can call the error method is something went wrong, should exit after */
    error: (errorText: string) => void,
    /**
     * Should call the progress method to update the progress to 100% before calling load()
     * Setting computable to false switches the loading indicator to infinite mode
     */
    progress: ProgressServerConfigFunction,
    /** Let FilePond know the request has been cancelled */
    abort: () => void,
    /*
     * Can call the headers method to supply FilePond with early response header string
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
     */
    headers: (headersString: string) => void,
) => void;

type LoadServerConfigFunction = (
    source: any,
    /** Should call the load method with a file object or blob when done */
    load: (file: ActualFileObject) => void,
    /** Can call the error method is something went wrong, should exit after */
    error: (errorText: string) => void,
    /**
     * Should call the progress method to update the progress to 100% before calling load()
     * Setting computable to false switches the loading indicator to infinite mode
     */
    progress: ProgressServerConfigFunction,
    /** Let FilePond know the request has been cancelled */
    abort: () => void,
    /*
     * Can call the headers method to supply FilePond with early response header string
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
     */
    headers: (headersString: string) => void,
) => void;

type FetchServerConfigFunction = (
    url: string,
    /** Should call the load method with a file object or blob when done */
    load: (file: ActualFileObject) => void,
    /** Can call the error method is something went wrong, should exit after */
    error: (errorText: string) => void,
    /**
     * Should call the progress method to update the progress to 100% before calling load()
     * Setting computable to false switches the loading indicator to infinite mode
     */
    progress: ProgressServerConfigFunction,
    /** Let FilePond know the request has been cancelled */
    abort: () => void,
    /*
     * Can call the headers method to supply FilePond with early response header string
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
     */
    headers: (headersString: string) => void,
) => void;

export interface FilePondServerConfigProps {
    instantUpload?: boolean;
    server?: string | {
        process?: string | ServerUrl | ProcessServerConfigFunction;
        revert?: string | ServerUrl | RevertServerConfigFunction;
        restore?: string | ServerUrl | RestoreServerConfigFunction;
        load?: string | ServerUrl | LoadServerConfigFunction;
        fetch?: string | ServerUrl | FetchServerConfigFunction;
    };
}

export interface FilePondDragDropProps {
    /** FilePond will catch all files dropped on the webpage */
    dropOnPage?: boolean;
    /** Require drop on the FilePond element itself to catch the file. */
    dropOnElement?: boolean;
    /**
     * When enabled, files are validated before they are dropped.
     * A file is not added when it’s invalid.
     */
    dropValidation?: boolean;
    /**
     * Ignored file names when handling dropped directories.
     * Dropping directories is not supported on all browsers.
     */
    ignoredFiles?: string[];
}

export interface FilePondLabelProps {
    /**
     * The decimal separator used to render numbers.
     * By default this is determined automatically.
     */
    labelDecimalSeparator?: string;
    /**
     * The thousands separator used to render numbers.
     * By default this is determined automatically.
     */
    labelThousandsSeparator?: string;
    /**
     * Default label shown to indicate this is a drop area.
     * FilePond will automatically bind browse file events to
     * the element with CSS class .filepond--label-action
     */
    labelIdle?: string;
    /** Label used while waiting for file size information */
    labelFileWaitingForSize?: string;
    /** Label used when no file size information was received */
    labelFileSizeNotAvailable?: string;
    /** Label used while loading a file */
    labelFileLoading?: string;
    /** Label used when file load failed */
    labelFileLoadError?: string;
    /** Label used when uploading a file */
    labelFileProcessing?: string;
    /** Label used when file upload has completed */
    labelFileProcessingComplete?: string;
    /** Label used when upload was cancelled */
    labelFileProcessingAborted?: string;
    /** Label used when something went wrong during file upload */
    labelFileProcessingError?: string;
    /** Label used to indicate to the user that an action can be cancelled. */
    labelTapToCancel?: string;
    /** Label used to indicate to the user that an action can be retried. */
    labelTapToRetry?: string;
    /** Label used to indicate to the user that an action can be undone. */
    labelTapToUndo?: string;
    /** Label used for remove button */
    labelButtonRemoveItem?: string;
    /** Label used for abort load button */
    labelButtonAbortItemLoad?: string;
    /** Label used for retry load button */
    labelButtonRetryItemLoad?: string;
    /** Label used for abort upload button */
    labelButtonAbortItemProcessing?: string;
    /** Label used for undo upload button */
    labelButtonUndoItemProcessing?: string;
    /** Label used for retry upload button */
    labelButtonRetryItemProcessing?: string;
    /** Label used for upload button */
    labelButtonProcessItem?: string;
}

export interface FilePondSvgIconProps {
    iconRemove?: string;
    iconProcess?: string;
    iconRetry?: string;
    iconUndo?: string;
}

interface FilePondErrorDescription {
    main: string;
    sub: string;
}

export interface FilePondCallbackProps {
    /** FilePond instance has been created and is ready. */
    oninit?: () => void;
    /**
     * FilePond instance throws a warning. For instance
     * when the maximum amount of files has been reached.
     * Optionally receives file if error is related to a
     * file object
     */
    onwarning?: (error: any, file?: File, status?: any) => void;
    /**
     * FilePond instance throws an error. Optionally receives
     * file if error is related to a file object.
     */
    onerror?: (error: FilePondErrorDescription, file?: File, status?: any) => void;
    /** Started file load */
    onaddfilestart?: (file: File) => void;
    /** Made progress loading a file */
    onaddfileprogress?: (file: File, progress: number) => void;
    /** If no error, file has been successfully loaded */
    onaddfile?: (error: FilePondErrorDescription, file: File) => void;
    /** Started processing a file */
    onprocessfilestart?: (file: File) => void;
    /** Made progress processing a file */
    onprocessfileprogress?: (file: File, progress: number) => void;
    /** Aborted processing of a file */
    onprocessfileabort?: (file: File) => void;
    /** Processing of a file has been undone */
    onprocessfileundo?: (file: File) => void;
    /** If no error, Processing of a file has been completed */
    onprocessfile?: (error: FilePondErrorDescription, file: File) => void;
    /** File has been removed. */
    onremovefile?: (file: File) => void;
    /**
     * File has been transformed by the transform plugin or
     * another plugin subscribing to the prepare_output filter.
     * It receives the file item and the output data.
     */
    onpreparefile?: (file: File, output: any) => void;
    /** A file has been added or removed, receives a list of file items */
    onupdatefiles?: (fileItems: File[]) => void;
}

export interface FilePondHookProps {
    beforeRemoveFile?: (file: File) => boolean;
}

export interface FilePondBaseProps {
    children?: React.ReactElement<File> | Array<React.ReactElement<File>>;
    id?: string;
    name?: string;
    className?: string;
    /** Sets the required attribute to the output field */
    required?: boolean;
    /** Sets the given value to the capture attribute */
    captureMethod?: any;
    /** Enable or disable drag n’ drop */
    allowDrop?: boolean;
    /** Enable or disable file browser */
    allowBrowse?: boolean;
    /**
     * Enable or disable pasting of files. Pasting files is not
     * supported on all browsers.
     */
    allowPaste?: boolean;
    /** Enable or disable adding multiple files */
    allowMultiple?: boolean;
    /** Allow drop to replace a file, only works when allowMultiple is false */
    allowReplace?: boolean;
    /** Allows the user to undo file upload */
    allowRevert?: boolean;
    /** The maximum number of files that the pond can handle */
    maxFiles?: number;
    /** The maximum number of files that can be uploaded in parallel */
    maxParallelUploads?: number;
    /** List of files for controlled usage */
    files?: File[];
    acceptedFileTypes?: string[];
    metadata?: {[key: string]: any};
}

export interface FilePondProps extends
    FilePondDragDropProps,
    FilePondServerConfigProps,
    FilePondLabelProps,
    FilePondSvgIconProps,
    FilePondCallbackProps,
    FilePondHookProps,
    FilePondBaseProps {}

export class FilePond extends React.Component<FilePondProps> {
    setOptions: (options: FilePondProps) => void;
    addFile: (source: File) => void;
    addFiles: (source: File[]) => void;
    removeFile: (query: string) => void;
    removeFiles: () => void;
    processFile: (query: string) => void;
    processFiles: () => void;
    getFile: () => File;
    getFiles: () => File[];
    browse: () => void;
    context: () => void;
}

/** Creates a new FilePond instance */
export function create(element?: any, options?: FilePondProps): void;
/** Destroys the FilePond instance attached to the supplied element */
export function destroy(element: any): void;
/** Returns the FilePond instance attached to the supplied element */
export function find(element: any): FilePond;
/**
 * Parses a given section of the DOM tree for elements with class
 * .filepond and turns them into FilePond elements.
 */
export function parse(context: any): void;
/** Registers a FilePond plugin for later use */
export function registerPlugin(...plugins: any[]): void;
/** Sets page level default options for all FilePond instances */
export function setOptions(options: FilePondProps): void;
/** Returns the current default options */
export function getOptions(): FilePondProps;
/** Determines whether or not the browser supports FilePond */
export function supported(): boolean;
