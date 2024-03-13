export type Uint8ArrayOutputFormat = "uint8array";

export type StringOutputFormat = "text" | "hex" | "base64";

export type KeyType = "curve25519" | "ed25519" | "x25519";

export enum base64_variants {
    ORIGINAL,
    ORIGINAL_NO_PADDING,
    URLSAFE,
    URLSAFE_NO_PADDING,
}

export interface CryptoBox {
    ciphertext: Uint8Array;
    mac: Uint8Array;
}

export interface StringCryptoBox {
    ciphertext: string;
    mac: string;
}

export interface CryptoKX {
    sharedRx: Uint8Array;
    sharedTx: Uint8Array;
}

export interface StringCryptoKX {
    sharedRx: string;
    sharedTx: string;
}

export interface KeyPair {
    keyType: KeyType;
    privateKey: Uint8Array;
    publicKey: Uint8Array;
}

export interface StringKeyPair {
    keyType: KeyType;
    privateKey: string;
    publicKey: string;
}

export interface SecretBox {
    cipher: Uint8Array;
    mac: Uint8Array;
}

export interface StringSecretBox {
    cipher: string;
    mac: string;
}

export interface StateAddress {
    name: string;
}

export interface MessageTag {
    message: Uint8Array;
    tag: number;
}

export interface StringMessageTag {
    message: string;
    tag: number;
}

