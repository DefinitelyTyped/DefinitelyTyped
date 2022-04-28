declare namespace jsrsasign {
    /** Tom Wu's RSA Key class and extension */
    class RSAKey {
        constructor();
        /**
         * static method to get array of hex field values from hexadecimal PKCS#5 RSA private key.
         * @param sPEMPrivateKey PEM PKCS#1/5 s private key string
         * @return array of field hex value
         * @example
         * RSAKey.getHexValueArrayOfChildrenFromHex("3082...") → ["00", "3b42...", ...]
         */
        static getHexValueArrayOfChildrenFromHex(sPEMPrivateKey: string): string[];

        /**
         * static method to get array of field positions from hexadecimal PKCS#5 RSA private key.
         * @param sPEMPrivateKey PEM PKCS#1/5 s private key string
         * @return array of field positions
         * @example
         * RSAKey.getPosArrayOfChildrenFromHex("3082...") → [8, 32, ...]
         */
        static getPosArrayOfChildrenFromHex(sPEMPrivateKey: string): number[];

        /**
         * read an ASN.1 hexadecimal string of X.509 RSA public key certificate
         * @param h hexadecimal string of X.509 RSA public key certificate
         * @param nthPKI nth index of publicKeyInfo. (DEFAULT: 6 for X509v3)
         */
        readCertPubKeyHex(h: string, nthPKI: number): void;

        /**
         * read an ASN.1 hexadecimal string of PKCS#1/5 plain RSA private key
         * @param h hexadecimal string of PKCS#1/5 plain RSA private key
         */
        readPKCS5PrvKeyHex(h: string): void;

        /**
         * read an ASN.1 hexadecimal string of PKCS#5 RSA public key
         * @param h hexadecimal string of PKCS#5 public key
         */
        readPKCS5PubKeyHex(h: string): void;

        /**
         * read an ASN.1 hexadecimal string of PKCS#8 plain RSA private key
         * @param h hexadecimal string of PKCS#8 plain RSA private key
         */
        readPKCS8PrvKeyHex(h: string): void;

        /**
         * read an ASN.1 hexadecimal string of PKCS#8 RSA public key
         * @param h hexadecimal string of PKCS#8 public key
         */
        readPKCS8PubKeyHex(h: string): void;

        /**
         * read PKCS#1 private key from a string
         * @param keyPEM string of PKCS#1 private key.
         */
        readPrivateKeyFromPEMString(keyPEM: string): void;

        /**
         * sign for a message string with RSA private key.
         * @param s message string to be signed.
         * @param hashAlg hash algorithm name for signing.
         * @return returns hexadecimal string of signature value.
         */
        static sign(s: string, hashAlg: string): string;

        /**
         * sign for a message string with RSA private key by PKCS#1 PSS signing.
         * @param s message string to be signed.
         * @param hashAlg hash algorithm name for signing.
         * @param sLen salt byte length from 0 to (keybytelen - hashbytelen - 2).
         *        There are two special values:
         *        * -1: sets the salt length to the digest length
         *        * -2: sets the salt length to maximum permissible value
         *           (i.e. keybytelen - hashbytelen - 2)
         *
         *        DEFAULT is -1. (NOTE: OpenSSL's default is -2.)
         * @return returns hexadecimal string of signature value.
         */
        static signPSS(s: string, hashAlg: string, sLen: number): string;

        /**
         * sign hash value of message to be signed with RSA private key.
         * @param sHashHex hexadecimal string of hash value of message to be signed.
         * @param hashAlg hash algorithm name for signing.
         * @return returns hexadecimal string of signature value.
         */
        static signWithMessageHash(sHashHex: string, hashAlg: string): string;

        /**
         * sign hash value of message with RSA private key by PKCS#1 PSS signing.
         * @param hHash hexadecimal hash value of message to be signed.
         * @param hashAlg hash algorithm name for signing.
         * @param sLen salt byte length from 0 to (keybytelen - hashbytelen - 2).
         *        There are two special values:
         *        * -1: sets the salt length to the digest length
         *        * -2: sets the salt length to maximum permissible value
         *           (i.e. keybytelen - hashbytelen - 2)
         *
         *        DEFAULT is -1. (NOTE: OpenSSL's default is -2.)
         * @return returns hexadecimal string of signature value.
         */
        static signWithMessageHashPSS(hHash: string, hashAlg: string, sLen: number): string;

        /**
         * verifies a sigature for a message string with RSA public key.
         * @param sMsg message string to be verified.
         * @param hSig hexadecimal string of signature.
         *             non-hexadecimal characters including new lines will be ignored.
         * @return returns true if valid, otherwise false
         */
        verify(sMsg: string, hSig: string): boolean;

        /**
         * verifies a sigature for a message string with RSA public key by PKCS#1 PSS sign.
         * @param sMsg message string to be verified.
         * @param hSig hexadecimal string of signature value
         * @param hashAlg hash algorithm name
         * @param sLen salt byte length from 0 to (keybytelen - hashbytelen - 2).
         *        There are two special values:
         *        * -1: sets the salt length to the digest length
         *        * -2: sets the salt length to maximum permissible value
         *           (i.e. keybytelen - hashbytelen - 2)
         *
         *        DEFAULT is -1. (NOTE: OpenSSL's default is -2.)
         * @return returns true if valid, otherwise false
         */
        static verifyPSS(sMsg: string, hSig: string, hashAlg: string, sLen: number): boolean;

        /**
         * verifies a sigature for a message string with RSA public key.
         * @param sHashHex hexadecimal hash value of message to be verified.
         * @param hSig hexadecimal string of siganture.
         *                 non-hexadecimal charactors including new lines will be ignored.
         * @return returns 1 if valid, otherwise 0
         */
        static verifyWithMessageHash(sHashHex: string, hSig: string): 0 | 1;

        /**
         * verifies a sigature for a hash value of message string with RSA public key by PKCS#1 PSS sign.
         * @param hHash hexadecimal hash value of message string to be verified.
         * @param hSig hexadecimal string of signature value
         * @param hashAlg hash algorithm name
         * @param sLen salt byte length from 0 to (keybytelen - hashbytelen - 2).
         *        There are two special values:
         *        * -1: sets the salt length to the digest length
         *        * -2: sets the salt length to maximum permissible value
         *           (i.e. keybytelen - hashbytelen - 2)
         *
         *        DEFAULT is -1 (NOTE: OpenSSL's default is -2.)
         * @return returns true if valid, otherwise false
         */
        static verifyWithMessageHashPSS(hHash: string, hSig: string, hashAlg: string, sLen: number): boolean;
    }
}
