// Type definitions for JSZip
// Project: http://stuk.github.com/jszip/
// Definitions by: mzeiher <https://github.com/mzeiher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface JSZip {
    files: {[key: string]: JSZipObject};

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
     * Call a callback function for each entry at this folder level.
     *
     * @param callback function
     */
    forEach(callback: (relativePath: string, file: JSZipObject) => void): void;

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
     * @deprecated since version 3.0
     * @see {@link generateAsync}
     * http://stuk.github.io/jszip/documentation/upgrade_guide.html
     */
    generate(options?: JSZipGeneratorOptions): any;

    /**
     * Generates a new archive asynchronously
     *
     * @param options Optional options for the generator
     * @return The serialized archive
     */
    generateAsync(options?: JSZipGeneratorOptions, onUpdate?: Function): Promise<any>;

    /**
     * @deprecated since version 3.0
     * @see {@link loadAsync}
     * http://stuk.github.io/jszip/documentation/upgrade_guide.html
     */
    load(): void;

    /**
     * Deserialize zip file asynchronously
     *
     * @param data Serialized zip file
     * @param options Options for deserializing
     * @return Returns promise
     */
    loadAsync(data: any, options?: JSZipLoadOptions): Promise<JSZip>;
}

type Serialization = ("string" | "text" | "base64" | "binarystring" | "uint8array" |
                      "arraybuffer" | "blob" | "nodebuffer");

interface JSZipObject {
    name: string;
    dir: boolean;
    date: Date;
    comment: string;
    options: JSZipObjectOptions;

    /**
     * Prepare the content in the asked type.
     * @param {String} type the type of the result.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Promise the promise of the result.
     */
    async(type: Serialization, onUpdate?: Function): Promise<any>;

    /**
     * @deprecated since version 3.0
     */
    asText(): void;
    /**
     * @deprecated since version 3.0
     */
    asBinary(): void;
    /**
     * @deprecated since version 3.0
     */
    asArrayBuffer(): void;
    /**
     * @deprecated since version 3.0
     */
    asUint8Array(): void;
    //asNodeBuffer(): void;
}

interface JSZipFileOptions {
    base64?: boolean;
    binary?: boolean;
    date?: Date;
    compression?: string;
    comment?: string;
    optimizedBinaryString?: boolean;
    createFolders?: boolean;
    dir?: boolean;
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
    /** base64 (default), string, uint8array, arraybuffer, blob */
    type?: string;
    comment?: string;
    /**
     * mime-type for the generated file.
     * Useful when you need to generate a file with a different extension, ie: “.ods”.
     */
    mimeType?: string;
    /** streaming uses less memory */
    streamFiles?: boolean;
    /** DOS (default) or UNIX */
    platform?: string;
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
