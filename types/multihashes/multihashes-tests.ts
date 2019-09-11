import multihashes = require('./index');

let encoded = multihashes.encode(Buffer.from('foo'), 'sha1');
let decoded = multihashes.decode(encoded);
const { code, name, digest, length } = decoded;
