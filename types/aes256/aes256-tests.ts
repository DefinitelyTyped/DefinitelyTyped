import { AesCipher, default as aes256 } from 'aes256';

// Example using static methods
const key = 'my passphrase';
const plaintext = 'my plaintext message';

const encrypted1: string = aes256.encrypt(key, plaintext);
const decrypted1: string = aes256.decrypt(key, encrypted1);

// Example using an AesCipher instance
const cipher: AesCipher = aes256.createCipher(key);

const encrypted2: string = cipher.encrypt(plaintext);
const decrypted2: string = cipher.decrypt(encrypted2);
