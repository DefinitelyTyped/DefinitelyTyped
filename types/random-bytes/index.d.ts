// Type definitions for random-bytes 1.0
// Project: https://github.com/crypto-utils/random-bytes
// Definitions by: Steve Ripberger <https://github.com/sripberger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface RandomBytesStatic {
    /**
     * Generates strong pseudo-random bytes.
     * @param size - Number of bytes to generate.
     * @param callback - Asynchronous callback function.
     */
    (size: number, callback: (error: Error, bytes: Buffer) => void): void;

    /**
     * Generates strong pseudo-random bytes.
     * @param size - Number of bytes to generate.
     */
    (size: number): Promise<Buffer>;

    /**
     * Synchronously generates strong pseudo-random bytes.
     * @param size - Number of bytes to generate.
     */
    sync(size: number): Buffer;
}

declare const randomBytes: RandomBytesStatic;

export = randomBytes;
