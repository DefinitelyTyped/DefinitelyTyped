import Tokens = require('csrf');

const csrf = new Tokens();

// test synchronous secret/token creation
const secret = csrf.secretSync();
const token = csrf.create(secret);
csrf.verify(secret, token);

// test asynchronous secret/token creation
csrf.secret((err: Error, secret: string) => {
    if (err) throw err;

    const token = csrf.create(secret);
    csrf.verify(secret, token);
});
