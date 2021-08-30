/**
 * The AuthEngine mostly delegates to jsonwebtoken, so using its tests as base
 */

import agAuth = require('ag-auth');
import fs = require('fs');

let cert: Buffer;

const testObject = { foo: 'bar' };

(async () => {
    const authEngine = new agAuth();

    // sign with default (HMAC SHA256)
    let signedToken = await authEngine.signToken(testObject, 'shhhhh');

    // sign with default (HMAC SHA256) and single audience
    signedToken = await authEngine.signToken(testObject, 'shhhhh', { audience: 'theAudience' });

    // sign with RSA SHA256
    cert = fs.readFileSync('private.key'); // get private key
    signedToken = await authEngine.signToken(testObject, cert, { algorithm: 'RS256' });

    // sign with encrypted RSA SHA256 private key (only PEM encoding is supported)
    const privKey: Buffer = fs.readFileSync('encrypted_private.key'); // get private key
    const secret = { key: privKey.toString(), passphrase: 'keypwd' };
    signedToken = await authEngine.signToken(testObject, secret, { algorithm: 'RS256' }); // the algorithm option is mandatory in this case

    // verify a token
    let token = await authEngine.verifyToken(signedToken ?? '', 'shhhhh', {});

    // verify a token with public key
    cert = fs.readFileSync('public.pem'); // get public key
    token = await authEngine.verifyToken(signedToken ?? '', cert, {});
})();
