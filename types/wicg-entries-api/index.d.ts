// Type definitions for non-npm package File and Directory Entries API 2020.08
// Project: https://github.com/WICG/entries-api, https://wicg.github.io/entries-api/
// Definitions by: Henning Kasch <https://github.com/HenningCash>
//                 Ingvar Stepanyan <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ErrorCallback = (err: DOMException) => void;
type FileSystemEntryCallback = (entry: FileSystemEntry) => void;
type FileSystemEntriesCallback = (entries: FileSystemEntry[]) => void;
type FileCallback = (file: File) => void;

interface FileSystemFlags {
    create?: boolean | undefined;
    exclusive?: boolean | undefined;
}

declare global {
    interface FileSystemEntry {
        readonly isFile: boolean;
        readonly isDirectory: boolean;
        readonly name: string;
        readonly fullPath: string;
        readonly filesystem: FileSystem;

        getParent(successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
    }

    interface FileSystemDirectoryEntry extends FileSystemEntry {
        createReader(): FileSystemDirectoryReader;
        getFile(
            path?: string,
            options?: FileSystemFlags,
            successCallback?: FileSystemEntryCallback,
            errorCallback?: ErrorCallback,
        ): void;
        getDirectory(
            path?: string,
            options?: FileSystemFlags,
            successCallback?: FileSystemEntryCallback,
            errorCallback?: ErrorCallback,
        ): void;
    }

    interface FileSystemDirectoryReader {
        readEntries(successCallback: FileSystemEntriesCallback, errorCallback?: ErrorCallback): void;
    }

    interface FileSystemFileEntry extends FileSystemEntry {
        file(successCallback: FileCallback, errorCallback?: ErrorCallback): void;
    }

    interface FileSystem {
        readonly name: string;
        readonly root: FileSystemDirectoryEntry;
    }

    interface File {
        readonly webkitRelativePath: string;
    }

    interface HTMLInputElement {
        webkitdirectory: boolean;
        readonly webkitEntries: ReadonlyArray<FileSystemEntry>;
    }

    interface DataTransferItem {
        webkitGetAsEntry(): FileSystemEntry | null;
    }
}

export {};
