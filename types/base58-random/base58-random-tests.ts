import base58 = require("base58-random");

base58(2); // $ExpectType string
base58.test("foo"); // $ExpectType boolean
base58.generateBase58Math(); // $ExpectType string
base58.generateBase58Node(); // $ExpectType string
base58.generateBase58Browser(); // $ExpectType string
base58.initMath(); // $ExpectType void
base58.initNode(); // $ExpectType void
base58.initBrowser(); // $ExpectType void
