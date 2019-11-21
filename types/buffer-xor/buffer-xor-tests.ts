import xor = require('buffer-xor');

// $ExpectType Buffer
xor(Buffer.from('a'), Buffer.from('b'));
