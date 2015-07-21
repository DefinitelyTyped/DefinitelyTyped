/// <reference path="./bigint.d.ts" />

var bi: BigInt.BigInt;
var num: number;
var str: string;
var b: boolean;

BigInt.setRandom(() => { return 0; });

bi = BigInt.add(bi, bi);
bi = BigInt.addInt(bi, num);
str = BigInt.bigInt2str(bi, num);
str = BigInt.bigInt2str(bi, str);
num = BigInt.bitSize(bi);
bi = BigInt.dup(bi);
b = BigInt.equals(bi, bi);
b = BigInt.equalsInt(bi, num);
bi = BigInt.expand(bi, num);
var nums: number[] = BigInt.findPrimes(num);
bi = BigInt.GCD(bi, bi);
b = BigInt.greater(bi, bi);
b = BigInt.greaterShift(bi, bi, num);
bi = BigInt.int2bigInt(0);
bi = BigInt.int2bigInt(0, 0);
bi = BigInt.int2bigInt(0, 0, 0);
bi = BigInt.inverseMod(bi, bi);
bi = BigInt.inverseModInt(num, num);
b = BigInt.isZero(bi);
b = BigInt.millerRabin(bi, bi);
b = BigInt.millerRabinInt(num, num);
bi = BigInt.mod(bi, bi);
num = BigInt.modInt(bi, num);
bi = BigInt.mult(bi, bi);
bi = BigInt.multMod(bi, bi, bi);
b = BigInt.negative(bi);
bi = BigInt.powMod(bi, bi, bi);
bi = BigInt.randBigInt(num, num);
bi = BigInt.randTruePrime(num);
bi = BigInt.randProbPrime(num);
bi = BigInt.str2bigInt(str, num);
bi = BigInt.str2bigInt(str, num, 0);
bi = BigInt.str2bigInt(str, num, 0, 0);
bi = BigInt.str2bigInt(str, str);
bi = BigInt.str2bigInt(str, str, 0);
bi = BigInt.str2bigInt(str, str, 0, 0);
bi = BigInt.sub(bi, bi);
bi = BigInt.trim(bi, num);

BigInt.addInt_(bi, num);
BigInt.add_(bi, bi);
BigInt.copy_(bi, bi);
BigInt.copyInt_(bi, num);
BigInt.GCD_(bi, bi);
b = BigInt.inverseMod_(bi, bi);
BigInt.mod_(bi, bi);
BigInt.mult_(bi, bi);
BigInt.multMod_(bi, bi, bi);
BigInt.powMod_(bi, bi, bi);
BigInt.randBigInt_(bi, num, num);
BigInt.randTruePrime_(bi, num);
BigInt.sub_(bi, bi);
BigInt.addShift_(bi, bi, num);
BigInt.carry_(bi);
BigInt.divide_(bi, bi, bi, bi);
num = BigInt.divInt_(bi, num);
BigInt.eGCD_(bi, bi, bi, bi, bi);
BigInt.halve_(bi);
BigInt.leftShift_(bi, num);
BigInt.linComb_(bi, bi, num, num);
BigInt.linCombShift_(bi, bi, num, num);
BigInt.mont_(bi, bi, bi, num);
BigInt.multInt_(bi, num);
BigInt.rightShift_(bi, num);
BigInt.squareMod_(bi, bi);
BigInt.subShift_(bi, bi, num);

function someRandomRealCode() {
    bi = BigInt.int2bigInt(22, 5);
    bi = BigInt.str2bigInt("FFFFFFFFFFFFFFFFC90FDAA2", 16);
    str = BigInt.bigInt2str(bi, 16);
}
