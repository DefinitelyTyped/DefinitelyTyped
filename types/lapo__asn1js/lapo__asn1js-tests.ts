import ASN1 = require('.');

// @ts-expect-error
ASN1.decode();
// @ts-expect-error
ASN1.decode(['a', 'b', 'c']);
ASN1.decode([1, 2, 3]);
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
