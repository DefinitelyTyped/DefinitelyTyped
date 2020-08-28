import { bytes } from 'k6';
import {
    Hasher,
    randomBytes,
    hmac,
    md4,
    md5,
    sha1,
    sha256,
    sha384,
    sha512,
    sha512_224,
    sha512_256,
    ripemd160,
    createHash,
    createHMAC,
} from 'k6/crypto';

let binary: bytes;
let hasher: Hasher;

// randomBytes
randomBytes(); // $ExpectError
randomBytes('turmeric'); // $ExpectError
binary = randomBytes(100);
randomBytes(100, 5); // $ExpectError

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
md5('data', 'base64'); // $ExpectType string
binary = md5('data', 'binary');
md5('data', 'hex', 5); // $ExpectError

// sha1
sha1(); // $ExpectError
sha1(5); // $ExpectError
sha1('data'); // $ExpectError
sha1('data', 5); // $ExpectError
sha1('data', 'base64url'); // $ExpectType string
binary = sha1('data', 'binary');
sha1('data', 'hex', 5); // $ExpectError

// sha256
sha256(); // $ExpectError
sha256(5); // $ExpectError
sha256('data'); // $ExpectError
sha256('data', 5); // $ExpectError
sha256('data', 'base64rawurl'); // $ExpectType string
binary = sha256('data', 'binary');
sha256('data', 'hex', 5); // $ExpectError

// sha384
sha384(); // $ExpectError
sha384(5); // $ExpectError
sha384('data'); // $ExpectError
sha384('data', 5); // $ExpectError
sha384('data', 'hex'); // $ExpectType string
binary = sha384('data', 'binary');
sha384('data', 'hex', 5); // $ExpectError

// sha512
sha512(); // $ExpectError
sha512(5); // $ExpectError
sha512('data'); // $ExpectError
sha512('data', 5); // $ExpectError
sha512('data', 'base64'); // $ExpectType string
binary = sha512('data', 'binary');
sha512('data', 'hex', 5); // $ExpectError

// sha512_224
sha512_224(); // $ExpectError
sha512_224(5); // $ExpectError
sha512_224('data'); // $ExpectError
sha512_224('data', 5); // $ExpectError
sha512_224('data', 'base64url'); // $ExpectType string
binary = sha512_224('data', 'binary');
sha512_224('data', 'hex', 5); // $ExpectError

// sha512_256
sha512_256(); // $ExpectError
sha512_256(5); // $ExpectError
sha512_256('data'); // $ExpectError
sha512_256('data', 5); // $ExpectError
sha512_256('data', 'base64rawurl'); // $ExpectType string
binary = sha512_256('data', 'binary');
sha512_256('data', 'hex', 5); // $ExpectError

// ripemd160
ripemd160(); // $ExpectError
ripemd160(5); // $ExpectError
ripemd160('data'); // $ExpectError
ripemd160('data', 5); // $ExpectError
ripemd160('data', 'hex'); // $ExpectType string
binary = ripemd160('data', 'binary');
ripemd160('data', 'hex', 5); // $ExpectError

// createHash
createHash(); // $ExpectError
createHash(5); // $ExpectError
createHash('bad-algorithm'); // $ExpectError
hasher = createHash('sha512');
createHash('sha512', 5); // $ExpectError

// createHMAC
createHMAC(); // $ExpectError
createHMAC(5); // $ExpectError
createHMAC('bad-algorithm'); // $ExpectError
createHMAC('sha256'); // $ExpectError
createHMAC('sha256', 5); // $ExpectError
hasher = createHMAC('sha256', 'secret');
createHMAC('sha256', 'secret', 5); // $ExpectError

// Hasher
hasher = createHash('md4');
hasher.update(); // $ExpectError
hasher.update(5); // $ExpectError
hasher.update('data'); // $ExpectType void
hasher.digest(); // $ExpectError
hasher.digest(5); // $ExpectError
hasher.digest('bad-encoding'); // $ExpectError
hasher.digest('hex'); // $ExpectType string
binary = hasher.digest('binary');
hasher.digest('hex', 5); // $ExpectError
