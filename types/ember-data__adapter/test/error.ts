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

InvalidError; // $ExpectType typeof DS.InvalidError
TimeoutError; // $ExpectType typeof DS.TimeoutError
AbortError; // $ExpectType typeof DS.AbortError
UnauthorizedError; // $ExpectType typeof DS.UnauthorizedError
ForbiddenError; // $ExpectType typeof DS.ForbiddenError
NotFoundError; // $ExpectType typeof DS.NotFoundError
ConflictError; // $ExpectType typeof DS.ConflictError
ServerError; // $ExpectType typeof DS.ServerError
errorsHashToArray; // $ExpectType<typeof DS.errorsHashToArray>
errorsArrayToHash; // $ExpectType<typeof DS.errorsArrayToHash>
