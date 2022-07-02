import md5 = require('md5');

const message = 'message';

// $ExpectType string
md5(message);

// $ExpectType string
md5('message', { asString: true });

// $ExpectType string
md5('message', { asString: true, encoding: 'binary' });

// $ExpectType string
md5('message', { encoding: 'binary' });

// $ExpectType number[]
md5('message', { asBytes: true });

// $ExpectType string
md5(Uint8Array.of(1, 2, 3));

// $ExpectType string
md5(Uint8Array.of(1, 2, 3), { asString: true });

// $ExpectType string
md5(Uint8Array.of(1, 2, 3), { asString: true, encoding: 'binary' });

// $ExpectType string
md5(Uint8Array.of(1, 2, 3), { encoding: 'binary' });

// $ExpectType number[]
md5(Uint8Array.of(1, 2, 3), { asBytes: true });
