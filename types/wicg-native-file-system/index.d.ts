// Type definitions for non-npm package Native File System API 2020.06
// Project: https://github.com/WICG/native-file-system
// Definitions by: Ingvar Stepanyan <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

interface FilePickerAcceptType {
    description?: string;
    accept: Record<string, string[]>;
}

interface FilePickerOptions {
    types?: FilePickerAcceptType[];
    excludeAcceptAllOption?: boolean;
}

interface OpenFilePickerOptions extends FilePickerOptions {
    multiple?: boolean;
}

// tslint:disable-next-line:no-empty-interface
interface SaveFilePickerOptions extends FilePickerOptions {}

// tslint:disable-next-line:no-empty-interface
interface DirectoryPickerOptions {}

interface FileSystemHandlePermissionDescriptor {
    writable?: boolean;
}

interface FileSystemCreateWritableOptions {
    keepExistingData?: boolean;
}

interface FileSystemGetFileOptions {
    create?: boolean;
}

interface FileSystemGetDirectoryOptions {
    create?: boolean;
}

interface FileSystemRemoveOptions {
    recursive?: boolean;
}

type WriteParams =
    | { type: 'write'; position?: number; data: BufferSource | Blob | string }
    | { type: 'seek'; position: number }
    | { type: 'truncate'; size: number };

type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;

// TODO: remove this once https://github.com/microsoft/TSJS-lib-generator/issues/881 is fixed.
// Native File System API especially needs this method.
interface WritableStream {
    close(): Promise<void>;
}

interface FileSystemWritableFileStream extends WritableStream {
    write(data: FileSystemWriteChunkType): Promise<void>;
    seek(position: number): Promise<void>;
    truncate(size: number): Promise<void>;
}

interface BaseFileSystemHandle {
    readonly isFile: boolean;
    readonly isDirectory: boolean;
    readonly name: string;

    isSameEntry(other: FileSystemHandle): Promise<boolean>;
    queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
    requestPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
}

interface FileSystemFileHandle extends BaseFileSystemHandle {
    readonly isFile: true;
    readonly isDirectory: false;
    isSameEntry(other: FileSystemDirectoryHandle): Promise<false>;

    getFile(): Promise<File>;
    createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
}

interface FileSystemDirectoryHandle extends BaseFileSystemHandle {
    readonly isFile: false;
    readonly isDirectory: true;
    isSameEntry(other: FileSystemFileHandle): Promise<false>;

    getFile(name: string, options?: FileSystemGetFileOptions): Promise<FileSystemFileHandle>;
    getDirectory(name: string, options?: FileSystemGetDirectoryOptions): Promise<FileSystemDirectoryHandle>;
    removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
    resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;

    // Note: iterables below are not yet implemented in Chrome, use getEntries instead.

    [Symbol.asyncIterator](): AsyncIterable<FileSystemHandle>;
    keys(): AsyncIterable<string>;
    values(): AsyncIterable<FileSystemHandle>;
    entries(): AsyncIterable<[string, FileSystemHandle]>;
}

type FileSystemHandle = FileSystemFileHandle | FileSystemDirectoryHandle;

declare function showOpenFilePicker(
    options?: OpenFilePickerOptions & { multiple?: false },
): Promise<[FileSystemFileHandle]>;
declare function showOpenFilePicker(options?: OpenFilePickerOptions): Promise<FileSystemFileHandle[]>;
declare function showSaveFilePicker(options?: SaveFilePickerOptions): Promise<FileSystemFileHandle>;
declare function showDirectoryPicker(options?: DirectoryPickerOptions): Promise<FileSystemDirectoryHandle>;
declare function getOriginPrivateDirectory(): Promise<FileSystemDirectoryHandle>;

// Old methods available on stable Chrome instead of the ones above.

interface ChooseFileSystemEntriesOptionsAccepts {
    description?: string;
    mimeTypes?: string[];
    extensions?: string[];
}

interface ChooseFileSystemEntriesFileOptions {
    accepts?: ChooseFileSystemEntriesOptionsAccepts[];
    excludeAcceptAllOption?: boolean;
}

declare function chooseFileSystemEntries(
    options?: ChooseFileSystemEntriesFileOptions & {
        type?: 'open-file';
        multiple?: false;
    },
): Promise<FileSystemFileHandle>;
declare function chooseFileSystemEntries(
    options: ChooseFileSystemEntriesFileOptions & {
        type?: 'open-file';
        multiple: true;
    },
): Promise<FileSystemFileHandle[]>;
declare function chooseFileSystemEntries(
    options: ChooseFileSystemEntriesFileOptions & {
        type: 'save-file';
    },
): Promise<FileSystemFileHandle>;
declare function chooseFileSystemEntries(options: { type: 'open-directory' }): Promise<FileSystemDirectoryHandle>;

interface GetSystemDirectoryOptions {
    type: 'sandbox';
}

declare const FileSystemDirectoryHandle: {
    getSystemDirectory(options: GetSystemDirectoryOptions): Promise<FileSystemDirectoryHandle>;
};

interface FileSystemDirectoryHandle {
    getEntries(): AsyncIterable<FileSystemHandle>;
}
