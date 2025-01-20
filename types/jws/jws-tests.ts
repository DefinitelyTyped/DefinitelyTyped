/**
 * Tests are built by copying samples from the github repository:
 * https://github.com/auth0/node-jws
 */

import * as fs from "fs";
import * as jws from "jws";

// set up mock objects
const fakeStream = fs.createReadStream("fakefile");
const privateKeyStream = fakeStream;
const payloadStream = fakeStream;
const pubKeyStream = fakeStream;
const sigStream = fakeStream;

// jws.sign
const signature = jws.sign({
    header: { alg: "HS256" },
    payload: "h. jon benjamin",
    secret: "has a van",
});

// jws.sign with extra header values
const signatureWithHeaderParams = jws.sign({
    header: { alg: "HS256", foo: "bar" },
    payload: "h. jon benjamin",
    secret: "has a van",
});

// jws.decode
const message = jws.decode("djfakdid");
const messageWithPayloadForcedToJson = jws.decode("djfakdid", { json: true });

// $ExpectType boolean
const isValid = jws.isValid(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
);

// jws.createSign
jws.createSign({
    header: { alg: "RS256" },
    privateKey: privateKeyStream,
    payload: payloadStream,
}).on("done", signature => {});

// jws.createSign no params
const signer = jws.createSign({
    header: { alg: "RS256" },
});
privateKeyStream.pipe(signer.privateKey);
payloadStream.pipe(signer.payload);
signer.on("done", signature => {});

// jws.createVerify
jws.createVerify({
    publicKey: pubKeyStream,
    signature: sigStream,
}).on("done", (verified, obj) => {});

// jws.createVerify with no options
const verifier = jws.createVerify();
pubKeyStream.pipe(verifier.publicKey);
sigStream.pipe(verifier.signature);
verifier.on("done", (verified, obj) => {});

// jws.ALGORITHMS defined
const algorithms = jws.ALGORITHMS;
