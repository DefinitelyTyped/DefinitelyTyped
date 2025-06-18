import base64util = require("base64util");

base64util.VERSION; // $ExpectType string

base64util._atob(""); // $ExpectType string
base64util._btoa(""); // $ExpectType string
base64util.byteDecode(""); // $ExpectType string
base64util.byteEncode(""); // $ExpectType string
base64util.byteUrlDecode(""); // $ExpectType string
base64util.byteUrlEncode(""); // $ExpectType string
base64util.decode(""); // $ExpectType string
base64util.encode(""); // $ExpectType string
base64util.mb2utf8(""); // $ExpectType string
base64util.mbDecode(""); // $ExpectType string
base64util.mbEncode(""); // $ExpectType string
base64util.mbUrlDecode(""); // $ExpectType string
base64util.mbUrlEncode(""); // $ExpectType string
base64util.polyfill(""); // $ExpectType string
base64util.urlDecode(""); // $ExpectType string
base64util.urlEncode(""); // $ExpectType string
base64util.utf82mb(""); // $ExpectType string
base64util.bindProto({}); // $ExpectType void
