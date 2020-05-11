// Type definitions for blake2 4.0
// Project: https://github.com/vrza/node-blake2
// Definitions by: Antoine Beauvais-Lacasse <https://github.com/beaulac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Transform, TransformOptions } from 'stream';
import { HexBase64Latin1Encoding } from 'crypto';

export interface Blake2Options extends TransformOptions {
    digestLength: number;
}

export type Blake2Algorithm = 'blake2b' | 'blake2bp' | 'blake2s' | 'blake2sp' | 'bypass';

export class Hash extends Transform {
    constructor(algorithm: Blake2Algorithm, options?: Blake2Options);

    update(buf: Buffer): this;

    digest(encoding: HexBase64Latin1Encoding): string;
    digest(): Buffer;

    copy(): this;
}

export function createHash(algorithm: Blake2Algorithm, options?: Blake2Options): Hash;

export class KeyedHash extends Transform {
    constructor(algorithm: Blake2Algorithm, key: Buffer, options?: Blake2Options);

    update(buf: Buffer): this;

    digest(encoding: HexBase64Latin1Encoding): string;
    digest(): Buffer;

    copy(): this;
}

export function createKeyedHash(algorithm: Blake2Algorithm, key: Buffer, options?: Blake2Options): KeyedHash;
