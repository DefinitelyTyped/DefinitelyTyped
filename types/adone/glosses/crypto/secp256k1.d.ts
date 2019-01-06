declare namespace adone.crypto {
    namespace secp256k1 {
        /**
         * Verifies an ECDSA privateKey
         */
        function privateKeyVerify(privateKey: Buffer): boolean;

        /**
         * Exports a privateKey in DER format
         */
        function privateKeyExport(privateKey: Buffer, compressed?: boolean): Buffer;

        /**
         * Imports a privateKey in DER format
         */
        function privateKeyImport(privateKey: Buffer): Buffer;

        /**
         * Negates a privateKey by subtracting it from the order of the curve's base point
         */
        function privateKeyNegate(privateKey: Buffer): Buffer;

        /**
         * Computes the inverse of a privateKey (modulo the order of the curve's base point)
         */
        function privateKeyModInverse(privateKey: Buffer): Buffer;

        /**
         * Tweaks a privateKey by adding tweak to it
         */
        function privateKeyTweakAdd(privateKey: Buffer, tweak: Buffer): Buffer;

        /**
         * Tweaks a privateKey by multiplying it by a tweak
         */
        function privateKeyTweakMul(privateKey: Buffer, tweak: Buffer): Buffer;

        /**
         * Computes the public key for a privateKey
         */
        function publicKeyCreate(privateKey: Buffer, compressed?: boolean): Buffer;

        /**
         * Converts a publicKey to compressed or uncompressed form
         */
        function publicKeyConvert(publicKey: Buffer, compressed?: boolean): Buffer;

        /**
         * Verifies an ECDSA publicKey
         */
        function publicKeyVerify(publicKey: Buffer): boolean;

        /**
         * Tweaks a publicKey by adding tweak times the generator to it
         */
        function publicKeyTweakAdd(publicKey: Buffer, tweak: Buffer, compressed?: boolean): Buffer;

        /**
         * Tweaks a publicKey by multiplying it by a tweak value
         */
        function publicKeyTweakMul(publicKey: Buffer, tweak: Buffer, compressed?: boolean): Buffer;

        /**
         * Adds a given publicKeys together
         */
        function publicKeyCombine(publicKeys: Buffer[], compressed?: boolean): Buffer;

        /**
         * Converts a signature to a normalized lower-S form
         */
        function signatureNormalize(signature: Buffer): Buffer;

        /**
         * Serializes an ECDSA signature in DER format
         */
        function signatureExport(signature: Buffer): Buffer;

        /**
         * Parse a DER ECDSA signature (follow by BIP66)
         */
        function signatureImport(signature: Buffer): Buffer;

        /**
         * Same as signatureImport but not follow by BIP66
         */
        function signatureImportLax(signature: Buffer): Buffer;

        namespace I {
            interface SignOptions {
                noncefn?: (message: Buffer, privateKey: Buffer, algo: Buffer, data: Buffer, attempt: number) => Buffer;
                data?: Buffer | null;
            }

            interface SignResult {
                signature: Buffer;
                recovery: number;
            }
        }

        /**
         * Creates an ECDSA signature. Always return low-S signature.
         */
        function sign(message: Buffer, privateKey: Buffer, options?: I.SignOptions): I.SignResult;

        /**
         * Verifies an ECDSA signature
         *
         * Note: return false for high signatures!
         */
        function verify(message: Buffer, signature: Buffer, publicKey: Buffer): boolean;

        /**
         * Recovers an ECDSA public key from a signature
         */
        function recover(message: Buffer, signature: Buffer, recovery: number, compressed?: boolean): Buffer;

        /**
         * Computes an EC Diffie-Hellman secret and applied sha256 to compressed public key
         */
        function ecdh(publicKey: Buffer, privateKey: Buffer): Buffer;

        /**
         * Computes an EC Diffie-Hellman secret and return public key as result
         */
        function ecdhUnsafe(publicKey: Buffer, privateKey: Buffer, compressed?: boolean): Buffer;
    }
}
