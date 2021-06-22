import Integer = require("integer");

let num0: Integer.IntClass = Integer(0);
num0 = num0.add(10);
num0 = num0.add("10");
num0 = num0.add(num0);
let num1: Integer.IntClass = Integer.fromBits(0xff);
num1.compare(num0);
const num2: Integer.IntClass = Integer.fromBits(0xff, 0xff);
num1 = num1.shl(32);
const num3: Integer.IntClass = Integer.fromNumber(10);
let num4: Integer.IntClass = Integer.fromNumber(10, 10);
num4 = Integer.fromNumber(10, num3);
const num5: Integer.IntClass = Integer.fromString("255");
const num6: Integer.IntClass = Integer.fromString("ff", 16);
let num7: Integer.IntClass = Integer.fromString("ff", 16, "255");
num7 = Integer.fromString("ff", 16, num5);
Integer(Integer(123));
