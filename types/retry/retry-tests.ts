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
const operationOptions: retry.OperationOptions = {
    retries: ret,
    factor: fac,
    minTimeout: min,
    maxTimeout: max,
    randomize: rnd,
    forever: evr,
    unref: unr,
    maxRetryTime: max,
};

const timeoutsOptions: retry.TimeoutsOptions = {
    retries: ret,
    factor: fac,
    minTimeout: min,
    maxTimeout: max,
    randomize: rnd,
};

const createTimeoutOptions: retry.CreateTimeoutOptions = {
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

operation.errors(); // $ExpectType Error[]
operation.mainError(); // $ExpectType Error | null
operation.attempt(current => {
    current; // $ExpectType number
});
operation.attempt(current => {}, { timeout: 10 });
operation.attempt(current => {}, { callback: () => {} });
operation.retry(); // $ExpectType boolean
operation.retry(new Error()); // $ExpectType boolean
operation.stop();
operation.reset();
operation.attempts(); // $ExpectType number

retry.createTimeout(att); // $ExpectType number
retry.createTimeout(att, createTimeoutOptions); // $ExpectType number

retry.timeouts(); // $ExpectType number[]
retry.timeouts(timeoutsOptions); // $ExpectType number[]

retry.wrap(new Foo());
retry.wrap(new Foo(), ['bar']);
retry.wrap(new Foo(), operationOptions, ['bar']);
retry.wrap(new Foo(), operationOptions);
