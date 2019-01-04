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

type FilePondOrigin = 'limbo' | 'local';

export interface FileProps {
    src: string;
    name?: string;
    size?: number;
    type?: string;
    origin?: FilePondOrigin;
    metadata?: {[key: string]: any};
}

export class File extends React.Component<FileProps> { }

export interface FilePondItem {
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
    abortLoad: () => void;
    abortProcessing: () => void;
    getMetadata: (key?: any) => any;
    setMetadata: (key: any, value: any, silent?: boolean) => void;

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
    dropOnPage?: boolean;
    dropOnElement?: boolean;
    dropValidation?: boolean;
    ignoredFiles?: string[];
}

interface FilePondLabelProps {
    labelDecimalSeparator?: string;
    labelThousandsSeparator?: string;
    labelIdle?: string;
    labelFileWaitingForSize?: string;
    labelFileSizeNotAvailable?: string;
    labelFileLoading?: string;
    labelFileLoadError?: string;
    labelFileProcessing?: string;
    labelFileProcessingComplete?: string;
    labelFileProcessingAborted?: string;
    labelFileProcessingError?: string;
    labelTapToCancel?: string;
    labelTapToRetry?: string;
    labelTapToUndo?: string;
    labelButtonRemoveItem?: string;
    labelButtonAbortItemLoad?: string;
    labelButtonRetryItemLoad?: string;
    labelButtonAbortItemProcessing?: string;
    labelButtonUndoItemProcessing?: string;
    labelButtonRetryItemProcessing?: string;
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
    oninit?: () => void;
    onwarning?: (error: any, file?: FilePondItem, status?: any) => void;
    onerror?: (file?: FilePondItem, error?: FilePondErrorDescription, status?: any) => void;
    onaddfilestart?: (file: FilePondItem) => void;
    onaddfileprogress?: (file: FilePondItem, progress: number) => void;
    onaddfile?: (file: FilePondItem, error: FilePondErrorDescription) => void;
    onprocessfilestart?: (file: FilePondItem) => void;
    onprocessfileprogress?: (file: FilePondItem, progress: number) => void;
    onprocessfileabort?: (file: FilePondItem) => void;
    onprocessfileundo?: (file: FilePondItem) => void;
    onprocessfile?: (file: FilePondItem, error: FilePondErrorDescription) => void;
    onremovefile?: (file: FilePondItem) => void;
    onpreparefile?: (file: FilePondItem, output: any) => void;
    onupdatefiles?: (fileItems: FilePondItem[]) => void;
}

interface FilePondHookProps {
    beforeRemoveFile?: (fileItem: FilePondItem) => boolean;
}

interface FilePondBaseProps {
    children?: React.ReactElement<File> | Array<React.ReactElement<File>>;
    id?: string;
    name?: string;
    className?: string;
    required?: boolean;
    captureMethod?: any;
    allowDrop?: boolean;
    allowBrowse?: boolean;
    allowPaste?: boolean;
    allowMultiple?: boolean;
    allowReplace?: boolean;
    allowRevert?: boolean;
    maxFiles?: number;
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
    addFile: (source: FilePondItem) => void;
    addFiles: (source: FilePondItem[]) => void;
    removeFile: (query: string) => void;
    removeFiles: () => void;
    processFile: (query: string) => void;
    processFiles: () => void;
    getFile: () => FilePondItem;
    getFiles: () => FilePondItem[];
    browse: () => void;
    context: () => void;
}

export function registerPlugin(...plugins: any[]): void;
