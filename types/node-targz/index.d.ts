import type { PathLike } from "fs";
import type { ExtractOptions, PackOptions } from "tar-fs";

export interface CompressOptions {
    source: string;
    /** Options to pass down to tar-fs */
    options?: PackOptions | undefined;
    level?: number | undefined;
    memLevel?: number | undefined;
    destination: PathLike;
}

export interface DecompressOptions {
    source: PathLike;
    destination: string;
    /** Options to pass down to tar-fs */
    options?: ExtractOptions | undefined;
}

export function compress(options: CompressOptions, cb: (error: Error | null) => void): void;

export function decompress(options: DecompressOptions, cb: (error: Error | null) => void): void;
