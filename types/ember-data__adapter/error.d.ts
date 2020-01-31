import {
    AdapterError,
    InvalidError,
    TimeoutError,
    AbortError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictError,
    ServerError,
} from 'ember-data/adapters/errors';

import DS from 'ember-data';

declare let errorsHashToArray: typeof DS.errorsHashToArray;
declare let errorsArrayToHash: typeof DS.errorsArrayToHash;

export {
    AdapterError,
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
};
