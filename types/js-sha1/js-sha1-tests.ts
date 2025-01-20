import * as sha1 from "js-sha1";

sha1("test"); // $ExpectType string

sha1.hex("test"); // $ExpectType string
sha1.array("test"); // $ExpectType number[]
sha1.arrayBuffer("test"); // $ExpectType ArrayBuffer
sha1.digest("test"); // $ExpectType number[]
sha1.update("test"); // $ExpectType JsSha1Prototype

sha1.create().hex("test"); // $ExpectType string
sha1.create().array("test"); // $ExpectType number[]
sha1.create().arrayBuffer("test"); // $ExpectType ArrayBuffer
sha1.create().digest("test"); // $ExpectType number[]
sha1.create().update("test"); // $ExpectType JsSha1Prototype
