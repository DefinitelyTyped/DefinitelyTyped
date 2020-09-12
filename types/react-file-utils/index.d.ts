// Type definitions for react-file-utils 0.3
// Project: https://github.com/GetStream/react-file-utils
// Definitions by: Yurii Skrypets <https://github.com/YurSkr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export type FileLike = Blob | File;
export type UploadState = 'uploading' | 'finished' | 'failed';

export interface UploadInfo {
    id: string;
    url?: string;
    state: UploadState;
}

export interface FileUpload extends UploadInfo {
    file: File;
}

export interface ImageUpload extends UploadInfo {
    file: Blob | File;
    previewUri?: string;
}

export class FilePreviewer extends React.Component<{
    uploads?: FileUpload[];
    handleRemove?: (id: string) => void;
    handleRetry?: (id: string) => void;
    handleFiles?: (files: File[]) => void;
}> {}
export class FileUploadButton extends React.Component<{
    handleFiles?: (files: Blob[]) => void;
    multiple?: boolean;
    children: React.ReactNode;
    disabled?: boolean;
    accepts?: string | string[];
}> {}
export class ImageDropzone extends React.Component<{
    children?: React.ReactNode;
    handleFiles?: (files: ReadonlyArray<FileLike>) => void;
    /** Allow drag 'n' drop (or selection from the file dialog) of multiple files */
    multiple?: boolean;
    /** Enable/disable the dropzone */
    disabled?: boolean;
    /**
     * Set accepted file types. See https://github.com/okonet/attr-accept for more information.
     * Keep in mind that mime type determination is not reliable across platforms.
     * CSV files; for example; are reported as text/plain under macOS but as application/vnd.ms-excel under Windows.
     * In some cases there might not be a mime type set at all.
     *
     * One of type: `string; string[]`
     */
    accept?: string | string[];
}> {}
export class ImagePreviewer extends React.Component<{
    /** The list of image uploads that should be displayed */
    imageUploads?: ImageUpload[];
    /** A callback to call when the remove icon is clicked */
    handleRemove?: (id: string) => void;
    /** A callback to call when the retry icon is clicked */
    handleRetry?: (id: string) => void;
    /**
     * A callback to call with newly selected files
     * If this is not provided no 'ThumbnailPlaceholder' will be displayed
     */
    handleFiles?: (files: File[]) => void;
    /** Allow drag 'n' drop (or selection from the file dialog) of multiple files */
    multiple?: boolean;
    disabled?: boolean;
}> {}
export class ImageUploadButton extends React.Component<{
    handleFiles?: (files: File[]) => void;
    multiple?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
}> {}
export class FileIcon extends React.Component<{
    filename?: string;
    mimeType?: string;
    big?: boolean;
    // Size used for big icon
    size?: number;
}> {}
export class AttachmentIcon extends React.PureComponent {}
export class PictureIcon extends React.PureComponent {}
export class Thumbnail extends React.Component<{
    handleClose?: (id?: string) => void;
    size?: number;
    image?: string;
    id?: string;
    imgSrc?: any;
}> {}
export class ThumbnailPlaceholder extends React.Component<{
    handleFiles?: (files: File[]) => void;
    multiple?: boolean;
}> {}
export class LoadingIndicator extends React.Component<{
    color?: string;
    backgroundColor?: string;
    size?: number;
    width?: number;
}> {}
export class IconButton extends React.Component<{
    children?: React.ReactNode;
    onClick?: (e: React.SyntheticEvent) => void;
}> {}

    /** Functions */
export function dataTransferItemsToFiles(items?: (DataTransferItem[])): Promise<FileLike[]>;
export function dataTransferItemsHaveFiles(items?: (DataTransferItem[])): boolean;
