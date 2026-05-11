import {
    createCipher,
    createCipheriv,
    createDecipher,
    createDecipheriv,
    getCiphers,
    listCiphers,
} from "browserify-cipher";

const algorithm = "aes-256-cbc";
const key = Buffer.from("your-secret-key-here", "hex");
const iv = Buffer.from("your-iv-here", "hex");

const cipheriv = createCipheriv(algorithm, key, iv);
const decipheriv = createDecipheriv(algorithm, key, iv);

const cipher = createCipher(algorithm, key);
const decipher = createDecipher(algorithm, key);

console.log(listCiphers());
console.log(getCiphers());
