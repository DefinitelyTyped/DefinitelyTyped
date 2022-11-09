import {
    CipherAlgorithm,
    decrypt,
    encrypt,
    getBlockSize,
    getIVSize,
    getKeySize,
    listAlgorithms,
    listModes,
    Mode,
} from 'js-rijndael';

const cipher: CipherAlgorithm = 'rijndael-128';
const iv: Uint8Array = new Uint8Array(16);
const key: Uint8Array = new Uint8Array(32);
const message: Uint8Array = new Uint8Array(16);
const mode: Mode = 'cbc';

const ctext: Uint8Array = encrypt(message, iv, key, cipher, mode) as Uint8Array;
const ptext: Uint8Array = decrypt(ctext, iv, key, cipher, mode) as Uint8Array;

const blockSize: number = getBlockSize(cipher);
const ivSize: number = getIVSize(cipher);
const keySize: number = getKeySize(cipher);

const algorithms: CipherAlgorithm[] = listAlgorithms();
const modes: Mode[] = listModes();
