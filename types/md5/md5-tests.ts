import md5 = require('md5');

const message = 'message';

// $ExpectType string
md5(message);

const array = new Array<number>(message.length);
for (let i = 0; i < message.length; ++i) array[i] = message.charCodeAt(i);
const buffer = Buffer.from(array);

// $ExpectType string
md5(buffer);

// $ExpectType string
md5('message', { asString: true });

// $ExpectType string
md5('message', { asString: true, encoding: 'binary' });

// $ExpectType string
md5('message', { encoding: 'binary' });

// $ExpectType number[]
md5('message', { asBytes: true });
