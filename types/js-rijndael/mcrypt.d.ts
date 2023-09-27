export type Cipher = Record<CipherAlgorithm, CipherBody>;

export type CipherAlgorithm = "rijndael-128" | "rijndael-192" | "rijndael-256";

export interface CipherBody {
    blockSize: number;
    keySize: number;
}

export type Mode = "cbc" | "cfb" | "ctr" | "ecb" | "ncfb" | "nofb";

declare const ciphers: CipherBody & {
    "rijndael-128": { blockSize: 16; keySize: 32 };
    "rijndael-192": { blockSize: 24; keySize: 32 };
    "rijndael-256": { blockSize: 32; keySize: 32 };
};

declare function crypt(
    encrypt: boolean,
    text: number[],
    IV: number[],
    key: number[],
    cipher: CipherAlgorithm,
    mode: Mode,
): true | number[];

declare function rijndaelCipher(block: number[], key: number[], encrypt: boolean): number[];

export function decrypt(
    ctext: number[],
    IV: number[],
    key: number[],
    cipher: CipherAlgorithm,
    mode: Mode,
): true | number[];

export function encrypt(
    message: number[],
    IV: number[],
    key: number[],
    cipher: CipherAlgorithm,
    mode: Mode,
): true | number[];

export function getBlockSize(cipher: CipherAlgorithm): number;

export function getKeySize(cipher: CipherAlgorithm): number;

export function listAlgorithms(): CipherAlgorithm[];

export function listModes(): Mode[];

export { getBlockSize as getIVSize };
