/// <reference types="filesystem" />

export type TextType = "Text" | "BinaryString" | "DataURL";

export interface FSOptions {
    /**
     * Default 1Mb.
     */
    bytes?: number | undefined;
    /**
     * Show request quota popup for PERSISTENT type
     * (for Chrome extensions with `unlimitedStorage` permission it is useful to pass `options.requestQuota = false`)
     */
    requestQuota?: boolean | undefined;
    /** `window.PERSISTENT` | `window.TEMPORARY` */
    type?: number | undefined;
}

export interface StatObject {
    fullPath: string;
    isDirectory: boolean;
    isFile: boolean;
    modificationTime: Date;
    name: string;
    size: number;
}

export interface UsageObject {
    grantedBytes: number;
    usedBytes: number;
}

export interface FileSystemEntryWithChildren extends FileSystemEntry {
    children: FileSystemEntryWithChildren[];
}

/**
 * Appends data to file.
 *
 * If file does not exist - it will be created.
 */
export function appendFile(
    path: string | FileSystemFileEntry,
    data: string | Blob | File | ArrayBuffer,
): Promise<FileSystemFileEntry>;

/**
 * Clears whole filesystem.
 */
export function clear(): Promise<void>;

/**
 * Copies file or entire directory.
 *
 * If file or directory does not exist - error thrown.
 */
export function copy(
    oldPath: string | FileSystemEntry,
    newPath: string,
    options?: {
        /**
         * Create missing directories.
         * @default false
         */
        create?: boolean | undefined;
    },
): Promise<FileSystemEntry>;

/**
 * Create a {@link https://developer.mozilla.org/docs/Web/API/ReadableStream ReadableStream} for reading.
 */
export function createReadStream(path: string | FileSystemFileEntry): Promise<ReadableStream>;

/**
 * Create a {@link https://developer.mozilla.org/docs/Web/API/WritableStream WritableStream} for writing.
 */
export function createWriteStream(path: string | FileSystemFileEntry): Promise<WritableStream>;

/**
 * Checks that file or directory exists by provided path.
 */
export function exists(path: string): Promise<boolean>;

/**
 * Gets file or directory.
 */
export function getEntry(path: string | FileSystemEntry): Promise<FileSystemEntry>;

/**
 * Returns root directory.
 */
export function getRoot(): Promise<FileSystemDirectoryEntry>;

/**
 * Gets URL for path.
 */
export function getUrl(path: string | FileSystemEntry): Promise<string>;

/**
 * Init filesystem.
 */
export function init(options?: FSOptions): Promise<FileSystem>;

/**
 * Is filesystem API supported by current browser.
 */
export function isSupported(): boolean;

/**
 * Recursively creates required directories in provided path.
 */
export function mkdir(path: string): Promise<FileSystemDirectoryEntry>;

/**
 * Reads directory content.
 */
export function readdir(
    path: string | FileSystemDirectoryEntry,
    options?: {
        /**
         * Read recursively and attach data as `children` property.
         * @default false
         */
        deep?: false | undefined;
    },
): Promise<FileSystemEntry[]>;

/**
 * Reads recursively directory content.
 */
export function readdir(
    path: string | FileSystemDirectoryEntry,
    options: {
        /**
         * Read recursively and attach data as `children` property.
         * @default false
         */
        deep: true;
    },
): Promise<FileSystemEntryWithChildren[]>;

/**
 * Reads recursively directory content.
 */
export function readdir(
    path: string | FileSystemDirectoryEntry,
    options: {
        /**
         * Read recursively and attach data as `children` property.
         * @default false
         */
        deep: boolean;
    },
): Promise<(FileSystemEntry | FileSystemEntryWithChildren)[]>;

/**
 * Reads file content.
 *
 * If file does not exist - error thrown.
 */
export function readFile(
    path: string | FileSystemFileEntry,
    options: { type: "ArrayBuffer" },
): Promise<ArrayBuffer>;

/**
 * Reads file content.
 *
 * If file does not exist - error thrown.
 */
export function readFile(
    path: string | FileSystemFileEntry,
    options: { type: "Blob" },
): Promise<Blob>;

/**
 * Reads file content.
 *
 * If file does not exist - error thrown.
 */
export function readFile(
    path: string | FileSystemFileEntry,
    options: { type: "File" },
): Promise<File>;

/**
 * Reads file content.
 *
 * If file does not exist - error thrown.
 */
export function readFile(
    path: string | FileSystemFileEntry,
    options?: { type?: TextType | undefined },
): Promise<string>;

/**
 * Renames file or directory.
 *
 * If source file or directory does not exist - error thrown.
 * If target already exists - it will be overwritten.
 */
export function rename(
    oldPath: string | FileSystemEntry,
    newPath: string,
    options?: {
        /**
         * Create missing directories.
         * @default false
         */
        create?: boolean | undefined;
    },
): Promise<FileSystemEntry>;

/**
 * Removes directory recursively.
 *
 * If directory does not exist - method does nothing without error.
 */
export function rmdir(path: string | FileSystemDirectoryEntry): Promise<boolean>;

/**
 * Gets info about file or directory.
 *
 * If it does not exist - error thrown.
 */
export function stat(path: string | FileSystemEntry): Promise<StatObject>;

/**
 * Removes file.
 *
 * If file does not exist - no error thrown.
 */
export function unlink(path: string | FileSystemFileEntry): Promise<boolean>;

/**
 * Gets used and granted bytes.
 */
export function usage(): Promise<UsageObject>;

/**
 * Writes data to file.
 *
 * If file does not exist - it will be created.
 * If file already exists - it will be overwritten.
 */
export function writeFile(
    path: string | FileSystemFileEntry,
    data: string | Blob | File | ArrayBuffer,
): Promise<FileSystemFileEntry>;
