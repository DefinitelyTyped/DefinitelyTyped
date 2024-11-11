import { CRC32Stream, DeflateCRC32Stream } from "crc32-stream";
import { TransformOptions } from "readable-stream";

// eslint-disable-next-line @definitelytyped/no-bad-reference
import ArchiveEntry from "../archive-entry.js";
// eslint-disable-next-line @definitelytyped/no-bad-reference
import ArchiveOutputStream from "../archive-output-stream.js";

export default class ZipArchiveOutputStream extends ArchiveOutputStream {
    _options: TransformOptions;

    _afterAppend(ae: ArchiveEntry): void;

    _smartStream(
        ae: ArchiveEntry,
        callback: (error: Error, ae: ArchiveEntry) => void,
    ): CRC32Stream | DeflateCRC32Stream;

    _writeCentralDirectoryEnd(): void;
    _writeCentralDirectoryZip64(): void;
    _writeCentralFileHeader(ae: ArchiveEntry): void;
    _writeDataDescriptor(ae: ArchiveEntry): void;
    _writeLocalFileHeader(ae: ArchiveEntry): void;

    setComment(comment: string): void;
    getComment(): string;

    isZip64(): boolean;
}
