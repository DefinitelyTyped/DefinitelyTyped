import ecurve = require('ecurve');
import crypto = require('crypto');

import BigInteger = require('bigi');
import cs = require('coinstring');

let ecparams = ecurve.getCurveByName('secp256k1');
console.log(ecparams.n.toString(16));
// => fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141
console.log(ecparams.G.getEncoded().toString('hex')); // getEncoded() returns type 'Buffer' instead of 'BigInteger'
// => 0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798
console.log(ecparams.h.toString(16));
// => 1

const privateKey = new Buffer("1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd", 'hex');

ecparams = ecurve.getCurveByName('secp256k1');
const curvePt = ecparams.G.multiply(BigInteger.fromBuffer(privateKey));
const x = curvePt.affineX.toBuffer(32);
const y = curvePt.affineY.toBuffer(32);

let publicKey = Buffer.concat([new Buffer([0x04]), x, y]);
console.log(publicKey.toString('hex'));
// => 04d0988bfa799f7d7ef9ab3de97ef481cd0f75d2367ad456607647edde665d6f6fbdd594388756a7beaf73b4822bc22d36e9bda7db82df2b8b623673eefc0b7495

// alternatively
publicKey = curvePt.getEncoded(false); // false forces uncompressed public key
console.log(publicKey.toString('hex'));
// => 04d0988bfa799f7d7ef9ab3de97ef481cd0f75d2367ad456607647edde665d6f6fbdd594388756a7beaf73b4822bc22d36e9bda7db82df2b8b623673eefc0b7495

// want compressed?
publicKey = curvePt.getEncoded(true); // true forces compressed public key
console.log(publicKey.toString('hex'));
// => 03d0988bfa799f7d7ef9ab3de97ef481cd0f75d2367ad456607647edde665d6f6f

const sha = crypto.createHash('sha256').update(publicKey).digest();
const pubkeyHash = crypto.createHash('rmd160').update(sha).digest();

// pubkeyHash of compressed public key
console.log(pubkeyHash.toString('hex'));
// => a1c2f92a9dacbd2991c3897724a93f338e44bdc1

// address of compressed public key
console.log(cs.encode(pubkeyHash, 0x0));  // <-- 0x0 is for public addresses
// => 1FkKMsKNJqWSDvTvETqcCeHcUQQ64kSC6s

console.log(cs.encode(privateKey, 0x80)); // <--- 0x80 is for private addresses
// => 5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD

console.log(cs.encode(Buffer.concat([privateKey, new Buffer([0])]), 0x80)); // <-- compressed private address
// => KwomKti1X3tYJUUMb1TGSM2mrZk1wb1aHisUNHCQXTZq5aqzCxDY
