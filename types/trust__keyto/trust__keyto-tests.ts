import Key = require("@trust/keyto");
import InvalidOperationError = require("@trust/keyto/src/InvalidOperationError");
import OperationNotSupportedError = require("@trust/keyto/src/OperationNotSupportedError");

// test type exports
type Types =
    | InvalidOperationError
    | typeof InvalidOperationError
    | OperationNotSupportedError
    | typeof OperationNotSupportedError
    | Key
    | typeof Key
    | Key.KeySelector
    | Key.JWK
    | Key.SerializableFormat
    | Key.PEMKeySelector;

declare const jwk: Key.JWK;

const key = Key.from("", "pem"); // $ExpectType Key
Key.from("", "blk"); // $ExpectType Key
Key.from("", "jwk"); // $ExpectType Key
// @ts-expect-error
Key.from(jwk, "pem");
// @ts-expect-error
Key.from(jwk, "blk");
Key.from(jwk, "jwk"); // $ExpectType Key

key.kty; // $ExpectType string
key.format; // $ExpectType SerializableFormat
key.selector; // $ExpectType KeySelector | PEMKeySelector
key.crv; // $ExpectType string
key.oid; // $ExpectType string

key.toJwk("private"); // $ExpectType JWK
key.toJwk("public"); // $ExpectType JWK

key.toString();

key.toString("pem"); // $ExpectType string
// @ts-expect-error
key.toString("blk");
// @ts-expect-error
key.toString("jwk");

key.toString("pem", "private_pkcs1"); // $ExpectType string
key.toString("pem", "private_pkcs8"); // $ExpectType string
key.toString("pem", "public_pkcs1"); // $ExpectType string
key.toString("pem", "public_pkcs8"); // $ExpectType string
// @ts-expect-error
key.toString("pem", "public");

key.toString("blk", "private"); // $ExpectType string
key.toString("blk", "public"); // $ExpectType string
// @ts-expect-error
key.toString("blk", "private_pkcs1");

key.toString("jwk", "private"); // $ExpectType string
key.toString("jwk", "public"); // $ExpectType string
// @ts-expect-error
key.toString("jwk", "public_pkcs1");
