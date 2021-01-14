// Type definitions for chloride 2.4
// Project: https://github.com/ssb-js/chloride
// Definitions by: Zhiyuan Man <https://github.com/zman2013>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference types="node" />

export interface KeyPair {
    publicKey: Buffer;
    secretKey: Buffer;
}

declare namespace chloride {
    // *** hash ***
    // sha512
    function crypto_hash(plainText: Buffer): Buffer;
    // sha256
    function crypto_hash_sha256(plainText: Buffer): Buffer;

    /** Signatures */
    function crypto_sign_keypair(): KeyPair;
    // seed's length is 24 bytes
    function crypto_sign_seed_keypair(seed: Buffer): KeyPair;
    // return concat( {the signature of the message}, {message} ),
    // if just only need signature, use crypto_sign_detached instead
    function crypto_sign(message: Buffer, secretKey: Buffer): Buffer;
    function crypto_sign_open(signed: Buffer, publicKey: Buffer): Buffer;
    function crypto_sign_detached(message: Buffer, secretKey: Buffer): Buffer;
    function crypto_sign_verify_detached(signed: Buffer, message: Buffer, publicKey: Buffer): Buffer;

    // *** Box ***
    function crypto_box_keypair(): KeyPair;
    function crypto_box_seed_keypair(seed: Buffer): KeyPair;
    function crypto_box_easy(data: Buffer, nonce: Buffer, publicKey: Buffer, secretKey: Buffer): Buffer;
    function crypto_box_open_easy(boxed: Buffer, nonce: Buffer, publicKey: Buffer, secretKey: Buffer): Buffer;

    // *** SecretBox ***
    function crypto_secretbox_easy(plainText: Buffer, nonce: Buffer, key: Buffer): Buffer;
    function crypto_secretbox_open_easy(encrypted: Buffer, nonce: Buffer, key: Buffer): Buffer;

    // *** random bytes ***
    function randombytes(buf: Buffer): void;

    // *** auth ***
    function crypto_auth(data: Buffer, key: Buffer): Buffer;
    function crypto_auth_verify(signed: Buffer, data: Buffer, key: Buffer): boolean;

    // *** scalar multiplication ***
    function crypto_scalarmult(secretKey: Buffer, publicKey: Buffer): Buffer;

    // *** conversions ***
    function crypto_sign_ed25519_sk_to_curve25519(secretKey: Buffer): Buffer;
    function crypto_sign_ed25519_pk_to_curve25519(publicKey: Buffer): Buffer;
}
export default chloride;
