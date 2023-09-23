import * as curve from "noise-curve-secp";
import Noise = require("noise-handshake");

// test type exports
type KeyPair = curve.KeyPair;

curve.DHLEN; // $ExpectType 32
curve.PKLEN; // $ExpectType 33
curve.SKLEN; // $ExpectType 32
curve.ALG; // $ExpectType "secp256k1"
curve.name; // $ExpectType "secp256k1"

const kp = curve.generateKeyPair(); // $ExpectType KeyPair
curve.generateKeyPair(Buffer.alloc(10)); // $ExpectType KeyPair
curve.dh(Buffer.alloc(10), { secretKey: Buffer.alloc(10) }); // $ExpectType Buffer
curve.dh(Buffer.alloc(10), kp); // $ExpectType Buffer

new Noise("IK", true, undefined, { curve });
