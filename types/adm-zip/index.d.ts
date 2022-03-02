// Type definitions for adm-zip 0.5
// Project: https://github.com/cthackers/adm-zip
// Definitions by: John Vilk <https://github.com/jvilk>
//                 Abner Oliveira <https://github.com/abner>
//                 BendingBender <https://github.com/BendingBender>
//                 Matthew Sainsbury <https://github.com/mattsains>
//                 Lei Nelissen <https://github.com/LeiNelissen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as FS from 'fs';

declare class AdmZip {
    /**
     * @param fileNameOrRawData If provided, reads an existing archive. Otherwise creates a new, empty archive.
     * @param options Options when initializing the ZIP file
     */
    constructor(fileNameOrRawData?: string | Buffer, options?: Partial<AdmZip.InitOptions>);
    /**
     * Extracts the given entry from the archive and returns the content as a Buffer object
     * @param entry ZipEntry object or String with the full path of the entry
     * @param pass Password used for decrypting the file
     * @return Buffer or Null in case of error
     */
    readFile(entry: string | AdmZip.IZipEntry, pass?: string | Buffer): Buffer | null;
    /**
     * Asynchronous `readFile`.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param callback Called with a `Buffer` or `null` in case of error.
     */
    readFileAsync(entry: string | AdmZip.IZipEntry, callback: (data: Buffer | null, err: string) => void): void;
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
        callback: (data: string, err: string) => void,
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
     * @param comment Comment to be attached to the file
     */
    addLocalFile(localPath: string, zipPath?: string, zipName?: string, comment?: string): void;
    /**
     * Adds a local directory and all its nested files and directories to the
     * archive.
     * @param localPath Path to a folder on disk.
     * @param zipPath Path to a folder in the archive. Default: `""`.
     * @param filter RegExp or Function if files match will be included.
     */
    addLocalFolder(localPath: string, zipPath?: string, filter?: RegExp | ((filename: string) => boolean)): void;
    /**
     * Asynchronous addLocalFile
     * @param localPath
     * @param callback
     * @param zipPath optional path inside zip
     * @param filter optional RegExp or Function if files match will
     *    be included.
     */
    addLocalFolderAsync(
        localPath: string,
        callback: (success?: boolean, err?: string) => void,
        zipPath?: string,
        filter?: RegExp | ((filename: string) => boolean)
    ): void;
    /**
     *
     * @param localPath - path where files will be extracted
     * @param props - optional properties
     * @param props.zipPath - optional path inside zip
     * @param props.filter - RegExp or Function if files match will be included.
     */
    addLocalFolderPromise(
        localPath: string,
        props: { zipPath?: string, filter?: RegExp | ((filename: string) => boolean) }
    ): Promise<void>;
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
    addFile(entryName: string, content: Buffer, comment?: string, attr?: number): void;
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
    getEntry(name: string): AdmZip.IZipEntry | null;
    /**
     * Returns the number of entries in the ZIP
     * @return The amount of entries in the ZIP
     */
    getEntryCount(): number;
    /**
     * Loop through each entry in the ZIP
     * @param callback The callback that receives each individual entry
     */
    forEach(callback: (entry: AdmZip.IZipEntry) => void): void;
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
     * @param keepOriginalPermission The file will be set as the permission from
     *   the entry if this is true. Default: `false`.
     * @param outFileName String If set will override the filename of the
     *   extracted file (Only works if the entry is a file)
     * @return Boolean
     */
    extractEntryTo(
        entryPath: string | AdmZip.IZipEntry,
        targetPath: string,
        maintainEntryPath?: boolean,
        overwrite?: boolean,
        keepOriginalPermission?: boolean,
        outFileName?: string,
    ): boolean;
    /**
     * Test the archive
     * @param password The password for the archive
     */
    test(password?: string | Buffer): boolean;
    /**
     * Extracts the entire archive to the given location.
     * @param targetPath Target location.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     * @param keepOriginalPermission The file will be set as the permission from
     *   the entry if this is true. Default: `false`.
     * @param password The password for the archive
     */
    extractAllTo(
        targetPath: string,
        overwrite?: boolean,
        keepOriginalPermission?: boolean,
        password?: string | Buffer
    ): void;
    /**
     * Extracts the entire archive to the given location.
     * @param targetPath Target location.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     * @param keepOriginalPermission The file will be set as the permission from
     *   the entry if this is true. Default: `false`.
     * @param callback The callback function will be called after extraction.
     */
    extractAllToAsync(
        targetPath: string,
        overwrite?: boolean,
        keepOriginalPermission?: boolean,
        callback?: (error?: Error) => void,
    ): void;
    /**
     * Writes the newly created zip file to disk at the specified location or
     * if a zip was opened and no `targetFileName` is provided, it will
     * overwrite the opened zip.
     */
    writeZip(targetFileName?: string, callback?: (error: Error | null) => void): void;
    /**
     * Writes the newly created zip file to disk at the specified location or
     * if a zip was opened and no `targetFileName` is provided, it will
     * overwrite the opened zip.
     */
    writeZipPromise(
        targetFileName?: string,
        props?: { overwrite?: boolean, perm?: number }
    ): Promise<boolean>;
    /**
     * Returns the content of the entire zip file.
     */
    toBuffer(): Buffer;
    /**
     * Asynchronously returns the content of the entire zip file.
     * @param onSuccess called with the content of the zip file, once it has been generated.
     * @param onFail unused.
     * @param onItemStart called before an entry is compressed.
     * @param onItemEnd called after an entry is compressed.
     */
    toBuffer(
        onSuccess: (buffer: Buffer) => void,
        onFail?: (...args: any[]) => void,
        onItemStart?: (name: string) => void,
        onItemEnd?: (name: string) => void,
    ): void;
    /**
     * Asynchronously convert the promise to a Buffer
     */
    toBufferPromise(): Promise<Buffer>;
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
        readonly header: EntryHeader;
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
        getDataAsync(callback: (data: Buffer, err: string) => void): void;
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

