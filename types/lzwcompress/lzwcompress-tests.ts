import lzwCompress = require("lzwcompress");

lzwCompress.pack(undefined); // $ExpectType unknown
lzwCompress.pack(null); // $ExpectType unknown
lzwCompress.pack(123); // $ExpectType unknown
lzwCompress.pack(false); // $ExpectType unknown
lzwCompress.pack(true); // $ExpectType unknown
lzwCompress.pack(new Date()); // $ExpectType unknown

lzwCompress.pack(""); // $ExpectType unknown
lzwCompress.pack("hello"); // $ExpectType unknown

lzwCompress.pack({ name: "Ada" }); // $ExpectType unknown
lzwCompress.pack({ name: "⌈" }); // $ExpectType unknown
lzwCompress.pack([1, 2, 3]); // $ExpectType unknown

lzwCompress.unpack([104, 101, 108, 108, 111]); // $ExpectType unknown
lzwCompress.unpack("hello"); // $ExpectType unknown
lzwCompress.unpack("{\"__k\":[\"name\"],\"__v\":{\"0\":\"⌈\"}}"); // $ExpectType unknown
lzwCompress.unpack(false); // $ExpectType unknown
lzwCompress.unpack(null); // $ExpectType unknown
lzwCompress.unpack(new Date()); // $ExpectType unknown

lzwCompress.enableLogging(true); // $ExpectType void

// @ts-expect-error
lzwCompress.enableLogging("true");
