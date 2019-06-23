import { bytes } from 'k6';
import { hmac, md4, md5, sha1, sha256 } from 'k6/crypto';

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

// md5
md5(); // $ExpectError
md5(5); // $ExpectError
md5('data'); // $ExpectError
md5('data', 5); // $ExpectError
md5('data', 'hex'); // $ExpectType string
binary = md5('data', 'binary');
md5('data', 'hex', 5); // $ExpectError

// sha1
sha1(); // $ExpectError
sha1(5); // $ExpectError
sha1('data'); // $ExpectError
sha1('data', 5); // $ExpectError
sha1('data', 'hex'); // $ExpectType string
binary = sha1('data', 'binary');
sha1('data', 'hex', 5); // $ExpectError

// sha256
sha256(); // $ExpectError
sha256(5); // $ExpectError
sha256('data'); // $ExpectError
sha256('data', 5); // $ExpectError
sha256('data', 'hex'); // $ExpectType string
binary = sha256('data', 'binary');
sha256('data', 'hex', 5); // $ExpectError
