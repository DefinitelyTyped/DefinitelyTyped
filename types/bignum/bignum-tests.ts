

var bignum = require('bignum');

// Test constructors.
var instance = bignum(16);
bignum('16');
bignum(instance);

// Test `toNumber` function.
instance.toNumber();

bignum.toNumber(4);
bignum.toNumber('4');
bignum.toNumber(bignum(4));

// Test `toBuffer` function.
instance.toBuffer();

bignum.toBuffer(4);
bignum.toBuffer('4');
bignum.toBuffer(bignum(4));

// Test `add` function.
instance.add(4);
instance.add('4');
instance.add(bignum(4));

bignum.add(instance, 4);
bignum.add(instance, '4');
bignum.add(instance, bignum(4));

// Test `sub` function.
instance.sub(4);
instance.sub('4');
instance.sub(bignum(4));

bignum.sub(instance, 4);
bignum.sub(instance, '4');
bignum.sub(instance, bignum(4));

// Test `mul` function.
instance.mul(4);
instance.mul('4');
instance.mul(bignum(4));

bignum.mul(instance, 4);
bignum.mul(instance, '4');
bignum.mul(instance, bignum(4));

// Test `div` function.
instance.div(4);
instance.div('4');
instance.div(bignum(4));

bignum.div(instance, 4);
bignum.div(instance, '4');
bignum.div(instance, bignum(4));

// Test `abs` function.
instance.abs();
bignum.abs(instance);

// Test `neg` function.
instance.neg();
bignum.neg(instance);

// Test `cmp` function.
instance.cmp(4);
instance.cmp('4');
instance.cmp(bignum(4));

bignum.cmp(instance, 4);
bignum.cmp(instance, '4');
bignum.cmp(instance, bignum(4));

// Test `gt` function.
instance.gt(4);
instance.gt('4');
instance.gt(bignum(4));

bignum.gt(instance, 4);
bignum.gt(instance, '4');
bignum.gt(instance, bignum(4));

// Test `ge` function.
instance.ge(4);
instance.ge('4');
instance.ge(bignum(4));

bignum.ge(instance, 4);
bignum.ge(instance, '4');
bignum.ge(instance, bignum(4));

// Test `eq` function.
instance.eq(4);
instance.eq('4');
instance.eq(bignum(4));

bignum.eq(instance, 4);
bignum.eq(instance, '4');
bignum.eq(instance, bignum(4));

// Test `lt` function.
instance.lt(4);
instance.lt('4');
instance.lt(bignum(4));

bignum.lt(instance, 4);
bignum.lt(instance, '4');
bignum.lt(instance, bignum(4));

// Test `le` function.
instance.le(4);
instance.le('4');
instance.le(bignum(4));

bignum.le(instance, 4);
bignum.le(instance, '4');
bignum.le(instance, bignum(4));

// Test `and` function.
instance.and(4);
instance.and('4');
instance.and(bignum(4));

bignum.and(instance, 4);
bignum.and(instance, '4');
bignum.and(instance, bignum(4));

// Test `or` function.
instance.or(4);
instance.or('4');
instance.or(bignum(4));

bignum.or(instance, 4);
bignum.or(instance, '4');
bignum.or(instance, bignum(4));

// Test `xor` function.
instance.xor(4);
instance.xor('4');
instance.xor(bignum(4));

bignum.xor(instance, 4);
bignum.xor(instance, '4');
bignum.xor(instance, bignum(4));

// Test `mod` function.
instance.mod(4);
instance.mod('4');
instance.mod(bignum(4));

bignum.mod(instance, 4);
bignum.mod(instance, '4');
bignum.mod(instance, bignum(4));

// Test `pow` function.
instance.pow(4);
instance.pow('4');
instance.pow(bignum(4));

bignum.pow(instance, 4);
bignum.pow(instance, '4');
bignum.pow(instance, bignum(4));

// Test `powm` function.
instance.powm(4, 4);
instance.powm('4', 4);
instance.powm(bignum(4), 4);

bignum.powm(instance, 4, 4);
bignum.powm(instance, '4', 4);
bignum.powm(instance, bignum(4), 4);

instance.powm(4, '4');
instance.powm('4', '4');
instance.powm(bignum(4), '4');

bignum.powm(instance, 4, '4');
bignum.powm(instance, '4', '4');
bignum.powm(instance, bignum(4), '4');

instance.powm(4, bignum(4));
instance.powm('4', bignum(4));
instance.powm(bignum(4), bignum(4));

bignum.powm(instance, 4, bignum(4));
bignum.powm(instance, '4', bignum(4));
bignum.powm(instance, bignum(4), bignum(4));

// Test `invertm` function.
instance.invertm(4);
instance.invertm('4');
instance.invertm(bignum(4));

bignum.invertm(instance, 4);
bignum.invertm(instance, '4');
bignum.invertm(instance, bignum(4));

// Test `rand` function.
instance.rand();
instance.rand(20);
instance.rand('20');
instance.rand(bignum(20));

bignum.rand(instance);
bignum.rand(instance, 20);
bignum.rand(instance, '20');
bignum.rand(instance, bignum(20));

// Test `probPrime` function.
instance.probPrime();

bignum.probPrime(instance);

// Test `shiftLeft` function.
instance.shiftLeft(4);
instance.shiftLeft('4');
instance.shiftLeft(bignum(4));

bignum.shiftLeft(instance, 4);
bignum.shiftLeft(instance, '4');
bignum.shiftLeft(instance, bignum(4));

// Test `shiftRight` function.
instance.shiftRight(4);
instance.shiftRight('4');
instance.shiftRight(bignum(4));

bignum.shiftRight(instance, 4);
bignum.shiftRight(instance, '4');
bignum.shiftRight(instance, bignum(4));

// Test `gcd` function.
instance.gcd(bignum(4));

bignum.gcd(instance, bignum(4));

// Test `jacobi` function.
instance.jacobi(bignum(17));

bignum.jacobi(instance, bignum(17));

// Test `bitLength` function.
instance.bitLength();

bignum.bitLength(instance);
