/// <reference path="long.d.ts" />

// --- commonjs ---
import Long = require("long");
// --- browser ---
//var Long = dcodeIO.Long;

var val:dcodeIO.Long;
var n:number;
var b:boolean;
var s:string;

val = new Long(0xFFFFFFFF, 0x7FFFFFFF);

val = Long.from28Bits(0xFFFFFFF, 0xFFFFFFF, 0xFF);

val = Long.fromInt(-1, true);
n = val.low;
n = val.high;
b = val.unsigned;
s = val.toString();

val = val.add(val);
val = val.and(val);
val = val.clone();
n = val.compare(val);
val = val.div(val);
b = val.equals(val);
n = val.getHighBits();
n = val.getHighBitsUnsigned();
n = val.getLowBits();
n = val.getLowBitsUnsigned();
n = val.getNumBitsAbs();
b = val.greaterThan(val);
b = val.greaterThanOrEqual(val);
b = val.isEven();
b = val.isNegative();
b = val.isOdd();
b = val.isZero();
b = val.lessThan(val);
b = val.lessThanOrEqual(val);
val = val.modulo(val);
val = val.multiply(val);
val = val.negate();
val = val.not();
b = val.notEquals(val);
val = val.or(val);
val = val.shiftLeft(2);
val = val.shiftRight(1);
val = val.shiftRightUnsigned(1);
val = val.subtract(val);
n = val.toInt();
n = val.toNumber();
val = val.toSigned();
val = val.toUnsigned();
val = val.xor(val);

val = Long.MAX_SIGNED_VALUE;
val = Long.MAX_UNSIGNED_VALUE;
val = Long.MAX_VALUE;
val = Long.MIN_SIGNED_VALUE;
val = Long.MIN_UNSIGNED_VALUE;
val = Long.MIN_VALUE;
val = Long.NEG_ONE;
val = Long.ONE;
val = Long.ZERO;


