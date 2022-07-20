import * as b64lite from "b64-lite";

b64lite.btoa(""); // $ExpectType string
b64lite.toBase64(""); // $ExpectType string
b64lite.toBase64([228, 189, 160, 229, 165, 189]); // $ExpectType string
b64lite.toBase64(new Uint8Array([228, 189, 160, 229, 165, 189])); // $ExpectType string
b64lite.toBase64(new Uint8Array([228, 189, 160, 229, 165, 189]).buffer); // $ExpectType string

b64lite.atob(""); // $ExpectType string
b64lite.fromBase64(""); // $ExpectType string
b64lite.toBuffer('5L2g5aW9'); // $ExpectType Uint8Array
