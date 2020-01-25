import * as conditional from 'conditional';

function callback<T extends Error>(err: T | null) {
    // $ExpectType T | null
    err;
    // $ExpectType string | null
    err?.message;
};

conditional.checkArgument(true); // $ExpectType undefined
conditional.checkArgument(true, 'message'); // $ExpectType undefined
conditional.checkArgument(true, 'message and callback', err => callback<conditional.IllegalArgumentError>(err)); // $ExpectType undefined
conditional.checkArgument(true, err => callback<conditional.IllegalArgumentError>(err)); // $ExpectType undefined

conditional.checkState(true); // $ExpectType undefined
conditional.checkState(true, 'message'); // $ExpectType undefined
conditional.checkState(true, 'message and callback', err => callback<conditional.IllegalStateError>(err)); // $ExpectType undefined
conditional.checkState(true, err => callback<conditional.IllegalStateError>(err)); // $ExpectType undefined

conditional.checkNumberType(true); // $ExpectType undefined
conditional.checkNumberType(true, 'message'); // $ExpectType undefined
conditional.checkNumberType(true, 'message and callback', err => callback<conditional.InvalidTypeError>(err)); // $ExpectType undefined
conditional.checkNumberType(true, err => callback<conditional.InvalidTypeError>(err)); // $ExpectType undefined

conditional.checkNotNumberType(true); // $ExpectType undefined
conditional.checkNotNumberType(true, 'message'); // $ExpectType undefined
conditional.checkNotNumberType(true, 'message and callback', err => callback<conditional.InvalidTypeError>(err)); // $ExpectType undefined
conditional.checkNotNumberType(true, err => callback<conditional.InvalidTypeError>(err)); // $ExpectType undefined

conditional.checkContains('y', ['y', 'n']); // $ExpectType undefined
conditional.checkContains('y', ['y', 'n'], 'message'); // $ExpectType undefined
conditional.checkContains('y', ['y', 'n'], 'message and callback', err => callback<conditional.UnknownValueError>(err)); // $ExpectType undefined
conditional.checkContains('y', ['y', 'n'], err => callback<conditional.UnknownValueError>(err)); // $ExpectType undefined

conditional.checkDoesNotContain('y', ['y', 'n']); // $ExpectType undefined
conditional.checkDoesNotContain('y', ['y', 'n'], 'message'); // $ExpectType undefined
conditional.checkDoesNotContain('y', ['y', 'n'], 'message and callback', err => callback<conditional.UnknownValueError>(err)); // $ExpectType undefined
conditional.checkDoesNotContain('y', ['y', 'n'], err => callback<conditional.UnknownValueError>(err)); // $ExpectType undefined

conditional.checkEquals('a', 'b'); // $ExpectType undefined
conditional.checkEquals('a', 'b', 'message'); // $ExpectType undefined
conditional.checkEquals('a', 'b', 'message and callback', err => callback<conditional.UnknownValueError>(err)); // $ExpectType undefined
conditional.checkEquals('a', 'b', err => callback<conditional.UnknownValueError>(err)); // $ExpectType undefined

conditional.checkDoesNotEqual('a', 'b'); // $ExpectType undefined
conditional.checkDoesNotEqual('a', 'b', 'message'); // $ExpectType undefined
conditional.checkDoesNotEqual('a', 'b', 'message and callback', err => callback<conditional.UnknownValueError>(err)); // $ExpectType undefined
conditional.checkDoesNotEqual('a', 'b', err => callback<conditional.UnknownValueError>(err)); // $ExpectType undefined

conditional.checkDefined(null); // $ExpectType undefined
conditional.checkDefined(null, 'message'); // $ExpectType undefined
conditional.checkDefined(null, 'message and callback', err => callback<conditional.UndefinedValueError>(err)); // $ExpectType undefined
conditional.checkDefined(null, err => callback<conditional.UndefinedValueError>(err)); // $ExpectType undefined

conditional.checkUndefined(null); // $ExpectType undefined
conditional.checkUndefined(null, 'message'); // $ExpectType undefined
conditional.checkUndefined(null, 'message and callback', err => callback<conditional.UndefinedValueError>(err)); // $ExpectType undefined
conditional.checkUndefined(null, err => callback<conditional.UndefinedValueError>(err)); // $ExpectType undefined

conditional.checkEmpty(null); // $ExpectType undefined
conditional.checkEmpty(null, 'message'); // $ExpectType undefined
conditional.checkEmpty(null, 'message and callback', err => callback<conditional.IllegalValueError>(err)); // $ExpectType undefined
conditional.checkEmpty(null, err => callback<conditional.IllegalValueError>(err)); // $ExpectType undefined

conditional.checkNotEmpty(null); // $ExpectType undefined
conditional.checkNotEmpty(null, 'message'); // $ExpectType undefined
conditional.checkNotEmpty(null, 'message and callback', err => callback<conditional.IllegalValueError>(err)); // $ExpectType undefined
conditional.checkNotEmpty(null, err => callback<conditional.IllegalValueError>(err)); // $ExpectType undefined

conditional.checkNull(null); // $ExpectType undefined
conditional.checkNull(null, 'message'); // $ExpectType undefined
conditional.checkNull(null, 'message and callback', err => callback<conditional.IllegalValueError>(err)); // $ExpectType undefined
conditional.checkNull(null, err => callback<conditional.IllegalValueError>(err)); // $ExpectType undefined

conditional.checkNotNull(null); // $ExpectType undefined
conditional.checkNotNull(null, 'message'); // $ExpectType undefined
conditional.checkNotNull(null, 'message and callback', err => callback<conditional.IllegalValueError>(err)); // $ExpectType undefined
conditional.checkNotNull(null, err => callback<conditional.IllegalValueError>(err)); // $ExpectType undefined
