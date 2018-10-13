// Type definitions for bro-fs 0.4
// Project: https://github.com/vitalets/bro-fs#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="filesystem" />

export type TextType = 'Text' | 'BinaryString' | 'DataURL';

export interface FSOptions {
    bytes?: number;
    /**
     * show request quota popup for PERSISTENT type
     * (for Chrome extensions with `unlimitedStorage` permission it is useful to pass `options.requestQuota = false`)
     */
    requestQuota?: boolean;
    /** `window.PERSISTENT` | `window.TEMPORARY` */
    type?: number;
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

export function appendFile(path: string | FileEntry, data: string |  Blob | File | ArrayBuffer): Promise<FileSystem>;
export function clear(): Promise<undefined[]>;
export function copy(oldPath: string | FileEntry, newPath: string, options?: {create?: boolean}): Promise<FileEntry>;
export function exists(path: string): Promise<boolean>;
export function getEntry(path: FileEntry): Promise<FileEntry>;
export function getRoot(): Promise<DirectoryEntry>;
export function getUrl(path: string | FileEntry): Promise<string>;
export function init(options?: FSOptions): Promise<FileSystem>;
export function isSupported(): boolean;
export function mkdir(path: string): Promise<DirectoryEntry>;
export function readdir(path: string | DirectoryEntry, options?: {deep?: boolean}): Promise<FileEntry[]>;
export function readFile(path: string | FileEntry, options: {type: 'ArrayBuffer'}): Promise<ArrayBuffer>;
export function readFile(path: string | FileEntry, options?: {type?: TextType}): Promise<string>;
export function rename(oldPath: string | FileEntry, newPath: string,  options?: {create?: boolean}): Promise<FileEntry>;
export function rmdir(path: string | DirectoryEntry): Promise<boolean>;
export function stat(path: string | FileEntry): Promise<StatObject>;
export function unlink(path: string | FileEntry): Promise<boolean>;
export function usage(): Promise<UsageObject>;
export function writeFile(path: string, data: string | Blob | File | ArrayBuffer): Promise<FileEntry>;
