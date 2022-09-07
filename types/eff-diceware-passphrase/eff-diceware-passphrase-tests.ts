import generatePassphrase = require('eff-diceware-passphrase');

generatePassphrase.words; // $ExpectType readonly string[]

generatePassphrase(8); // $ExpectType string[]
generatePassphrase.entropy(100); // $ExpectType string[]
generatePassphrase.indexOf('foo'); // $ExpectType number
generatePassphrase.includes('foo'); // $ExpectType boolean
generatePassphrase.indexOfPrefix('foo'); // $ExpectType number
