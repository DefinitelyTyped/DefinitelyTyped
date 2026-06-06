/// <reference types="node" />

export = Key;

declare class Key {
    /**
     * Import a key.
     *
     * @param format The format of the key.
     * - `'pem'`: will parse a PEM encoded string (as per OpenSSL output).
     * - `'jwk'`: will parse a JWK object or JSON String
     * - `'blk'`: will parse a hex encoded key string as used on various blockchains (limited to secp256k1 keys).
     *
     * @example <caption>Decode PEM and convert to JWK</caption>
     * import keyto = require('@trust/keyto')
     * import * as assert from 'node:assert'
     *
     * const pemPrivate = getPrivatePemStringSomehow()
     * const jwk = getPublicJwkSomehow()
     *
     * // String data can either be passed in directly:
     * const key = keyto.from(pemPrivate, 'pem').toJwk('public')
     *
     * assert.equal(jwk, key)
     *
     * @example <caption>Decode HEX (Blockchain) private key and convert to PEM PKCS8 public key</caption>
     * import keyto = require('@trust/keyto')
     * import * as assert from 'node:assert'
     *
     * const blk = getPrivateBlockchainHexStringSomehow()
     * const pemPublic = getPublicPemSomehow()
     *
     * const key = keyto.from(blk, 'blk').toString('pem', 'public_pkcs8')
     *
     * assert.equal(pemPublic, key)
     */
    static from(key: Key.JWK, format: "jwk"): Key;
    static from(key: string, format: Key.SerializableFormat): Key;

    kty: string;
    format: Key.SerializableFormat;
    selector: Key.KeySelector | Key.PEMKeySelector;
    crv: string;
    oid: string;

    /**
     * Convert a key to JWK.
     */
    toJwk(selector: Key.KeySelector): Key.JWK;

    /**
     * Serialize a key to the specified format.
     */
    toString(
        /** @default 'pem' */
        format?: "pem",
        /** @default 'public_pkcs8' */
        selector?: Key.PEMKeySelector,
    ): string;
    toString(format: Exclude<Key.SerializableFormat, "pem">, selector: Key.KeySelector): string;
}

declare namespace Key {
    interface JWK {
        kty: string;
        crv?: string | undefined;
        x?: string | undefined;
        y?: string | undefined;
        n?: string | undefined;
        e?: string | undefined;
        d?: string | undefined;
        p?: string | undefined;
        q?: string | undefined;
        dp?: string | undefined;
        dq?: string | undefined;
        qi?: string | undefined;
    }

    type SerializableFormat = "jwk" | "pem" | "blk";

    type KeySelector = "public" | "private";

    /**
     * Note these refer specifically to different ASN encodings for PEM encoded keys
     * and are not compatible with non-PEM output types.
     */
    type PEMKeySelector = "public_pkcs1" | "public_pkcs8" | "private_pkcs1" | "private_pkcs8";
}
