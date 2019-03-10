import radix64 = require("radix64");

const num: string = radix64.radix64(42);

const numAndEnum: string = radix64.radix64(1337, radix64.methods.BASE64NATURAL);

const numAndString: string = radix64.radix64(1337, 'base64URL');

const asciiNum: string = radix64.ascii64(42);

const asciiNumAndPad: string = radix64.ascii64(42, 25);
