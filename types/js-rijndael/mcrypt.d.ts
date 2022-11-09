export type Cipher = Record<CipherAlgorithm, CipherBody>;

export type CipherAlgorithm = 'rijndael-128' | 'rijndael-192' | 'rijndael-256';

export interface CipherBody {
    blockSize: number;
    keySize: number;
}

export type Mode = 'cbc' | 'cfb' | 'ctr' | 'ecb' | 'ncfb' | 'nofb';

declare const ciphers: CipherBody & {
    'rijndael-128': { blockSize: 16; keySize: 32 };
    'rijndael-192': { blockSize: 24; keySize: 32 };
    'rijndael-256': { blockSize: 32; keySize: 32 };
};

declare function crypt(
    encrypt: boolean,
    text: Uint8Array,
    IV: Uint8Array,
    key: Uint8Array,
    cipher: CipherAlgorithm,
    mode: Mode,
): true | Uint8Array;

declare function rijndaelCipher(block: Uint8Array, key: Uint8Array, encrypt: boolean): Uint8Array;

export function decrypt(
    ctext: Uint8Array,
    IV: Uint8Array,
    key: Uint8Array,
    cipher: CipherAlgorithm,
    mode: Mode,
): true | Uint8Array;

export function encrypt(
    message: Uint8Array,
    IV: Uint8Array,
    key: Uint8Array,
    cipher: CipherAlgorithm,
    mode: Mode,
): true | Uint8Array;

export function getBlockSize(cipher: CipherAlgorithm): number;

export function getKeySize(cipher: CipherAlgorithm): number;

export function listAlgorithms(): CipherAlgorithm[];

export function listModes(): Mode[];

export { getBlockSize as getIVSize };
