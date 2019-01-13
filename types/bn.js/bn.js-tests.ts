// test that it works as a require
import BN = require('bn.js');

let bn = new BN(42);
bn = bn.add(bn);
bn.isZero();
bn.byteLength;

bn.toArrayLike(Buffer, 'le', 2);
const test = new BN(1, 'le');
