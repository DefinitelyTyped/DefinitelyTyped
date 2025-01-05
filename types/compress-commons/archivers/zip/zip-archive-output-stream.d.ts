import { CRC32Stream, DeflateCRC32Stream } from "crc32-stream";
import { Stream, TransformOptions } from "readable-stream";

import { Stream as NodeStream } from "node:stream";

// eslint-disable-next-line @definitelytyped/no-bad-reference
import ArchiveOutputStream from "../archive-output-stream.js";
import ZipArchiveEntry from "./zip-archive-entry.js";

export default class ZipArchiveOutputStream extends ArchiveOutputStream {
    _options: TransformOptions;

    _appendBuffer(
        ae: ZipArchiveEntry,
        source?: string | Stream | null,
        callback?: (error: Error | null, ae?: ZipArchiveEntry) => void,
    ): void;
    _appendStream(
        ae: ZipArchiveEntry,
        source?: string | Stream | null,
        callback?: (error: Error | null, ae?: ZipArchiveEntry) => void,
    ): void;
    _finish(): void;
    _normalizeEntry(ae: ZipArchiveEntry): void;

    entry(
        ae: ZipArchiveEntry,
        source?: Buffer | Stream | NodeStream | string | null,
        callback?: (error: Error | null, ae?: ZipArchiveEntry) => void,
    ): this;

    _afterAppend(ae: ZipArchiveEntry): void;

    _smartStream(
        ae: ZipArchiveEntry,
        callback: (error: Error | null, ae?: ZipArchiveEntry) => void,
    ): CRC32Stream | DeflateCRC32Stream;

    _writeCentralDirectoryEnd(): void;
    _writeCentralDirectoryZip64(): void;
    _writeCentralFileHeader(ae: ZipArchiveEntry): void;
    _writeDataDescriptor(ae: ZipArchiveEntry): void;
    _writeLocalFileHeader(ae: ZipArchiveEntry): void;

    setComment(comment: string): void;
    getComment(): string;

    isZip64(): boolean;
}
