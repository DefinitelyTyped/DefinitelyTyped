export * from "libsodium-wrappers";

import { KeyPair, StateAddress, StringKeyPair, StringOutputFormat, Uint8ArrayOutputFormat } from "libsodium-wrappers";

export const crypto_auth_hmacsha256_BYTES: number;
export const crypto_auth_hmacsha256_KEYBYTES: number;
export const crypto_auth_hmacsha512_BYTES: number;
export const crypto_auth_hmacsha512_KEYBYTES: number;
export const crypto_auth_hmacsha512256_BYTES: number;
export const crypto_auth_hmacsha512256_KEYBYTES: number;
export const crypto_box_curve25519xchacha20poly1305_BEFORENMBYTES: number;
export const crypto_box_curve25519xchacha20poly1305_MACBYTES: number;
export const crypto_box_curve25519xchacha20poly1305_MESSAGEBYTES_MAX: number;
export const crypto_box_curve25519xchacha20poly1305_NONCEBYTES: number;
export const crypto_box_curve25519xchacha20poly1305_PUBLICKEYBYTES: number;
export const crypto_box_curve25519xchacha20poly1305_SEALBYTES: number;
export const crypto_box_curve25519xchacha20poly1305_SECRETKEYBYTES: number;
export const crypto_box_curve25519xchacha20poly1305_SEEDBYTES: number;
export const crypto_box_curve25519xsalsa20poly1305_BEFORENMBYTES: number;
export const crypto_box_curve25519xsalsa20poly1305_MACBYTES: number;
export const crypto_box_curve25519xsalsa20poly1305_MESSAGEBYTES_MAX: number;
export const crypto_box_curve25519xsalsa20poly1305_NONCEBYTES: number;
export const crypto_box_curve25519xsalsa20poly1305_PUBLICKEYBYTES: number;
export const crypto_box_curve25519xsalsa20poly1305_SECRETKEYBYTES: number;
export const crypto_box_curve25519xsalsa20poly1305_SEEDBYTES: number;
export const crypto_core_ed25519_BYTES: number;
export const crypto_core_ed25519_HASHBYTES: number;
export const crypto_core_ed25519_NONREDUCEDSCALARBYTES: number;
export const crypto_core_ed25519_SCALARBYTES: number;
export const crypto_core_ed25519_UNIFORMBYTES: number;
export const crypto_core_hchacha20_CONSTBYTES: number;
export const crypto_core_hchacha20_INPUTBYTES: number;
export const crypto_core_hchacha20_KEYBYTES: number;
export const crypto_core_hchacha20_OUTPUTBYTES: number;
export const crypto_core_hsalsa20_CONSTBYTES: number;
export const crypto_core_hsalsa20_INPUTBYTES: number;
export const crypto_core_hsalsa20_KEYBYTES: number;
export const crypto_core_hsalsa20_OUTPUTBYTES: number;
export const crypto_core_ristretto255_BYTES: number;
export const crypto_core_ristretto255_HASHBYTES: number;
export const crypto_core_ristretto255_NONREDUCEDSCALARBYTES: number;
export const crypto_core_ristretto255_SCALARBYTES: number;
export const crypto_core_salsa20_CONSTBYTES: number;
export const crypto_core_salsa20_INPUTBYTES: number;
export const crypto_core_salsa20_KEYBYTES: number;
export const crypto_core_salsa20_OUTPUTBYTES: number;
export const crypto_core_salsa2012_CONSTBYTES: number;
export const crypto_core_salsa2012_INPUTBYTES: number;
export const crypto_core_salsa2012_KEYBYTES: number;
export const crypto_core_salsa2012_OUTPUTBYTES: number;
export const crypto_generichash_blake2b_BYTES: number;
export const crypto_generichash_blake2b_BYTES_MAX: number;
export const crypto_generichash_blake2b_BYTES_MIN: number;
export const crypto_generichash_blake2b_KEYBYTES: number;
export const crypto_generichash_blake2b_KEYBYTES_MAX: number;
export const crypto_generichash_blake2b_KEYBYTES_MIN: number;
export const crypto_generichash_blake2b_PERSONALBYTES: number;
export const crypto_generichash_blake2b_SALTBYTES: number;
export const crypto_hash_sha256_BYTES: number;
export const crypto_hash_sha512_BYTES: number;
export const crypto_kdf_blake2b_BYTES_MAX: number;
export const crypto_kdf_blake2b_BYTES_MIN: number;
export const crypto_kdf_blake2b_CONTEXTBYTES: number;
export const crypto_kdf_blake2b_KEYBYTES: number;
export const crypto_onetimeauth_BYTES: number;
export const crypto_onetimeauth_KEYBYTES: number;
export const crypto_onetimeauth_poly1305_BYTES: number;
export const crypto_onetimeauth_poly1305_KEYBYTES: number;
export const crypto_pwhash_argon2i_BYTES_MAX: number;
export const crypto_pwhash_argon2i_BYTES_MIN: number;
export const crypto_pwhash_argon2i_SALTBYTES: number;
export const crypto_pwhash_argon2i_STRBYTES: number;
export const crypto_pwhash_argon2id_BYTES_MAX: number;
export const crypto_pwhash_argon2id_BYTES_MIN: number;
export const crypto_pwhash_argon2id_SALTBYTES: number;
export const crypto_pwhash_argon2id_STRBYTES: number;
export const crypto_pwhash_scryptsalsa208sha256_BYTES_MAX: number;
export const crypto_pwhash_scryptsalsa208sha256_BYTES_MIN: number;
export const crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE: number;
export const crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX: number;
export const crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN: number;
export const crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE: number;
export const crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE: number;
export const crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX: number;
export const crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN: number;
export const crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE: number;
export const crypto_pwhash_scryptsalsa208sha256_SALTBYTES: number;
export const crypto_pwhash_scryptsalsa208sha256_STRBYTES: number;
export const crypto_pwhash_scryptsalsa208sha256_STRPREFIX: string;
export const crypto_scalarmult_curve25519_BYTES: number;
export const crypto_scalarmult_curve25519_SCALARBYTES: number;
export const crypto_scalarmult_ed25519_BYTES: number;
export const crypto_scalarmult_ed25519_SCALARBYTES: number;
export const crypto_scalarmult_ristretto255_BYTES: number;
export const crypto_scalarmult_ristretto255_SCALARBYTES: number;
export const crypto_secretbox_xchacha20poly1305_KEYBYTES: number;
export const crypto_secretbox_xchacha20poly1305_MACBYTES: number;
export const crypto_secretbox_xchacha20poly1305_MESSAGEBYTES_MAX: number;
export const crypto_secretbox_xchacha20poly1305_NONCEBYTES: number;
export const crypto_secretbox_xsalsa20poly1305_KEYBYTES: number;
export const crypto_secretbox_xsalsa20poly1305_MACBYTES: number;
export const crypto_secretbox_xsalsa20poly1305_MESSAGEBYTES_MAX: number;
export const crypto_secretbox_xsalsa20poly1305_NONCEBYTES: number;
export const crypto_shorthash_siphash24_BYTES: number;
export const crypto_shorthash_siphash24_KEYBYTES: number;
export const crypto_shorthash_siphashx24_BYTES: number;
export const crypto_shorthash_siphashx24_KEYBYTES: number;
export const crypto_sign_ed25519_BYTES: number;
export const crypto_sign_ed25519_MESSAGEBYTES_MAX: number;
export const crypto_sign_ed25519_PUBLICKEYBYTES: number;
export const crypto_sign_ed25519_SECRETKEYBYTES: number;
export const crypto_sign_ed25519_SEEDBYTES: number;
export const crypto_stream_chacha20_ietf_KEYBYTES: number;
export const crypto_stream_chacha20_IETF_KEYBYTES: number;
export const crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX: number;
export const crypto_stream_chacha20_IETF_MESSAGEBYTES_MAX: number;
export const crypto_stream_chacha20_ietf_NONCEBYTES: number;
export const crypto_stream_chacha20_IETF_NONCEBYTES: number;
export const crypto_stream_chacha20_KEYBYTES: number;
export const crypto_stream_chacha20_MESSAGEBYTES_MAX: number;
export const crypto_stream_chacha20_NONCEBYTES: number;
export const crypto_stream_KEYBYTES: number;
export const crypto_stream_MESSAGEBYTES_MAX: number;
export const crypto_stream_NONCEBYTES: number;
export const crypto_stream_salsa20_KEYBYTES: number;
export const crypto_stream_salsa20_MESSAGEBYTES_MAX: number;
export const crypto_stream_salsa20_NONCEBYTES: number;
export const crypto_stream_salsa2012_KEYBYTES: number;
export const crypto_stream_salsa2012_MESSAGEBYTES_MAX: number;
export const crypto_stream_salsa2012_NONCEBYTES: number;
export const crypto_stream_salsa208_KEYBYTES: number;
export const crypto_stream_salsa208_MESSAGEBYTES_MAX: number;
export const crypto_stream_salsa208_NONCEBYTES: number;
export const crypto_stream_xchacha20_KEYBYTES: number;
export const crypto_stream_xchacha20_MESSAGEBYTES_MAX: number;
export const crypto_stream_xchacha20_NONCEBYTES: number;
export const crypto_stream_xsalsa20_KEYBYTES: number;
export const crypto_stream_xsalsa20_MESSAGEBYTES_MAX: number;
export const crypto_stream_xsalsa20_NONCEBYTES: number;
export const crypto_verify_16_BYTES: number;
export const crypto_verify_32_BYTES: number;
export const crypto_verify_64_BYTES: number;

