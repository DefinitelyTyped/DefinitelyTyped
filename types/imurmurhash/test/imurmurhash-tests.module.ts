import MurmurHash3 = require('imurmurhash');

const hash = MurmurHash3();

const result: number = hash.hash('123').hash('456').reset(123).result();

const hash2 = MurmurHash3('test');
const hash3 = MurmurHash3('test', 123);

hash2.result() + hash3.result();

const another = new MurmurHash3();
