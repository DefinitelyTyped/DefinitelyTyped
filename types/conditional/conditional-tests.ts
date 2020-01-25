import * as conditional from 'conditional';

function callback<T extends Error>(err: T | null) {
    // $ExpectType T | null
    err;
    // $ExpectType string | null
    err?.message;
};

conditional.checkArgument(true); // $ExpectType void
conditional.checkArgument(true, 'message'); // $ExpectType void
conditional.checkArgument(true, 'message and callback', err => callback<conditional.IllegalArgumentError>(err)); // $ExpectType void
conditional.checkArgument(true, err => callback<conditional.IllegalArgumentError>(err)); // $ExpectType void

conditional.checkState(true); // $ExpectType void
conditional.checkState(true, 'message'); // $ExpectType void
conditional.checkState(true, 'message and callback', err => callback<conditional.IllegalStateError>(err)); // $ExpectType void
conditional.checkState(true, err => callback<conditional.IllegalStateError>(err)); // $ExpectType void

conditional.checkNumberType(true); // $ExpectType void
conditional.checkNumberType(true, 'message'); // $ExpectType void
conditional.checkNumberType(true, 'message and callback', err => callback<conditional.InvalidTypeError>(err)); // $ExpectType void
conditional.checkNumberType(true, err => callback<conditional.InvalidTypeError>(err)); // $ExpectType void

conditional.checkNotNumberType(true); // $ExpectType void
conditional.checkNotNumberType(true, 'message'); // $ExpectType void
conditional.checkNotNumberType(true, 'message and callback', err => callback<conditional.InvalidTypeError>(err)); // $ExpectType void
conditional.checkNotNumberType(true, err => callback<conditional.InvalidTypeError>(err)); // $ExpectType void

conditional.checkContains('y', ['y', 'n']); // $ExpectType void
conditional.checkContains('y', ['y', 'n'], 'message'); // $ExpectType void
conditional.checkContains('y', ['y', 'n'], 'message and callback', err => callback<conditional.UnknownValueError>(err)); // $ExpectType void
conditional.checkContains('y', ['y', 'n'], err => callback<conditional.UnknownValueError>(err)); // $ExpectType void

conditional.checkDoesNotContain('y', ['y', 'n']); // $ExpectType void
conditional.checkDoesNotContain('y', ['y', 'n'], 'message'); // $ExpectType void
conditional.checkDoesNotContain('y', ['y', 'n'], 'message and callback', err => callback<conditional.UnknownValueError>(err)); // $ExpectType void
conditional.checkDoesNotContain('y', ['y', 'n'], err => callback<conditional.UnknownValueError>(err)); // $ExpectType void

conditional.checkEquals('a', 'b'); // $ExpectType void
conditional.checkEquals('a', 'b', 'message'); // $ExpectType void
conditional.checkEquals('a', 'b', 'message and callback', err => callback<conditional.UnknownValueError>(err)); // $ExpectType void
conditional.checkEquals('a', 'b', err => callback<conditional.UnknownValueError>(err)); // $ExpectType void

conditional.checkDoesNotEqual('a', 'b'); // $ExpectType void
conditional.checkDoesNotEqual('a', 'b', 'message'); // $ExpectType void
conditional.checkDoesNotEqual('a', 'b', 'message and callback', err => callback<conditional.UnknownValueError>(err)); // $ExpectType void
conditional.checkDoesNotEqual('a', 'b', err => callback<conditional.UnknownValueError>(err)); // $ExpectType void

conditional.checkDefined(null); // $ExpectType void
conditional.checkDefined(null, 'message'); // $ExpectType void
conditional.checkDefined(null, 'message and callback', err => callback<conditional.UndefinedValueError>(err)); // $ExpectType void
conditional.checkDefined(null, err => callback<conditional.UndefinedValueError>(err)); // $ExpectType void

conditional.checkUndefined(null); // $ExpectType void
conditional.checkUndefined(null, 'message'); // $ExpectType void
conditional.checkUndefined(null, 'message and callback', err => callback<conditional.UndefinedValueError>(err)); // $ExpectType void
conditional.checkUndefined(null, err => callback<conditional.UndefinedValueError>(err)); // $ExpectType void

conditional.checkEmpty(null); // $ExpectType void
conditional.checkEmpty(null, 'message'); // $ExpectType void
conditional.checkEmpty(null, 'message and callback', err => callback<conditional.IllegalValueError>(err)); // $ExpectType void
conditional.checkEmpty(null, err => callback<conditional.IllegalValueError>(err)); // $ExpectType void

conditional.checkNotEmpty(null); // $ExpectType void
conditional.checkNotEmpty(null, 'message'); // $ExpectType void
conditional.checkNotEmpty(null, 'message and callback', err => callback<conditional.IllegalValueError>(err)); // $ExpectType void
conditional.checkNotEmpty(null, err => callback<conditional.IllegalValueError>(err)); // $ExpectType void

conditional.checkNull(null); // $ExpectType void
conditional.checkNull(null, 'message'); // $ExpectType void
conditional.checkNull(null, 'message and callback', err => callback<conditional.IllegalValueError>(err)); // $ExpectType void
conditional.checkNull(null, err => callback<conditional.IllegalValueError>(err)); // $ExpectType void

conditional.checkNotNull(null); // $ExpectType void
conditional.checkNotNull(null, 'message'); // $ExpectType void
conditional.checkNotNull(null, 'message and callback', err => callback<conditional.IllegalValueError>(err)); // $ExpectType void
conditional.checkNotNull(null, err => callback<conditional.IllegalValueError>(err)); // $ExpectType void
