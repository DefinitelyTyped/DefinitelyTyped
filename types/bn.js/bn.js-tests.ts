import BN = require('bn.js');

let bn = new BN(42);
bn = bn.add(bn);
bn.isZero();
bn.byteLength;

BN.isBN(3); // false
BN.isBN(bn); // true

bn.usubn(1); // 41
bn.uaddn(1); // 42
