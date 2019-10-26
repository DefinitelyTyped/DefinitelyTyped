import crypto = require('mz/crypto');

// Promise:
crypto.randomBytes(8).then(buf => {
	buf; // $ExpectType Buffer
});

// Callback:
crypto.randomBytes(8, (err, buf) => {
	err; // $ExpectType Error | null
	buf; // $ExpectType Buffer
});
