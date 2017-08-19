import * as httpAssert from 'http-assert';
import { HttpError } from 'http-errors';

try {
    httpAssert.equal('hello', 'hello');
    httpAssert(false, 401, 'authentication failed');
} catch (err) {
    console.log((<HttpError> err).status);
    console.log((<HttpError> err).message);
    console.log((<HttpError> err).expose);
}
