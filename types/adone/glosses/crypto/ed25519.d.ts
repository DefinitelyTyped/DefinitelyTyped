declare namespace adone.crypto {
    namespace ed25519 {
        const publicKeyLength: number;

        const privateKeyLength: number;

        namespace I {
            interface KeyPair {
                publicKey: Buffer;
                privateKey: Buffer;
            }
        }

        function generateKeyPair(seed: Buffer): I.KeyPair;

        function sign(message: Buffer, seed: Buffer | I.KeyPair): Buffer;

        function verify(message: Buffer, signature: Buffer, publicKey: Buffer): boolean;
    }
}
