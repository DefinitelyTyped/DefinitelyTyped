import {BigInteger} from 'jsbn';

// constructor tests
var x = new BigInteger("AABB", 16);
x = new BigInteger("75643564363473453456342378564387956906736546456235345");

// method tests
var isBigInteger: BigInteger;
var isNumber: number;
var isBoolean: boolean;
var isString: string;
var isDivmod: BigInteger[];
var isByteArray: number[];

x.copyTo(x);
x.fromInt(0);
x.fromString("CAFEBABE", 16);
x.clamp();
isString = x.toString();
isString = x.toString(16);
isBigInteger = x.negate();
isBigInteger = x.abs();
isNumber = x.compareTo(x);
isNumber = x.bitLength();
x.dlShiftTo(0, isBigInteger);
x.drShiftTo(0, isBigInteger);
x.lShiftTo(0, isBigInteger);
x.rShiftTo(0, isBigInteger);
x.subTo(x, isBigInteger);
x.multiplyTo(x, isBigInteger);
x.squareTo(isBigInteger);
x.divRemTo(x, isBigInteger, isBigInteger);
isBigInteger = x.mod(x);
isNumber = x.invDigit();
isBoolean = x.isEven();
isBigInteger = x.exp(0, {
    convert: (x) => x,
    revert: (x) => x,
    reduce: (x) => x,
    mulTo: (x) => x,
    sqrTo: (x) => x
});
isBigInteger = x.modPowInt(0, x);
isBigInteger = x.clone();
isNumber = x.intValue();
isNumber = x.byteValue();
isNumber = x.shortValue();
isNumber = x.chunkSize(0);
isNumber = x.signum();
isString = x.toRadix(10);
x.fromRadix("123", 10);
x.fromNumber(1);
x.fromNumber(1, 2);
x.fromNumber(1, 2, 3);
isByteArray = x.toByteArray();
isBoolean = x.equals(x);
isBigInteger = x.min(x);
isBigInteger = x.max(x);
x.bitwiseTo(x, (x, y) => x + y, isBigInteger);
isBigInteger = x.and(x);
isBigInteger = x.or(x);
isBigInteger = x.xor(x);
isBigInteger = x.andNot(x);
isBigInteger = x.not();
isBigInteger = x.shiftLeft(0);
isBigInteger = x.shiftRight(0);
isNumber = x.getLowestSetBit();
isNumber = x.bitCount();
isBoolean = x.testBit(0);
isBigInteger = x.changeBit(0, (x, y) => x * y);
isBigInteger = x.setBit(0);
isBigInteger = x.clearBit(0);
isBigInteger = x.flipBit(0);
x.addTo(x, isBigInteger);
isBigInteger = x.add(x);
isBigInteger = x.subtract(x);
isBigInteger = x.multiply(x);
isBigInteger = x.square();
isBigInteger = x.divide(x);
isBigInteger = x.remainder(x);
isDivmod = x.divideAndRemainder(x);
x.dMultiply(0);
x.dAddOffset(0, 0);
isBigInteger = x.pow(0);
x.multiplyLowerTo(x, 0, isBigInteger);
x.multiplyUpperTo(x, 0, isBigInteger);
isBigInteger = x.modPow(x, x);
isBigInteger = x.gcd(x);
isNumber = x.modInt(0);
isBigInteger = x.modInverse(x);
isBoolean = x.isProbablePrime(0);
isBoolean = x.millerRabin(0);
