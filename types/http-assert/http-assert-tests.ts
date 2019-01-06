import httpAssert = require('http-assert');
import { HttpError } from 'http-errors';

try {
    httpAssert.equal('hello', 'hello');
    httpAssert(false, 401, 'authentication failed');
} catch (err) {
    console.log((err as HttpError).status);
    console.log((err as HttpError).message);
    console.log((err as HttpError).expose);
}
