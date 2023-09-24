import PQClean = require("pqclean");

// New KEM API.
{
    // $ExpectType Promise<GenerateKeyPairResult>
    const keyPairPromise = PQClean.kem.generateKeyPair("mceliece8192128");
    keyPairPromise.then(result => {
        // $ExpectType PublicKey
        const publicKey = result.publicKey;
        // $ExpectType PrivateKey
        const privateKey = result.privateKey;

        // $ExpectType Algorithm
        publicKey.algorithm;
        // $ExpectType Algorithm
        privateKey.algorithm;

        // $ExpectType ArrayBuffer
        publicKey.export();
        // $ExpectType ArrayBuffer
        privateKey.export();

        // $ExpectType PublicKey
        new PQClean.kem.PublicKey(publicKey.algorithm.name, publicKey.export());
        // $ExpectType PrivateKey
        new PQClean.kem.PrivateKey(privateKey.algorithm.name, privateKey.export());

        // $ExpectType Promise<GenerateKeyResult>
        const generateKeyPromise = publicKey.generateKey();
        generateKeyPromise.then(result => {
            // $ExpectType ArrayBuffer
            const key = result.key;
            // $ExpectType ArrayBuffer
            const encryptedKey = result.encryptedKey;

            // $ExpectType Promise<ArrayBuffer>
            const decryptKeyPromise = privateKey.decryptKey(encryptedKey);
            decryptKeyPromise.then(receivedKey => {
                // $ExpectType ArrayBuffer
                receivedKey;
            });
        });

        // @ts-expect-error
        privateKey.generateKey;

        // @ts-expect-error
        publicKey.decryptKey;
    });

    // $ExpectType Algorithm[]
    const kemAlgorithms = PQClean.kem.supportedAlgorithms;
    for (const algorithm of kemAlgorithms) {
        // $ExpectType string
        algorithm.name;
        // $ExpectType string
        algorithm.description;
        // $ExpectType number
        algorithm.publicKeySize;
        // $ExpectType number
        algorithm.privateKeySize;
        // $ExpectType number
        algorithm.keySize;
        // $ExpectType number
        algorithm.encryptedKeySize;
    }
}

// New sign API.
{
    // $ExpectType Promise<GenerateKeyPairResult>
    const keyPairPromise = PQClean.sign.generateKeyPair("falcon-1024");
    keyPairPromise.then(result => {
        // $ExpectType PublicKey
        const publicKey = result.publicKey;
        // $ExpectType PrivateKey
        const privateKey = result.privateKey;

        // $ExpectType Algorithm
        publicKey.algorithm;
        // $ExpectType Algorithm
        privateKey.algorithm;

        // $ExpectType ArrayBuffer
        publicKey.export();
        // $ExpectType ArrayBuffer
        privateKey.export();

        // $ExpectType PublicKey
        new PQClean.sign.PublicKey(publicKey.algorithm.name, publicKey.export());
        // $ExpectType PrivateKey
        new PQClean.sign.PrivateKey(privateKey.algorithm.name, privateKey.export());

        const message = new ArrayBuffer(100);

        // $ExpectType Promise<ArrayBuffer>
        const signaturePromise = privateKey.sign(message);
        signaturePromise.then(signature => {
            // $ExpectType Promise<boolean>
            const verificationPromise = publicKey.verify(message, signature);
            verificationPromise.then(valid => {
                // $ExpectType boolean
                valid;
            });
        });

        // @ts-expect-error
        privateKey.verify;

        // @ts-expect-error
        publicKey.sign;
    });

    // $ExpectType Algorithm[]
    const signAlgorithms = PQClean.sign.supportedAlgorithms;
    for (const algorithm of signAlgorithms) {
        // $ExpectType string
        algorithm.name;
        // $ExpectType string
        algorithm.description;
        // $ExpectType number
        algorithm.publicKeySize;
        // $ExpectType number
        algorithm.privateKeySize;
        // $ExpectType number
        algorithm.signatureSize;
    }
}

// Classic KEM API.
{
    // $ExpectType KEM
    const mceliece = new PQClean.KEM("mceliece8192128");

    // $ExpectType number
    mceliece.keySize;
    // $ExpectType number
    mceliece.encryptedKeySize;
    // $ExpectType number
    mceliece.publicKeySize;
    // $ExpectType number
    mceliece.privateKeySize;

    // Synchronous.
    {
        // $ExpectType ClassicGenerateKeyPairResult
        const { publicKey, privateKey } = mceliece.keypair();
        // $ExpectType Buffer
        publicKey;
        // $ExpectType Buffer
        privateKey;

        // $ExpectType ClassicGenerateKeyResult
        const { key, encryptedKey } = mceliece.generateKey(publicKey);
        // $ExpectType Buffer
        key;
        // $ExpectType Buffer
        encryptedKey;

        // $ExpectType Buffer
        const receivedKey = mceliece.decryptKey(privateKey, encryptedKey);
    }

    // Asynchronous.
    {
        // $ExpectType void
        mceliece.keypair((err, pair) => {
            // $ExpectType Error | null
            err;
            // $ExpectType ClassicGenerateKeyPairResult
            const { publicKey, privateKey } = pair;

            // $ExpectType void
            mceliece.generateKey(publicKey, (err, result) => {
                // $ExpectType Error | null
                err;
                // $ExpectType ClassicGenerateKeyResult
                const { key, encryptedKey } = result;

                // $ExpectType void
                mceliece.decryptKey(privateKey, encryptedKey, (err, receivedKey) => {
                    // $ExpectType Error | null
                    err;
                    // $ExpectType Buffer
                    receivedKey;
                });
            });
        });
    }

    // $ExpectType string[]
    PQClean.KEM.supportedAlgorithms;
}

// Classic Sign API.
{
    // $ExpectType Sign
    const falcon = new PQClean.Sign("falcon-1024");

    // $ExpectType number
    falcon.signatureSize;
    // $ExpectType number
    falcon.publicKeySize;
    // $ExpectType number
    falcon.privateKeySize;

    const message = Buffer.alloc(100);

    // Synchronous.
    {
        // $ExpectType ClassicGenerateKeyPairResult
        const { publicKey, privateKey } = falcon.keypair();
        // $ExpectType Buffer
        publicKey;
        // $ExpectType Buffer
        privateKey;

        // $ExpectType Buffer
        const signature = falcon.sign(privateKey, message);

        // $ExpectType boolean
        const result = falcon.verify(publicKey, message, signature);
    }

    // Asynchronous.
    {
        // $ExpectType void
        falcon.keypair((err, pair) => {
            // $ExpectType Error | null
            err;
            // $ExpectType ClassicGenerateKeyPairResult
            const { publicKey, privateKey } = pair;

            // $ExpectType void
            falcon.sign(privateKey, message, (err, signature) => {
                // $ExpectType Error | null
                err;
                // $ExpectType Buffer
                signature;

                // $ExpectType void
                falcon.verify(publicKey, message, signature, (err, valid) => {
                    // $ExpectType Error | null
                    err;
                    // $ExpectType boolean
                    valid;
                });
            });
        });
    }

    // $ExpectType string[]
    PQClean.Sign.supportedAlgorithms;
}
