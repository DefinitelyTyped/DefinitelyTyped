import RijndaelBlock = require('rijndael-js');

const rijndaelBlockStringTest = new RijndaelBlock('12345678901234567890123456789012', 'cbc');

const rijndaelBlock = new RijndaelBlock(Buffer.from('12345678901234567890123456789012'), 'cbc');

let encryptedValue: Buffer = rijndaelBlock.encrypt('text to encrypt', '128', '1234567890123456');
encryptedValue = rijndaelBlock.encrypt(Buffer.from('text to encrypt'), '128', Buffer.from('1234567890123456'));

let decryptedValue: Buffer = rijndaelBlock.decrypt(encryptedValue, '128', '1234567890123456');
decryptedValue = rijndaelBlock.decrypt(encryptedValue, '128', Buffer.from('1234567890123456'));
