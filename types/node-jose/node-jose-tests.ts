import * as jose from 'node-jose';

const keystore = jose.JWK.createKeyStore();
const output = keystore.toJSON();
keystore.toJSON(true);

jose.JWK.asKeyStore('input').then(result => {});

let key = keystore.get('kid');

key = keystore.get('kid', { kty: 'RSA' });

// ... and by 'use'
key = keystore.get('kid', { use: 'enc' });

// ... and by 'alg'
key = keystore.get('kid', { alg: 'RSA-OAEP' });

// ... and by 'kty' and 'use'
key = keystore.get('kid', { kty: 'RSA', use: 'enc' });

// same as above, but with a single {props} argument
key = keystore.get({ kid: 'kid', kty: 'RSA', use: 'enc' });

let everything = keystore.all();

// filter by 'kid'
everything = keystore.all({ kid: 'kid' });

// filter by 'kty'
everything = keystore.all({ kty: 'RSA' });

// filter by 'use'
everything = keystore.all({ use: 'enc' });

// filter by 'alg'
everything = keystore.all({ alg: 'RSA-OAEP' });

// filter by 'kid' + 'kty' + 'alg'
everything = keystore.all({ kid: 'kid', kty: 'RSA', alg: 'RSA-OAEP' });

keystore.add('input').then(function(result) {});

keystore.add('input', 'json').then(function(result) {
    // {result} is a jose.JWK.Key
});

keystore.generate('oct', 256).then(function(result) {
    // {result} is a jose.JWK.Key
});

// ... with properties
let props = {
    kid: 'gBdaS-G8RLax2qgObTD94w',
    alg: 'A256GCM',
    use: 'enc'
};

let key2: jose.JWK.Key;
keystore.generate('oct', 256, props).then(function(result) {
    // {result} is a jose.JWK.Key
    key2 = result;
    keystore.remove(key2);

    // where input is either a:
    // *  jose.JWK.Key instance
    // *  JSON Object representation of a JWK

    jose.JWK.asKey(key2).then(function(result) {
        // {result} is a jose.JWK.Key
        // {result.keystore} is a unique jose.JWK.KeyStore
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
    jose.JWK.asKey('input', 'json').then(function(result) {
        // {result} is a jose.JWK.Key
        // {result.keystore} is a unique jose.JWK.KeyStore
    });
});

jose.JWK.createKey('oct', 256, { alg: 'A256GCM' }).then(function(result) {
    // {result} is a jose.JWK.Key
    // {result.keystore} is a unique jose.JWK.KeyStore
    let output4 = result.toJSON(true);
    result.thumbprint('hash').then(function(print) {
        // {print} is a Buffer containing the thumbprint binary value
    });

    let key = result;
    jose.JWS.createSign(key)
        .update('input')
        .final()
        .then(function(result) {
            // {result} is a JSON object -- JWS using the JSON General Serialization
        });

    jose.JWS.createSign({ format: 'flattened' }, key)
        .update('input')
        .final()
        .then(function(result) {
            // {result} is a JSON object -- JWS using the JSON Flattened Serialization
        });

    jose.JWS.createSign({ format: 'compact' }, key)
        .update('input')
        .final()
        .then(function(result) {
            // {result} is a String -- JWS using the Compact Serialization
        });

    jose.JWS.createSign({ alg: 'PS256' }, key)
        .update('input')
        .final()
        .then(function(result) {
            // ....
        });

    jose.JWS.createSign({ fields: { cty: 'jwk+json' } }, key)
        .update('input')
        .final()
        .then(function(result) {
            // ....
        });

    jose.JWS.createSign(key)
        .update('input', 'utf8')
        .final()
        .then(function(result) {
            // ....
        });

    let opts = {
        algorithms: ['PS*']
    };
    jose.JWS.createVerify(key, opts)
        .verify('input')
        .then(function(result) {
            // ...
        });

    opts = {
        algorithms: ['*', '!HS*']
    };
    jose.JWS.createVerify(key, opts)
        .verify('input')
        .then(function(result) {
            // ...
        });

    const opts2 = {
        handlers: {
            exp: true
        }
    };

    jose.JWS.createVerify(key, opts2)
        .verify('input')
        .then(function(result) {
            // ...
        });

    jose.JWE.createEncrypt(key)
        .update('input')
        .final()
        .then(function(result) {
            // {result} is a JSON Object -- JWE using the JSON General Serialization
        });

    jose.JWE.createEncrypt({ format: 'compact' }, key)
        .update('input')
        .final()
        .then(function(result) {
            // {result} is a String -- JWE using the Compact Serialization
        });

    jose.JWE.createEncrypt({ format: 'flattened' }, key)
        .update('input')
        .final()
        .then(function(result) {
            // {result} is a JSON Object -- JWE using the JSON Flattened Serialization
        });

    jose.JWE.createEncrypt({ zip: true }, key)
        .update('input')
        .final()
        .then(function(result) {
            // ....
        });

    jose.JWE.createEncrypt({ fields: { cty: 'jwk+json' } }, key)
        .update('input')
        .final()
        .then(function(result) {
            // ....
        });

    jose.JWE.createEncrypt([key, key])
        .update('input')
        .final()
        .then(function(result) {
            // ....
        });

    jose.JWE.createDecrypt(key)
        .decrypt('input')
        .then(function(result) {
            // ....
        });

    const opts3 = {
        algorithms: ['dir', 'A*GCM']
    };
    jose.JWE.createDecrypt(key, opts3)
        .decrypt('input')
        .then(function(result) {
            // ...
        });

    const opts4 = {
        algorithms: ['*', '!RSA*']
    };
    jose.JWS.createVerify(key, opts4)
        .verify('input')
        .then(function(result) {
            // ...
        });

    const opts5 = {
        handlers: {
            exp: true
        }
    };
    jose.JWE.createDecrypt(key, opts5)
        .decrypt('input')
        .then(function(result) {
            // ...
        });
});

jose.JWS.createVerify(keystore)
    .verify('input')
    .then(function(result) {
        // {result} is a Object with:
        // *  header: the combined 'protected' and 'unprotected' header members
        // *  payload: Buffer of the signed content
        // *  signature: Buffer of the verified signature
        // *  key: The key used to verify the signature
    });

// {key} can be:
// *  jose.JWK.Key
// *  JSON object representing a JWK
jose.JWS.createVerify(key)
    .verify('input')
    .then(function(result) {
        // ...
    });

jose.JWS.createVerify()
    .verify('input', { allowEmbeddedKey: true })
    .then(function(result) {
        // ...
    });

let verifier = jose.JWS.createVerify({ allowEmbeddedKey: true });

verifier.verify('input').then(function(result) {
    // ...
});

jose.JWE.createDecrypt(keystore)
    .decrypt('input')
    .then(function(result) {
        // {result} is a Object with:
        // *  header: the combined 'protected' and 'unprotected' header members
        // *  protected: an array of the member names from the "protected" member
        // *  key: Key used to decrypt
        // *  payload: Buffer of the decrypted content
        // *  plaintext: Buffer of the decrypted content (alternate)
    });

jose.util.asBuffer('input');

jose.util.base64url.encode('input');
jose.util.base64url.encode('input', 'utf8');

jose.util.base64url.encode('input');

jose.util.base64url.decode('input');

jose.util.randomBytes(32);
