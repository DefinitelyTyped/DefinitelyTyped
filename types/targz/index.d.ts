/// <reference types="node" />

import tar = require("tar-fs");
import zlib = require("zlib");

export interface CompressOptions {
    src: string;
    dest: string;
    tar?: tar.PackOptions | undefined;
    gz?: zlib.ZlibOptions | undefined;
}

export interface DecompressOptions {
    src: string;
    dest: string;
    tar?: tar.ExtractOptions | undefined;
    gz?: zlib.ZlibOptions | undefined;
}

export function compress(
    opts?: CompressOptions,
    callback?: (error?: Error | string | null | undefined) => void,
): void;

export function decompress(
    opts?: DecompressOptions,
    callback?: (error?: Error | string | null | undefined) => void,
): void;
