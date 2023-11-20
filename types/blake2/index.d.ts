/// <reference types="node" />
import { BinaryToTextEncoding } from "crypto";
import { Transform, TransformOptions } from "stream";

export interface Blake2Options extends TransformOptions {
    digestLength: number;
}

export type Blake2Algorithm = "blake2b" | "blake2bp" | "blake2s" | "blake2sp" | "bypass";

export class Hash extends Transform {
    constructor(algorithm: Blake2Algorithm, options?: Blake2Options);

    update(buf: Buffer): this;

    digest(encoding: BinaryToTextEncoding): string;
    digest(): Buffer;

    copy(): this;
}

export function createHash(algorithm: Blake2Algorithm, options?: Blake2Options): Hash;

export class KeyedHash extends Transform {
    constructor(algorithm: Blake2Algorithm, key: Buffer, options?: Blake2Options);

    update(buf: Buffer): this;

    digest(encoding: BinaryToTextEncoding): string;
    digest(): Buffer;

    copy(): this;
}

export function createKeyedHash(algorithm: Blake2Algorithm, key: Buffer, options?: Blake2Options): KeyedHash;
