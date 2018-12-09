import elliptic = require('elliptic');

const ec = new elliptic.ec('secp256k1');

// Generate keys
const key = ec.genKeyPair();

// Sign the message's hash (input must be an array, or a hex-string)
const msgHash = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const signature = key.sign(msgHash);

// Export DER encoded signature in Array
const derSign = signature.toDER();

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
const pub = pubPoint.encode('hex');                                 // case 1
const aPub = { x: x.toString('hex'), y: y.toString('hex') };         // case 2
const bPub = { x: x.toBuffer(), y: y.toBuffer() };                   // case 3
const cPub = { x: x.toArrayLike(Buffer), y: y.toArrayLike(Buffer) }; // case 3

// Import public key
const newKey = ec.keyFromPublic(pub, 'hex');

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
