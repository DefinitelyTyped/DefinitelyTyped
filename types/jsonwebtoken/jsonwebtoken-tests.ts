/**
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT>
 *
 * Created by using code samples from https://github.com/auth0/node-jsonwebtoken.
 */

import jwt = require("jsonwebtoken");
import fs = require("fs");

let token: string;
let cert: Buffer;

interface TestObject {
    foo: string;
}

const testBoolean = true as boolean;
const testObject = { foo: "bar" };

/**
 * jwt.sign
 * https://github.com/auth0/node-jsonwebtoken#usage
 */
// sign with default (HMAC SHA256)
token = jwt.sign(testObject, "shhhhh");

// sign with default (HMAC SHA256) and single audience
token = jwt.sign(testObject, "shhhhh", { audience: "theAudience" });

// sign with default (HMAC SHA256) and multiple audiences
token = jwt.sign(testObject, "shhhhh", {
    audience: ["audience1", "audience2"],
});

// sign with default (HMAC SHA256) and a keyid
token = jwt.sign(testObject, "shhhhh", { keyid: "theKeyId" });

// sign with RSA SHA256
cert = fs.readFileSync("private.key"); // get private key
token = jwt.sign(testObject, cert, { algorithm: "RS256" });

// sign with encrypted RSA SHA256 private key (only PEM encoding is supported)
const privKey: Buffer = fs.readFileSync("encrypted_private.key"); // get private key
const secret = { key: privKey.toString(), passphrase: "keypwd" };
token = jwt.sign(testObject, secret, { algorithm: "RS256" }); // the algorithm option is mandatory in this case
token = jwt.sign(testObject, { key: privKey, passphrase: 'keypwd' }, { algorithm: "RS256" });

// sign asynchronously
jwt.sign(testObject, cert, { algorithm: "RS256" }, (
    err: Error | null,
    token: string | undefined,
) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(token);
});

/**
 * jwt.verify
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
// verify a token symmetric
jwt.verify(token, "shhhhh", (err, decoded) => {
    const result = decoded as TestObject;

    console.log(result.foo); // bar
});

// use external time for verifying
jwt.verify(token, 'shhhhh', { clockTimestamp: 1 }, (err, decoded) => {
    const result = decoded as TestObject;

    console.log(result.foo); // bar
});

// invalid token
jwt.verify(token, "wrong-secret", (err, decoded) => {
    // err
    // decoded undefined
});

// verify with encrypted RSA SHA256 private key
jwt.verify(token, secret, (err, decoded) => {
    const result = decoded as TestObject;

    console.log(result.foo); // bar
});

// verify a token asymmetric
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify(token, cert, (err, decoded) => {
    const result = decoded as TestObject;

    console.log(result.foo); // bar
});

// verify a token assymetric with async key fetch function
function getKeySuccess(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
    cert = fs.readFileSync('public.pem');

    callback(null, cert);
}
jwt.verify(token, getKeySuccess, (err, decoded) => {
    const result = decoded as TestObject;

    console.log(result.foo); // bar
});

function getKeyFailed(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
    cert = fs.readFileSync('public.pem');

    callback(new Error('FAILED_KEY_RETRIEVAL'), cert);
}
jwt.verify(token, getKeyFailed, (err, decoded) => {
    console.error(err); // new JsonWebTokenError('error in secret or public key callback: FAILED_KEY_RETRIEVAL')
});

// verify audience
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify(token, cert, { audience: "urn:foo" }, (err, decoded) => {
    // if audience mismatch, err == invalid audience
});
jwt.verify(token, cert, { audience: /urn:f[o]{2}/ }, (err, decoded) => {
    // if audience mismatch, err == invalid audience
});
jwt.verify(token, cert, { audience: [/urn:f[o]{2}/, "urn:bar"] }, (err, decoded) => {
    // if audience mismatch, err == invalid audience
});

// verify issuer
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify(token, cert, { audience: "urn:foo", issuer: "urn:issuer" }, (
    err,
    decoded,
) => {
    // if issuer mismatch, err == invalid issuer
});

// verify algorithm
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify(token, cert, { algorithms: ["RS256"] }, (err, decoded) => {
    // if algorithm mismatch, err == invalid algorithm
});

// verify without expiration check
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify(token, cert, { ignoreExpiration: true }, (err, decoded) => {
    // if ignoreExpration == false and token is expired, err == expired token
});

jwt.verify(token, cert, (_err, decoded) => {
    if (decoded) {
        // $ExpectType string | JwtPayload
        decoded;
    }
});

jwt.verify(token, cert, {}, (_err, decoded) => {
    if (decoded) {
        // $ExpectType string | JwtPayload
        decoded;
    }
});

jwt.verify(token, cert, { complete: true }, (_err, decoded) => {
    if (decoded) {
        // $ExpectType Jwt
        decoded;
        // $ExpectType string | JwtPayload
        decoded.payload;
    }
});

jwt.verify(token, cert, { complete: false }, (_err, decoded) => {
    if (decoded) {
        // $ExpectType string | JwtPayload
        decoded;
    }
});

jwt.verify(token, cert, { maxAge: 3600 }, (_err, decoded) => {
    if (decoded) {
        // $ExpectType string | JwtPayload
        decoded;
    }
});

jwt.verify(token, cert, { complete: testBoolean }, (_err, decoded) => {
    if (decoded) {
        // $ExpectType string | Jwt | JwtPayload
        decoded;
    }
});

// $ExpectType string | JwtPayload
jwt.verify(token, cert);

// $ExpectType string | JwtPayload
jwt.verify(token, cert, {});

// $ExpectType Jwt
jwt.verify(token, cert, { complete: true });

// $ExpectType string | JwtPayload
jwt.verify(token, cert, { complete: true }).payload;

// $ExpectType string | JwtPayload
jwt.verify(token, cert, { complete: false });

// $ExpectType string | JwtPayload
jwt.verify(token, cert, { maxAge: 3600 });

// $ExpectType string | Jwt | JwtPayload
jwt.verify(token, cert, { complete: testBoolean });

/**
 * jwt.decode
 * https://github.com/auth0/node-jsonwebtoken#jwtdecodetoken
 */
// $ExpectType string | JwtPayload | null
jwt.decode(token);

// $ExpectType string | JwtPayload | null
jwt.decode(token, { complete: false });

// $ExpectType string | JwtPayload | null
jwt.decode(token, { json: false });

// $ExpectType string | JwtPayload | null
jwt.decode(token, { complete: false, json: false });

// $ExpectType JwtPayload | null
jwt.decode(token, { json: true });

// $ExpectType Jwt | null
jwt.decode(token, { complete: true });

// $ExpectType Jwt | null
jwt.decode(token, { complete: true, json: true });
