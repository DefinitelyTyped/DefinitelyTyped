import * as fast64 from "fast64";

fast64.encode(""); // $ExpectType string
fast64.decode(""); // $ExpectType string
fast64.decode("", { uint8Array: true }); // $ExpectType Uint8Array
fast64.urlencode(""); // $ExpectType string
fast64.urldecode(""); // $ExpectType string
fast64.urldecode("", { uint8Array: true }); // $ExpectType Uint8Array
