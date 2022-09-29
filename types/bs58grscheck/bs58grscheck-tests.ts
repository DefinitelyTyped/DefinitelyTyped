import bs58grscheck = require('bs58grscheck');

const buf = Buffer.from('42', 'hex');
const str = bs58grscheck.encode(buf);
str; // $ExpectType string

bs58grscheck.decode(str); // $ExpectType Buffer
bs58grscheck.decodeUnsafe(str); // $ExpectType Buffer | undefined
