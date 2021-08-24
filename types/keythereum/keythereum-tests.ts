import keythereum = require('keythereum');

keythereum.version; // $ExpectType string
keythereum.browser; // $ExpectType boolean
keythereum.crypto;
keythereum.constants;

keythereum.isHex('00FF'); // $ExpectType string
keythereum.isBase64(''); // $ExpectType string
