/// <reference types="node" />

export as namespace PizZip;

export = PizZip;

declare class PizZip {
    /**
     * If the browser supports them, PizZip can take advantage of some "new" features : ArrayBuffer, Blob, Uint8Array.
     * To know if PizZip can use them, you can check the PizZip.support object.
     */
    static support: {
        /**
         * true if PizZip can read and generate ArrayBuffer, false otherwise.
         */
        arraybuffer: boolean;
        /**
         * true if PizZip can read and generate Uint8Array, false otherwise.
         */
        uint8array: boolean;
        /**
         * true if PizZip can read and generate Blob, false otherwise.
         */
        blob: boolean;
        /**
         * true if PizZip can read and generate nodejs Buffer, false otherwise.
         */
        nodebuffer: boolean;
    };

    /**
     * the ZipObjects inside the zip with the name as key.
     */
    files: { [key: string]: PizZip.ZipObject };

    /**
     * the comment of the zip file.
     */
    comment: string;

    constructor();

    /**
     * Specifying data & options is a shortcut for new PizZip().load(data, options);
     *
     * @param data the zip file
     * @param options the options to load the zip file
     */
    // tslint:disable-next-line unified-signatures new (undefined, {options}) is not an acceptable input
    constructor(data: PizZip.LoadData, options?: PizZip.LoadOptions);

    /**
     * Read an existing zip and merge the data in the current PizZip object at the current folder level.
     * This technique has some limitations, see https://github.com/open-xml-templating/pizzip/blob/master/documentation/limitations.md
     * You shouldn't update the data given to this method : it is kept as it so any update will impact the stored data.
     * Throws an exception if the loaded data is not valid zip data or if it uses features (multi volume, password protected, etc).
     * @param data the zip file
     * @param options the options to load the zip file
     */
    load(data: PizZip.LoadData, options?: PizZip.LoadOptions): this;

    /**
     * Add (or update) a file to the zip file.
     * You shouldn't update the data given to this method : it is kept as it so any update will impact the stored data.
     * Throws an exception if the data is not in a supported format.
     * @param name the name of the file. You can specify folders in the name : the folder separator is a forward slash ("/").
     * @param data the content of the file.
     * @param options the options.
     */
    file(name: string, data: PizZip.Data, options?: PizZip.FileOptions): this;

    /**
     * Get a file with the specified name. You can specify folders in the name : the folder separator is a forward slash ("/").
     * @param name the name of the file.
     */
    file(name: string): PizZip.ZipObject | null;

    /**
     * Search a file in the current folder and subfolders with a regular expression. The regex is tested against the relative filename.
     * @param regex the regex to use.
     */
    file(regex: RegExp): PizZip.ZipObject[];

    /**
     * Filter nested files/folders with the specified function. The predicate must return true if the file should be included, false otherwise.
     * @param predicate the predicate to use.
     */
    filter(
        predicate: (
            /**
             * the filename and its path, reliatively to the current folder.
             */
            relativePath: string,
            /**
             * the file being tested
             */
            file: PizZip.ZipObject,
        ) => boolean,
    ): PizZip.ZipObject[];

    /**
     * Create a directory if it doesn't exist, return a new PizZip object with the new folder as root.
     * @param name the name of the directory.
     */
    folder(name: string): this;

    /**
     * Search a subdirectory in the current directory with a regular expression. The regex is tested against the relative path.
     * @param regex the regex to use.
     */
    folder(regex: RegExp): PizZip.ZipObject[];

    /**
     * Generates the complete zip file.
     * Throws an exception if the asked type is not available in the browser,
     * see https://github.com/open-xml-templating/pizzip/blob/master/documentation/api_pizzip/support.md
     * @param options the options to generate the zip file
     */
    generate(options?: PizZip.GenerateOptions & { type?: "string" | "base64" | undefined }): string;
    generate(options: PizZip.GenerateOptions & { type: "blob" }): Blob;
    generate(options: PizZip.GenerateOptions & { type: "nodebuffer" }): Buffer;
    generate(options: PizZip.GenerateOptions & { type: "arraybuffer" }): ArrayBuffer;
    generate(options: PizZip.GenerateOptions & { type: "uint8array" }): Uint8Array;

