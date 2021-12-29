import AggregateError = require('es-aggregate-error');

const oneError = new RangeError('hi!');
const otherError = new EvalError('oops');

new AggregateError(); // $ExpectError
new AggregateError('this is not an error'); // $ExpectError
AggregateError([oneError, otherError], 'this is two kinds of errors'); // $ExpectError

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

implicitError.name = 'something else'; // $ExpectError

const err = new Error('test');
if (err instanceof AggregateError) {
    const aggregateErr: AggregateError = err; // $ExpectType: AggregateError
    const notAggregateErr: typeof AggregateError = err; // $ExpectError
    aggregateErr.name; // $ExpectType: "AggregateError"
}
