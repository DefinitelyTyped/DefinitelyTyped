import BN = require('bn.js');

let bn = new BN(42);
bn = bn.add(bn);
bn.isZero();
bn.byteLength;
