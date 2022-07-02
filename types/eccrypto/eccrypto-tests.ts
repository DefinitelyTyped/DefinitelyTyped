import eccrypto = require("eccrypto");
import expect = require("expect");
const privKey = eccrypto.generatePrivate();
const pubKey = eccrypto.getPublicCompressed(privKey);
const msg = 'testing';
(async () => {
    const encoded = await eccrypto.encrypt(pubKey, Buffer.from(msg, 'utf-8'));
    const decoded = await eccrypto.decrypt(privKey, encoded);
    expect(decoded.toString('utf-8')).toEqual(msg);
})();
