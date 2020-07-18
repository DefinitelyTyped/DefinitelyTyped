import * as b64lite from "b64-lite";

b64lite.btoa(""); // $ExpectType string
b64lite.toBase64(""); // $ExpectType string

b64lite.atob(""); // $ExpectType string
b64lite.fromBase64(""); // $ExpectType string