export function crypto_auth_hmacsha256(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_auth_hmacsha256(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_auth_hmacsha256_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_auth_hmacsha256_keygen(outputFormat: StringOutputFormat): string;

export function crypto_auth_hmacsha256_verify(tag: Uint8Array, message: string | Uint8Array, key: Uint8Array): boolean;

export function crypto_auth_hmacsha512(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_auth_hmacsha512(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_auth_hmacsha512_keygen(outputFormat: StringOutputFormat): string;
export function crypto_auth_hmacsha512_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;

export function crypto_auth_hmacsha512_verify(tag: Uint8Array, message: string | Uint8Array, key: Uint8Array): boolean;

export function crypto_box_curve25519xchacha20poly1305_keypair(
    publicKey: Uint8Array,
    secretKey: Uint8Array,
    outputFormat: StringOutputFormat,
): StringKeyPair;
export function crypto_box_curve25519xchacha20poly1305_keypair(
    publicKey: Uint8Array,
    secretKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): KeyPair;

export function crypto_box_curve25519xchacha20poly1305_seal(
    message: Uint8Array,
    publicKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;
export function crypto_box_curve25519xchacha20poly1305_seal(
    message: Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;

export function crypto_box_curve25519xchacha20poly1305_seal_open(
    ciphertext: Uint8Array,
    publicKey: Uint8Array,
    secretKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;
export function crypto_box_curve25519xchacha20poly1305_seal_open(
    ciphertext: Uint8Array,
    publicKey: Uint8Array,
    secretKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;

export function crypto_core_ristretto255_add(
    p: Uint8Array,
    q: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_add(p: Uint8Array, q: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ristretto255_from_hash(
    r: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_from_hash(r: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ristretto255_is_valid_point(point: string | Uint8Array): boolean;

export function crypto_core_ristretto255_random(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_core_ristretto255_random(outputFormat: StringOutputFormat): string;

export function crypto_core_ristretto255_scalar_add(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_scalar_add(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_core_ristretto255_scalar_complement(
    scalar: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_scalar_complement(
    scalar: string | Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_core_ristretto255_scalar_invert(
    scalar: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_scalar_invert(
    scalar: string | Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_core_ristretto255_scalar_mul(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_scalar_mul(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_core_ristretto255_scalar_negate(
    scalar: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_scalar_negate(
    scalar: string | Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_core_ristretto255_scalar_random(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_core_ristretto255_scalar_random(outputFormat: StringOutputFormat): string;

export function crypto_core_ristretto255_scalar_reduce(
    secret: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_scalar_reduce(
    secret: string | Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_core_ristretto255_scalar_sub(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_scalar_sub(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_core_ristretto255_sub(
    p: Uint8Array,
    q: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ristretto255_sub(p: Uint8Array, q: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_generichash_blake2b_salt_personal(
    subkey_len: number,
    key: string | Uint8Array | null,
    id: Uint8Array,
    ctx: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_generichash_blake2b_salt_personal(
    subkey_len: number,
    key: string | Uint8Array | null,
    id: Uint8Array,
    ctx: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_hash_sha256(
    message: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_hash_sha256(message: string | Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_hash_sha256_final(
    stateAddress: StateAddress,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_hash_sha256_final(stateAddress: StateAddress, outputFormat: StringOutputFormat | null): string;

export function crypto_hash_sha256_init(): number;
export function crypto_hash_sha256_update(stateAddress: StateAddress, message: Uint8Array): void;

export function crypto_hash_sha512(
    message: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_hash_sha512(message: string | Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_hash_sha512_final(
    stateAddress: StateAddress,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_hash_sha512_final(stateAddress: StateAddress, outputFormat: StringOutputFormat | null): string;

export function crypto_hash_sha512_init(): number;
export function crypto_hash_sha512_update(stateAddress: StateAddress, message: Uint8Array): void;

export function crypto_onetimeauth(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_onetimeauth(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_onetimeauth_final(
    stateAddress: StateAddress,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_onetimeauth_final(stateAddress: StateAddress, outputFormat: StringOutputFormat): string;

export function crypto_onetimeauth_init(key?: string | Uint8Array | null): StateAddress;

export function crypto_onetimeauth_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_onetimeauth_keygen(outputFormat: StringOutputFormat): string;

export function crypto_onetimeauth_update(stateAddress: StateAddress, message_chunk: string | Uint8Array): void;

export function crypto_onetimeauth_verify(hash: Uint8Array, message: string | Uint8Array, key: Uint8Array): boolean;

export function crypto_pwhash_scryptsalsa208sha256(
    keyLength: number,
    password: string | Uint8Array,
    salt: Uint8Array,
    opsLimit: number,
    memLimit: number,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_pwhash_scryptsalsa208sha256(
    keyLength: number,
    password: string | Uint8Array,
    salt: Uint8Array,
    opsLimit: number,
    memLimit: number,
    outputFormat: StringOutputFormat,
): string;

export function crypto_pwhash_scryptsalsa208sha256_ll(
    password: string | Uint8Array,
    salt: string | Uint8Array,
    opsLimit: number,
    r: number,
    p: number,
    keyLength: number,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_pwhash_scryptsalsa208sha256_ll(
    password: string | Uint8Array,
    salt: string | Uint8Array,
    opsLimit: number,
    r: number,
    p: number,
    keyLength: number,
    outputFormat: StringOutputFormat,
): string;

export function crypto_core_ed25519_add(
    p: Uint8Array,
    q: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_add(p: Uint8Array, q: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_from_hash(
    r: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_from_hash(r: string | Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_from_uniform(
    r: string | Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_from_uniform(r: string | Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_is_valid_point(repr: Uint8Array): boolean;

export function crypto_core_ed25519_random(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_core_ed25519_random(outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_scalar_add(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_scalar_add(x: Uint8Array, y: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_scalar_complement(
    s: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_scalar_complement(s: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_scalar_invert(
    s: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_scalar_invert(s: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_scalar_mul(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_scalar_mul(x: Uint8Array, y: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_scalar_negate(
    s: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_scalar_negate(s: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_scalar_random(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_core_ed25519_scalar_random(outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_scalar_reduce(
    sample: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_scalar_reduce(sample: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_scalar_sub(
    x: Uint8Array,
    y: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_scalar_sub(x: Uint8Array, y: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_core_ed25519_sub(
    p: Uint8Array,
    q: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_core_ed25519_sub(p: Uint8Array, q: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_pwhash_scryptsalsa208sha256_str(
    password: string | Uint8Array,
    opsLimit: number,
    memLimit: number,
): string;

export function crypto_pwhash_scryptsalsa208sha256_str_verify(
    hashed_password: string,
    password: string | Uint8Array,
): boolean;

export function crypto_scalarmult_ed25519(
    n: Uint8Array,
    p: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_scalarmult_ed25519(n: Uint8Array, p: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_scalarmult_ed25519_base(
    scalar: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_scalarmult_ed25519_base(scalar: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_scalarmult_ed25519_base_noclamp(
    scalar: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_scalarmult_ed25519_base_noclamp(scalar: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_scalarmult_ed25519_noclamp(
    n: Uint8Array,
    p: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_scalarmult_ed25519_noclamp(
    n: Uint8Array,
    p: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_scalarmult_ristretto255(
    scalar: Uint8Array,
    element: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_scalarmult_ristretto255(
    scalar: Uint8Array,
    element: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_scalarmult_ristretto255_base(
    scalar: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_scalarmult_ristretto255_base(scalar: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_shorthash_siphashx24(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_shorthash_siphashx24(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_sign_ed25519_sk_to_pk(
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_sign_ed25519_sk_to_pk(privateKey: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_sign_ed25519_sk_to_seed(
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_sign_ed25519_sk_to_seed(privateKey: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_stream_chacha20(
    outLength: number,
    key: Uint8Array,
    nonce: Uint8Array,
    outputFormat: StringOutputFormat,
): string;
export function crypto_stream_chacha20(
    outLength: number,
    key: Uint8Array,
    nonce: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;

export function crypto_stream_chacha20_ietf_xor(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_stream_chacha20_ietf_xor(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_stream_chacha20_ietf_xor_ic(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    nonce_increment: number,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_stream_chacha20_ietf_xor_ic(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    nonce_increment: number,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_stream_chacha20_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_stream_chacha20_keygen(outputFormat: StringOutputFormat): string;

export function crypto_stream_chacha20_xor(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_stream_chacha20_xor(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_stream_chacha20_xor_ic(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    nonce_increment: number,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_stream_chacha20_xor_ic(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    nonce_increment: number,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_stream_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_stream_keygen(outputFormat: StringOutputFormat): string;

export function crypto_stream_xchacha20_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_stream_xchacha20_keygen(outputFormat: StringOutputFormat): string;

export function crypto_stream_xchacha20_xor(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_stream_xchacha20_xor(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_stream_xchacha20_xor_ic(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    nonce_increment: number,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_stream_xchacha20_xor_ic(
    input_message: string | Uint8Array,
    nonce: Uint8Array,
    nonce_increment: number,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;
