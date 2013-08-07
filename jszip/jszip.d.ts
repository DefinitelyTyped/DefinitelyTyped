// Type definitions for JSZip
// Project: http://stuk.github.com/jszip/
// Definitions by: mzeiher <https://github.com/mzeiher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module jszip {
    export interface JSZip {
        /**
         * Get a file from the archive
         *
         * @param path {string} relative path to file
         *
         * @return {JSZipFile} file matching path, null if no file found
         */
        file(path: string): JSZipFile;

        /**
         * Get files matching a RegExp from archive
         *
         * @param path {RegExp} RegExp to match
         *
         * @return {JSZipFile[]} return all matching files or an empty array
         */
        file(path: RegExp): JSZipFile[];

        /**
         * Add a file to the archive
         *
         * @param path {string} relative path to file
         * @param content {any} content of the file
         * @param options {JSZipOptions} optional information about the file
         *
         * @return {JSZip} JSZip object
         */
        file(path: string, content: any, options?: JSZipOptions): JSZip;

        /**
         * Return an new JSZip instance with the given folder as root
         * 
         * @param name {string} name of the folder
         *
         * @return {JSZip} new JSZip object with the given folder as root or null
         */
        folder(name: string): JSZip;

        /**
         * Returns new JSZip instances with the matching folders as root
         * 
         * @param name {RegExp} RegExp to match
         *
         * @return {JSZipFile[]} new array of JSZipFile objects which match the RegExp
         */
        folder(name: RegExp): JSZipFile[];

        /**
         * Removes the file or folder from the archive
         * 
         * @param path {string} relative path of file or folder
         * 
         * @return {JSZip} returns the JSZip instance
         */
        remove(path: string): JSZip;

        /**
         * Generates a new archive
         *
         * @param options {JSZipGeneratorOptions} optional options for the generator
         * 
         * @return {any} the serialized archive
         */
        generate(options?: JSZipGeneratorOptions): any;

        /**
         * Deserialize zip file
         *
         * @param data {any} serialized zip file
         * @param options {JSZipOptions} options for deserializing
         *
         * @return {JSZip} returns the JSZip instance
         */
        load(data: any, options: JSZipOptions): JSZip;

        /**
         * Get all files wchich match the given filter function
         *
         * @param {function} filter function
         *
         * @return {JSZipFile[]} array of matched elements
         */
        filter(predicate: (relativePath: string, file: JSZipFile) => boolean): JSZipFile[];

        /**
         * Calculate crc32 of given string
         *
         * @param data {string} string to calculate crc32 from
         * @param crc {number} optional: initializer for crc calc
         *
         * @return {number} calculated crc32 number
         */
        crc32(data: string, crc?: number): number;

        /**
         * Clone JSSZip instance
         *
         * return {JSZip} cloned instsance
         */
        clone(): JSZip;

        /**
         * UTF8 encode a string
         *
         * @param data {string} string to encode
         */
        utf8encode(data: string): string;

        /**
         * UTF8 decode a string
         *
         * @param data {string} string to decode
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
     * @param data {any} serialized zip archive
     * @param options {JSZipOptions} description of the serialized zip archive
     */
	new(data?: any, options?: jszip.JSZipOptions): jszip.JSZip;

    prototype: jszip.JSZip;
    support : jszip.JSZipSupport;
}

declare var JSZipBase64: {
    encode(input: string, utf8?: any): string;
    decode(input: string, utf8?: any): string;

    prototype: jszip.JSZipBase64;
}