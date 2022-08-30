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

const arrayBuffer = new Uint8Array([10, 12]).buffer;

// randomBytes
// @ts-expect-error
randomBytes();
// @ts-expect-error
randomBytes('turmeric');
const ab: ArrayBuffer = randomBytes(100);
// @ts-expect-error
randomBytes(100, 5);

// hmac
// @ts-expect-error
hmac();
// @ts-expect-error
hmac(5);
// @ts-expect-error
hmac('bad-algorithm');
// @ts-expect-error
hmac('sha256');
// @ts-expect-error
hmac('sha256', 5);
// @ts-expect-error
hmac('sha256', 'secret');
// @ts-expect-error
hmac('sha256', 'secret', 5);
// @ts-expect-error
hmac('sha256', 'secret', 'data');
// @ts-expect-error
hmac('sha256', 'secret', 'data', 5);
// @ts-expect-error
hmac('sha256', 'secret', 'data', 'bad-encoding');
hmac('sha256', 'secret', 'data', 'hex'); // $ExpectType string
hmac('sha256', 'secret', arrayBuffer, 'hex'); // $ExpectType string
binary = hmac('sha256', 'secret', 'data', 'binary');
// @ts-expect-error
hmac('sha256', 'secret', 'data', 'hex', 5);

// md4
// @ts-expect-error
md4();
// @ts-expect-error
md4(5);
// @ts-expect-error
md4('data');
// @ts-expect-error
md4('data', 5);
md4('data', 'hex'); // $ExpectType string
binary = md4('data', 'binary');
// @ts-expect-error
md4('data', 'hex', 5);

// md5
// @ts-expect-error
md5();
// @ts-expect-error
md5(5);
// @ts-expect-error
md5('data');
// @ts-expect-error
md5('data', 5);
md5('data', 'base64'); // $ExpectType string
binary = md5('data', 'binary');
// @ts-expect-error
md5('data', 'hex', 5);

// sha1
// @ts-expect-error
sha1();
// @ts-expect-error
sha1(5);
// @ts-expect-error
sha1('data');
// @ts-expect-error
sha1('data', 5);
sha1('data', 'base64url'); // $ExpectType string
binary = sha1('data', 'binary');
// @ts-expect-error
sha1('data', 'hex', 5);

// sha256
// @ts-expect-error
sha256();
// @ts-expect-error
sha256(5);
// @ts-expect-error
sha256('data');
// @ts-expect-error
sha256('data', 5);
sha256('data', 'base64rawurl'); // $ExpectType string
binary = sha256('data', 'binary');
// @ts-expect-error
sha256('data', 'hex', 5);

// sha384
// @ts-expect-error
sha384();
// @ts-expect-error
sha384(5);
// @ts-expect-error
sha384('data');
// @ts-expect-error
sha384('data', 5);
sha384('data', 'hex'); // $ExpectType string
binary = sha384('data', 'binary');
// @ts-expect-error
sha384('data', 'hex', 5);

// sha512
// @ts-expect-error
sha512();
// @ts-expect-error
sha512(5);
// @ts-expect-error
sha512('data');
// @ts-expect-error
sha512('data', 5);
sha512('data', 'base64'); // $ExpectType string
binary = sha512('data', 'binary');
// @ts-expect-error
sha512('data', 'hex', 5);

// sha512_224
// @ts-expect-error
sha512_224();
// @ts-expect-error
sha512_224(5);
// @ts-expect-error
sha512_224('data');
// @ts-expect-error
sha512_224('data', 5);
sha512_224('data', 'base64url'); // $ExpectType string
binary = sha512_224('data', 'binary');
// @ts-expect-error
sha512_224('data', 'hex', 5);

// sha512_256
// @ts-expect-error
sha512_256();
// @ts-expect-error
sha512_256(5);
// @ts-expect-error
sha512_256('data');
// @ts-expect-error
sha512_256('data', 5);
sha512_256('data', 'base64rawurl'); // $ExpectType string
binary = sha512_256('data', 'binary');
// @ts-expect-error
sha512_256('data', 'hex', 5);

// ripemd160
// @ts-expect-error
ripemd160();
// @ts-expect-error
ripemd160(5);
// @ts-expect-error
ripemd160('data');
// @ts-expect-error
ripemd160('data', 5);
ripemd160('data', 'hex'); // $ExpectType string
binary = ripemd160('data', 'binary');
// @ts-expect-error
ripemd160('data', 'hex', 5);

// createHash
// @ts-expect-error
createHash();
// @ts-expect-error
createHash(5);
// @ts-expect-error
createHash('bad-algorithm');
hasher = createHash('sha512');
// @ts-expect-error
createHash('sha512', 5);

// createHMAC
// @ts-expect-error
createHMAC();
// @ts-expect-error
createHMAC(5);
// @ts-expect-error
createHMAC('bad-algorithm');
// @ts-expect-error
createHMAC('sha256');
// @ts-expect-error
createHMAC('sha256', 5);
hasher = createHMAC('sha256', 'secret');
hasher = createHMAC('sha256', arrayBuffer);
// @ts-expect-error
createHMAC('sha256', 'secret', 5);

// Hasher
hasher = createHash('md4');
// @ts-expect-error
hasher.update();
// @ts-expect-error
hasher.update(5);
hasher.update('data'); // $ExpectType void
// @ts-expect-error
hasher.digest();
// @ts-expect-error
hasher.digest(5);
// @ts-expect-error
hasher.digest('bad-encoding');
hasher.digest('hex'); // $ExpectType string
binary = hasher.digest('binary');
// @ts-expect-error
hasher.digest('hex', 5);

hasher.update(arrayBuffer); // $ExpectType void
ripemd160(arrayBuffer, 'hex'); // $ExpectType string
sha512_256(arrayBuffer, 'base64rawurl'); // $ExpectType string
sha512_224(arrayBuffer, 'base64rawurl'); // $ExpectType string
sha512(arrayBuffer, 'base64'); // $ExpectType string
sha384(arrayBuffer, 'hex'); // $ExpectType string
sha256(arrayBuffer, 'hex'); // $ExpectType string
sha1(arrayBuffer, 'base64url'); // $ExpectType string
md5(arrayBuffer, 'base64'); // $ExpectType string
md4(arrayBuffer, 'base64'); // $ExpectType string
hmac('sha256', 'secret', arrayBuffer, 'hex'); // $ExpectType string
