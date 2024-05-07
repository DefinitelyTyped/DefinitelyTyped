import * as sha1 from "js-sha1";

sha1("test"); // $ExpectType string

sha1.hex("test"); // $ExpectType string
sha1.array("test"); // $ExpectType number[]
sha1.arrayBuffer("test"); // $ExpectType ArrayBuffer
sha1.digest("test"); // $ExpectType number[]
sha1.update("test"); // $ExpectType string
