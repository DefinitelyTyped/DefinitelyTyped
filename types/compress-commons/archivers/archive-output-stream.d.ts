import { Stream, Transform } from "readable-stream";

import { Stream as NodeStream } from "node:stream";

import ArchiveEntry from "./archive-entry.js";
import ZipArchiveEntry from "./zip/zip-archive-entry.js";

/** @abstract */
export default class ArchiveOutputStream extends Transform {
    _archive: { finish: boolean; finished: boolean; processing: boolean };

    _appendBuffer(
        ae: ArchiveEntry,
        source?: string | Stream | null,
        callback?: (error: Error | null, ae?: ArchiveEntry) => void,
    ): void;
    _appendStream(
        ae: ArchiveEntry,
        source?: string | Stream | null,
        callback?: (error: Error | null, ae?: ArchiveEntry) => void,
    ): void;
    _emitErrorCallback(err: Error): void;
    _finish(ae: ArchiveEntry): void;
    _normalizeEntry(ae: ArchiveEntry): void;

    entry(
        ae: ArchiveEntry,
        source?: Buffer | Stream | NodeStream | string | null,
        callback?: (error: Error | null, ae?: ArchiveEntry) => void,
    ): this;
    finish(): void;
    getBytesWritten(): number;
}
