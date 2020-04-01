// Type definitions for sm-crypto 0.1
// Project: https://github.com/JuneAndGreen/sm-crypto#readme
// Definitions by: Thermod <https://github.com/Moonisky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import BigInteger = require('bigi');

export interface KeyPairHex {
    privateKey: string;
    publicKey: string;
}

export interface KeyPairPoint extends KeyPairHex {
    k: BigInteger;
    x1: BigInteger;
}

/**
 * Cipher Mode
 * - `0`：C1C2C3
 * - `1`：C1C3C2
 */
export type CipherMode = 0 | 1;

export namespace sm2 {
    function generateKeyPairHex(): KeyPairHex;
    function doEncrypt(msg: string, publicKey: string, cipherMode?: CipherMode): string;
    function doDecrypt(encryptData: string, privateKey: string, cipherMode?: CipherMode): string;
    function doSignature(msg: string, privateKey: string, options?: {
        pointPool?: KeyPairPoint[]
        der?: boolean
        hash?: boolean
        publicKey?: string
    }): string;
    function doVerifySignature(msg: string, signHex: string, publicKey: string, options?: {
        der?: boolean
        hash?: boolean
        publicKey?: string
    }): boolean;
    function getPoint(): KeyPairPoint;
}

export function sm3(str: string): string;

export namespace sm4 {
    function encrypt(inArray: number[], key: number[]): number[];
    function decrypt(inArray: number[], key: number[]): number[];
}
