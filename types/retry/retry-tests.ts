import retry = require('retry');

// Option values
const att = 4;
const ret = 2;
const fac = 1.5;
const min = 2000;
const max = 4000;
const rnd = false;
const evr = false;
const unr = false;

// Options themselves
const operationOptions = {
    retries: ret,
    factor: fac,
    minTimeout: min,
    maxTimeout: max,
    randomize: rnd,
    forever: evr,
    unref: unr,
};

const timeoutOptions = {
    factor: fac,
    minTimeout: min,
    maxTimeout: max,
    randomize: rnd,
};

const timeoutsOptions = {
    retries: ret,
    factor: fac,
    minTimeout: min,
    maxTimeout: max,
    randomize: rnd,
};

// Class to be wrapped later on
class Foo {
    bar() {
        //
    }

    baz() {
        //
    }
}

const operation = retry.operation(operationOptions);

operation.attempt((current) => {
    const err = Math.random() >= 0.5 ? new Error('Happens to the best of us') : undefined;

    const retry = operation.retry(err);

    if (retry) {
        const after = operation.attempts();
    } else {
        const errors = operation.errors();

        const main = operation.mainError();
    }

    operation.stop();
});

const timeout = retry.createTimeout(att, timeoutOptions);

const timeouts = retry.timeouts(timeoutsOptions);

const wrap = retry.wrap(new Foo(), operationOptions, ['bar']);
