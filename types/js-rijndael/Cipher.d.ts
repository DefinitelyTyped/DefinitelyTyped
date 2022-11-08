// Type definitions for js-rijndael 1.0
// Project: https://github.com/kraynel/js-rijndael#readme
// Definitions by: Juansecu <https://github.com/Juansecu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Cipher = Record<CipherAlgorithm, ICipher>;

export type CipherAlgorithm = 'rijndael-128' | 'rijndael-192' | 'rijndael-256';

export interface ICipher {
    blockSize: number;
    keySize: number;
}
