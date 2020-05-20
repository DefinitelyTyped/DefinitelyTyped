// test that it works as a require
import BN_require = require('bn.js');
// test that it works as module import
import * as BN_esm from 'bn.js';
import { Endianness, IPrimeName } from 'bn.js';

function runTests(BN: typeof BN_esm) {
    let bn = new BN(42);
    bn = bn.add(bn);
    bn.isZero();
    bn.byteLength;

    const endian: Endianness = 'le';
    bn.toArrayLike(Buffer, endian, 2);
    const test = new BN(1, endian);

    const primeName: IPrimeName = 'p224';
    const ctx = BN.red(primeName);
    ctx.prime.name;

    const red = bn.toRed(ctx);
    const newRed = red.redAdd(new BN(1).toRed(ctx));
    newRed.cmp(bn);
    newRed.fromRed();

    const expected = new BN(0x4020);
    const actualArray = new BN([0x40, 0x20]);
    const actualUint8Array =  new BN(new Uint8Array([0x40, 0x20]));
    const actualString = new BN('0x4020');
}

runTests(BN_esm);
runTests(BN_require);
