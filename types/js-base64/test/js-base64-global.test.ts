Base64.encode(''); // $ExpectType string
Base64.encode('', true); // $ExpectType string
Base64.encodeURI(''); // $ExpectType string
Base64.encodeURL(''); // $ExpectType string
Base64.decode(''); // $ExpectType string
Base64.atob(''); // $ExpectType string
Base64.btoa(''); // $ExpectType string
Base64.fromBase64(''); // $ExpectType string
Base64.toBase64(''); // $ExpectType string
Base64.toBase64('', true); // $ExpectType string
Base64.btou(''); // $ExpectType string
Base64.utob(''); // $ExpectType string

Base64.Base64; // $ExpectType Base64
Base64.Base64.Base64; // $ExpectError
Base64.noConflict(); // $ExpectType Base64

Base64.extendString(); // $ExpectType void
''.fromBase64(); // $ExpectType string
''.toBase64(); // $ExpectType string
''.toBase64(true); // $ExpectType string
''.toBase64URI(); // $ExpectType string
''.toBase64URL(); // $ExpectType string
''.toUint8Array(); // $ExpectType Uint8Array

Base64.extendUint8Array();
const arr = new Uint8Array([]);
arr.toBase64();
arr.toBase64URI();
arr.toBase64URL();

Base64.extendBuiltins();
