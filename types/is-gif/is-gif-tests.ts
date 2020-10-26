import isGif = require('is-gif');

isGif(Buffer.from('x')); // $ExpectType boolean
isGif(new Uint8Array(Buffer.from('x'))); // $ExpectType boolean
