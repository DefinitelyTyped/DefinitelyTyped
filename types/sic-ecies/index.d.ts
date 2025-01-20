// TypeScript Version: 2.2

import { PrivateKey, PublicKey } from "bitcore-lib";

export interface ECIESOptions {
    shortTag?: boolean | undefined;
    noKey?: boolean | undefined;
}

export interface ECIES {
    (opts?: ECIESOptions): ECIES;
    privateKey: (privateKey: PrivateKey) => ECIES;
    publicKey: (publicKey: PublicKey) => ECIES;
    encrypt: (message: string | Buffer, ivbuf?: Buffer) => Buffer;
    decrypt: (encbuf: Buffer) => Buffer;
    Rbuf: Buffer;
    kEkM: Buffer;
    kE: Buffer;
    kM: Buffer;
}

export interface AESCBC {
    (): AESCBC;
    encrypt: (messagebuf: Buffer, passwordstr: string) => Buffer;
    decrypt: (encbuf: Buffer, passwordstr: string) => Buffer;
    encryptCipherkey: (messagebuf: Buffer, cipherkeybuf: Buffer, ivbuf: Buffer) => Buffer;
    decryptCipherkey: (encbuf: Buffer, cipherkeybuf: Buffer) => Buffer;
}

interface Blockcipher {
    encrypt: (xorbuf: Buffer, cipherkeybuf: Buffer) => Buffer;
    decrypt: (encbuf: Buffer, cipherkeybuf: Buffer) => Buffer;
}

export interface CBC {
    (blockcipher: Blockcipher, cipherkeybuf: Buffer, ivbuf: Buffer): CBC;
    buf2blockbufs: (buf: Buffer, blocksize: number) => Buffer[];
    blockbufs2buf: (blockbufs: Buffer[]) => Buffer;
    encrypt: (
        messagebuf: Buffer,
        ivbuf: Buffer,
        blockcipher: Blockcipher,
        cipherkeybuf: Buffer,
    ) => Buffer;
    decrypt: (
        encbuf: Buffer,
        ivbuf: Buffer,
        blockcipher: Blockcipher,
        cipherkeybuf: Buffer,
    ) => Buffer;
    encryptblock: (
        blockbuf: Buffer,
        ivbuf: Buffer,
        blockcipher: Blockcipher,
        cipherkeybuf: Buffer,
    ) => Buffer;
    decryptblock: (
        encbuf: Buffer,
        ivbuf: Buffer,
        blockcipher: Blockcipher,
        cipherkeybuf: Buffer,
    ) => Buffer;
    encryptblocks: (
        blockbufs: Buffer[],
        ivbuf: Buffer,
        blockcipher: Blockcipher,
        cipherkeybuf: Buffer,
    ) => Buffer[];
    decryptblocks: (
        encbufs: Buffer[],
        ivbuf: Buffer,
        blockcipher: Blockcipher,
        cipherkeybuf: Buffer,
    ) => Buffer[];
    pkcs7pad: (buf: Buffer, blocksize: number) => Buffer;
    pkcs7unpad: (paddedbuf: Buffer) => Buffer;
    xorbufs: (buf1: Buffer, buf2: Buffer) => Buffer;
}

export interface AES {
    (): AES;
    encrypt: (messagebuf: Buffer, keybuf: Buffer) => Buffer;
    decrypt: (encbuf: Buffer, keybuf: Buffer) => Buffer;
    buf2words: (buf: Buffer) => number[];
    words2buf: (words: number[]) => Buffer;
}

export const ECIES: ECIES;
export const AES: AES;
export const CBC: CBC;
export const AESCBC: AESCBC;

export {};
