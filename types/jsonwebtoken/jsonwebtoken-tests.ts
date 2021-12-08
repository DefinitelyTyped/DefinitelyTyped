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

type DecodedTestObject =  TestObject & jwt.JwtPayload;

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
jwt.verify<TestObject>(token, "shhhhh", (err, decoded) => {
    const result = decoded as DecodedTestObject;

    console.log(result.foo); // bar
});

// use external time for verifying
jwt.verify<TestObject>(token, 'shhhhh', { clockTimestamp: 1 }, (err, decoded) => {
    const result = decoded as DecodedTestObject;

    console.log(result.foo); // bar
});

// invalid token
jwt.verify<TestObject>(token, "wrong-secret", (err, decoded) => {
    // err
    // decoded undefined
});

// verify with encrypted RSA SHA256 private key
jwt.verify<TestObject>(token, secret, (err, decoded) => {
    const result = decoded as DecodedTestObject;

    console.log(result.foo); // bar
});

// verify a token asymmetric
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify<TestObject>(token, cert, (err, decoded) => {
    const result = decoded as DecodedTestObject;

    console.log(result.foo); // bar
});

// verify a token assymetric with async key fetch function
function getKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
    cert = fs.readFileSync("public.pem");

    callback(null, cert);
}

jwt.verify<TestObject>(token, getKey, (err, decoded) => {
    const result = decoded as DecodedTestObject;

    console.log(result.foo); // bar
});

// verify audience
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify<TestObject>(token, cert, { audience: "urn:foo" }, (err, decoded) => {
    // if audience mismatch, err == invalid audience
});
jwt.verify<TestObject>(token, cert, { audience: /urn:f[o]{2}/ }, (err, decoded) => {
    // if audience mismatch, err == invalid audience
});
jwt.verify(token, cert, { audience: [/urn:f[o]{2}/, "urn:bar"] }, (err, decoded) => {
    // if audience mismatch, err == invalid audience
});

// verify issuer
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify<TestObject>(token, cert, { audience: "urn:foo", issuer: "urn:issuer" }, (
    err,
    decoded,
) => {
    // if issuer mismatch, err == invalid issuer
});

// verify algorithm
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify<TestObject>(token, cert, { algorithms: ["RS256"] }, (err, decoded) => {
    // if algorithm mismatch, err == invalid algorithm
});

// verify without expiration check
cert = fs.readFileSync("public.pem"); // get public key
jwt.verify<TestObject>(token, cert, { ignoreExpiration: true }, (err, decoded) => {
    // if ignoreExpration == false and token is expired, err == expired token
});

cert = fs.readFileSync("public.pem"); // get public key
jwt.verify<TestObject>(token, cert, (_err, payload) => {
    if (payload) {
        // $ExpectType TestObject & JwtPayload
        payload;
    }
});

cert = fs.readFileSync("public.pem"); // get public key
jwt.verify<TestObject>(token, cert, {}, (_err, payload) => {
    if (payload) {
        // $ExpectType TestObject & JwtPayload
        payload;
    }
});

cert = fs.readFileSync("public.pem"); // get public key
jwt.verify<TestObject>(token, cert, { complete: true }, (_err, payload) => {
    if (payload) {
        // $ExpectType Jwt<TestObject & JwtPayload>
        payload;
    }
});

cert = fs.readFileSync("public.pem"); // get public key
const verified = jwt.verify<TestObject>(token, cert);

if (typeof verified !== 'string') {
    // $ExpectType TestObject & JwtPayload
    verified;
}

cert = fs.readFileSync("public.pem"); // get public key
const verified2 = jwt.verify<TestObject>(token, cert, { complete: true });

if (typeof verified2 !== 'string') {
    // $ExpectType Jwt<TestObject & JwtPayload>
    verified2;
}

// This tests creates a token with iat as now, verifies with maxAge=now()+3600sec
cert = fs.readFileSync("public.pem"); // get public key
const verified3 = jwt.verify<TestObject>(token, cert, {maxAge: 3600});

if (typeof verified3 !== 'string') {
    // $ExpectType TestObject & JwtPayload
    verified3;
}

/**
 * jwt.decode
 * https://github.com/auth0/node-jsonwebtoken#jwtdecodetoken
 */
// $ExpectType (TestObject & JwtPayload) | null
jwt.decode<TestObject>(token);

// $ExpectType (TestObject & JwtPayload) | null
jwt.decode<TestObject>(token, { complete: false });

// $ExpectType (TestObject & JwtPayload) | null
jwt.decode<TestObject>(token, { json: false });

// $ExpectType (TestObject & JwtPayload) | null
jwt.decode<TestObject>(token, { complete: false, json: false });

// $ExpectType (TestObject & JwtPayload) | null
jwt.decode<TestObject>(token, { json: true });

// $ExpectType Jwt<TestObject & JwtPayload> | null
jwt.decode<TestObject>(token, { complete: true });

// $ExpectType Jwt<TestObject & JwtPayload> | null
jwt.decode<TestObject>(token, { complete: true, json: true });
