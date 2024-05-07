import * as hexArray from "hex-array";

hexArray.toString(new Uint8Array([0x1, 0x2, 0x3]), { uppercase: true }); // $ExpectType string
hexArray.toString(new Uint8Array([0x1, 0x2, 0x3])); // $ExpectType string

hexArray.fromString("abcd"); // $ExpectType Uint8Array