export const crypto_aead_chacha20poly1305_ABYTES: number;
export const crypto_aead_chacha20poly1305_ietf_ABYTES: number;
export const crypto_aead_chacha20poly1305_IETF_ABYTES: number;
export const crypto_aead_chacha20poly1305_ietf_KEYBYTES: number;
export const crypto_aead_chacha20poly1305_IETF_KEYBYTES: number;
export const crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX: number;
export const crypto_aead_chacha20poly1305_IETF_MESSAGEBYTES_MAX: number;
export const crypto_aead_chacha20poly1305_ietf_NPUBBYTES: number;
export const crypto_aead_chacha20poly1305_IETF_NPUBBYTES: number;
export const crypto_aead_chacha20poly1305_ietf_NSECBYTES: number;
export const crypto_aead_chacha20poly1305_IETF_NSECBYTES: number;
export const crypto_aead_chacha20poly1305_KEYBYTES: number;
export const crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX: number;
export const crypto_aead_chacha20poly1305_NPUBBYTES: number;
export const crypto_aead_chacha20poly1305_NSECBYTES: number;
export const crypto_aead_xchacha20poly1305_ietf_ABYTES: number;
export const crypto_aead_xchacha20poly1305_IETF_ABYTES: number;
export const crypto_aead_xchacha20poly1305_ietf_KEYBYTES: number;
export const crypto_aead_xchacha20poly1305_IETF_KEYBYTES: number;
export const crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX: number;
export const crypto_aead_xchacha20poly1305_IETF_MESSAGEBYTES_MAX: number;
export const crypto_aead_xchacha20poly1305_ietf_NPUBBYTES: number;
export const crypto_aead_xchacha20poly1305_IETF_NPUBBYTES: number;
export const crypto_aead_xchacha20poly1305_ietf_NSECBYTES: number;
export const crypto_aead_xchacha20poly1305_IETF_NSECBYTES: number;
export const crypto_auth_BYTES: number;
export const crypto_auth_KEYBYTES: number;
export const crypto_box_BEFORENMBYTES: number;
export const crypto_box_MACBYTES: number;
export const crypto_box_MESSAGEBYTES_MAX: number;
export const crypto_box_NONCEBYTES: number;
export const crypto_box_PUBLICKEYBYTES: number;
export const crypto_box_SEALBYTES: number;
export const crypto_box_SECRETKEYBYTES: number;
export const crypto_box_SEEDBYTES: number;
export const crypto_generichash_BYTES: number;
export const crypto_generichash_BYTES_MAX: number;
export const crypto_generichash_BYTES_MIN: number;
export const crypto_generichash_KEYBYTES: number;
export const crypto_generichash_KEYBYTES_MAX: number;
export const crypto_generichash_KEYBYTES_MIN: number;
export const crypto_hash_BYTES: number;
export const crypto_kdf_BYTES_MAX: number;
export const crypto_kdf_BYTES_MIN: number;
export const crypto_kdf_CONTEXTBYTES: number;
export const crypto_kdf_KEYBYTES: number;
export const crypto_kx_PUBLICKEYBYTES: number;
export const crypto_kx_SECRETKEYBYTES: number;
export const crypto_kx_SEEDBYTES: number;
export const crypto_kx_SESSIONKEYBYTES: number;
export const crypto_pwhash_ALG_ARGON2I13: number;
export const crypto_pwhash_ALG_ARGON2ID13: number;
export const crypto_pwhash_ALG_DEFAULT: number;
export const crypto_pwhash_BYTES_MAX: number;
export const crypto_pwhash_BYTES_MIN: number;
export const crypto_pwhash_MEMLIMIT_INTERACTIVE: number;
export const crypto_pwhash_MEMLIMIT_MAX: number;
export const crypto_pwhash_MEMLIMIT_MIN: number;
export const crypto_pwhash_MEMLIMIT_MODERATE: number;
export const crypto_pwhash_MEMLIMIT_SENSITIVE: number;
export const crypto_pwhash_OPSLIMIT_INTERACTIVE: number;
export const crypto_pwhash_OPSLIMIT_MAX: number;
export const crypto_pwhash_OPSLIMIT_MIN: number;
export const crypto_pwhash_OPSLIMIT_MODERATE: number;
export const crypto_pwhash_OPSLIMIT_SENSITIVE: number;
export const crypto_pwhash_PASSWD_MAX: number;
export const crypto_pwhash_PASSWD_MIN: number;
export const crypto_pwhash_SALTBYTES: number;
export const crypto_pwhash_STRBYTES: number;
export const crypto_pwhash_STRPREFIX: string;
export const crypto_scalarmult_BYTES: number;
export const crypto_scalarmult_SCALARBYTES: number;
export const crypto_secretbox_KEYBYTES: number;
export const crypto_secretbox_MACBYTES: number;
export const crypto_secretbox_MESSAGEBYTES_MAX: number;
export const crypto_secretbox_NONCEBYTES: number;
export const crypto_secretstream_xchacha20poly1305_ABYTES: number;
export const crypto_secretstream_xchacha20poly1305_HEADERBYTES: number;
export const crypto_secretstream_xchacha20poly1305_KEYBYTES: number;
export const crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX: number;
export const crypto_secretstream_xchacha20poly1305_TAG_FINAL: number;
export const crypto_secretstream_xchacha20poly1305_TAG_MESSAGE: number;
export const crypto_secretstream_xchacha20poly1305_TAG_PUSH: number;
export const crypto_secretstream_xchacha20poly1305_TAG_REKEY: number;
export const crypto_shorthash_BYTES: number;
export const crypto_shorthash_KEYBYTES: number;
export const crypto_sign_BYTES: number;
export const crypto_sign_MESSAGEBYTES_MAX: number;
export const crypto_sign_PUBLICKEYBYTES: number;
export const crypto_sign_SECRETKEYBYTES: number;
export const crypto_sign_SEEDBYTES: number;
export const SODIUM_LIBRARY_VERSION_MAJOR: number;
export const SODIUM_LIBRARY_VERSION_MINOR: number;
export const SODIUM_VERSION_STRING: string;

export const ready: Promise<void>;

export function add(a: Uint8Array, b: Uint8Array): void;

export function compare(b1: Uint8Array, b2: Uint8Array): number;

