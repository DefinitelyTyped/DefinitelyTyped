import * as ed2curve from 'ed2curve';
import * as nacl from 'tweetnacl';

const myKeyPair = nacl.sign.keyPair();

const newPublicKey = ed2curve.convertPublicKey(myKeyPair.publicKey);
const newSecretKey = ed2curve.convertSecretKey(myKeyPair.secretKey);

const newKeyPair = ed2curve.convertKeyPair(myKeyPair);
