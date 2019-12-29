namespace adoneTests.crypto.ed25519 {
    const {
        crypto: {
            ed25519
        }
    } = adone;

    let buf: Buffer;
    let num: number;
    let bool: boolean;

    num = ed25519.privateKeyLength;
    num = ed25519.publicKeyLength;

    const pair = ed25519.generateKeyPair(Buffer.from("123"));
    buf = pair.publicKey;
    buf = pair.privateKey;

    buf = ed25519.sign(Buffer.from("hello"), Buffer.from("seed"));
    buf = ed25519.sign(Buffer.from("hello"), {
        publicKey: Buffer.from("hello"),
        privateKey: Buffer.from("hello")
    });

    buf = ed25519.sign(Buffer.from("hello"), ed25519.generateKeyPair(Buffer.from("hello")));

    bool = ed25519.verify(Buffer.from("hello"), Buffer.from("world"), Buffer.from("key"));
}
