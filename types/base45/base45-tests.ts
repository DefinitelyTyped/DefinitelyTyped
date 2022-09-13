import base45 = require('base45');

const text = 'foo © bar 𝌆 baz';

const encoded = base45.encode(text);
console.log(encoded);

const decodedData = base45.decode(encoded);
const text2 = base45.decode(encoded).toString('utf-8');
console.log(text2);
