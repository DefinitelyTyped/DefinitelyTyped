import elliptic = require('elliptic');
import BN = require('bn.js');

const ec = new elliptic.ec('secp256k1');

// Generate keys
const key = ec.genKeyPair();

// Sign the message's hash (input must be an array, or a hex-string)
const msgHash = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const signature = key.sign(msgHash);

// Export DER encoded signature in Array
const derSign = signature.toDER();

const decodedSignature = new elliptic.ec.Signature(derSign);

// Verify signature
console.log(key.verify(msgHash, derSign));

// CHECK WITH NO PRIVATE KEY

const pubPoint = key.getPublic();
const x = pubPoint.getX();
const y = pubPoint.getY();

// Public Key MUST be either:
// 1) '04' + hex string of x + hex string of y; or
// 2) object with two hex string properties (x and y); or
// 3) object with two buffer properties (x and y)
const pub = pubPoint.encode('hex', true);                            // case 1
const aPub = { x: x.toString('hex'), y: y.toString('hex') };         // case 2
const bPub = { x: x.toBuffer(), y: y.toBuffer() };                   // case 3
const cPub = { x: x.toArrayLike(Buffer), y: y.toArrayLike(Buffer) }; // case 3

// Import public key
const newKey = ec.keyFromPublic(pub, 'hex');

// Import public key from array
const pubArray = pubPoint.encode('array', true);
const newKeyFromArray = ec.keyFromPublic(pubArray);
console.log(pub === newKeyFromArray.getPublic().encodeCompressed('hex'));

// Signature MUST be either:
// 1) DER-encoded signature as hex-string; or
// 2) DER-encoded signature as buffer; or
// 3) object with two hex-string properties (r and s); or
// 4) object with two buffer properties (r and s)

// const signature = '3046022100...'; // case 1
// const signature = new Buffer('...'); // case 2
// const signature = { r: 'b1fc...', s: '9c42...' }; // case 3

// Verify signature
console.log(key.verify(msgHash, signature));

// EDDSA tests
const eddsa = new elliptic.eddsa('ed25519');
const msg = Buffer.from('dead', 'hex');
const priv = 'deadbeef';

const sig = eddsa.sign(msg, priv);
sig.toHex();
sig.toBytes();
eddsa.sign(msg.toString('hex'), priv).toHex();

const edkey = eddsa.keyFromSecret(priv);
edkey.verify(msg, sig);
edkey.verify(msg.toString('hex'), sig.toBytes());

const edkey2 = eddsa.keyFromPublic(key.getPublic());
edkey2.verify(msg, sig);

eddsa.verify(msg, sig, edkey2.getPublic('hex'));
eddsa.verify(msg.toString('hex'), sig.toBytes(), edkey2.getPublic());
eddsa.verify(msg, sig.toHex(), edkey2.getPublic());

// Curves Tests
elliptic.curve.base.BasePoint;

const c = new elliptic.curve.edwards({
    p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
    a: -1,
    c: 1,
    d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
});

const p = c.pointFromX(5555);
p.eq(p);
eddsa.isPoint(p);
c.validate(p.add(p).mul(new BN(3)).dbl());

const sc = new elliptic.curve.short({
    a: 1,
    b: 0,
    p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
});

const p2 = sc.pointFromX(123456789);
sc.validate(p2.add(p2).mul(new BN(5)).dbl());
sc.pointFromJSON(p2.toJSON(), false).toJSON();

// ECDH Tests

const key1 = ec.genKeyPair();
const key2 = ec.genKeyPair();

const shared1 = key1.derive(key2.getPublic());
const shared2 = key2.derive(key1.getPublic());

console.log(BN.isBN(shared1) && BN.isBN(shared2));
console.log(shared1.toString('hex') === shared2.toString('hex'));
