import BIPPath = require("bip32-path");

const path = BIPPath.fromString("m/44'/60'/0'/0/0");
path; // $ExpectType BIPPath
path.toPathArray(); // $ExpectType number[]
path.toString(); // $ExpectType string
path.toString(true, true); // $ExpectType string
path.inspect(); // $ExpectType string
path.path; // $ExpectType number[]

BIPPath.fromString("44h/60h/0h", false); // $ExpectType BIPPath
BIPPath.fromPathArray([0x8000002c, 0x8000003c, 0x80000000]); // $ExpectType BIPPath
new BIPPath([1, 2, 3]); // $ExpectType BIPPath

BIPPath.validateString("m/44'/0'", true); // $ExpectType boolean
BIPPath.validatePathArray([1, 2]); // $ExpectType boolean
BIPPath.validatePathArray("m/0"); // $ExpectType boolean

// @ts-expect-error
BIPPath.fromString(44);
// @ts-expect-error
BIPPath.fromPathArray(["44'"]);
// @ts-expect-error
new BIPPath("m/0");
