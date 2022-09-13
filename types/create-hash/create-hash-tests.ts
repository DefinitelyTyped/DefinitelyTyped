import createHash = require('create-hash');

const hash = createHash('sha224');

hash.update('synchronous write');
hash.digest();
hash.write('write to it as a stream');
hash.end();
hash.read();
