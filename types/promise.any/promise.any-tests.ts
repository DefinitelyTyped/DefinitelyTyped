import assert = require('assert');
import any = require('promise.any');

const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);
const alsoRejected = Promise.reject(Infinity);

// @ts-expect-error
any();

any([]); // $ExpectType Promise<never>

any([resolved, rejected, alsoRejected]).then(result => {
    assert.strictEqual(result, 42);
});

any([rejected, alsoRejected]).catch(error => {
    assert.ok(error instanceof AggregateError);
    assert.strictEqual(error.errors, [-1, Infinity]);
});

any.shim();

Promise.any([resolved, rejected, alsoRejected]).then(result => {
    assert.strictEqual(result, 42);
});

Promise.any([rejected, alsoRejected]).catch(error => {
    assert.ok(error instanceof AggregateError);
    assert.strictEqual(error.errors, [-1, Infinity]);
});
