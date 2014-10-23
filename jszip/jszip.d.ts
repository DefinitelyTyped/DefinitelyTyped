// Type definitions for JSZip
// Project: http://stuk.github.com/jszip/
// Definitions by: mzeiher <https://github.com/mzeiher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module jszip {
    export interface JSZip {
        /**
         * Get a file from the archive
         *
         * @param Path relative path to file
         * @return File matching path, null if no file found
         */
        file(path: string): JSZipFile;

        /**
         * Get files matching a RegExp from archive
         *
         * @param path RegExp to match
         * @return Return all matching files or an empty array
         */
        file(path: RegExp): JSZipFile[];

        /**
         * Add a file to the archive
         *
         * @param path Relative path to file
         * @param content Content of the file
         * @param options Optional information about the file
         * @return JSZip object
         */
        file(path: string, content: any, options?: JSZipOptions): JSZip;

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
        folder(name: RegExp): JSZipFile[];

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
        load(data: any, options: JSZipOptions): JSZip;

        /**
         * Get all files wchich match the given filter function
         *
         * @param predicate Filter function
         * @return Array of matched elements
         */
        filter(predicate: (relativePath: string, file: JSZipFile) => boolean): JSZipFile[];

        /**
         * Calculate crc32 of given string
         *
         * @param data String to calculate crc32 from
         * @param crc Optional: initializer for crc calc
         * @return Calculated crc32 number
         */
        crc32(data: string, crc?: number): number;

        /**
         * Clone JSSZip instance
         *
         * @return Cloned instsance
         */
        clone(): JSZip;

        /**
         * UTF8 encode a string
         *
         * @param data String to encode
         */
        utf8encode(data: string): string;

        /**
         * UTF8 decode a string
         *
         * @param data String to decode
         */
        utf8decode(data: string): string;

    }

    export interface JSZipSupport {
        arraybuffer: boolean;
        uint8array: boolean;
        blob: boolean;
    }

    export interface JSZipGeneratorOptions {
        base64?: boolean; //deprecated
        compression: string; //DEFLATE or STORE
        type: string; //base64 (default), string, uint8array, blob
    }

    export interface JSZipOptions {
        base64: boolean;
        checkCRC32: boolean;
    }

    export interface JSZipFile {
        name: string;
        data: any;
        options: JSZipFileOptions;

        asText(): string;
        asBinary(): any;
        asArrayBuffer(): ArrayBuffer;
        asUint8Array(): Uint8Array;
    }

    export interface JSZipFileOptions {
        base64: boolean;
        binary: boolean;
        dir: boolean;
        date: Date;
    }

    export interface JSZipBase64 {
    }
}

declare var JSZip: {
    /**
     * Create JSZip instance
     * If no parameters given an empty zip archive will be created
     *
     * @param data Serialized zip archive
     * @param options Description of the serialized zip archive
     */
    new (data?: any, options?: jszip.JSZipOptions): jszip.JSZip;

    prototype: jszip.JSZip;
    support: jszip.JSZipSupport;
}

declare var JSZipBase64: {
    encode(input: string, utf8?: any): string;
    decode(input: string, utf8?: any): string;

    prototype: jszip.JSZipBase64;
}