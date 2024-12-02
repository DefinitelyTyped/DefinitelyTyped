/// <reference types="node" />
import { ZipArchiveEntry, ZipArchiveOutputStream } from "compress-commons";
import { Stream, TransformOptions } from "readable-stream";

import { Stream as NodeStream } from "node:stream";
import { ZlibOptions } from "node:zlib";

export interface ZipStreamOptions extends TransformOptions {
    /**
     * Prepends a forward slash to archive file paths
     * @default false
     */
    namePrependSlash?: boolean | undefined;
    /** Sets the zip archive comment */
    comment?: string | undefined;
    /**
     * Forces archive to use local file times instead of UTC
     * @default false
     */
    forceLocalTime?: boolean | undefined;
    /**
     * Forces the archive to have Zip64 headers
     * @default false
     */
    forceZip64?: boolean | undefined;
    /**
     * Sets the compression method to STORE
     * @default false
     */
    store?: boolean | undefined;
    /**
     * Options passed to Zlib
     * @see {@link ZlibOptions}
     */
    zlib?: ZlibOptions | undefined;
    /** @see {@link ZlibOptions.level} */
    level?: number | undefined;
}

export interface FileDataInput {
    /** Entry type. Defaults to `directory` if name ends with forward slash */
    type?: "file" | "directory" | "symlink" | undefined;
    /** Entry name, including internal path */
    name?: string | null | undefined;
    namePrependSlash?: boolean | undefined;
    linkname?: string | null | undefined;
    /** Sets the entry date. Defaults to current date */
    date?: string | Date | null | undefined;
    /** Sets the entry permissions. Defaults to D:0755/F:0644 */
    mode?: number | null | undefined;
    /** Sets the compression method to STORE */
    store?: boolean | undefined;
    /** Sets the entry comment */
    comment?: string | undefined;
}

export interface FileDataNormalized {
    type: "file" | "directory" | "symlink";
    name: string | null;
    namePrependSlash: boolean;
    linkname: string | null;
    date: Date | null;
    store: boolean;
    comment: string;
}

export default class ZipStream extends ZipArchiveOutputStream {
    constructor(options?: ZipStreamOptions);

    _normalizeFileData(data: FileDataInput): FileDataNormalized;

    // @ts-expect-error TS2416 since overrided function signature is incompatible with extended class
    entry(
        source?: Buffer | Stream | NodeStream | string | null,
        data?: FileDataInput,
        callback?: (err: Error | null, ae?: ZipArchiveEntry) => void,
    ): this | undefined;

    finalize(): void;
}
