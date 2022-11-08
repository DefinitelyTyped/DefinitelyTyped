// Type definitions for js-rijndael 1.0
// Project: https://github.com/kraynel/js-rijndael#readme
// Definitions by: Juansecu <https://github.com/Juansecu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Cipher, CipherAlgorithm } from './Cipher';
import { Mode } from './Mode';

declare const ciphers: Cipher & {
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
    mode: Mode
): true | Uint8Array;

declare function rijndaelCipher(
    block: Uint8Array,
    key: Uint8Array,
    encrypt: boolean
): Uint8Array;

export declare function decrypt(
    ctext: Uint8Array,
    IV: Uint8Array,
    key: Uint8Array,
    cipher: CipherAlgorithm,
    mode: Mode
): true | Uint8Array;

export declare function encrypt(
    message: Uint8Array,
    IV: Uint8Array,
    key: Uint8Array,
    cipher: CipherAlgorithm,
    mode: Mode
): true | Uint8Array;

export function getBlockSize(cipher: CipherAlgorithm): number;

export function getKeySize(cipher: CipherAlgorithm): number;

export declare function listAlgorithms(): CipherAlgorithm[];

export declare function listModes(): Mode[];

export { getBlockSize as getIVSize };
