// Type definitions for binary-split 1.0
// Project: https://github.com/maxogden/binary-split#readme
// Definitions by: Krisztián Balla <https://github.com/krisztianb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/// <reference types="node" />

import { Transform } from 'stream';

export = BinarySplit;

/**
 * Split streams of binary data.
 * @param splitOn The matcher for the splitting points in the stream. Default: os.EOL
 */
declare function BinarySplit(
    splitOn?: string | Buffer | ArrayBuffer | SharedArrayBuffer | number[] | BigInt[] | Uint8Array | object,
): Transform;
