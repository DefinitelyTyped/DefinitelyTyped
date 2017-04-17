/*
 * Test file for node-jose.  At this time these tests were taken verbatim
 * from the documentation on the NPM page at
 * https://www.npmjs.com/package/node-jose
 * This file definitely needs to be cleaned up and more tests added to
 * test the entirety of the definition file.
 */

import * as jose from 'node-jose';

let keystore = jose.JWK.createKeyStore();
let buf = new Buffer('a');

jose.JWK.asKeyStore("{key: somekey}").
    then(function (result) {
        // {result} is a jose.JWK.KeyStore
        keystore = result;
    });

let output = keystore.toJSON();
output = keystore.toJSON(true);

// by 'kid'
let kid: string = "someID";
let key = keystore.get(kid);

// ... and by 'kty'
key = keystore.get(kid, { kty: 'RSA' });

// ... and by 'use'
key = keystore.get(kid, { use: 'enc' });

// ... and by 'alg'
key = keystore.get(kid, { use: 'RSA-OAEP' });

// ... and by 'kty' and 'use'
key = keystore.get(kid, { kty: 'RSA', use: 'enc' });

// same as above, but with a single {props} argument
key = keystore.get({ kid: kid, kty: 'RSA', use: 'enc' });


// searching for keys
let everything = keystore.all();

// filter by 'kid'
everything = keystore.all({ kid: kid });

// filter by 'kty'
everything = keystore.all({ kty: 'RSA' });

// filter by 'use'
everything = keystore.all({ use: 'enc' });

// filter by 'alg'
everything = keystore.all({ alg: 'RSA-OAEP' });

// filter by 'kid' + 'kty' + 'alg'
everything = keystore.all({ kid: kid, kty: 'RSA', alg: 'RSA-OAEP' });

// input is either a:
// *  jose.JWK.Key to copy from; or
// *  JSON object representing a JWK; or
keystore.add({}).
    then(function (result) {
        // {result} is a jose.JWK.Key
        key = result;
    });

// input is either a:
// *  String serialization of a JSON JWK/(base64-encoded) PEM/(binary-encoded) DER
// *  Buffer of a JSON JWK/(base64-encoded) PEM/(binary-encoded) DER
// form is either a:
// * "json" for a JSON stringified JWK
// * "private" for a DER encoded 'raw' private key
// * "pkcs8" for a DER encoded (unencrypted!) PKCS8 private key
// * "public" for a DER encoded SPKI public key (alternate to 'spki')
// * "spki" for a DER encoded SPKI public key
// * "pkix" for a DER encoded PKIX X.509 certificate
// * "x509" for a DER encoded PKIX X.509 certificate
// * "pem" for a PEM encoded of PKCS8 / SPKI / PKIX
keystore.add(buf, "json").
    then(function (result) {
        // {result} is a jose.JWK.Key
        key = result;
    });

// first argument is the key type (kty)
// second is the key size (in bits) or named curve ('crv') for "EC"
keystore.generate("oct", 256).
    then(function (result) {
        // {result} is a jose.JWK.Key
        key = result;
    });

// ... with properties
var props = {
    kid: 'gBdaS-G8RLax2qgObTD94w',
    alg: 'A256GCM',
    use: 'enc'
};
keystore.generate("oct", 256, props).
    then(function (result) {
        // {result} is a jose.JWK.Key
        key = result;
    });

keystore.remove(key);
// NOTE: key.keystore does not change!!

// where input is either a:
// *  jose.JWK.Key instance
// *  JSON Object representation of a JWK
jose.JWK.asKey({}).
    then(function (result) {
        // {result} is a jose.JWK.Key
        // {result.keystore} is a unique jose.JWK.KeyStore
        key = result;
    });

// where input is either a:
// *  String serialization of a JSON JWK/(base64-encoded) PEM/(binary-encoded) DER
// *  Buffer of a JSON JWK/(base64-encoded) PEM/(binary-encoded) DER
// form is either a:
// * "json" for a JSON stringified JWK
// * "pkcs8" for a DER encoded (unencrypted!) PKCS8 private key
// * "spki" for a DER encoded SPKI public key
// * "pkix" for a DER encoded PKIX X.509 certificate
// * "x509" for a DER encoded PKIX X.509 certificate
// * "pem" for a PEM encoded of PKCS8 / SPKI / PKIX
jose.JWK.asKey({}, 'json').
    then(function (result) {
        // {result} is a jose.JWK.Key
        // {result.keystore} is a unique jose.JWK.KeyStore
        key = result;
    });

output = key.toJSON();
output = key.toJSON(true);

// where hash is a supported algorithm, currently one of:
// * SHA-1
// * SHA-256
// * SHA-384
// * SHA-512
key.thumbprint('SHA-1').
    then(function (print) {
        // {print} is a Buffer containing the thumbprint binary value
    });

// {input} is a Buffer
jose.JWS.createSign(key).
    update(buf).
    final().
    then(function (result) {
        // {result} is a JSON object -- JWS using the JSON General Serialization
    });

jose.JWS.createSign({ format: 'flattened' }, key).
    update(buf).
    final().
    then(function (result) {
        // {result} is a JSON object -- JWS using the JSON Flattened Serialization
    });

