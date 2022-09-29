import { APPTOKEN_BYTES, APPTOKEN_BYTES_MIN, create, hash } from 'secure-token';

APPTOKEN_BYTES; // $ExpectType 18
APPTOKEN_BYTES_MIN; // $ExpectType 16

create(); // $ExpectType Buffer
create(APPTOKEN_BYTES); // $ExpectType Buffer

hash(create()); // $ExpectType Buffer
hash(create(), 'foo'); // $ExpectType Buffer
hash(create(), Buffer.from('foo')); // $ExpectType Buffer
