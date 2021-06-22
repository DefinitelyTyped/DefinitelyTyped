import * as aesjs from 'aes-js';

const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const data: Uint8Array = aesjs.utils.utf8.toBytes('hello world');

const ecb = new aesjs.ModeOfOperation.ecb(key);
ecb.decrypt(ecb.encrypt(data));

const hex: string = aesjs.utils.hex.fromBytes(data);

const ctr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter([]));
ctr.encrypt(data);