    interface EntryHeader {
        made: number;
        version: number;
        flags: number;
        method: number;
        time: Date;
        crc: number;
        compressedSize: number;
        size: number;
        fileNameLength: number;
        extraLength: number;
        commentLength: number;
        diskNumStart: number;
        inAttr: number;
        attr: number;
        offset: number;
        readonly encripted: boolean;
        readonly entryHeaderSize: number;
        readonly realDataOffset: number;
        readonly dataHeader: DataHeader;
        loadDataHeaderFromBinary(data: Buffer): void;
        loadFromBinary(data: Buffer): void;
        dataHeaderToBinary(): Buffer;
        entryHeaderToBinary(): Buffer;
        toString(): string;
    }

    interface DataHeader {
        version: number;
        flags: number;
        method: number;
        time: number;
        crc: number;
        compressedSize: number;
        size: number;
        fnameLen: number;
        extraLen: number;
    }

    interface Constants {
        /* The local file header */
        LOCHDR: 30; // LOC header size
        LOCSIG: 0x04034b50; // "PK\003\004"
        LOCVER: 4;	// version needed to extract
        LOCFLG: 6; // general purpose bit flag
        LOCHOW: 8; // compression method
        LOCTIM: 10; // modification time (2 bytes time, 2 bytes date)
        LOCCRC: 14; // uncompressed file crc-32 value
        LOCSIZ: 18; // compressed size
        LOCLEN: 22; // uncompressed size
        LOCNAM: 26; // filename length
        LOCEXT: 28; // extra field length

        /* The Data descriptor */
        EXTSIG: 0x08074b50; // "PK\007\008"
        EXTHDR: 16; // EXT header size
        EXTCRC: 4; // uncompressed file crc-32 value
        EXTSIZ: 8; // compressed size
        EXTLEN: 12; // uncompressed size

        /* The central directory file header */
        CENHDR: 46; // CEN header size
        CENSIG: 0x02014b50; // "PK\001\002"
        CENVEM: 4; // version made by
        CENVER: 6; // version needed to extract
        CENFLG: 8; // encrypt, decrypt flags
        CENHOW: 10; // compression method
        CENTIM: 12; // modification time (2 bytes time, 2 bytes date)
        CENCRC: 16; // uncompressed file crc-32 value
        CENSIZ: 20; // compressed size
        CENLEN: 24; // uncompressed size
        CENNAM: 28; // filename length
        CENEXT: 30; // extra field length
        CENCOM: 32; // file comment length
        CENDSK: 34; // volume number start
        CENATT: 36; // internal file attributes
        CENATX: 38; // external file attributes (host system dependent)
        CENOFF: 42; // LOC header offset

        /* The entries in the end of central directory */
        ENDHDR: 22; // END header size
        ENDSIG: 0x06054b50; // "PK\005\006"
        ENDSUB: 8; // number of entries on this disk
        ENDTOT: 10; // total number of entries
        ENDSIZ: 12; // central directory size in bytes
        ENDOFF: 16; // offset of first CEN header
        ENDCOM: 20; // zip file comment length

        END64HDR: 20; // zip64 END header size
        END64SIG: 0x07064b50; // zip64 Locator signature, "PK\006\007"
        END64START: 4; // number of the disk with the start of the zip64
        END64OFF: 8; // relative offset of the zip64 end of central directory
        END64NUMDISKS: 16; // total number of disks

