import * as base64url from 'base64-url';

base64url.encode('Node.js is awesome.'); // $ExpectType string
base64url.decode('Tm9kZS5qcyBpcyBhd2Vzb21lLg'); // $ExpectType string
base64url.escape('This+is/goingto+escape=='); // $ExpectType string
base64url.unescape('This-is_goingto-escape'); // $ExpectType string

base64url.encode('string to encode', 'ascii'); // $ExpectType string
base64url.decode('string to decode', 'ascii'); // $ExpectType string
