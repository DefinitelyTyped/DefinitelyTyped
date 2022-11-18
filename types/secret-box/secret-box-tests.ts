import * as secretBox from 'secret-box';

// test type exports
type EncryptOptions = secretBox.EncryptOptions;

const pw = 'open sesame 2';
const message = Buffer.from('The secret launch code is 1234.');

const secret = secretBox.encrypt(message, pw); // $ExpectType Buffer
secretBox.encrypt(message, Buffer.from(pw)); // $ExpectType Buffer
secretBox.encrypt(message, pw, { iv: Buffer.alloc(10) }); // $ExpectType Buffer
secretBox.encrypt(message, pw, { n: 1 }); // $ExpectType Buffer
secretBox.encrypt(message, pw, { p: 1 }); // $ExpectType Buffer
secretBox.encrypt(message, pw, { r: 1 }); // $ExpectType Buffer
secretBox.encrypt(message, pw, { salt: Buffer.alloc(10) }); // $ExpectType Buffer

secretBox.decrypt(secret, pw); // $ExpectType Buffer
secretBox.decrypt(secret, Buffer.from(pw)); // $ExpectType Buffer
