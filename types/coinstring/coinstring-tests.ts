import cs = require('coinstring');

let privateKeyHex = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
let privateKeyHexBuf = new Buffer(privateKeyHex, 'hex');
let version = 0x80; // Bitcoin private key

console.log(cs.encode(privateKeyHexBuf, version));
// => 5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD

let hash160 = "3c176e659bea0f29a3e9bf7880c112b1b31b4dc8"; // hash representing uncompressed
let hash160Buf = new Buffer(hash160, 'hex');
version = 0x00; // Bitcoin public address

console.log(cs.encode(hash160Buf, version));
// => 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS

privateKeyHex = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";

// for compressed, append "01"
privateKeyHex += '01';

privateKeyHexBuf = new Buffer(privateKeyHex, 'hex');
version = 0x80; // Bitcoin private key

console.log(cs.encode(privateKeyHexBuf, version));
// => KwomKti1X3tYJUUMb1TGSM2mrZk1wb1aHisUNHCQXTZq5auC2qc3

hash160 = "3c176e659bea0f29a3e9bf7880c112b1b31b4dc8"; // hash representing uncompressed
hash160Buf = new Buffer(hash160, 'hex');
version = 0x1E; // Dogecoin public address

console.log(cs.encode(hash160Buf, version));
// => DAcq9oJpZZAjr56RmF7Y5zmWboZWQ4HAsW

const data = "000000000000000000873dff81c02f525623fd1fe5167eac3a55a049de3d314bb42ee227ffed37d50800e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35";
const buffer = new Buffer(data, 'hex');
const versionBuffer = new Buffer('0488ade4', 'hex'); // 0488ade4 is a consant listed in the aforementioned bip32 wiki.

console.log(cs.encode(buffer, versionBuffer));
// => xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi

privateKeyHex = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
privateKeyHexBuf = new Buffer(privateKeyHex, 'hex');
version = 0x80; // Bitcoin private key

const toBtcWif = cs.createEncoder(version);

// later in your program
console.log(toBtcWif(privateKeyHexBuf));
// => 5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD

const wif = "5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD";
version = 0x80; // Bitcoin private key

const fromBtcWif = cs.createDecoder(version);

hash160 = "3c176e659bea0f29a3e9bf7880c112b1b31b4dc8"; // hash representing uncompressed
hash160Buf = new Buffer(hash160, 'hex');
version = 0x6F; // Bitcoin Testnet Address

const testnetAddressValidator = cs.createValidator(version);
console.log(testnetAddressValidator("mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe")); // => true
