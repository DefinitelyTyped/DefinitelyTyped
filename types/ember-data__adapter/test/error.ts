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

class MyInvalid extends InvalidError {
    constructor() {
        super([]); // required
    }
}

declare let timeout: TimeoutError; // $ExpectType AdapterError
class MyTimeout extends TimeoutError {}

declare let Abort: AbortError; // $ExpectType typeofAdapterError
class MyAbort extends AbortError {}

declare let Unauthorized: UnauthorizedError; // $ExpectType AdapterError
class MyUnauthorized extends UnauthorizedError {}

declare let Forbidden: ForbiddenError; // $ExpectType AdapterError
class MyForbidden extends ForbiddenError {}

declare let NotFound: NotFoundError; // $ExpectType AdapterError
class MyNotFound extends NotFoundError {}

declare let Conflict: ConflictError; // $ExpectType AdapterError
class MyConflict extends ConflictError {}

declare let Server: ServerError; // $ExpectType AdapterError
class MyServer extends ServerError {}

errorsHashToArray({}); // $ExpectType<any[]>
errorsArrayToHash([]); // $ExpectType<{}>
