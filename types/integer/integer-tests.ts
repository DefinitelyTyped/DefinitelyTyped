/// <reference types="node" />

import Integer = require('integer');

let num0: Integer.IntClass = Integer(0);
num0 = num0.add(10);
console.assert(!num0.compare(20));
num0 = num0.add('10');
console.assert(!num0.compare(30));
num0 = num0.add(num0);
console.assert(!num0.compare(60));

let num1: Integer.IntClass = Integer.fromBits(0xFF);
const num2: Integer.IntClass = Integer.fromBits(0xFF, 0xFF);
num1 = num1.shl(32);
console.assert(!num1.compare(num2));

const num3: Integer.IntClass = Integer.fromNumber(10);
let num4: Integer.IntClass = Integer.fromNumber(10, 10);
console.assert(!num3.compare(num4));
num4 = Integer.fromNumber(10, num3);
console.assert(!num3.compare(num4));

const num5: Integer.IntClass = Integer.fromString('255');
const num6: Integer.IntClass = Integer.fromString('ff', 16);
console.assert(!num5.compare(num6));
let num7: Integer.IntClass = Integer.fromString('ff', 16, '255');
console.assert(!num5.compare(num7));
num7 = Integer.fromString('ff', 16, num5);
console.assert(!num6.compare(num7));
