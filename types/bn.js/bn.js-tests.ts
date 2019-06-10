// test that it works as a require
import BN = require('bn.js');

let bn = new BN(42);
bn = bn.add(bn);
bn.isZero();
bn.byteLength;

bn.toArrayLike(Buffer, 'le', 2);
const test = new BN(1, 'le');

const ctx = BN.red('p224');
ctx.prime.name;

const red = bn.toRed(ctx);
const newRed = red.redAdd(new BN(1));
newRed.cmp(bn);
newRed.fromRed();

const expected = new BN(0x4020);
const actualArray = new BN([0x40, 0x20]);
const actualUint8Array =  new BN(new Uint8Array([0x40, 0x20]));
const actualString = new BN('0x4020');
