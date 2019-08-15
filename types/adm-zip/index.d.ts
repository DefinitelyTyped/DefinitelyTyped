// Type definitions for adm-zip 0.4
// Project: https://github.com/cthackers/adm-zip
// Definitions by: John Vilk <https://github.com/jvilk>
//                 Abner Oliveira <https://github.com/abner>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare class AdmZip {
    /**
     * @param fileNameOrRawData If provided, reads an existing archive. Otherwise creates a new, empty archive.
     */
    constructor(fileNameOrRawData?: string | Buffer);
    /**
     * Extracts the given entry from the archive and returns the content.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @return `Buffer` or `null` in case of error.
     */
    readFile(entry: string | AdmZip.IZipEntry): Buffer | null;
    /**
     * Asynchronous `readFile`.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param callback Called with a `Buffer` or `null` in case of error.
     */
    readFileAsync(
        entry: string | AdmZip.IZipEntry,
        callback: (data: Buffer | null, err: string) => any
    ): void;
    /**
     * Extracts the given entry from the archive and returns the content as
     * plain text in the given encoding.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param encoding If no encoding is specified `"utf8"` is used.
     */
    readAsText(fileName: string | AdmZip.IZipEntry, encoding?: string): string;
    /**
     * Asynchronous `readAsText`.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param callback Called with the resulting string.
     * @param encoding If no encoding is specified `"utf8"` is used.
     */
    readAsTextAsync(
        fileName: string | AdmZip.IZipEntry,
        callback: (data: string) => any,
        encoding?: string
    ): void;
    /**
     * Remove the entry from the file or the entry and all its nested directories
     * and files if the given entry is a directory.
     * @param entry The full path of the entry or a `IZipEntry` object.
     */
    deleteFile(entry: string | AdmZip.IZipEntry): void;
    /**
     * Adds a comment to the zip. The zip must be rewritten after
     * adding the comment.
     * @param comment Content of the comment.
     */
    addZipComment(comment: string): void;
    /**
     * @return The zip comment.
     */
    getZipComment(): string;
    /**
     * Adds a comment to a specified file or `IZipEntry`. The zip must be rewritten after
     * adding the comment.
     * The comment cannot exceed 65535 characters in length.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param comment The comment to add to the entry.
     */
    addZipEntryComment(entry: string | AdmZip.IZipEntry, comment: string): void;
    /**
     * Returns the comment of the specified entry.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @return The comment of the specified entry.
     */
    getZipEntryComment(entry: string | AdmZip.IZipEntry): string;
    /**
     * Updates the content of an existing entry inside the archive. The zip
     * must be rewritten after updating the content.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param content The entry's new contents.
     */
    updateFile(entry: string | AdmZip.IZipEntry, content: Buffer): void;
    /**
     * Adds a file from the disk to the archive.
     * @param localPath Path to a file on disk.
     * @param zipPath Path to a directory in the archive. Defaults to the empty
     *   string.
     * @param zipName Name for the file.
     */
    addLocalFile(localPath: string, zipPath?: string, zipName?: string): void;
    /**
     * Adds a local directory and all its nested files and directories to the
     * archive.
     * @param localPath Path to a folder on disk.
     * @param zipPath Path to a folder in the archive. Default: `""`.
     * @param filter RegExp or Function if files match will be included.
     */
    addLocalFolder(
        localPath: string,
        zipPath?: string,
        filter?: RegExp | ((filename: string) => boolean)
    ): void;
    /**
     * Allows you to create a entry (file or directory) in the zip file.
     * If you want to create a directory the `entryName` must end in `"/"` and a `null`
     * buffer should be provided.
     * @param entryName Entry path.
     * @param content Content to add to the entry; must be a 0-length buffer
     *   for a directory.
     * @param comment Comment to add to the entry.
     * @param attr Attribute to add to the entry.
     */
    addFile(entryName: string, data: Buffer, comment?: string, attr?: number): void;
    /**
     * Returns an array of `IZipEntry` objects representing the files and folders
     * inside the archive.
     */
    getEntries(): AdmZip.IZipEntry[];
    /**
     * Returns a `IZipEntry` object representing the file or folder specified by `name`.
     * @param name Name of the file or folder to retrieve.
     * @return The entry corresponding to the `name`.
     */
    getEntry(name: string): AdmZip.IZipEntry;
    /**
     * Extracts the given entry to the given `targetPath`.
     * If the entry is a directory inside the archive, the entire directory and
     * its subdirectories will be extracted.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param targetPath Target folder where to write the file.
     * @param maintainEntryPath If maintainEntryPath is `true` and the entry is
     *   inside a folder, the entry folder will be created in `targetPath` as
     *   well. Default: `true`.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     */
    extractEntryTo(
        entryPath: string | AdmZip.IZipEntry,
        targetPath: string,
        maintainEntryPath?: boolean,
        overwrite?: boolean
    ): boolean;
    /**
     * Extracts the entire archive to the given location.
     * @param targetPath Target location.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     */
    extractAllTo(targetPath: string, overwrite?: boolean): void;
    /**
     * Extracts the entire archive to the given location.
     * @param targetPath Target location.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     * @param callback The callback function will be called after extraction.
     */
    extractAllToAsync(
        targetPath: string,
        overwrite?: boolean,
        callback?: (error: Error) => void
    ): void;
    /**
     * Writes the newly created zip file to disk at the specified location or
     * if a zip was opened and no `targetFileName` is provided, it will
     * overwrite the opened zip.
     */
    writeZip(targetFileName?: string, callback?: (error: Error | null) => void): void;
    /**
     * Returns the content of the entire zip file.
     */
    toBuffer(): Buffer;
}

declare namespace AdmZip {
    /**
     * The `IZipEntry` is more than a structure representing the entry inside the
     * zip file. Beside the normal attributes and headers a entry can have, the
     * class contains a reference to the part of the file where the compressed
     * data resides and decompresses it when requested. It also compresses the
     * data and creates the headers required to write in the zip file.
     */
    // disable warning about the I-prefix in interface name to prevent breaking stuff for users without a major bump
    // tslint:disable-next-line:interface-name
    interface IZipEntry {
        /**
         * Represents the full name and path of the file
         */
        entryName: string;
        readonly rawEntryName: Buffer;
        /**
         * Extra data associated with this entry.
         */
        extra: Buffer;
        /**
         * Entry comment.
         */
        comment: string;
        readonly name: string;
        /**
         * Read-Only property that indicates the type of the entry.
         */
        readonly isDirectory: boolean;
        /**
         * Get the header associated with this ZipEntry.
         */
        header: Buffer;
        attr: number;
        /**
         * Retrieve the compressed data for this entry. Note that this may trigger
         * compression if any properties were modified.
         */
        getCompressedData(): Buffer;
        /**
         * Asynchronously retrieve the compressed data for this entry. Note that
         * this may trigger compression if any properties were modified.
         */
        getCompressedDataAsync(callback: (data: Buffer) => void): void;
        /**
         * Set the (uncompressed) data to be associated with this entry.
         */
        setData(value: string | Buffer): void;
        /**
         * Get the decompressed data associated with this entry.
         */
        getData(): Buffer;
        /**
         * Asynchronously get the decompressed data associated with this entry.
         */
        getDataAsync(callback: (data: Buffer) => void): void;
        /**
         * Returns the CEN Entry Header to be written to the output zip file, plus
         * the extra data and the entry comment.
         */
        packHeader(): Buffer;
        /**
         * Returns a nicely formatted string with the most important properties of
         * the ZipEntry.
         */
        toString(): string;
    }
}

export = AdmZip;
