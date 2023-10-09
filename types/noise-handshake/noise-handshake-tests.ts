import Noise = require("noise-handshake");
import SymmetricState = require("noise-handshake/symmetric-state");
import Cipher = require("noise-handshake/cipher");
import * as curve from "noise-handshake/dh";

// test type exports
type N = Noise;
type NC = typeof Noise;
type SC = SymmetricState;
type SCC = typeof SymmetricState;
type C = Cipher;
type CC = typeof Cipher;
type NO = Noise.Options;
type NCurve = Noise.Curve;
type NKP = Noise.KeyPair;
type SCO = SymmetricState.Options;
type SCCurve = SymmetricState.Curve;
type KP = curve.KeyPair;

declare let buf: Buffer | Uint8Array;
declare let bufnull: Buffer | Uint8Array | null;

const noise = new Noise("IK", true); // $ExpectType NoiseState
new Noise("XX", true); // $ExpectType NoiseState
// @ts-expect-error
new Noise("foo", true);
new Noise("IK", true, { publicKey: Buffer.alloc(32), secretKey: Buffer.alloc(32) }); // $ExpectType NoiseState
new Noise("IK", true, { publicKey: Buffer.alloc(32), secretKey: Buffer.alloc(32) }, { curve }); // $ExpectType NoiseState

noise.s; // $ExpectType KeyPair
buf = noise.s.publicKey;
buf = noise.s.secretKey;
noise.e; // $ExpectType KeyPair | null
noise.pattern; // $ExpectType "XX" | "IK"
noise.handshake; // $ExpectType (symbol | symbol[])[]
buf = noise.protocol;
noise.initiator; // $ExpectType boolean
bufnull = noise.re;
bufnull = noise.rs;
bufnull = noise.rx;
bufnull = noise.tx;
noise.complete; // $ExpectType boolean
bufnull = noise.hash;

noise.initialise(Buffer.alloc(32)); // $ExpectType void
noise.initialise(Buffer.alloc(32), Buffer.alloc(32)); // $ExpectType void

buf = noise.send();
buf = noise.send(Buffer.alloc(32));

buf = noise.recv(Buffer.alloc(32));

noise.final(); // $ExpectType void

let symmetricState: SymmetricState = noise;
symmetricState = new SymmetricState(); // $ExpectType SymmetricState
new SymmetricState({ curve }); // $ExpectType SymmetricState

symmetricState.DH_ALG; // $ExpectType string
symmetricState.curve; // $ExpectType Curve | null
bufnull = symmetricState.digest;
bufnull = symmetricState.chainingKey;
symmetricState.offset; // $ExpectType number | null

symmetricState.mixHash(Buffer.alloc(10)); // $ExpectType void
symmetricState.mixKey(Buffer.alloc(10), noise.s); // $ExpectType void
buf = symmetricState.encryptAndHash(Buffer.alloc(10));
buf = symmetricState.encryptAndHash("foo");
buf = symmetricState.decryptAndHash(Buffer.alloc(10));
buf = symmetricState.decryptAndHash("foo");
buf = symmetricState.getHandshakeHash();
buf = symmetricState.getHandshakeHash(Buffer.alloc(10));
symmetricState.split(); // $ExpectType [Buffer, Buffer] | [Uint8Array, Uint8Array]
symmetricState._clear(); // $ExpectType void

let cipherState: Cipher = symmetricState;
cipherState = new Cipher(); // $ExpectType CipherState
new Cipher(Buffer.alloc(10)); // $ExpectType CipherState

Cipher.MACBYTES; // $ExpectType 16
Cipher.NONCEBYTES; // $ExpectType 8
Cipher.KEYBYTES; // $ExpectType 32

cipherState.CIPHER_ALG; // $ExpectType "ChaChaPoly"
bufnull = cipherState.key;
cipherState.nonce; // $ExpectType number | null
cipherState.hasKey; // $ExpectType boolean

cipherState.initialiseKey(Buffer.alloc(10)); // $ExpectType void
cipherState.setNonce(1); // $ExpectType void
buf = cipherState.encrypt(Buffer.alloc(10));
buf = cipherState.encrypt(Buffer.alloc(10), Buffer.alloc(10));
buf = cipherState.encrypt("foo");
buf = cipherState.encrypt("foo", "bar");
buf = cipherState.decrypt(Buffer.alloc(10));
buf = cipherState.decrypt(Buffer.alloc(10), Buffer.alloc(10));
buf = cipherState.decrypt("foo");
buf = cipherState.decrypt("foo", "bar");
cipherState._clear(); // $ExpectType void

curve.DHLEN; // $ExpectType 32
curve.PKLEN; // $ExpectType 32
curve.SKLEN; // $ExpectType 32
curve.SEEDLEN; // $ExpectType 32
curve.ALG; // $ExpectType "25519"

curve.generateKeyPair(); // $ExpectType KeyPair
curve.generateKeyPair(Buffer.alloc(10)); // $ExpectType KeyPair
curve.generateSeedKeyPair(Buffer.alloc(10)); // $ExpectType KeyPair
buf = curve.dh(Buffer.alloc(10), noise.s);
