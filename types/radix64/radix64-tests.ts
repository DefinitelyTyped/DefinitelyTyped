import radix64 = require("radix64");

const num: string = radix64.radix64(42);

const numAndEnum: string = radix64.radix64(1337, radix64.methods.BASE64NATURAL);

const numAndString: string = radix64.radix64(1337, "base64URL");

const asciiNum: string = radix64.ascii64(42);

const asciiNumAndPad: string = radix64.ascii64(42, 25);

const base64Num: string = radix64.base64(27);

const base64URLNum: string = radix64.base64URL(27);

const base64NaturalNum: string = radix64.base64Natural(27);

const base64ASCIINum: string = radix64.base64ASCII(27);
