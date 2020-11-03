import base64js = require("base64-js");

base64js.byteLength(""); // $ExpectType number
base64js.toByteArray(""); // $ExpectType Uint8Array
base64js.fromByteArray(new Uint8Array(0)); // $ExpectType string
