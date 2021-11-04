import { decrypt, encrypt, decryptKeyInfo, encryptKeyInfo, EncryptOptions } from 'xml-encryption';

// no key
// $ExpectError
decrypt('enc', {}, (err, res) => {});
// $ExpectError
decryptKeyInfo('enc', {});

decrypt(
    'enc',
    { key: 'mykey', disallowDecryptionWithInsecureAlgorithm: false, warnInsecureAlgorithm: false },
    (err, res) => {
        // $ExpectType string
        const result = res;
    },
);
// $ExpectType Buffer
const decrypted = decryptKeyInfo('enc', { key: 'mykey' });

// $ExpectError
encrypt('dec', {}, (err, res) => {});
// $ExpectError
encryptKeyInfo(Buffer.from('dec'), {}, (err, res) => {});

const encryptOptions: EncryptOptions = {
    rsa_pub: 'pub',
    pem: 'pem',
    encryptionAlgorithm: 'http://www.w3.org/2001/04/xmlenc#aes256-cbc',
    keyEncryptionAlgorithm: 'http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p',
    disallowEncryptionWithInsecureAlgorithm: true,
    warnInsecureAlgorithm: true,
    input_encoding: 'utf8',
};

encrypt('dec', encryptOptions, (err, res) => {
    // $ExpectType string
    const result = res;
});
encryptKeyInfo(Buffer.from('dec'), encryptOptions, (err, res) => {
    // $ExpectType string
    const result = res;
});