export function crypto_aead_chacha20poly1305_decrypt(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_chacha20poly1305_decrypt(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_chacha20poly1305_decrypt_detached(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_chacha20poly1305_decrypt_detached(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_chacha20poly1305_encrypt(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_chacha20poly1305_encrypt(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_chacha20poly1305_encrypt_detached(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): CryptoBox;
export function crypto_aead_chacha20poly1305_encrypt_detached(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): StringCryptoBox;

export function crypto_aead_chacha20poly1305_ietf_decrypt(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_chacha20poly1305_ietf_decrypt(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_chacha20poly1305_ietf_decrypt_detached(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_chacha20poly1305_ietf_decrypt_detached(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_chacha20poly1305_ietf_encrypt(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_chacha20poly1305_ietf_encrypt(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_chacha20poly1305_ietf_encrypt_detached(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): CryptoBox;
export function crypto_aead_chacha20poly1305_ietf_encrypt_detached(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): StringCryptoBox;

export function crypto_aead_chacha20poly1305_ietf_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_aead_chacha20poly1305_ietf_keygen(outputFormat: StringOutputFormat): string;

export function crypto_aead_chacha20poly1305_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_aead_chacha20poly1305_keygen(outputFormat: StringOutputFormat): string;

export function crypto_aead_xchacha20poly1305_ietf_decrypt(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_xchacha20poly1305_ietf_decrypt(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_xchacha20poly1305_ietf_decrypt_detached(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_xchacha20poly1305_ietf_decrypt_detached(
    secret_nonce: string | Uint8Array | null,
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    additional_data: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_xchacha20poly1305_ietf_encrypt(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_aead_xchacha20poly1305_ietf_encrypt(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_aead_xchacha20poly1305_ietf_encrypt_detached(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): CryptoBox;
export function crypto_aead_xchacha20poly1305_ietf_encrypt_detached(
    message: string | Uint8Array,
    additional_data: string | Uint8Array | null,
    secret_nonce: string | Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): StringCryptoBox;

export function crypto_aead_xchacha20poly1305_ietf_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_aead_xchacha20poly1305_ietf_keygen(outputFormat: StringOutputFormat): string;

export function crypto_auth(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_auth(message: string | Uint8Array, key: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_auth_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_auth_keygen(outputFormat: StringOutputFormat): string;

export function crypto_auth_verify(tag: Uint8Array, message: string | Uint8Array, key: Uint8Array): boolean;

export function crypto_box_beforenm(
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_box_beforenm(
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_box_detached(
    message: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): CryptoBox;
export function crypto_box_detached(
    message: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): StringCryptoBox;

export function crypto_box_easy(
    message: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_box_easy(
    message: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_box_easy_afternm(
    message: string | Uint8Array,
    nonce: Uint8Array,
    sharedKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_box_easy_afternm(
    message: string | Uint8Array,
    nonce: Uint8Array,
    sharedKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_box_keypair(outputFormat?: Uint8ArrayOutputFormat | null): KeyPair;
export function crypto_box_keypair(outputFormat: StringOutputFormat): StringKeyPair;

export function crypto_box_open_detached(
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_box_open_detached(
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_box_open_easy(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_box_open_easy(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_box_open_easy_afternm(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    sharedKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_box_open_easy_afternm(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    sharedKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_box_seal(
    message: string | Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_box_seal(
    message: string | Uint8Array,
    publicKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_box_seal_open(
    ciphertext: string | Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_box_seal_open(
    ciphertext: string | Uint8Array,
    publicKey: Uint8Array,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_box_seed_keypair(seed: Uint8Array, outputFormat?: Uint8ArrayOutputFormat | null): KeyPair;
export function crypto_box_seed_keypair(seed: Uint8Array, outputFormat: StringOutputFormat): StringKeyPair;

export function crypto_generichash(
    hash_length: number,
    message: string | Uint8Array,
    key?: string | Uint8Array | null,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_generichash(
    hash_length: number,
    message: string | Uint8Array,
    key: string | Uint8Array | null,
    outputFormat: StringOutputFormat,
): string;

export function crypto_generichash_final(
    state_address: StateAddress,
    hash_length: number,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_generichash_final(
    state_address: StateAddress,
    hash_length: number,
    outputFormat: StringOutputFormat,
): string;

export function crypto_generichash_init(key: string | Uint8Array | null, hash_length: number): StateAddress;

export function crypto_generichash_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_generichash_keygen(outputFormat: StringOutputFormat): string;

export function crypto_generichash_update(state_address: StateAddress, message_chunk: string | Uint8Array): void;

export function crypto_hash(message: string | Uint8Array, outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_hash(message: string | Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_kdf_derive_from_key(
    subkey_len: number,
    subkey_id: number,
    ctx: string,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_kdf_derive_from_key(
    subkey_len: number,
    subkey_id: number,
    ctx: string,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_kdf_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_kdf_keygen(outputFormat: StringOutputFormat): string;

export function crypto_kx_client_session_keys(
    clientPublicKey: Uint8Array,
    clientSecretKey: Uint8Array,
    serverPublicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): CryptoKX;
export function crypto_kx_client_session_keys(
    clientPublicKey: Uint8Array,
    clientSecretKey: Uint8Array,
    serverPublicKey: Uint8Array,
    outputFormat: StringOutputFormat,
): StringCryptoKX;

export function crypto_kx_keypair(outputFormat?: Uint8ArrayOutputFormat | null): KeyPair;
export function crypto_kx_keypair(outputFormat: StringOutputFormat): StringKeyPair;

export function crypto_kx_seed_keypair(seed: Uint8Array, outputFormat?: Uint8ArrayOutputFormat | null): KeyPair;
export function crypto_kx_seed_keypair(seed: Uint8Array, outputFormat: StringOutputFormat): StringKeyPair;

export function crypto_kx_server_session_keys(
    serverPublicKey: Uint8Array,
    serverSecretKey: Uint8Array,
    clientPublicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): CryptoKX;
export function crypto_kx_server_session_keys(
    serverPublicKey: Uint8Array,
    serverSecretKey: Uint8Array,
    clientPublicKey: Uint8Array,
    outputFormat: StringOutputFormat,
): StringCryptoKX;

export function crypto_pwhash(
    keyLength: number,
    password: string | Uint8Array,
    salt: Uint8Array,
    opsLimit: number,
    memLimit: number,
    algorithm: number,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_pwhash(
    keyLength: number,
    password: string | Uint8Array,
    salt: Uint8Array,
    opsLimit: number,
    memLimit: number,
    algorithm: number,
    outputFormat: StringOutputFormat,
): string;

export function crypto_pwhash_str(password: string | Uint8Array, opsLimit: number, memLimit: number): string;

export function crypto_pwhash_str_verify(hashed_password: string, password: string | Uint8Array): boolean;

export function crypto_pwhash_str_needs_rehash(hashedPassword: string, opsLimit: number, memLimit: number): boolean;

export function crypto_scalarmult(
    privateKey: Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_scalarmult(
    privateKey: Uint8Array,
    publicKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_scalarmult_base(
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_scalarmult_base(privateKey: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_secretbox_detached(
    message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): SecretBox;
export function crypto_secretbox_detached(
    message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): StringSecretBox;

export function crypto_secretbox_easy(
    message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_secretbox_easy(
    message: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_secretbox_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_secretbox_keygen(outputFormat: StringOutputFormat): string;

export function crypto_secretbox_open_detached(
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_secretbox_open_detached(
    ciphertext: string | Uint8Array,
    mac: Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_secretbox_open_easy(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_secretbox_open_easy(
    ciphertext: string | Uint8Array,
    nonce: Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_secretstream_xchacha20poly1305_init_pull(header: Uint8Array, key: Uint8Array): StateAddress;

export function crypto_secretstream_xchacha20poly1305_init_push(
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): { state: StateAddress; header: Uint8Array };
export function crypto_secretstream_xchacha20poly1305_init_push(
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): { state: StateAddress; header: string };

export function crypto_secretstream_xchacha20poly1305_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_secretstream_xchacha20poly1305_keygen(outputFormat: StringOutputFormat): string;

export function crypto_secretstream_xchacha20poly1305_pull(
    state_address: StateAddress,
    cipher: string | Uint8Array,
    ad?: string | Uint8Array | null,
    outputFormat?: Uint8ArrayOutputFormat | null,
): MessageTag;
export function crypto_secretstream_xchacha20poly1305_pull(
    state_address: StateAddress,
    cipher: string | Uint8Array,
    ad: string | Uint8Array | null,
    outputFormat: StringOutputFormat,
): StringMessageTag;

export function crypto_secretstream_xchacha20poly1305_push(
    state_address: StateAddress,
    message_chunk: string | Uint8Array,
    ad: string | Uint8Array | null,
    tag: number,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_secretstream_xchacha20poly1305_push(
    state_address: StateAddress,
    message_chunk: string | Uint8Array,
    ad: string | Uint8Array | null,
    tag: number,
    outputFormat: StringOutputFormat,
): string;

export function crypto_secretstream_xchacha20poly1305_rekey(state_address: StateAddress): true;

export function crypto_shorthash(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_shorthash(
    message: string | Uint8Array,
    key: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_shorthash_keygen(outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function crypto_shorthash_keygen(outputFormat: StringOutputFormat): string;

export function crypto_sign(
    message: string | Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_sign(
    message: string | Uint8Array,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_sign_detached(
    message: string | Uint8Array,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_sign_detached(
    message: string | Uint8Array,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_sign_ed25519_pk_to_curve25519(
    edPk: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_sign_ed25519_pk_to_curve25519(edPk: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_sign_ed25519_sk_to_curve25519(
    edSk: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_sign_ed25519_sk_to_curve25519(edSk: Uint8Array, outputFormat: StringOutputFormat): string;

export function crypto_sign_final_create(
    state_address: StateAddress,
    privateKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_sign_final_create(
    state_address: StateAddress,
    privateKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_sign_final_verify(
    state_address: StateAddress,
    signature: Uint8Array,
    publicKey: Uint8Array,
): boolean;

export function crypto_sign_init(): StateAddress;

export function crypto_sign_keypair(outputFormat?: Uint8ArrayOutputFormat | null): KeyPair;
export function crypto_sign_keypair(outputFormat: StringOutputFormat): StringKeyPair;

export function crypto_sign_open(
    signedMessage: string | Uint8Array,
    publicKey: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function crypto_sign_open(
    signedMessage: string | Uint8Array,
    publicKey: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function crypto_sign_seed_keypair(seed: Uint8Array, outputFormat?: Uint8ArrayOutputFormat | null): KeyPair;
export function crypto_sign_seed_keypair(seed: Uint8Array, outputFormat: StringOutputFormat): StringKeyPair;

export function crypto_sign_update(state_address: StateAddress, message_chunk: string | Uint8Array): void;

export function crypto_sign_verify_detached(
    signature: Uint8Array,
    message: string | Uint8Array,
    publicKey: Uint8Array,
): boolean;

export function from_base64(input: string, variant?: base64_variants): Uint8Array;

export function from_hex(input: string): Uint8Array;

export function from_string(str: string): Uint8Array;

export function increment(bytes: Uint8Array): void;

export function is_zero(bytes: Uint8Array): boolean;

export function memcmp(b1: Uint8Array, b2: Uint8Array): boolean;

export function memzero(bytes: Uint8Array): void;

export function output_formats(): Array<Uint8ArrayOutputFormat | StringOutputFormat>;

export function pad(buf: Uint8Array, blocksize: number): Uint8Array;

export function randombytes_buf(length: number, outputFormat?: Uint8ArrayOutputFormat | null): Uint8Array;
export function randombytes_buf(length: number, outputFormat: StringOutputFormat): string;

export function randombytes_buf_deterministic(
    length: number,
    seed: Uint8Array,
    outputFormat?: Uint8ArrayOutputFormat | null,
): Uint8Array;
export function randombytes_buf_deterministic(
    length: number,
    seed: Uint8Array,
    outputFormat: StringOutputFormat,
): string;

export function randombytes_close(): void;

export function randombytes_random(): number;

export function randombytes_stir(): void;

export function randombytes_uniform(upper_bound: number): number;

export function sodium_version_string(): string;

export function symbols(): string[];

export function to_base64(input: string | Uint8Array, variant?: base64_variants): string;

export function to_hex(input: string | Uint8Array): string;

export function to_string(bytes: Uint8Array): string;

export function unpad(buf: Uint8Array, blocksize: number): Uint8Array;
