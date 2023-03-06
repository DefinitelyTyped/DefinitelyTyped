import { b64decode, b64encode } from 'k6/encoding';

// b64decode
// @ts-expect-error
b64decode();
// @ts-expect-error
b64decode(5);
b64decode('AQID'); // $ExpectType ArrayBuffer
// @ts-expect-error
b64decode('AQID', 5);
// @ts-expect-error
b64decode('AQID', 'badvariant');
b64decode('AQID', 'url'); // $ExpectType ArrayBuffer
b64decode('AQID', 'url', 's'); // $ExpectType string
// @ts-expect-error
b64decode('AQID', 'url', 'i');
// @ts-expect-error
b64decode('AQID', 'url', null);
// @ts-expect-error
b64decode('AQID', 'url', 5);

// b64encode
// @ts-expect-error
b64encode();
// @ts-expect-error
b64encode(5);
b64encode('curry'); // $ExpectType string
// @ts-expect-error
b64encode('curry', 5);
// @ts-expect-error
b64encode('curry', 'badvariant');
b64encode('curry', 'url'); // $ExpectType string
// @ts-expect-error
b64encode('curry', 'url', 5);

const arrayBuffer = new Uint8Array([10, 12]).buffer;
b64encode(arrayBuffer);
