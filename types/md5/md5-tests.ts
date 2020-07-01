import md5 = require('md5');

const message = 'message';
console.log(md5(message)); // should print 78e731027d8fd50ed642340b7c9a63b3

const array = new Array<number>(message.length);
for (let i = 0; i < message.length; ++i) array[i] = message.charCodeAt(i);
const buffer = new Buffer(array);
console.log(md5(buffer)); // Should be same result as above.

const hash1 = md5('abc', { asString: true });
const hash2 = md5(hash1 + 'a', { asString: true, encoding: 'binary' });
const hash3 = md5(hash1 + 'a', { encoding: 'binary' });
