import * as tar from "tar-fs";
import * as zlib from "zlib";

export interface options {
    src: string;
    dest: string;
    tar?: tar.ExtractOptions | undefined;
    gz?: zlib.ZlibOptions | undefined;
}

export function compress(opts?: options, callback?: (error: Error | string | null) => void): void;
export function decompress(opts?: options, callback?: (error: Error | string | null) => void): void;
