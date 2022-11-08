export type Cipher = Record<CipherAlgorithm, CipherBody>;

export type CipherAlgorithm = 'rijndael-128' | 'rijndael-192' | 'rijndael-256';

export interface CipherBody {
    blockSize: number;
    keySize: number;
}
