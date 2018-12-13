// Type definitions for file-type 5.2
// Project: https://github.com/sindresorhus/file-type
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <https://github.com/tcaesvk>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = FileType;

/**
 * Returns an Object with:
 * - ext - One of the supported file types
 * - mime - The MIME type
 * Or null when no match.
 * @param buf It only needs the first .minimumBytes bytes.The exception is
 * detection of docx, pptx, and xlsx which potentially requires reading
 * the whole file.
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
