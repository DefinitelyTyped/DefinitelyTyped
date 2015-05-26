// Type definitions for JSZip
// Project: http://stuk.github.com/jszip/
// Definitions by: mzeiher <https://github.com/mzeiher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface JSZip {
    /**
     * Get a file from the archive
     *
     * @param Path relative path to file
     * @return File matching path, null if no file found
     */
    file(path: string): JSZipObject;

    /**
     * Get files matching a RegExp from archive
     *
     * @param path RegExp to match
     * @return Return all matching files or an empty array
     */
    file(path: RegExp): JSZipObject[];

    /**
     * Add a file to the archive
     *
     * @param path Relative path to file
     * @param content Content of the file
     * @param options Optional information about the file
     * @return JSZip object
     */
    file(path: string, data: any, options?: JSZipFileOptions): JSZip;

    /**
     * Return an new JSZip instance with the given folder as root
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
    folder(name: RegExp): JSZipObject[];

    /**
     * Get all files wchich match the given filter function
     *
     * @param predicate Filter function
     * @return Array of matched elements
     */
    filter(predicate: (relativePath: string, file: JSZipObject) => boolean): JSZipObject[];

    /**
     * Removes the file or folder from the archive
     * 
     * @param path Relative path of file or folder
     * @return Returns the JSZip instance
     */
    remove(path: string): JSZip;

    /**
     * Generates a new archive
     *
     * @param options Optional options for the generator
     * @return The serialized archive
     */
    generate(options?: JSZipGeneratorOptions): any;

    /**
     * Deserialize zip file
     *
     * @param data Serialized zip file
     * @param options Options for deserializing
     * @return Returns the JSZip instance
     */
    load(data: any, options: JSZipLoadOptions): JSZip;
}

interface JSZipObject {
    name: string;
    dir: boolean;
    date: Date;
    comment: string;
    options: JSZipObjectOptions;

    asText(): string;
    asBinary(): string;
    asArrayBuffer(): ArrayBuffer;
    asUint8Array(): Uint8Array;
    //asNodeBuffer(): Buffer;
}

interface JSZipFileOptions {
    base64?: boolean;
    binary?: boolean;
    date?: Date;
    compression?: string;
    comment?: string;
    optimizedBinaryString?: boolean;
    createFolders?: boolean;
}

interface JSZipObjectOptions {
    /** deprecated */
    base64: boolean;
    /** deprecated */
    binary: boolean;
    /** deprecated */
    dir: boolean;
    /** deprecated */
    date: Date;
    compression: string;
}

interface JSZipGeneratorOptions {
    /** deprecated */
    base64?: boolean;
    /** DEFLATE or STORE */
    compression?: string;
    /** base64 (default), string, uint8array, blob */
    type?: string;
    comment?: string;
}

interface JSZipLoadOptions {
    base64?: boolean;
    checkCRC32?: boolean;
    optimizedBinaryString?: boolean;
    createFolders?: boolean;
}

interface JSZipSupport {
    arraybuffer: boolean;
    uint8array: boolean;
    blob: boolean;
    nodebuffer: boolean;
}

declare var JSZip: {
    /**
     * Create JSZip instance
     */
    (): JSZip;
    /**
     * Create JSZip instance
     * If no parameters given an empty zip archive will be created
     *
     * @param data Serialized zip archive
     * @param options Description of the serialized zip archive
     */
    (data: any, options?: JSZipLoadOptions): JSZip;

    /**
     * Create JSZip instance
     */
    new (): JSZip;
    /**
     * Create JSZip instance
     * If no parameters given an empty zip archive will be created
     *
     * @param data Serialized zip archive
     * @param options Description of the serialized zip archive
     */
    new (data: any, options?: JSZipLoadOptions): JSZip;

    prototype: JSZip;
    support: JSZipSupport;
}

declare module "jszip" {
    export = JSZip;
}
