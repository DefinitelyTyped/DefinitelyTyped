/// <reference types="node" />

export = RijndaelBlock;

declare class RijndaelBlock {
    constructor(key: Buffer | string, mode: string);
    encrypt(_plaintext: Buffer | string, blockSize: string, _iv: Buffer | string): Buffer;
    decrypt(_ciphertext: Buffer, blockSize: string, _iv: Buffer | string): Buffer;
}
