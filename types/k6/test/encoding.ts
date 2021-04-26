import { b64decode, b64encode } from 'k6/encoding';

// b64decode
b64decode(); // $ExpectError
b64decode(5); // $ExpectError
b64decode('AQID'); // $ExpectType string
b64decode('AQID', 5); // $ExpectError
b64decode('AQID', 'badvariant'); // $ExpectError
b64decode('AQID', 'url'); // $ExpectType string
b64decode('AQID', 'url', 5); // $ExpectError

// b64encode
b64encode(); // $ExpectError
b64encode(5); // $ExpectError
b64encode('curry'); // $ExpectType string
b64encode('curry', 5); // $ExpectError
b64encode('curry', 'badvariant'); // $ExpectError
b64encode('curry', 'url'); // $ExpectType string
b64encode('curry', 'url', 5); // $ExpectError

const arrayBuffer = new Uint8Array([10, 12]).buffer;
b64decode(arrayBuffer);
b64encode(arrayBuffer);