        ZIP64SIG: 0x06064b50; // zip64 signature, "PK\006\006"
        ZIP64HDR: 56; // zip64 record minimum size
        ZIP64LEAD: 12; // leading bytes at the start of the record, not counted by the value stored in ZIP64SIZE
        ZIP64SIZE: 4; // zip64 size of the central directory record
        ZIP64VEM: 12; // zip64 version made by
        ZIP64VER: 14; // zip64 version needed to extract
        ZIP64DSK: 16; // zip64 number of this disk
        ZIP64DSKDIR: 20; // number of the disk with the start of the record directory
        ZIP64SUB: 24; // number of entries on this disk
        ZIP64TOT: 32; // total number of entries
        ZIP64SIZB: 40; // zip64 central directory size in bytes
        ZIP64OFF: 48; // offset of start of central directory with respect to the starting disk number
        ZIP64EXTRA: 56; // extensible data sector

        /* Compression methods */
        STORED: 0; // no compression
        SHRUNK: 1; // shrunk
        REDUCED1: 2; // reduced with compression factor 1
        REDUCED2: 3; // reduced with compression factor 2
        REDUCED3: 4; // reduced with compression factor 3
        REDUCED4: 5; // reduced with compression factor 4
        IMPLODED: 6; // imploded
        // 7 reserved for Tokenizing compression algorithm
        DEFLATED: 8; // deflated
        ENHANCED_DEFLATED: 9; // enhanced deflated
        PKWARE: 10; // PKWare DCL imploded
        // 11 reserved by PKWARE
        BZIP2: 12; //  compressed using BZIP2
        // 13 reserved by PKWARE
        LZMA: 14; // LZMA
        // 15-17 reserved by PKWARE
        IBM_TERSE: 18; // compressed using IBM TERSE
        IBM_LZ77: 19; // IBM LZ77 z
        AES_ENCRYPT: 99; // WinZIP AES encryption method

        /* General purpose bit flag */
        // values can obtained with expression 2**bitnr
        FLG_ENC: 1;  // Bit 0: encrypted file
        FLG_COMP1: 2;  // Bit 1, compression option
        FLG_COMP2: 4;  // Bit 2, compression option
        FLG_DESC: 8;  // Bit 3, data descriptor
        FLG_ENH: 16; // Bit 4, enhanced deflating
        FLG_PATCH: 32; // Bit 5, indicates that the file is compressed patched data.
        FLG_STR: 64; // Bit 6, strong encryption (patented)
        // Bits 7-10: Currently unused.
        FLG_EFS: 2048; // Bit 11: Language encoding flag (EFS)
        // Bit 12: Reserved by PKWARE for enhanced compression.
        // Bit 13: encrypted the Central Directory (patented).
        // Bits 14-15: Reserved by PKWARE.
        FLG_MSK: 4096; // mask header values

        /* Load type */
        FILE: 2;
        BUFFER: 1;
        NONE: 0;

        /* 4.5 Extensible data fields */
        EF_ID: 0;
        EF_SIZE: 2;

        /* Header IDs */
        ID_ZIP64: 0x0001;
        ID_AVINFO: 0x0007;
        ID_PFS: 0x0008;
        ID_OS2: 0x0009;
        ID_NTFS: 0x000a;
        ID_OPENVMS: 0x000c;
        ID_UNIX: 0x000d;
        ID_FORK: 0x000e;
        ID_PATCH: 0x000f;
        ID_X509_PKCS7: 0x0014;
        ID_X509_CERTID_F: 0x0015;
        ID_X509_CERTID_C: 0x0016;
        ID_STRONGENC: 0x0017;
        ID_RECORD_MGT: 0x0018;
        ID_X509_PKCS7_RL: 0x0019;
        ID_IBM1: 0x0065;
        ID_IBM2: 0x0066;
        ID_POSZIP: 0x4690;

        EF_ZIP64_OR_32: 0xffffffff;
        EF_ZIP64_OR_16: 0xffff;
        EF_ZIP64_SUNCOMP: 0;
        EF_ZIP64_SCOMP: 8;
        EF_ZIP64_RHO: 16;
        EF_ZIP64_DSN: 24;
    }

    interface InitOptions {
        /* If true it disables files sorting */
        noSort: boolean;
        /* Read entries during load (initial loading may be slower) */
        readEntries: boolean;
        /* Read method */
        method: keyof Constants;
        /* file system */
        fs: null | typeof FS;
    }
}

export = AdmZip;
