/// <reference lib="dom" />
/// <reference types="node" />

export = Sha512;

/**
 * Create a new hash instance.
 */
declare function Sha512(): Sha512;

/**
 * Create a new hash instance.
 *
 * @example
 * import Sha512 = require('sha512-wasm')
 *
 * if (!Sha512.WASM_SUPPORTED) {
 *   console.log('WebAssembly not supported by your runtime')
 * }
 *
 * const hash = new Sha512()
 *   .update('hello')
 *   .update(' ')
 *   .update(Buffer.from('world'))
 *   .digest('hex')
 *
 * console.log('Sha512 hash of "hello world" is ', hash)
 * // 309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f
 */
declare class Sha512 {
    static readonly SHA512_BYTES: 64;
    static readonly WASM: Sha512.Wasm | false;
    static readonly WASM_SUPPORTED: boolean;

    /**
     * Wait for the WASM code to load.
     */
    static ready(cb?: (err: Error | undefined) => void): Promise<void>;

    finalized: boolean;
    digestLength: number;
    pointer: number;
    pos: number;
    wasm: Sha512.Wasm | false;
    /**
     * Update the hash with a new piece of data.
     *
     * @param data The data to update the hash with.
     * @param [encoding='utf-8'] The encoding of the data string.
     */
    update(data: Uint8Array | ReadonlyArray<number>): this;
    update(data: string, encoding?: string): this;
    /**
     * Digest the hash.
     */
    digest<TBuf extends Uint8Array = Uint8Array>(enc?: TBuf, offset?: number): TBuf;
    digest(enc: string): string;

    /**
     * Wait for the WASM code to load.
     */
    ready(cb?: (err: Error | undefined) => void): Promise<void>;
}

declare namespace Sha512 {
    function HMAC(key: Uint8Array): HMAC;
    class HMAC {
        constructor(key: Uint8Array);
        pad: Buffer | Uint8Array;
        inner: Sha512;
        outer: Sha512;
        update(input: Uint8Array | ReadonlyArray<number>): this;
        update(input: string, encoding?: string): this;
        digest<TBuf extends Uint8Array = Uint8Array>(enc?: TBuf, offset?: number): TBuf;
        digest(enc: string): string;
    }

    interface Wasm {
        memory: WebAssembly.Memory;
        sha512(ctx: number, roi: number, length: number, final: number): void;
    }
}
