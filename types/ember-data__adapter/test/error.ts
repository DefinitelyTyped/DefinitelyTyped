// These tests *actually do* what we need: show that the imports work at all.
// They are empty sub-classes of EmberObject at present in the base definitions
// being re-exported here. As long as the imports resolve, this is safe (until
// we make these the root definitions and expand these as appropriate).

import AdapterError, {
    InvalidError,
    TimeoutError,
    AbortError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictError,
    ServerError,
    errorsHashToArray,
    errorsArrayToHash,
} from '@ember-data/adapter/error';

class MyInvalid extends InvalidError {
    constructor() {
        super([]); // required
    }
}

const invalid = new MyInvalid();

const isInvalid = invalid instanceof AdapterError; // $ExpectType<boolean>

errorsHashToArray({}); // $ExpectType<any[]>
errorsArrayToHash([]); // $ExpectType<{}>
