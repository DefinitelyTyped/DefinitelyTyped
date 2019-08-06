/**
 * This mostly delegates to jwt, so using its tests as base
 */

import scAuth = require("sc-auth");
import fs = require("fs");

let signedToken = "";
let cert: Buffer;

interface TestObject {
    foo: string;
}

const testObject = { foo: "bar" };

const authEngine = new scAuth.AuthEngine();

// sign with default (HMAC SHA256)
authEngine.signToken(testObject, "shhhhh");

// sign with default (HMAC SHA256) and single audience
authEngine.signToken(testObject, "shhhhh", { audience: "theAudience" });

// sign with default (HMAC SHA256) and multiple audiences
authEngine.signToken(testObject, "shhhhh", {
    audience: ["audience1", "audience2"]
});

// sign with default (HMAC SHA256) and a keyid
authEngine.signToken(testObject, "shhhhh", { keyid: "theKeyId" });

// sign with RSA SHA256
cert = fs.readFileSync("private.key"); // get private key
authEngine.signToken(testObject, cert, { algorithm: "RS256" });

// sign with encrypted RSA SHA256 private key (only PEM encoding is supported)
const privKey: Buffer = fs.readFileSync("encrypted_private.key"); // get private key
const secret = { key: privKey.toString(), passphrase: "keypwd" };
authEngine.signToken(testObject, secret, { algorithm: "RS256" }); // the algorithm option is mandatory in this case

// sign asynchronously
authEngine.signToken(testObject, cert, { algorithm: "RS256" }, (err, token) => {
    signedToken = token;
});

// verify a token symmetric
authEngine.verifyToken(signedToken, "shhhhh", {}, (err, decoded) => {
    const result = decoded as TestObject;

    console.log(result.foo); // bar
});

// use external time for verifying
authEngine.verifyToken(signedToken, "shhhhh", { clockTimestamp: 1 }, (err, decoded) => {
    const result = decoded as TestObject;

    console.log(result.foo); // bar
});

// invalid token
authEngine.verifyToken(signedToken, "wrong-secret", {}, (err, decoded) => {
    console.log(err);

    // decoded undefined
});

// verify a token asymmetric
cert = fs.readFileSync("public.pem"); // get public key
authEngine.verifyToken(signedToken, cert, {}, (err, decoded) => {
    const result = decoded as TestObject;

    console.log(result.foo); // bar
});

// verify audience
cert = fs.readFileSync("public.pem"); // get public key
authEngine.verifyToken(signedToken, cert, { audience: "urn:foo" }, (err, decoded) => {
    // if audience mismatch, err == invalid audience
    console.log(err);
});

// verify issuer
cert = fs.readFileSync("public.pem"); // get public key
authEngine.verifyToken(signedToken, cert, { audience: "urn:foo", issuer: "urn:issuer" }, (err, decoded) => {
    // if issuer mismatch, err == invalid issuer
    console.log(err);
});

// verify algorithm
cert = fs.readFileSync("public.pem"); // get public key
authEngine.verifyToken(signedToken, cert, { algorithms: ["RS256"] }, (err, decoded) => {
    // if algorithm mismatch, err == invalid algorithm
    console.log(err);
});

// verify without expiration check
cert = fs.readFileSync("public.pem"); // get public key
authEngine.verifyToken(signedToken, cert, { ignoreExpiration: true }, (err, decoded) => {
    // if ignoreExpration == false and token is expired, err == expired token
    console.log(err);
});
