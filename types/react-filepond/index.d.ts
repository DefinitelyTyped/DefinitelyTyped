// Type definitions for react-filepond 5.0
// Project: https://github.com/pqina/react-filepond
// Definitions by: Zach Posten <https://github.com/zposten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// See the docs for more info on any given prop
// https://pqina.nl/filepond/docs/patterns/api/filepond-instance/#setting-options

import * as React from 'react';

type FilePondOrigin = 'limbo' | 'local';

export interface FilePondFileProps {
    src: string;
    name?: string;
    size?: number;
    type?: string;
    origin?: FilePondOrigin;
}

export class FilePondFile extends React.Component<FilePondFileProps> { }
export { FilePondFile as File };

export interface FilePondItem {
    file: File;
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
    getMetadata: (key: any) => any;
    setMetadata: (key: any, value: any, silent: boolean) => void;
}

interface FilePondDragDropProps {
    dropOnPage?: boolean;
    dropOnElement?: boolean;
    dropValidation?: boolean;
    ignoredFiles?: string[];
}

interface FilePondServerConfigProps {
    server?: string;
    instantUpload?: boolean;
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
    children?: React.ReactElement<FilePondFile> | Array<React.ReactElement<FilePondFile>>;
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
