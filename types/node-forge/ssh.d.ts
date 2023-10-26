declare module "node-forge" {
    namespace ssh {
        interface FingerprintOptions {
            /**
             * @description the delimiter to use between bytes for `hex` encoded output
             */
            delimiter?: string | undefined;
            /**
             * @description if not specified, the function will return `ByteStringBuffer`
             */
            encoding?: "hex" | "binary" | undefined;
            /**
             * @description if not specified defaults to `md.md5`
             */
            md?: md.MessageDigest | undefined;
        }

        /**
         * @description Encodes a private RSA key as an OpenSSH file
         */
        function privateKeyToOpenSSH(privateKey: pki.PrivateKey, passphrase?: string): string;

        /**
         * @description Encodes (and optionally encrypts) a private RSA key as a Putty PPK file
         */
        function privateKeyToPutty(privateKey: pki.PrivateKey, passphrase?: string, comment?: string): string;

        /**
         * @description Encodes a public RSA key as an OpenSSH file
         */
        function publicKeyToOpenSSH(publicKey: pki.PublicKey, comment?: string): string | pki.PEM;

        /**
         * @description Gets the SSH fingerprint for the given public key
         */
        function getPublicKeyFingerprint(
            publicKey: pki.PublicKey,
            options?: FingerprintOptions,
        ): util.ByteStringBuffer | Hex | string;
    }
}
