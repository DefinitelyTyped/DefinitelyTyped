import DS from 'ember-data';
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

InvalidError; // $ExpectType DS.InvalidError
TimeoutError; // $ExpectType DS.TimeoutError
AbortError; // $ExpectType DS.AbortError
UnauthorizedError; // $ExpectType DS.UnauthorizedError
ForbiddenError; // $ExpectType DS.ForbiddenError
NotFoundError; // $ExpectType DS.NotFoundError
ConflictError; // $ExpectType DS.ConflictError
ServerError; // $ExpectType DS.ServerError
errorsHashToArray; // $ExpectType<typeof DS.errorsHashToArray>
errorsArrayToHash; // $ExpectType<typeof DS.errorsArrayToHash>
