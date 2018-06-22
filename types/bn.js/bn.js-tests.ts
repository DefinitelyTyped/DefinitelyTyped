// test that it works as module when esModuleInterop is enabled
import BN from 'bn.js';

// test that it works as a require
import BN2 = require('bn.js');

let bn = new BN(42);
bn = bn.add(bn);
bn.isZero();
bn.byteLength;

let bn2 = new BN2(42);
bn2 = bn2.add(bn2);
bn2.isZero();
bn2.byteLength;
