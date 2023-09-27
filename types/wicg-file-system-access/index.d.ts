// Type definitions for non-npm package File System Access API 2023.10
// Project: https://github.com/WICG/file-system-access
// Definitions by: Ingvar Stepanyan <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.6

export {};

declare global {
    interface FileSystemHandle {
        queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
        requestPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;

        /**
         * @deprecated Old property just for Chromium <=85. Use `kind` property in the new API.
         */
        readonly isFile: boolean;

        /**
         * @deprecated Old property just for Chromium <=85. Use `kind` property in the new API.
         */
        readonly isDirectory: boolean;
    }

    type FileExtension = `.${string}`
    type MIMEType = `${string}/${string}`

    interface FilePickerAcceptType {
        /**
         * @default ""
         */
        description?: string | undefined;
        accept?: Record<MIMEType, FileExtension | FileExtension[]> | undefined;
    }

    /**
     * https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory
     */
    type WellKnownDirectory = "desktop" | "documents" | "downloads" | "music" | "pictures" | "videos"

    interface FilePickerOptions {
        types?: FilePickerAcceptType[] | undefined;
        /**
         * @default false
         */
        excludeAcceptAllOption?: boolean | undefined;
        startIn?: WellKnownDirectory | FileSystemHandle | undefined;
        id?: string | undefined;
    }

    interface OpenFilePickerOptions extends FilePickerOptions {
        /**
         * @default false
         */
        multiple?: boolean | undefined;
    }

    interface SaveFilePickerOptions extends FilePickerOptions {
        suggestedName?: string | undefined;
    }

    type FileSystemPermissionMode = "read" | "readwrite"

    interface DirectoryPickerOptions {
        id?: string | undefined;
        startIn?: WellKnownDirectory | FileSystemHandle | undefined;
        /**
         * @default "read"
         */
        mode?: FileSystemPermissionMode | undefined;
    }

    interface FileSystemPermissionDescriptor extends PermissionDescriptor {
        handle: FileSystemHandle;
        /**
         * @default "read"
         */
        mode?: FileSystemPermissionMode | undefined;
    }

    interface FileSystemHandlePermissionDescriptor {
        /**
         * @default "read"
         */
        mode?: FileSystemPermissionMode | undefined;
    }

    // TODO: Implemented natively in TS 5.1, remove
    interface FileSystemCreateWritableOptions {
        keepExistingData?: boolean;
    }

    interface FileSystemFileHandle extends FileSystemHandle {
        // TODO: Implemented natively in TS 5.1, remove
        createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
        /**
         * @deprecated Old property just for Chromium <=85. Use `kind` property in the new API.
         */
        readonly isFile: true;
        /**
         * @deprecated Old property just for Chromium <=85. Use `kind` property in the new API.
         */
        readonly isDirectory: false;
    }

    interface FileSystemDirectoryHandle extends FileSystemHandle {
        keys(): AsyncIterableIterator<string>;
        values(): AsyncIterableIterator<FileSystemDirectoryHandle | FileSystemFileHandle>;
        entries(): AsyncIterableIterator<[string, FileSystemDirectoryHandle | FileSystemFileHandle]>;
        [Symbol.asyncIterator]: FileSystemDirectoryHandle["entries"];
        /**
         * @deprecated Old property just for Chromium <=85. Use `kind` property in the new API.
         */
        readonly isFile: false;
        /**
         * @deprecated Old property just for Chromium <=85. Use `kind` property in the new API.
         */
        readonly isDirectory: true;
    }

    interface DataTransferItem {
        getAsFileSystemHandle(): Promise<FileSystemHandle | null>;
    }

    function showOpenFilePicker(options?: OpenFilePickerOptions & { multiple?: false | undefined }): Promise<[FileSystemFileHandle]>;
    function showOpenFilePicker(options?: OpenFilePickerOptions): Promise<FileSystemFileHandle[]>;
    function showSaveFilePicker(options?: SaveFilePickerOptions): Promise<FileSystemFileHandle>;
    function showDirectoryPicker(options?: DirectoryPickerOptions): Promise<FileSystemDirectoryHandle>;

    // Old methods available on Chromium 85 instead of the ones above.

    interface ChooseFileSystemEntriesOptionsAccepts {
        description?: string | undefined;
        mimeTypes?: string[] | undefined;
        extensions?: string[] | undefined;
    }

    interface ChooseFileSystemEntriesFileOptions {
        accepts?: ChooseFileSystemEntriesOptionsAccepts[] | undefined;
        excludeAcceptAllOption?: boolean | undefined;
    }

    /**
     * @deprecated Old method just for Chromium <=85. Use `showOpenFilePicker()` in the new API.
     */
    function chooseFileSystemEntries(
        options?: ChooseFileSystemEntriesFileOptions & {
            type?: "open-file" | undefined;
            multiple?: false | undefined;
        },
    ): Promise<FileSystemFileHandle>;
    /**
     * @deprecated Old method just for Chromium <=85. Use `showOpenFilePicker()` in the new API.
     */
    function chooseFileSystemEntries(
        options: ChooseFileSystemEntriesFileOptions & {
            type?: "open-file" | undefined;
            multiple: true;
        },
    ): Promise<FileSystemFileHandle[]>;
    /**
     * @deprecated Old method just for Chromium <=85. Use `showSaveFilePicker()` in the new API.
     */
    function chooseFileSystemEntries(
        options: ChooseFileSystemEntriesFileOptions & {
            type: "save-file";
        },
    ): Promise<FileSystemFileHandle>;
    /**
     * @deprecated Old method just for Chromium <=85. Use `showDirectoryPicker()` in the new API.
     */
    function chooseFileSystemEntries(options: { type: "open-directory" }): Promise<FileSystemDirectoryHandle>;

    interface GetSystemDirectoryOptions {
        type: "sandbox";
    }

    interface FileSystemDirectoryHandle {
        /**
         * @deprecated Old property just for Chromium <=85. Use `.getFileHandle()` in the new API.
         */
        getFile: FileSystemDirectoryHandle["getFileHandle"];

        /**
         * @deprecated Old property just for Chromium <=85. Use `.getDirectoryHandle()` in the new API.
         */
        getDirectory: FileSystemDirectoryHandle["getDirectoryHandle"];

        /**
         * @deprecated Old property just for Chromium <=85. Use `.keys()`, `.values()`, `.entries()`, or the directory itself as an async iterable in the new API.
         */
        getEntries: FileSystemDirectoryHandle["values"];
    }

    interface FileSystemHandlePermissionDescriptor {
        /**
         * @deprecated Old property just for Chromium <=85. Use `mode: ...` in the new API.
         */
        writable?: boolean | undefined;
    }
}
