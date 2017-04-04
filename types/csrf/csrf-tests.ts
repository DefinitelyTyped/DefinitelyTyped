import Tokens = require('csrf');

const tokens = new Tokens();

// test synchronous secret/token creation
const secret = tokens.secretSync();
const token = tokens.create(secret);
tokens.verify(secret, token);

// test asynchronous secret/token creation
tokens.secret((err: Error, secret: string) => {
    if (err) throw err;

    const token = tokens.create(secret);
    tokens.verify(secret, token);
});
