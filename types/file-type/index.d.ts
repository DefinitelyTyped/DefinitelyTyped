// Type definitions for file-type 10.6
// Project: https://github.com/sindresorhus/file-type
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <https://github.com/tcaesvk>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = FileType;

/**
 * The file type is detected by checking the
 * [magic number](http://en.wikipedia.org/wiki/Magic_number_(programming)#Magic_numbers_in_files) of the buffer.
 *
 * @param buf It only needs the first `.minimumBytes` bytes. The exception is detection of
 *            `docx`, `pptx`, and `xlsx` which potentially requires reading the whole file.
 * @returns an Object with:
 * - ext - One of the [supported file types](https://github.com/sindresorhus/file-type/blob/master/readme.md#supported-file-types)
 * - mime - The [MIME type](http://en.wikipedia.org/wiki/Internet_media_type)
 */
declare function FileType(buf: Buffer | Uint8Array): FileType.FileTypeResult | null;

declare namespace FileType {
    interface FileTypeResult {
        ext: string;
        mime: string;
    }

    /**
     * The minimum amount of bytes needed to detect a file type. Currently,
     * it's 4100 bytes, but it can change, so don't hard-code it.
     */
    const minimumBytes: number;
}
