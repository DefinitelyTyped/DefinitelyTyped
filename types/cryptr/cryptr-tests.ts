import Cryptr = require('cryptr');

// $ExpectType Cryptr
const cryptr = new Cryptr('myTotallySecretKey');

// $ExpectType string
const encrypted_string = cryptr.encrypt('bacon');

// $ExpectType string
cryptr.decrypt(encrypted_string);
