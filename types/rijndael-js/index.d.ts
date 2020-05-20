// Type definitions for rijndael-js 1.0
// Project: https://github.com/Snack-X/rijndael-js#readme
// Definitions by: Svet Nikolov <https://github.com/svetkomir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = RijndaelBlock;

declare class RijndaelBlock {
    constructor(key: Buffer | string, mode: string);
    encrypt(_plaintext: Buffer | string, blockSize: string, _iv: Buffer | string): Buffer;
    decrypt(_ciphertext: Buffer, blockSize: string, _iv: Buffer | string): Buffer;
}
