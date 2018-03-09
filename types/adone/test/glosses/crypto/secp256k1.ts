namespace adoneTests.crypto.secp256k1 {
    const {
        crypto: {
            secp256k1
        }
    } = adone;

    let bool: boolean;
    let buf: Buffer;
    let num: number;

    const privateKey = Buffer.from("hello");
    const tweak = Buffer.from("world");
    const publicKey = Buffer.from("olleh");
    const signature = Buffer.from("dlrow");

    bool = secp256k1.privateKeyVerify(privateKey);

    buf = secp256k1.privateKeyExport(privateKey);
    buf = secp256k1.privateKeyExport(privateKey, true);

    buf = secp256k1.privateKeyImport(privateKey);

    buf = secp256k1.privateKeyNegate(privateKey);

    buf = secp256k1.privateKeyTweakAdd(privateKey, tweak);

    buf = secp256k1.privateKeyTweakMul(privateKey, tweak);

    buf = secp256k1.publicKeyConvert(publicKey);
    buf = secp256k1.publicKeyConvert(publicKey, true);

    bool = secp256k1.publicKeyVerify(publicKey);

    buf = secp256k1.publicKeyTweakAdd(publicKey, tweak);
    buf = secp256k1.publicKeyTweakAdd(publicKey, tweak, true);

    buf = secp256k1.publicKeyTweakMul(publicKey, tweak);
    buf = secp256k1.publicKeyTweakMul(publicKey, tweak, true);

    buf = secp256k1.publicKeyCombine([publicKey, publicKey]);
    buf = secp256k1.publicKeyCombine([publicKey, publicKey], true);

    buf = secp256k1.signatureNormalize(signature);

    buf = secp256k1.signatureExport(signature);

    buf = secp256k1.signatureImport(signature);

    buf = secp256k1.signatureImportLax(signature);

    const message = Buffer.from("msg");

    {
        const res = secp256k1.sign(message, privateKey);
        buf = res.signature;
        num = res.recovery;
    }
    {
        const res = secp256k1.sign(message, privateKey, {});
        buf = res.signature;
        num = res.recovery;
    }
    {
        const res = secp256k1.sign(message, privateKey, {
            data: null
        });
        buf = res.signature;
        num = res.recovery;
    }
    {
        const res = secp256k1.sign(message, privateKey, {
            data: Buffer.from("123")
        });
        buf = res.signature;
        num = res.recovery;
    }
    {
        const res = secp256k1.sign(message, privateKey, {
            noncefn(msg: Buffer, privateKey: Buffer, algo: Buffer, data: Buffer, attempt: number) {
                return Buffer.from("hehe");
            }
        });
        buf = res.signature;
        num = res.recovery;
    }

    bool = secp256k1.verify(message, signature, publicKey);

    buf = secp256k1.recover(message, signature, 1);
    buf = secp256k1.recover(message, signature, 1, true);

    buf = secp256k1.ecdh(publicKey, privateKey);

    buf = secp256k1.ecdhUnsafe(publicKey, privateKey);
    buf = secp256k1.ecdhUnsafe(publicKey, privateKey, true);
}