    /**
     * Delete a file or folder (recursively).
     * @param name the name of the file/folder to delete.
     */
    remove(name: string): this;
}

declare namespace PizZip {
    type Compression = "STORE" | "DEFLATE";
    type Data = string | ArrayBuffer | Uint8Array | Buffer;
    type LoadData = Data | number[];

    interface ZipObject {
        /**
         * the absolute path of the file
         */
        name: string;
        /**
         * true if this is a directory
         */
        dir: boolean;
        /**
         * the last modification date
         */
        date: Date;
        /**
         * the comment for this file
         */
        comment: string;
        /**
         * The UNIX permissions of the file, if any. Also accepts a string representing the octal value : "644", "755", etc. On nodejs you can use the mode attribute of nodejs' fs.Stats.
         */
        unixPermissions: number | string;
        /**
         * The DOS permissions of the file, if any.
         */
        dosPermissions: number;
        /**
         * the options of the file.
         */
        options: {
            /**
             * @deprecated
             */
            base64: boolean;
            /**
             * @deprecated
             */
            binary: boolean;
            /**
             * @deprecated use File.dir
             */
            dir: boolean;
            /**
             * @deprecated use File.date
             */
            date: Date;
            compression: Compression;
        };

        /**
         * the content as an unicode string.
         */
        asText(): string;

        /**
         * the content as binary string.
         */
        asBinary(): string;

        /**
         * need a compatible browser. https://github.com/open-xml-templating/pizzip/blob/master/documentation/api_pizzip/support.md
         */
        asArrayBuffer(): ArrayBuffer;

        /**
         * need a compatible browser. https://github.com/open-xml-templating/pizzip/blob/master/documentation/api_pizzip/support.md
         */
        asUint8Array(): Uint8Array;

        /**
         * need nodejs. https://github.com/open-xml-templating/pizzip/blob/master/documentation/api_pizzip/support.md
         */
        asNodeBuffer(): Buffer;
    }

    interface LoadOptions {
        /**
         * set to true if the data is base64 encoded, false for binary.
         *
         * @default false
         */
        base64?: boolean | undefined;
        /**
         * set to true if the read data should be checked against its CRC32.
         *
         * @default false
         */
        checkCRC32?: boolean | undefined;
        /**
         * set to true if (and only if) the input is a string and has already been prepared with a 0xFF mask.
         *
         * @default false
         */
        optimizedBinaryString?: boolean | undefined;
        /**
         * set to true to create folders in the file path automatically. Leaving it false will result in only virtual folders
         * (i.e. folders that merely represent part of the file path) being created.
         *
         * @default false
         */
        createFolders?: boolean | undefined;
        /**
         * the function to decode the file name / comment. Decodes from UTF-8 by default.
         * A zip file has a flag to say if the filename and comment are encoded with UTF-8.
         * If it's not set, PizZip has no way to know the encoding used. It usually is the default encoding of the operating system.
         * The function takes the bytes array (Uint8Array or Array) and returns the decoded string.
         */
        decodeFileName?(bytes: Uint8Array | number[]): string;
    }

    interface FileOptions {
        /**
         * set to `true` if the data is base64 encoded. For example image data from a `<canvas>` element. Plain text and HTML do not need this option.
         * @default false
         */
        base64?: boolean | undefined;
        /**
         * set to `true` if the data should be treated as raw content, `false` if this is a text. If base64 is used, this defaults to `true`,
         * if the data is not a string, this will be set to `true`.
         * @default false
         */
        binary?: boolean | undefined;
        /**
         * the last modification date. defaults to the current date
         */
        date?: Date | undefined;
        /**
         * If set, specifies compression method to use for this specific file. If not, the default file compression will be used (no compression)
         * @default "STORE"
         */
        compression?: Compression | undefined;
        /**
         * With `STORE` (no compression), this parameter is ignored.
         * With `DEFLATE`, you can give the compression level with `compressionOptions : {level:6}` (or any level between 1 (best speed) and 9 (best compression)).
         */
        compressionOptions?:
            | {
                level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
            }
            | null
            | undefined;
        /**
         * The comment for this file.
         * the zip format has no flag or field to give the encoding of this field and PizZip will use UTF-8.
         * With non ASCII characters you might get encoding issues if the file archiver doesn't use UTF-8 to decode the comment.
         * If not set, PizZip will use the field comment on its options.
         * @default null
         */
        comment?: string | null | undefined;
        /**
         * Set to true if (and only if) the input is a "binary string" and has already been prepared with a 0xFF mask.
         * @default false
         */
        optimizedBinaryString?: boolean | undefined;
        /**
         * Set to true if folders in the file path should be automatically created,
         * otherwise there will only be virtual folders that represent the path to the file.
         * @default false
         */
        createFolders?: boolean | undefined;
        /**
         * The UNIX permissions of the file, if any. Also accepts a string representing the octal value : "644", "755", etc.
         * On nodejs you can use the `mode` attribute of nodejs' fs.Stats.
         * @default null
         */
        unixPermissions?: number | string | null | undefined;
        /**
         * The DOS  permissions of the file, if any.
         * @default null
         */
        dosPermissions?: number | null | undefined;
        /**
         * Set to true if this is a directory and content should be ignored.
         * If true or if a permission says it's a folder, this entry be flagged as a folder and the content will be ignored.
         * @default false
         */
        dir?: boolean | undefined;
    }

