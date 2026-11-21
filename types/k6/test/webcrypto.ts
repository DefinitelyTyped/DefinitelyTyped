// WebCrypto is supplied by the TypeScript DOM library, as referenced by k6/browser.
async function testEd25519(): Promise<void> {
    const pair: CryptoKeyPair = await crypto.subtle.generateKey("Ed25519", true, ["sign", "verify"]);
    const signature: ArrayBuffer = await crypto.subtle.sign("Ed25519", pair.privateKey, new Uint8Array([1, 2, 3]));
    const valid: boolean = await crypto.subtle.verify("Ed25519", pair.publicKey, signature, new Uint8Array([1, 2, 3]));
    const jwk: JsonWebKey = await crypto.subtle.exportKey("jwk", pair.publicKey);
    const imported: CryptoKey = await crypto.subtle.importKey("jwk", jwk, "Ed25519", true, ["verify"]);
    valid;
    imported;
}

async function testX25519(): Promise<void> {
    const generated = await crypto.subtle.generateKey("X25519", true, ["deriveBits"]);
    const generatedPeer = await crypto.subtle.generateKey("X25519", true, ["deriveBits"]);
    // TypeScript 5.6-5.9 use the general CryptoKey | CryptoKeyPair overload for X25519.
    if (!("privateKey" in generated) || !("publicKey" in generatedPeer)) {
        throw new Error("X25519 generateKey did not return a key pair");
    }
    const pair: CryptoKeyPair = generated;
    const peer: CryptoKeyPair = generatedPeer;
    const shared: ArrayBuffer = await crypto.subtle.deriveBits(
        { name: "X25519", public: peer.publicKey },
        pair.privateKey,
        256,
    );
    const jwk: JsonWebKey = await crypto.subtle.exportKey("jwk", pair.privateKey);
    const imported: CryptoKey = await crypto.subtle.importKey("jwk", jwk, "X25519", true, ["deriveBits"]);
    shared;
    imported;
}
