import * as ch from "chloride";

const data = Buffer.from("data");
const seed = Buffer.alloc(32);
const nonce = Buffer.alloc(24);

let keyPair: ch.KeyPair;
let hashed: Buffer;

// *** hash ***
// sha512
hashed = ch.crypto_hash(data);
// sha256
hashed = ch.crypto_hash_sha256(data);

let signed: Buffer;
let unsigned: Buffer;
// *** Signatures ***
keyPair = ch.crypto_sign_keypair();
keyPair = ch.crypto_sign_seed_keypair(seed);
signed = ch.crypto_sign(data, keyPair.secretKey);
unsigned = ch.crypto_sign_open(signed, keyPair.publicKey);
signed = ch.crypto_sign_detached(data, keyPair.secretKey);
unsigned = ch.crypto_sign_verify_detached(signed, data, keyPair.publicKey);

let encrypted: Buffer;
let unencrypted: Buffer;
let key: Buffer = Buffer.alloc(32);

// *** Box ***
keyPair = ch.crypto_box_keypair();
keyPair = ch.crypto_box_seed_keypair(seed);
encrypted = ch.crypto_box_easy(data, nonce, keyPair.publicKey, keyPair.secretKey);
unencrypted = ch.crypto_box_open_easy(encrypted, nonce, keyPair.publicKey, keyPair.secretKey);

// *** SecretBox ***
encrypted = ch.crypto_secretbox_easy(data, nonce, key);
unencrypted = ch.crypto_secretbox_open_easy(encrypted, nonce, key);

// *** random bytes ***
const buf: Buffer = Buffer.alloc(24);
ch.randombytes(buf);

// *** auth ***
let valid: boolean;
signed = ch.crypto_auth(data, key);
valid = ch.crypto_auth_verify(signed, data, key);

// *** scalar multiplication ***
key = ch.crypto_scalarmult(keyPair.secretKey, keyPair.publicKey);

// *** conversions ***
key = ch.crypto_sign_ed25519_pk_to_curve25519(keyPair.publicKey);
key = ch.crypto_sign_ed25519_sk_to_curve25519(keyPair.secretKey);
