export declare const crypto_auth_hmacsha512_BYTES: number;
export declare const crypto_auth_hmacsha512_KEYBYTES: number;
export declare const crypto_hash_sha512_BYTES: number;
export declare const crypto_sign_ed25519_BYTES: number;
export declare const crypto_sign_ed25519_SEEDBYTES: number;
export declare const crypto_sign_ed25519_PUBLICKEYBYTES: number;
export declare const crypto_sign_ed25519_SECRETKEYBYTES: number;
export declare const crypto_secretbox_KEYBYTES: number;
export declare const crypto_secretbox_NONCEBYTES: number;
export declare const crypto_box_poly1305_AUTHTAGBYTES: number;
export declare const crypto_box_x25519_PUBLICKEYBYTES: number;
export declare const crypto_box_x25519_SECRETKEYBYTES: number;
export declare const crypto_box_x25519_NONCEBYTES: number;
export declare const crypto_aead_chacha20poly1305_ietf_KEYBYTES: number;
export declare const crypto_aead_chacha20poly1305_ietf_NPUBBYTES: number;
export declare const crypto_pwhash_argon2id_SALTBYTES: number;
export interface SignKeyPair {
    publicKey: Uint8Array;
    secretKey: Uint8Array;
}
export declare const getEncryptedLen: (dataLen: number) => number;
export declare const getDecryptedLen: (encryptedLen: number) => number;
declare const _default: {
    crypto_hash_sha512_BYTES: number;
    crypto_sign_ed25519_BYTES: number;
    crypto_sign_ed25519_SEEDBYTES: number;
    crypto_sign_ed25519_PUBLICKEYBYTES: number;
    crypto_sign_ed25519_SECRETKEYBYTES: number;
    crypto_secretbox_KEYBYTES: number;
    crypto_secretbox_NONCEBYTES: number;
    crypto_box_poly1305_AUTHTAGBYTES: number;
    crypto_box_x25519_PUBLICKEYBYTES: number;
    crypto_box_x25519_SECRETKEYBYTES: number;
    crypto_box_x25519_NONCEBYTES: number;
    crypto_aead_chacha20poly1305_ietf_KEYBYTES: number;
    getEncryptedLen: (dataLen: number) => number;
    getDecryptedLen: (encryptedLen: number) => number;
};
export default _default;
//# sourceMappingURL=interfaces.d.ts.map