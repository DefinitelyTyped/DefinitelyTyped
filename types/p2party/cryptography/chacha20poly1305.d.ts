import type { LibCrypto } from "./libcrypto";
/**
 * Encrypts a message with additional data using
 * the crypto_aead_chacha20poly1305_ietf_encrypt operation from
 * libsodium and computes a symmetric key Uint8Array(32) from the sender's
 * Ed25519 secret key and the receiver's Ed25519 public key.
 * The X25519 key counterparts are computed in wasm from the libsodium provided
 * crypto_sign_ed25519_pk_to_curve25519 and crypto_sign_ed25519_sk_to_curve25519
 * functions.
 * The symmetric key for encryption is then computed by crypto_kx_server_session_keys.
 * The nonce is calculated by taking the first half of the
 * sha512 hash of a Uint8Array(3 * 32) array with 32 random bytes, the X25519 public key
 * and the X25519 secret key.
 * The auth tag is generated using Poly1305.
 *
 * If you need to perform bulk encryptions with predictable message
 * and additional data sizes then it will be more efficient to preload
 * the wasm module and reuse it as follows:
 *
 * ```ts
 * const messageLen = message.length;
 * const additionalLen = additionalData.length;
 *
 * const wasmMemory = dcryptoMemory.encryptMemory(messageLen, additionalLen);
 * const wasmModule = await dcryptoMethodsModule({ wasmMemory });
 * ```
 *
 * If not all messages and additional data are equal, you can always just use
 * the largest Uint8Arrays as inputs.
 *
 * ```ts
 * import dcrypto from \"@deliberative/crypto\"
 *
 * const message = new Uint8Array(128).fill(1);
 * const additionalData = new Uint8Array(64).fill(2);
 *
 * const aliceKeyPair = await dcrypto.keyPair();
 * const bobKeyPair = await dcrypto.keyPair();
 *
 * const box = await dcrypto.encrypt(
 *    message,
 *    bobKeyPair.publicKey,
 *    aliceKeyPair.secretKey,
 *    additionalData
 * );
 * ```
 *
 * @param message - the message to encrypt
 * @param receiverPublicKey - the receiver's Ed25519 public key
 * @param senderSecretKey - the sender's Ed25519 secret key
 * @param additionalData - the additional data for aead
 * @param module - wasm module in case of bulk encryptions
 *
 * @returns Encrypted box [nonce 16 || encrypted_data || auth tag 12]
 */
export declare const encryptAsymmetric: (message: Uint8Array, receiverPublicKey: Uint8Array, senderSecretKey: Uint8Array, additionalData: Uint8Array, module?: LibCrypto) => Promise<Uint8Array>;
/**
 * Decrypts a box with additional data using the
 * crypto_aead_chacha20poly1305_ietf_decrypt function from libsodium and
 * computes a symmetric key Uint8Array(32) from the sender's
 * Ed25519 public key and the receiver's Ed25519 secret key.
 * The X25519 key counterparts are computed in wasm from the libsodium provided
 * crypto_sign_ed25519_pk_to_curve25519 and crypto_sign_ed25519_sk_to_curve25519
 * functions.
 * The symmetric key for encryption is then computed by crypto_kx_client_session_keys.
 * The encrypted box is a Uint8Array[nonce 16 || encrypted_data || auth tag 12].
 *
 * If you need to perform bulk decryptions with predictable box
 * and additional data sizes then it will be more efficient to preload
 * the wasm module and reuse it as follows:
 *
 * ```ts
 * const messageLen = message.length;
 * const additionalLen = additionalData.length;
 *
 * const wasmMemory = dcryptoMemory.decryptMemory(messageLen, additionalLen);
 * const wasmModule = await dcryptoMethodsModule({ wasmMemory });
 * ```
 *
 * If not all boxes and additional data are equal, you can always just use
 * the largest Uint8Arrays as inputs.
 *
 * @example
 * ```ts
 * import dcrypto from \"@deliberative/crypto\"
 *
 * const message = new Uint8Array(128).fill(1);
 * const additionalData = new Uint8Array(64).fill(2);
 *
 * const aliceKeyPair = await dcrypto.keyPair();
 * const bobKeyPair = await dcrypto.keyPair();
 *
 * const box = await dcrypto.encrypt(
 *    message,
 *    bobKeyPair.publicKey,
 *    aliceKeyPair.secretKey,
 *    additionalData
 * );
 *
 * const decrypted = await dcrypto.decrypt(
 *    box,
 *    bobKeyPair.secretKey,
 *    additionalData
 * );
 *
 * \/\/ message should be equal to decrypted.
 * ```
 *
 * @param encrypted - The encrypted box including sender public key, nonce and auth tag
 * @param receiverSecretKey - The receiver secret key
 * @param additionalData - The additional data for aead
 * @param module - The wasm module in case of bulk decryptions
 * @returns The decrypted message
 */
export declare const decryptAsymmetric: (encrypted: Uint8Array, publicKey: Uint8Array, secretKey: Uint8Array, additionalData: Uint8Array, module?: LibCrypto) => Promise<Uint8Array>;
//# sourceMappingURL=chacha20poly1305.d.ts.map