import { Stream, Transform } from "readable-stream";

import ArchiveEntry from "./archive-entry.js";
import ZipArchiveEntry from "./zip/zip-archive-entry.js";

/** @abstract */
export default class ArchiveOutputStream extends Transform {
    _archive: { finish: boolean; finished: boolean; processing: boolean };

    _appendBuffer(zae: ZipArchiveEntry, source?: string | Stream | null, callback?: (error: Error) => void): void;
    _appendStream(zae: ZipArchiveEntry, source?: string | Stream | null, callback?: (error: Error) => void): void;
    _emitErrorCallback(err: Error): void;
    _finish(ae: ArchiveEntry): void;
    _normalizeEntry(ae: ArchiveEntry): void;

    entry(ae: ArchiveEntry, source?: string | Stream | null, callback?: (error: Error) => void): this;
    finish(): void;
    getBytesWritten(): number;
}
