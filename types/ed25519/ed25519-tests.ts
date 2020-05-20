import * as crypto from 'crypto';
import * as ed25519 from 'ed25519';

function signAndValidatePlaintext() {
    const seed: Buffer = crypto.randomBytes(32);
    const keyPair: ed25519.CurveKeyPair = ed25519.MakeKeypair(seed);

    const plaintext = Buffer.from('plaintext');
    const signature: Buffer = ed25519.Sign(plaintext, keyPair.privateKey);

    const matches: boolean = ed25519.Verify(plaintext, signature, keyPair.publicKey);
    if (!matches) {
        throw new Error("Sign and verify should work for the same plaintext");
    }
}
