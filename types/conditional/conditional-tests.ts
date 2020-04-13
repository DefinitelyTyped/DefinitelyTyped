import * as conditional from 'conditional';

let callback;

callback = (err: conditional.IllegalArgumentError | null) => {
    // $ExpectType IllegalArgumentError | null
    err;
    if (err instanceof conditional.IllegalArgumentError) {
        // $ExpectType string
        err.message;
    }
};
conditional.checkArgument(true); // $ExpectType void
conditional.checkArgument(true, 'message'); // $ExpectType void
conditional.checkArgument(true, 'message and callback', callback); // $ExpectType void
conditional.checkArgument(true, callback); // $ExpectType void

callback = (err: conditional.IllegalStateError | null) => {
    // $ExpectType IllegalStateError | null
    err;
    if (err instanceof conditional.IllegalStateError) {
        // $ExpectType string
        err.message;
    }
};
conditional.checkState(true); // $ExpectType void
conditional.checkState(true, 'message'); // $ExpectType void
conditional.checkState(true, 'message and callback', callback); // $ExpectType void
conditional.checkState(true, callback); // $ExpectType void

callback = (err: conditional.InvalidTypeError | null) => {
    // $ExpectType InvalidTypeError | null
    err;
    if (err instanceof conditional.InvalidTypeError) {
        // $ExpectType string
        err.message;
    }
};
conditional.checkNumberType(true); // $ExpectType void
conditional.checkNumberType(true, 'message'); // $ExpectType void
conditional.checkNumberType(true, 'message and callback', callback); // $ExpectType void
conditional.checkNumberType(true, callback); // $ExpectType void
conditional.checkNotNumberType(true); // $ExpectType void
conditional.checkNotNumberType(true, 'message'); // $ExpectType void
conditional.checkNotNumberType(true, 'message and callback', callback); // $ExpectType void
conditional.checkNotNumberType(true, callback); // $ExpectType void

callback = (err: conditional.UnknownValueError | null) => {
    // $ExpectType UnknownValueError | null
    err;
    if (err instanceof conditional.UnknownValueError) {
        // $ExpectType string
        err.message;
    }
};
conditional.checkContains('y', ['y', 'n']); // $ExpectType void
conditional.checkContains('y', ['y', 'n'], 'message'); // $ExpectType void
conditional.checkContains('y', ['y', 'n'], 'message and callback', callback); // $ExpectType void
conditional.checkContains('y', ['y', 'n'], callback); // $ExpectType void
conditional.checkDoesNotContain('y', ['y', 'n']); // $ExpectType void
conditional.checkDoesNotContain('y', ['y', 'n'], 'message'); // $ExpectType void
conditional.checkDoesNotContain('y', ['y', 'n'], 'message and callback', callback); // $ExpectType void
conditional.checkDoesNotContain('y', ['y', 'n'], callback); // $ExpectType void
conditional.checkEquals('a', 'b'); // $ExpectType void
conditional.checkEquals('a', 'b', 'message'); // $ExpectType void
conditional.checkEquals('a', 'b', 'message and callback', callback); // $ExpectType void
conditional.checkEquals('a', 'b', callback); // $ExpectType void
conditional.checkDoesNotEqual('a', 'b'); // $ExpectType void
conditional.checkDoesNotEqual('a', 'b', 'message'); // $ExpectType void
conditional.checkDoesNotEqual('a', 'b', 'message and callback', callback); // $ExpectType void
conditional.checkDoesNotEqual('a', 'b', callback); // $ExpectType void

callback = (err: conditional.UndefinedValueError | null) => {
    // $ExpectType UndefinedValueError | null
    err;
    if (err instanceof conditional.UndefinedValueError) {
        // $ExpectType string
        err.message;
    }
};
conditional.checkDefined(null); // $ExpectType void
conditional.checkDefined(null, 'message'); // $ExpectType void
conditional.checkDefined(null, 'message and callback', callback); // $ExpectType void
conditional.checkDefined(null, callback); // $ExpectType void
conditional.checkUndefined(null); // $ExpectType void
conditional.checkUndefined(null, 'message'); // $ExpectType void
conditional.checkUndefined(null, 'message and callback', callback); // $ExpectType void
conditional.checkUndefined(null, callback); // $ExpectType void

callback = (err: conditional.IllegalValueError | null) => {
    // $ExpectType IllegalValueError | null
    err;
    if (err instanceof conditional.IllegalValueError) {
        // $ExpectType string
        err.message;
    }
};
conditional.checkEmpty(null); // $ExpectType void
conditional.checkEmpty(null, 'message'); // $ExpectType void
conditional.checkEmpty(null, 'message and callback', callback); // $ExpectType void
conditional.checkEmpty(null, callback); // $ExpectType void
conditional.checkNotEmpty(null); // $ExpectType void
conditional.checkNotEmpty(null, 'message'); // $ExpectType void
conditional.checkNotEmpty(null, 'message and callback', callback); // $ExpectType void
conditional.checkNotEmpty(null, callback); // $ExpectType void
conditional.checkNull(null); // $ExpectType void
conditional.checkNull(null, 'message'); // $ExpectType void
conditional.checkNull(null, 'message and callback', callback); // $ExpectType void
conditional.checkNull(null, callback); // $ExpectType void
conditional.checkNotNull(null); // $ExpectType void
conditional.checkNotNull(null, 'message'); // $ExpectType void
conditional.checkNotNull(null, 'message and callback', callback); // $ExpectType void
conditional.checkNotNull(null, callback); // $ExpectType void
