import { decrypt, encrypt, getBlockSize, getIVSize, getKeySize, listAlgorithms, listModes } from 'js-rijndael';

const cipher = 'rijndael-128';
const iv = new Uint8Array(16);
const key = new Uint8Array(32);
const message = new Uint8Array(16);
const mode = 'cbc';

const ctext = encrypt(message, iv, key, cipher, mode);
const ptext = decrypt(ctext as Uint8Array, iv, key, cipher, mode);

const blockSize = getBlockSize(cipher);
const keySize = getKeySize(cipher);
const ivSize = getIVSize(cipher);

const algorithms = listAlgorithms();
const modes = listModes();
