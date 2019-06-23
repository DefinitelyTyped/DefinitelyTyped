import { bytes } from 'k6';
import { hmac, md4 } from 'k6/crypto';

let binary: bytes;

// hmac
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

// md4
md4(); // $ExpectError
md4(5); // $ExpectError
md4('data'); // $ExpectError
md4('data', 5); // $ExpectError
md4('data', 'hex'); // $ExpectType string
binary = md4('data', 'binary');
md4('data', 'hex', 5); // $ExpectError
