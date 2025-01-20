/// <reference types="node" />

import { Transform } from "stream";

export = BinarySplit;

/**
 * Split streams of binary data.
 * @param splitOn The matcher for the splitting points in the stream. Default: os.EOL
 */
declare function BinarySplit(
    splitOn?: string | Buffer | ArrayBuffer | SharedArrayBuffer | number[] | BigInt[] | Uint8Array | object,
): Transform;
