import { bytes } from 'k6';
import { hmac } from 'k6/crypto';

let binary: bytes;

hmac(); // $ExpectError
hmac(5); // $ExpectError
hmac('bad-algorithm'); // $ExpectError
hmac('sha256'); // $ExpectError
hmac('sha256', 5); // $ExpectError
hmac('sha256', 'secret'); // $ExpectError
hmac('sha256', 'secret', 5); // $ExpectError
hmac('sha256', 'secret', 'data'); // $ExpectError
hmac('sha256', 'secret', 'data', 5); // $ExpectError
hmac('sha256', 'secret', 'data', 'bad-encoding'); // $ExpectError
hmac('sha256', 'secret', 'data', 'hex'); // $ExpectType string
binary = hmac('sha256', 'secret', 'data', 'binary');
hmac('sha256', 'secret', 'data', 'hex', 5); // $ExpectError
