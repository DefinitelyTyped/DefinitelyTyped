import { Base64 } from 'js-base64';

Base64.encode(''); // $ExpectType string
Base64.encode('', true); // $ExpectType string
Base64.encodeURI(''); // $ExpectType string
Base64.decode(''); // $ExpectType string
Base64.atob(''); // $ExpectType string
Base64.btoa(''); // $ExpectType string
Base64.fromBase64(''); // $ExpectType string
Base64.toBase64(''); // $ExpectType string
Base64.toBase64('', true); // $ExpectType string
Base64.btou(''); // $ExpectType string
Base64.utob(''); // $ExpectType string

Base64.noConflict(); // $ExpectType typeof Base64

Base64.extendString(); // $ExpectType void
''.toBase64(); // $ExpectType string
''.toBase64(true); // $ExpectType string
''.toBase64URI(); // $ExpectType string
''.fromBase64(); // $ExpectType string
