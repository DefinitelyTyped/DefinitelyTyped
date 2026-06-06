/// <reference types="node" />

import { Transform, TransformOptions } from "stream";

declare namespace createHash {
    class Keccak extends Transform {
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

    class Shake extends Transform {
        constructor(rate: number, capacity: number, delimitedSuffix: number | null, options: TransformOptions);
        update(data: string | Buffer, encoding?: BufferEncoding): Shake;
        squeeze(dataByteLength: number): Buffer;
        squeeze(dataByteLength: number, encoding: BufferEncoding): string;
    }

    type KeccakAlgorithm = "keccak224" | "keccak256" | "keccak384" | "keccak512";
    type Sha3Algorithm = "sha3-224" | "sha3-256" | "sha3-384" | "sha3-512";
    type ShakeAlgorithm = "shake128" | "shake256";
}

declare function createHash(
    algorithm: createHash.KeccakAlgorithm | createHash.Sha3Algorithm,
    options?: TransformOptions,
): createHash.Keccak;

declare function createHash(
    algorithm: createHash.ShakeAlgorithm,
    options?: TransformOptions,
): createHash.Shake;

export = createHash;
