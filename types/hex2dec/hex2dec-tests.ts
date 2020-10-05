import hex2dec = require('hex2dec');

hex2dec.hexToDec('0xFA'); // $ExpectType string
hex2dec.decToHex('250'); // $ExpectType string
hex2dec.decToHex('250', { prefix: false }); // $ExpectType string
