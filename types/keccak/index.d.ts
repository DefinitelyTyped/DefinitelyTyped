// Type definitions for keccak 3.0
// Project: https://github.com/cryptocoinjs/keccak#readme
// Definitions by: odan <https://github.com/odanado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform, TransformOptions } from 'stream';
export class Keccak extends Transform {
    constructor(
        rate: number,
        capacity: number,
        delimitedSuffix: number | null,
        hashBitLength: number,
        options: TransformOptions,
    );
    update(data: string | Buffer, encoding?: BufferEncoding): Keccak;
    digest(): Buffer;
    digest(encoding: BufferEncoding): string;
}

export class Shake extends Transform {
    constructor(rate: number, capacity: number, delimitedSuffix: number | null, options: TransformOptions);
    update(data: string | Buffer, encoding?: BufferEncoding): Shake;
    squeeze(dataByteLength: number): Buffer;
    squeeze(dataByteLength: number, encoding: BufferEncoding): string;
}

export type KeccakAlgorithm = 'keccak224' | 'keccak256' | 'keccak384' | 'keccak512';
export type Sha3Algorithm = 'sha3-224' | 'sha3-256' | 'sha3-384' | 'sha3-512';
export type ShakeAlgorithm = 'shake128' | 'shake256';

declare function create(algorithm: KeccakAlgorithm | Sha3Algorithm, options?: TransformOptions): Keccak;

declare function create(algorithm: ShakeAlgorithm, options?: TransformOptions): Shake;

export default create;
