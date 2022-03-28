import { decode, encode } from 'strong-data-uri';

const decoded = decode('data:text/plain;charset=iso-8859-1;base64,aGVsbG8gd29ybGQ=');
decoded.mediatype; // $ExpectType string
decoded.mimetype; // $ExpectType string
decoded.charset; // $ExpectType string | null

encode('anystring'); // $ExpectType string
encode(Buffer.alloc(0)); // $ExpectType string
encode('anystring', 'foo/bar'); // $ExpectType string
