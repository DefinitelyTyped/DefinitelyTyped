import AggregateError = require('es-aggregate-error');

const oneError = new RangeError('hi!');
const otherError = new EvalError('oops');

// @ts-expect-error
new AggregateError();
// @ts-expect-error
new AggregateError('this is not an error');
// @ts-expect-error
AggregateError([oneError, otherError], 'this is two kinds of errors');

new AggregateError([]); // $ExpectType AggregateError
new AggregateError([oneError, otherError]); // $ExpectType AggregateError

// $ExpectType AggregateError
const implicitError = new AggregateError([oneError, otherError], 'this is two kinds of errors');

// $ExpectType AggregateError
const explicitError: AggregateError = new AggregateError([oneError, otherError], 'this is two kinds of errors');

AggregateError.prototype; // $ExpectType AggregateError
AggregateError.shim; // $ExpectType () => typeof AggregateError
AggregateError.shim(); // $ExpectType: AggregateError

implicitError.errors; // $ExpectType: Array<unknown>
implicitError.message; // $ExpectType: string
implicitError.name; // $ExpectType: "AggregateError"

// @ts-expect-error
implicitError.name = 'something else';

const err = new Error('test');
if (err instanceof AggregateError) {
    const aggregateErr: AggregateError = err; // $ExpectType: AggregateError
    // @ts-expect-error
    const notAggregateErr: typeof AggregateError = err;
    aggregateErr.name; // $ExpectType: "AggregateError"
}
