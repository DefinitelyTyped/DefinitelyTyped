// Type definitions for sm-crypto 0.3
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
        pointPool?: KeyPairPoint[] | undefined
        der?: boolean | undefined
        hash?: boolean | undefined
        publicKey?: string | undefined
    }): string;
    function doVerifySignature(msg: string, signHex: string, publicKey: string, options?: {
        der?: boolean | undefined
        hash?: boolean | undefined
        publicKey?: string | undefined
    }): boolean;
    function getPoint(): KeyPairPoint;
}

export function sm3(str: string): string;

// SM4.encrypt() expects UTF8 strings (such as "hello"), while SM4.decrypt() expects hex strings (such as "8d0a1f").
export type HexString = string;
export type UTF8String = string;

export interface SM4ModeBase {
    padding?: 'none' | 'pkcs#5';
    mode?: 'cbc';
    iv?: number[] | HexString;
}

export interface SM4Mode_StringOutput extends SM4ModeBase {
    output: 'string';
}

export interface SM4Mode_ArrayOutput extends SM4ModeBase {
    output: 'array';
}

export namespace sm4 {
    function encrypt(inArray: number[] | UTF8String, key: number[] | HexString, mode?: SM4ModeBase | SM4Mode_StringOutput): string;
    function encrypt(inArray: number[] | UTF8String, key: number[] | HexString, mode: SM4Mode_ArrayOutput): number[];

    function decrypt(inArray: number[] | HexString, key: number[] | HexString, mode?: SM4ModeBase | SM4Mode_StringOutput): string;
    function decrypt(inArray: number[] | HexString, key: number[] | HexString, mode: SM4Mode_ArrayOutput): number[];
}
