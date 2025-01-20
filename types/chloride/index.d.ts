/// <reference types="node" />

export interface KeyPair {
    publicKey: Buffer;
    secretKey: Buffer;
}
// *** hash ***
// sha512
export function crypto_hash(plainText: Buffer): Buffer;
// sha256
export function crypto_hash_sha256(plainText: Buffer): Buffer;

/** Signatures */
export function crypto_sign_keypair(): KeyPair;
// seed's length is 24 bytes
export function crypto_sign_seed_keypair(seed: Buffer): KeyPair;
// return concat( {the signature of the message}, {message} ),
// if just only need signature, use crypto_sign_detached instead
export function crypto_sign(message: Buffer, secretKey: Buffer): Buffer;
export function crypto_sign_open(signed: Buffer, publicKey: Buffer): Buffer;
export function crypto_sign_detached(message: Buffer, secretKey: Buffer): Buffer;
export function crypto_sign_verify_detached(signed: Buffer, message: Buffer, publicKey: Buffer): Buffer;

// *** Box ***
export function crypto_box_keypair(): KeyPair;
export function crypto_box_seed_keypair(seed: Buffer): KeyPair;
export function crypto_box_easy(data: Buffer, nonce: Buffer, publicKey: Buffer, secretKey: Buffer): Buffer;
export function crypto_box_open_easy(boxed: Buffer, nonce: Buffer, publicKey: Buffer, secretKey: Buffer): Buffer;

// *** SecretBox ***
export function crypto_secretbox_easy(plainText: Buffer, nonce: Buffer, key: Buffer): Buffer;
export function crypto_secretbox_open_easy(encrypted: Buffer, nonce: Buffer, key: Buffer): Buffer;

// *** random bytes ***
export function randombytes(buf: Buffer): void;

// *** auth ***
export function crypto_auth(data: Buffer, key: Buffer): Buffer;
export function crypto_auth_verify(signed: Buffer, data: Buffer, key: Buffer): boolean;

// *** scalar multiplication ***
export function crypto_scalarmult(secretKey: Buffer, publicKey: Buffer): Buffer;

// *** conversions ***
export function crypto_sign_ed25519_sk_to_curve25519(secretKey: Buffer): Buffer;
export function crypto_sign_ed25519_pk_to_curve25519(publicKey: Buffer): Buffer;
