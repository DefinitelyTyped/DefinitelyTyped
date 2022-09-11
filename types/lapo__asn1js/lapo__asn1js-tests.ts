import ASN1 = require('@lapo/asn1js');
import Base64 = require('@lapo/asn1js/base64');
import Hex = require('@lapo/asn1js/hex');
import Int10 = require('@lapo/asn1js/int10');
import oids = require('@lapo/asn1js/oids');

// @ts-expect-error
ASN1.decode();
// @ts-expect-error
ASN1.decode(['a', 'b', 'c']);
ASN1.decode([1, 2, 3]);
ASN1.decode(new Uint8Array([1, 2, 3]));
ASN1.decode('abc');
ASN1.decode([1, 2, 3], 0);

const asn = ASN1.decode([]);
const stream = asn.stream;
const tag = asn.tag;

stream.get(); // $ExpectType number

// @ts-expect-error
new ASN1();
new ASN1(stream, 0, 0, tag, 0, null);
new ASN1(stream, 0, 0, tag, 0, []);

// Base64
Base64.decode('abc'); // $ExpectType Uint8Array
Base64.decode([1, 2, 3]); // $ExpectType Uint8Array
Base64.decode(new Uint8Array([1, 2, 3])); // $ExpectType Uint8Array
Base64.pretty('abc'); // $ExpectType string
Base64.re; // $ExpectType RegExp
Base64.unarmor('abc'); // $ExpectType Uint8Array

// Hex
Hex.decode('abc'); // $ExpectType Uint8Array
Hex.decode([1, 2, 3]); // $ExpectType Uint8Array
Hex.decode(new Uint8Array([1, 2, 3])); // $ExpectType Uint8Array

// Int10
new Int10();
new Int10(123);
const int10 = new Int10();
int10.buf; // $ExpectType number[]
int10.mulAdd(256, 123); // $ExpectType void
int10.simplify(); // $ExpectType number | Int10
int10.sub(123); // $ExpectType void
int10.toString(); // $ExpectType string
int10.toString(10); // $ExpectType string
// @ts-expect-error
int10.toString(123);
int10.valueOf(); // $ExpectType number

// oids
oids; // $ExpectType { [key: string]: { d: string; c: string; w?: boolean | undefined; }; }
