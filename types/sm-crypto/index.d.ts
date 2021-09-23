// Type definitions for sm-crypto 0.3
// Project: https://github.com/JuneAndGreen/sm-crypto#readme
// Definitions by: Thermod <https://github.com/Moonisky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import JSBN = require('jsbn');

export interface KeyPairHex {
    privateKey: string;
    publicKey: string;
}

export interface KeyPairPoint extends KeyPairHex {
    k: JSBN.BigInteger;
    x1: JSBN.BigInteger;
}

/**
 * Cipher Mode
 * - `0`：C1C2C3
 * - `1`：C1C3C2
 */
export type CipherMode = 0 | 1;

export namespace sm2 {
    function generateKeyPairHex(a?: number, b?: number, c?: JSBN.RandomGenerator): KeyPairHex;
    function doEncrypt(msg: string, publicKey: string, cipherMode?: CipherMode): string;
    function doDecrypt(encryptData: string, privateKey: string, cipherMode?: CipherMode): string;
    function doSignature(
        msg: string,
        privateKey: string,
        options?: {
            pointPool?: KeyPairPoint[];
            der?: boolean;
            hash?: boolean;
            publicKey?: string;
            userId?: string;
        },
    ): string;
    function doVerifySignature(
        msg: string,
        signHex: string,
        publicKey: string,
        options?: {
            der?: boolean;
            hash?: boolean;
            userId?: string;
        },
    ): boolean;
    function getPoint(): KeyPairPoint;
    function verifyPublicKey(publicKey: string): boolean;
}

export function sm3(input: string): string;

export namespace sm4 {
    function encrypt(
        inArray: number[],
        key: number[],
        options?: {
            padding?: string;
            mode?: string;
            iv?: string | number[];
            output?: string;
        },
    ): number[];
    function decrypt(inArray: number[], key: number[]): number[];
}