jose.JWS.createSign({ format: 'compact' }, key).
    update(buf).
    final().
    then(function (result) {
        // {result} is a String -- JWS using the Compact Serialization
    });

jose.JWS.createSign({ alg: 'PS256' }, key).
    update(buf).
    final().
    then(function (result) {
        // ....
    });

jose.JWS.createSign({ fields: { cty: 'jwk+json' } }, key).
    update(buf).
    final().
    then(function (result) {
        // ....
    });

jose.JWS.createSign(key).
    update(buf, "utf8").
    final().
    then(function (result) {
        // ....
    });

// {keys} is an Array of jose.JWK.Key instances
jose.JWS.createSign([key, key]).
    update(buf).
    final().
    then(function (result) {
        // ....
    });

jose.JWS.createVerify(keystore).
    verify("some.jws.object").
    then(function (result) {
        // {result} is a Object with:
        // *  header: the combined 'protected' and 'unprotected' header members
        // *  payload: Buffer of the signed content
        // *  signature: Buffer of the verified signature
        // *  key: The key used to verify the signature
    });

// {key} can be:
// *  jose.JWK.Key
// *  JSON object representing a JWK
jose.JWS.createVerify(key).
    verify('some.jws.object').
    then(function (result) {
        // ...
    });

jose.JWS.createVerify().
    verify('some.jws.key').
    then(function (result) {
        // ...
    });

var opts = {
    handlers: {
        "exp": true
    }
};

jose.JWS.createVerify(key, opts).
    verify('some.jws.key').
    then(function (result) {
        // ...
    });

var opts2 = {
    handlers: {
        "exp": function (jws: any) {
            // {jws} is the JWS verify output, pre-verification
            jws.header.exp = new Date(jws.header.exp);
        }
    }
};
jose.JWS.createVerify(key, opts2).
    verify('some.jws.key').
    then(function (result) {
        // ...
    });

var opts3 = {
    handlers: {
        "exp": {
            complete: function (jws: any) {
                // {jws} is the JWS verify output, post-verification
                jws.header.exp = new Date(jws.header.exp);
            }
        }
    }
};
jose.JWS.createVerify(key, opts3).
    verify('some.jws.key').
    then(function (result) {
        // ...
    });

//Encryption

// {input} is a Buffer
jose.JWE.createEncrypt(key).
    update(buf).
    final().
    then(function (result) {
        // {result} is a JSON Object -- JWE using the JSON General Serialization
    });

jose.JWE.createEncrypt({ format: 'compact' }, key).
    update(buf).
    final().
    then(function (result) {
        // {result} is a String -- JWE using the Compact Serialization
    });

jose.JWE.createEncrypt({ format: 'flattened' }, key).
    update(buf).
    final().
    then(function (result) {
        // {result} is a JSON Object -- JWE using the JSON Flattened Serialization
    });

jose.JWE.createEncrypt({ zip: true }, key).
    update(buf).
    final().
    then(function (result) {
        // ....
    });

jose.JWE.createEncrypt({ fields: { cty: 'jwk+json' } }, key).
    update(buf).
    final().
    then(function (result) {
        // ....
    });

// {keys} is an Array of jose.JWK.Key instances
jose.JWE.createEncrypt([key, key]).
    update(buf).
    final().
    then(function (result) {
        // ....
    });

jose.JWE.createDecrypt(keystore).
    decrypt('some.jwe').
    then(function (result) {
        // {result} is a Object with:
        // *  header: the combined 'protected' and 'unprotected' header members
        // *  protected: an array of the member names from the "protected" member
        // *  key: Key used to decrypt
        // *  payload: Buffer of the decrypted content
        // *  plaintext: Buffer of the decrypted content (alternate)
    });

jose.JWE.createDecrypt(key).
    decrypt('some.jwe').
    then(function (result) {
        // ....
    });

var opts4 = {
    handlers: {
        "exp": true
    }
};
jose.JWE.createDecrypt(key, opts4).
    decrypt('some.jwe').
    then(function (result) {
        // ...
    });
//To perform additional (pre-decrypt) processing on a crit header member:

var opts5 = {
    handlers: {
        "exp": function (jwe: any) {
            // {jwe} is the JWE decrypt output, pre-decryption
            jwe.header.exp = new Date(jwe.header.exp);
        }
    }
};
jose.JWE.createDecrypt(key, opts5).
    decrypt('some.jwe').
    then(function (result) {
        // ...
    });
//To perform additional (post-decrypt) processing on a crit header member:

var opts6 = {
    handlers: {
        "exp": {
            complete: function (jwe: any) {
                // {jwe} is the JWE decrypt output, post-decryption
                jwe.header.exp = new Date(jwe.header.exp);
            }
        }
    }
};
jose.JWE.createDecrypt(key, opts6).
    decrypt('some.jwe').
    then(function (result) {
        // ...
    });

var buff = jose.util.asBuffer('input');

var output2 = jose.util.base64url.encode(buf);

// explicit encoding
output2 = jose.util.base64url.encode(buf, "utf8");

// implied "utf8" encoding
output2 = jose.util.base64url.encode(buf);

var output3 = jose.util.base64url.decode('input');

// argument is size (in bytes)
var rnd = jose.util.randomBytes(32);
