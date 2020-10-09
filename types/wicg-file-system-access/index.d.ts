// Type definitions for non-npm package File System Access API 2020.09
// Project: https://github.com/WICG/file-system-access
// Definitions by: Ingvar Stepanyan <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

interface FilePickerAcceptType {
    description?: string;
    accept: Record<string, string | string[]>;
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

type FileSystemPermissionMode = 'read' | 'readwrite';

interface FileSystemPermissionDescriptor extends PermissionDescriptor {
    handle: FileSystemHandle;
    mode?: FileSystemPermissionMode;
}

interface FileSystemHandlePermissionDescriptor {
    mode?: FileSystemPermissionMode;
}

type FileSystemHandleKind = 'file' | 'directory';

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

declare class FileSystemWritableFileStream extends WritableStream {
    write(data: FileSystemWriteChunkType): Promise<void>;
    seek(position: number): Promise<void>;
    truncate(size: number): Promise<void>;
}

declare class BaseFileSystemHandle {
    protected constructor();

    readonly kind: FileSystemHandleKind;
    readonly name: string;

    isSameEntry(other: FileSystemHandle): Promise<boolean>;
    queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
    requestPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
}

declare class FileSystemFileHandle extends BaseFileSystemHandle {
    readonly kind: 'file';

    getFile(): Promise<File>;
    createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
}

declare class FileSystemDirectoryHandle extends BaseFileSystemHandle {
    readonly kind: 'directory';

    getFileHandle(name: string, options?: FileSystemGetFileOptions): Promise<FileSystemFileHandle>;
    getDirectoryHandle(name: string, options?: FileSystemGetDirectoryOptions): Promise<FileSystemDirectoryHandle>;
    removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
    resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;

    keys(): AsyncIterableIterator<string>;
    values(): AsyncIterableIterator<FileSystemHandle>;
    entries(): AsyncIterableIterator<[string, FileSystemHandle]>;
    [Symbol.asyncIterator]: FileSystemDirectoryHandle['entries'];

    // Old method available on stable Chrome instead of `navigator.storage.getDirectory`.
    static getSystemDirectory(options: GetSystemDirectoryOptions): Promise<FileSystemDirectoryHandle>;
}

interface DataTransferItem {
    getAsFileSystemHandle(): Promise<FileSystemHandle | null>;
}

interface StorageManager {
    getDirectory(): Promise<FileSystemDirectoryHandle>;
}

type FileSystemHandle = FileSystemFileHandle | FileSystemDirectoryHandle;

declare function showOpenFilePicker(
    options?: OpenFilePickerOptions & { multiple?: false },
): Promise<[FileSystemFileHandle]>;
declare function showOpenFilePicker(options?: OpenFilePickerOptions): Promise<FileSystemFileHandle[]>;
declare function showSaveFilePicker(options?: SaveFilePickerOptions): Promise<FileSystemFileHandle>;
declare function showDirectoryPicker(options?: DirectoryPickerOptions): Promise<FileSystemDirectoryHandle>;

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

interface BaseFileSystemHandle {
    readonly isFile: this['kind'] extends 'file' ? true : false;
    readonly isDirectory: this['kind'] extends 'directory' ? true : false;
}

interface FileSystemDirectoryHandle {
    getFile: FileSystemDirectoryHandle['getFileHandle'];
    getDirectory: FileSystemDirectoryHandle['getDirectoryHandle'];
    getEntries: FileSystemDirectoryHandle['values'];
}

interface FileSystemHandlePermissionDescriptor {
    writable?: boolean;
}
