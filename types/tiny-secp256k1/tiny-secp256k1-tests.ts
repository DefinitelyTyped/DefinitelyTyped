import { pointFromScalar, sign, verify } from 'tiny-secp256k1';

const d = Buffer.from('5272e811987e04833abf88c2cdbb43eddfefd7b4afa50e87bfcd3a2b297f0a93');
const Q = pointFromScalar(d);

const message = new Buffer(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x77, 0x6f, 0x72, 0x6c, 0x64]));
const signature = sign(message, d);

if (Q !== null) {
    verify(message, Q, signature);
}
