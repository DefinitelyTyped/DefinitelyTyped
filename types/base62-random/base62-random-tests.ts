import base62 = require("base62-random");

base62(2); // $ExpectType string
base62.test("foo"); // $ExpectType boolean
base62.generateBase62Math(); // $ExpectType string
base62.generateBase62Node(); // $ExpectType string
base62.generateBase62Browser(); // $ExpectType string
base62.initMath(); // $ExpectType void
base62.initNode(); // $ExpectType void
base62.initBrowser(); // $ExpectType void
