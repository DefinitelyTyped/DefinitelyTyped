import one = require('one-time');

const fn = (foo: boolean) => {
    return 'bar';
};

one(fn); // $ExpectType (foo: boolean) => string
