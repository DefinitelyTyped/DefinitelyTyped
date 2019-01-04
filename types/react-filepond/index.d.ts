// Type definitions for react-filepond 5.0
// Project: https://github.com/pqina/react-filepond
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

export class File extends React.Component<FileProps> {
    // Note that this duplicates the JS File type declaration, but is necessary
    // to avoid duplicating the name 'File' in this module
    // see: https://developer.mozilla.org/en-US/docs/Web/API/File
    // see: https://github.com/Microsoft/dtslint/issues/173
    // see: https://stackoverflow.com/q/53876793/2517147
    file: Blob & {readonly lastModified: number; readonly name: string};
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

interface FilePondServerConfigProps {
    instantUpload?: boolean;
    server?: string | {
        process: string | ServerUrl;
        revert: string | ServerUrl;
        restore: string | ServerUrl;
        load: string | ServerUrl;
        fetch: string | ServerUrl;
    };
}

interface FilePondDragDropProps {
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

interface FilePondLabelProps {
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

interface FilePondSvgIconProps {
    iconRemove?: string;
    iconProcess?: string;
    iconRetry?: string;
    iconUndo?: string;
}

interface FilePondErrorDescription {
    main: string;
    sub: string;
}

/**
 * Note that in my testing, callbacks that include an error prop
 * always give the error as the second prop, with the file as
 * the first prop.    This is contradictory to the current docs.
 */
interface FilePondCallbackProps {
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
    onerror?: (file?: File, error?: FilePondErrorDescription, status?: any) => void;
    /** Started file load */
    onaddfilestart?: (file: File) => void;
    /** Made progress loading a file */
    onaddfileprogress?: (file: File, progress: number) => void;
    /** If no error, file has been successfully loaded */
    onaddfile?: (file: File, error: FilePondErrorDescription) => void;
    /** Started processing a file */
    onprocessfilestart?: (file: File) => void;
    /** Made progress processing a file */
    onprocessfileprogress?: (file: File, progress: number) => void;
    /** Aborted processing of a file */
    onprocessfileabort?: (file: File) => void;
    /** Processing of a file has been undone */
    onprocessfileundo?: (file: File) => void;
    /** If no error, Processing of a file has been completed */
    onprocessfile?: (file: File, error: FilePondErrorDescription) => void;
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

interface FilePondHookProps {
    beforeRemoveFile?: (file: File) => boolean;
}

interface FilePondBaseProps {
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
