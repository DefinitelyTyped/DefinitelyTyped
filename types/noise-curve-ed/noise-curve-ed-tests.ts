import * as curve from "noise-curve-ed";
import Noise = require("noise-handshake");

// test type exports
type KeyPair = curve.KeyPair;
type SecretKey = curve.SecretKey;

curve.DHLEN; // $ExpectType 32
curve.PKLEN; // $ExpectType 32
curve.SCALARLEN; // $ExpectType 32
curve.SKLEN; // $ExpectType 64
curve.ALG; // $ExpectType "Ed25519"
curve.name; // $ExpectType "Ed25519"

declare let buf: Buffer | Uint8Array;

const kp = curve.generateKeyPair(); // $ExpectType KeyPair
curve.generateKeyPair(Buffer.alloc(10)); // $ExpectType KeyPair
buf = curve.dh(Buffer.alloc(10), { secretKey: Buffer.alloc(10) });
buf = curve.dh(Buffer.alloc(10), { scalar: Buffer.alloc(10), secretKey: Buffer.alloc(10) });
buf = curve.dh(Buffer.alloc(10), kp);

new Noise("IK", true, undefined, { curve });
