// Type definitions for JSZip 3.1
// Project: http://stuk.github.com/jszip/
// Definitions by: mzeiher <https://github.com/mzeiher>, forabi <https://github.com/forabi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

interface JSZipSupport {
    arraybuffer: boolean;
    uint8array: boolean;
    blob: boolean;
    nodebuffer: boolean;
}

type Compression = 'STORE' | 'DEFLATE';

interface Metadata  {
    percent: number;
    currentFile: string;
}

type OnUpdateCallback = (metadata: Metadata) => void;

interface InputByType {
    base64: string;
    string: string;
    text: string;
    binarystring: string;
    array: number[];
    uint8array: Uint8Array;
    arraybuffer: ArrayBuffer;
    blob: Blob;
}

interface OutputByType {
    base64: string;
    text: string;
    binarystring: string;
    array: number[];
    uint8array: Uint8Array;
    arraybuffer: ArrayBuffer;
    blob: Blob;
    nodebuffer: Buffer;
}

type InputFileFormat = InputByType[keyof InputByType] | NodeJS.ReadableStream;

declare namespace JSZip {
    type InputType = keyof InputByType;

    type OutputType = keyof OutputByType;

    interface JSZipObject {
        name: string;
        dir: boolean;
        date: Date;
        comment: string;
        /** The UNIX permissions of the file, if any. */
        unixPermissions: number | string | null;
        /** The UNIX permissions of the file, if any. */
        dosPermissions: number | null;
        options: JSZipObjectOptions;

        /**
         * Prepare the content in the asked type.
         * @param type the type of the result.
         * @param onUpdate a function to call on each internal update.
         * @return Promise the promise of the result.
         */
        async<T extends OutputType>(type: T, onUpdate?: OnUpdateCallback): Promise<OutputByType[T]>;
        nodeStream(type?: 'nodestream', onUpdate?: OnUpdateCallback): NodeJS.ReadableStream;
    }

    interface JSZipFileOptions {
        /** Set to `true` if the data is `base64` encoded. For example image data from a `<canvas>` element. Plain text and HTML do not need this option. */
        base64?: boolean;
        /**
         * Set to `true` if the data should be treated as raw content, `false` if this is a text. If `base64` is used,
         * this defaults to `true`, if the data is not a `string`, this will be set to `true`.
         */
        binary?: boolean;
        /**
         * The last modification date, defaults to the current date.
         */
        date?: Date;
        compression?: string;
        comment?: string;
        /** Set to `true` if (and only if) the input is a "binary string" and has already been prepared with a `0xFF` mask. */
        optimizedBinaryString?: boolean;
        /** Set to `true` if folders in the file path should be automatically created, otherwise there will only be virtual folders that represent the path to the file. */
        createFolders?: boolean;
        /** Set to `true` if this is a directory and content should be ignored. */
        dir?: boolean;

        /** 6 bits number. The DOS permissions of the file, if any. */
        dosPermissions?: number | null;
        /**
         * 16 bits number. The UNIX permissions of the file, if any.
         * Also accepts a `string` representing the octal value: `"644"`, `"755"`, etc.
         */
        unixPermissions?: number | string | null;
    }

    interface JSZipObjectOptions {
        compression: Compression;
    }

    interface JSZipGeneratorOptions<T extends OutputType = OutputType> {
        compression?: Compression;
        compressionOptions?: null | {
            level: number;
        };
        type?: T;
        comment?: string;
        /**
         * mime-type for the generated file.
         * Useful when you need to generate a file with a different extension, ie: “.ods”.
         * @default 'application/zip'
         */
        mimeType?: string;
        encodeFileName?(filename: string): string;
        /** Stream the files and create file descriptors */
        streamFiles?: boolean;
        /** DOS (default) or UNIX */
        platform?: 'DOS' | 'UNIX';
    }

    interface JSZipLoadOptions {
        base64?: boolean;
        checkCRC32?: boolean;
        optimizedBinaryString?: boolean;
        createFolders?: boolean;
    }
}

interface JSZip {
    files: {[key: string]: JSZip.JSZipObject};

    /**
     * Get a file from the archive
     *
     * @param Path relative path to file
     * @return File matching path, null if no file found
     */
    file(path: string): JSZip.JSZipObject;

    /**
     * Get files matching a RegExp from archive
     *
     * @param path RegExp to match
     * @return Return all matching files or an empty array
     */
    file(path: RegExp): JSZip.JSZipObject[];

    /**
     * Add a file to the archive
     *
     * @param path Relative path to file
     * @param data Content of the file
     * @param options Optional information about the file
     * @return JSZip object
     */
    file<T extends JSZip.InputType>(path: string, data: InputByType[T] | Promise<InputByType[T]>, options?: JSZip.JSZipFileOptions): this;
    file<T extends JSZip.InputType>(path: string, data: null, options?: JSZip.JSZipFileOptions & { dir: true }): this;

    /**
     * Returns an new JSZip instance with the given folder as root
     *
     * @param name Name of the folder
     * @return New JSZip object with the given folder as root or null
     */
    folder(name: string): JSZip;

    /**
     * Returns new JSZip instances with the matching folders as root
     *
     * @param name RegExp to match
     * @return New array of JSZipFile objects which match the RegExp
     */
    folder(name: RegExp): JSZip.JSZipObject[];

    /**
     * Call a callback function for each entry at this folder level.
     *
     * @param callback function
     */
    forEach(callback: (relativePath: string, file: JSZip.JSZipObject) => void): void;

    /**
     * Get all files which match the given filter function
     *
     * @param predicate Filter function
     * @return Array of matched elements
     */
    filter(predicate: (relativePath: string, file: JSZip.JSZipObject) => boolean): JSZip.JSZipObject[];

    /**
     * Removes the file or folder from the archive
     *
     * @param path Relative path of file or folder
     * @return Returns the JSZip instance
     */
    remove(path: string): JSZip;

    /**
     * Generates a new archive asynchronously
     *
     * @param options Optional options for the generator
     * @param onUpdate The optional function called on each internal update with the metadata.
     * @return The serialized archive
     */
    generateAsync<T extends JSZip.OutputType>(options?: JSZip.JSZipGeneratorOptions<T>, onUpdate?: OnUpdateCallback): Promise<OutputByType[T]>;

    /**
     * Generates a new archive asynchronously
     *
     * @param options Optional options for the generator
     * @param onUpdate The optional function called on each internal update with the metadata.
     * @return A Node.js `ReadableStream`
     */
    generateNodeStream(options?: JSZip.JSZipGeneratorOptions<'nodebuffer'>, onUpdate?: OnUpdateCallback): NodeJS.ReadStream;

    /**
     * Deserialize zip file asynchronously
     *
     * @param data Serialized zip file
     * @param options Options for deserializing
     * @return Returns promise
     */
    loadAsync(data: InputFileFormat, options?: JSZip.JSZipLoadOptions): Promise<JSZip>;

    /**
     * Create JSZip instance
     */

    /**
     * Create JSZip instance
     * If no parameters given an empty zip archive will be created
     *
     * @param data Serialized zip archive
     * @param options Description of the serialized zip archive
     */
    new (data?: InputFileFormat, options?: JSZip.JSZipLoadOptions): this;

    (): JSZip;

    prototype: JSZip;
    support: JSZipSupport;
    external: {
        Promise: PromiseConstructorLike;
    };
    version: string;
}

declare var JSZip: JSZip;

export = JSZip;
