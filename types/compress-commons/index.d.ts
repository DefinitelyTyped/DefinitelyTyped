/// <reference types="node" />
import ArchiveEntry from "./archivers/archive-entry.js";
import ArchiveOutputStream from "./archivers/archive-output-stream.js";
import ZipArchiveEntry from "./archivers/zip/zip-archive-entry.js";
import ZipArchiveOutputStream from "./archivers/zip/zip-archive-output-stream.js";

export { ArchiveEntry, ArchiveOutputStream, ZipArchiveEntry, ZipArchiveOutputStream };

declare namespace _default {
    export { ArchiveEntry, ArchiveOutputStream, ZipArchiveEntry, ZipArchiveOutputStream };
}

export default _default;
