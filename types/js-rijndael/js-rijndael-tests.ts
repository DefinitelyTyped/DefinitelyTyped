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
} from "js-rijndael";

const cipher: CipherAlgorithm = "rijndael-128";
const iv: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
const key: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const message: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
const mode: Mode = "cbc";

const ctext: number[] = encrypt(message, iv, key, cipher, mode) as number[];
const ptext: number[] = decrypt(ctext, iv, key, cipher, mode) as number[];

const blockSize: number = getBlockSize(cipher);
const ivSize: number = getIVSize(cipher);
const keySize: number = getKeySize(cipher);

const algorithms: CipherAlgorithm[] = listAlgorithms();
const modes: Mode[] = listModes();
