import * as pbkdf2 from 'pbkdf2';

const passwordString = 'password';
const saltString = 'salt';
pbkdf2.pbkdf2(passwordString, saltString, 1000, 32, 'sha1', (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2(passwordString, saltString, 1000, 32, (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2Sync(passwordString, saltString, 1000, 32, 'sha1'); // $ExpectType Buffer
pbkdf2.pbkdf2Sync(passwordString, saltString, 1000, 32); // $ExpectType Buffer

const passwordBuffer = Buffer.from(passwordString);
const saltBuffer = Buffer.from(saltString);
pbkdf2.pbkdf2(passwordBuffer, saltBuffer, 1000, 32, 'sha1', (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2(passwordBuffer, saltBuffer, 1000, 32, (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2Sync(passwordBuffer, saltBuffer, 1000, 32, 'sha1'); // $ExpectType Buffer
pbkdf2.pbkdf2Sync(passwordBuffer, saltBuffer, 1000, 32); // $ExpectType Buffer

const uint8ArrayPassword = Uint8Array.from(passwordBuffer);
const uint8ArraySalt = Uint8Array.from(saltBuffer);
pbkdf2.pbkdf2(uint8ArrayPassword, uint8ArraySalt, 1000, 32, 'sha1', (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2(uint8ArrayPassword, uint8ArraySalt, 1000, 32, (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2Sync(uint8ArrayPassword, uint8ArraySalt, 1000, 32, 'sha1'); // $ExpectType Buffer
pbkdf2.pbkdf2Sync(uint8ArrayPassword, uint8ArraySalt, 1000, 32); // $ExpectType Buffer

const dataViewPassword = new DataView(uint8ArrayPassword.buffer);
const dataViewSalt = new DataView(uint8ArraySalt.buffer);
pbkdf2.pbkdf2(dataViewPassword, dataViewSalt, 1000, 32, 'sha1', (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2(dataViewPassword, dataViewSalt, 1000, 32, (err, derivedKey) => {}); // $ExpectType void
pbkdf2.pbkdf2Sync(dataViewPassword, dataViewSalt, 1000, 32, 'sha1'); // $ExpectType Buffer
pbkdf2.pbkdf2Sync(dataViewPassword, dataViewSalt, 1000, 32); // $ExpectType Buffer
