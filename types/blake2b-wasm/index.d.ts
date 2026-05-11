/// <reference lib="dom" />

export = Blake2b;

declare const Blake2b: Blake2bCtor;

interface Blake2bCtor {
    /**
     * Create a new hash instance.
     *
     * @param [digestLength=32] Length of the digest.
     * @param key The key to use.
     * @param salt The salt to use.
     * @param personal The personal data to use.
     * @param noAssert Disables all input checks.
     *
     * @example
     * import blake2b = require('blake2b-wasm')
     *
     * if (!blake2b.SUPPORTED) {
     *   console.log('WebAssembly not supported by your runtime')
     * }
     *
     * blake2b.ready((err) => {
     *   if (err) throw err
     *
     *   const hash = blake2b()
     *     .update(Buffer.from('hello')) // pass in a buffer or uint8array
     *     .update(Buffer.from(' '))
     *     .update(Buffer.from('world'))
     *     .digest('hex')
     *
     *   console.log('Blake2b hash of "hello world" is %s', hash)
     * })
     */
    (
        digestLength?: number,
        key?: Uint8Array,
        salt?: Uint8Array,
        personal?: Uint8Array,
        noAssert?: boolean,
    ): Blake2b.Blake2b;
    /**
     * Create a new hash instance.
     *
     * @param [digestLength=32] Length of the digest.
     * @param key The key to use.
     * @param salt The salt to use.
     * @param personal The personal data to use.
     * @param noAssert Disables all input checks.
     *
     * @example
     * import blake2b = require('blake2b-wasm')
     *
     * if (!blake2b.SUPPORTED) {
     *   console.log('WebAssembly not supported by your runtime')
     * }
     *
     * blake2b.ready((err) => {
     *   if (err) throw err
     *
     *   const hash = new blake2b()
     *     .update(Buffer.from('hello')) // pass in a buffer or uint8array
     *     .update(Buffer.from(' '))
     *     .update(Buffer.from('world'))
     *     .digest('hex')
     *
     *   console.log('Blake2b hash of "hello world" is %s', hash)
     * })
     */
    new(
        digestLength?: number,
        key?: Uint8Array,
        salt?: Uint8Array,
        personal?: Uint8Array,
        noAssert?: boolean,
    ): Blake2b.Blake2b;
    readonly BYTES_MIN: 16;
    readonly BYTES_MAX: 64;
    readonly BYTES: 32;
    readonly KEYBYTES_MIN: 16;
    readonly KEYBYTES_MAX: 64;
    readonly KEYBYTES: 32;
    readonly SALTBYTES: 16;
    readonly PERSONALBYTES: 16;
    readonly WASM: Blake2b.Blake2bWasm | null;
    readonly SUPPORTED: boolean;
    /**
     * Wait for the WASM code to load. Returns the WebAssembly instance promise as well for convenience.
     * You have to call this at least once before instantiating the hash.
     */
    ready(cb?: (err: Error | undefined) => void): Promise<void>;
}

declare namespace Blake2b {
    interface Blake2b {
        digestLength: number;
        finalized: boolean;
        pointer: number;
        /**
         * Update the hash with a new piece of data.
         */
        update(input: Uint8Array): this;
        /**
         * Digest the hash.
         */
        digest(enc?: "binary"): Uint8Array;
        digest(enc: string): string;
        digest<T extends Uint8Array>(enc: T): T;
        /**
         * Digest the hash.
         */
        final: Blake2b["digest"];
        ready: Blake2bCtor["ready"];
        /**
         * @returns The current partial hash.
         */
        getPartialHash(): Uint8Array;
        /**
         * Set the hash to a previously set hash.
         *
         * @param data Should be the result of `getPartialHash()`.
         */
        setPartialHash(data: ArrayLike<number>): void;
    }

    interface Blake2bWasm {
        memory: WebAssembly.Memory;
        blake2b_init(pointer: number, digestLength: number): void;
        blake2b_update(pointer: number, start: number, end: number): void;
        blake2b_final(pointer: number): void;
        blake2b_compress(pointer: number): void;
    }
}
