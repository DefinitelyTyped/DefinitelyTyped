import AggregateError from "es-aggregate-error";

const oneError = new RangeError("hi!");
const otherError = new EvalError("oops");

new AggregateError(); // $ExpectError
new AggregateError("this is not an error"); // $ExpectError
AggregateError([oneError, otherError], "this is two kinds of errors"); // $ExpectError

new AggregateError([]); // $ExpectType AggregateError
new AggregateError([oneError, otherError]); // $ExpectType AggregateError

// $ExpectType AggregateError
const error = new AggregateError([oneError, otherError], "this is two kinds of errors");

AggregateError.shim; // $ExpectType () => void
AggregateError.shim(); // $ExpectType: void

error.errors; // $ExpectType: Array<unknown>
error.name; // $ExpectType: "AggregateError"
error.message; // $ExpectType: string

error.name = "something else"; // $ExpectError
