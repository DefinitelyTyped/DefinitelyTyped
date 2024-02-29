import any = require("promise.any");

declare function ok(value: unknown): void;
declare function strictEqual<T>(actual: T, expected: T): void;

const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);
const alsoRejected = Promise.reject(Infinity);

// @ts-expect-error
any();

any([]); // $ExpectType Promise<never>

any([resolved, rejected, alsoRejected]).then(result => {
    strictEqual(result, 42);
});

any([rejected, alsoRejected]).catch(error => {
    ok(error instanceof AggregateError);
    strictEqual(error.errors, [-1, Infinity]);
});

any.shim();

Promise.any([resolved, rejected, alsoRejected]).then(result => {
    strictEqual(result, 42);
});

Promise.any([rejected, alsoRejected]).catch(error => {
    ok(error instanceof AggregateError);
    strictEqual(error.errors, [-1, Infinity]);
});