    interface GenerateOptions {
        /**
         * @deprecated use `type` instead. If `type` is not used, set to `false` to get the result as a raw byte string, `true` to encode it as base64.
         * @default false
         */
        base64?: boolean | undefined;
        /**
         * the default file compression method to use. Available methods are `STORE` and `DEFLATE`. You can also provide your own compression method.
         * @default "STORE"
         */
        compression?: Compression | undefined;
        /**
         * the options to use when compressing the file. With `STORE` (no compression), this parameter is ignored.
         * With `DEFLATE`, you can give the compression level with `compressionOptions : {level:6}`
         * (or any level between 1 (best speed) and 9 (best compression)).
         *
         * Note : if the entry is already compressed (coming from a compressed zip file),
         * calling `generate()` with a different compression level won't update the entry.
         * The reason is simple : PizZip doesn't know how compressed the content was and how to match the compression level with the implementation we use.
         */
        compressionOptions?:
            | {
                level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
            }
            | null
            | undefined;
        /**
         * The type of zip to return. Note : when using type = "uint8array", "arraybuffer" or "blob",
         * be sure to check if the browser supports it (you can use PizZip.support)
         *
         * `base64` : the result will be a string, the binary in a base64 form.
         *
         * `string` : the result will be a string in "binary" form, using 1 byte per char (2 bytes).
         *
         * `uint8array` : the result will be a Uint8Array containing the zip. This requires a compatible browser.
         *
         * `arraybuffer` : the result will be a ArrayBuffer containing the zip. This requires a compatible browser.
         *
         * `blob` : the result will be a Blob containing the zip. This requires a compatible browser.
         *
         * `nodebuffer` : the result will be a nodejs Buffer containing the zip. This requires nodejs.
         *
         * @default "base64"
         */
        type?: "base64" | "string" | "uint8array" | "arraybuffer" | "blob" | "nodebuffer" | undefined;
        /**
         * The comment to use for the zip file.
         */
        comment?: string | undefined;
        /**
         * mime-type for the generated file. Useful when you need to generate a file with a different extension, ie: ".ods".
         *
         * @default "application/zip"
         */
        mimeType?: string | undefined;
        /**
         * The platform to use when generating the zip file. When using `DOS`, the attribute `dosPermissions` of each file is used.
         * When using `UNIX`, the attribute `unixPermissions` of each file is used.
         * If you set the platform value on nodejs, be sure to use `process.platform`.
         * `fs.stats` returns a non executable mode for folders on windows,
         * if you force the platform to `UNIX` the generated zip file will have a strange behavior on UNIX platforms.
         * @default "DOS"
         */
        platform?: "DOS" | "UNIX" | NodeJS.Platform | undefined;
        /**
         * the function to encode the file name / comment.
         * By default, PizZip uses UTF-8 to encode the file names / comments. You can use this method to force an other encoding.
         * Note : the encoding used is not stored in a zip file, not using UTF-8 may lead to encoding issues.
         * The function takes a string and returns a bytes array (Uint8Array or Array).
         */
        encodeFileName?(name: string): Buffer;
    }
}
