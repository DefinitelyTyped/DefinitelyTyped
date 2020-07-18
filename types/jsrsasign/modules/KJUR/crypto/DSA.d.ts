declare namespace jsrsasign.KJUR.crypto {
    /**
     * class for DSA signing and verification
     * @description
     *
     * CAUTION: Most of the case, you don't need to use this class.
     * Please use `KJUR.crypto.Signature` class instead.
     *
     *
     * NOTE: Until jsrsasign 6.2.3, DSA class have used codes from openpgpjs library 1.0.0
     * licenced under LGPL licence. To avoid license issue dsa-2.0.js was re-written with
     * my own codes in jsrsasign 7.0.0.
     * Some random number generators used in dsa-2.0.js was newly defined
     * in KJUR.crypto.Util class. Now all of LGPL codes are removed.
     */
    class DSA {
        /**
         * set DSA private key by key parameters of BigInteger object
         * @param p prime P parameter
         * @param q sub prime Q parameter
         * @param g base G parameter
         * @param y public key Y or null
         * @param x private key X
         */
        setPrivate(p: BigInteger, q: BigInteger, g: BigInteger, y: BigInteger | null, x: BigInteger): void;

        /**
         * set DSA private key by key parameters of hexadecimal string
         * @param hP prime P parameter
         * @param hQ sub prime Q parameter
         * @param hG base G parameter
         * @param hY public key Y or null
         * @param hX private key X
         */
        setPrivateHex(hP: string, hQ: string, hG: string, hY: string, hX: string): void;

        /**
         * set DSA public key by key parameters of BigInteger object
         * @param p prime P parameter
         * @param q sub prime Q parameter
         * @param g base G parameter
         * @param y public key Y
         */
        setPublic(p: BigInteger, q: BigInteger, g: BigInteger, y: BigInteger): void;

        /**
         * set DSA public key by key parameters of hexadecimal string
         * @param hP prime P parameter
         * @param hQ sub prime Q parameter
         * @param hG base G parameter
         * @param hY public key Y
         */
        setPublicHex(hP: string, hQ: string, hG: string, hY: string): void;

        /**
         * sign to hashed message by this DSA private key object
         * @param sHashHex hexadecimal string of hashed message
         * @return hexadecimal string of ASN.1 encoded DSA signature value
         */
        signWithMessageHash(sHashHex: string): string;

        /**
         * verify signature by this DSA public key object
         * @param sHashHex hexadecimal string of hashed message
         * @param hSigVal hexadecimal string of ASN.1 encoded DSA signature value
         * @return true if the signature is valid otherwise false.
         */
        verifyWithMessageHash(sHashHex: string, hSigVal: string): boolean;

        /**
         * parse hexadecimal ASN.1 DSA signature value
         * @param hSigVal hexadecimal string of ASN.1 encoded DSA signature value
         * @return array [r, s] of DSA signature value. Both r and s are BigInteger.
         */
        parseASN1Signature(hSigVal: string): [BigInteger, BigInteger];

        /**
         * read an ASN.1 hexadecimal string of PKCS#1/5 plain DSA private key
         * @param h hexadecimal string of PKCS#1/5 DSA private key
         */
        readPKCS5PrvKeyHex(h: string): void;

        /**
         * read an ASN.1 hexadecimal string of PKCS#8 plain DSA private key
         * @param h hexadecimal string of PKCS#8 DSA private key
         */
        readPKCS8PrvKeyHex(h: string): void;

        /**
         * read an ASN.1 hexadecimal string of PKCS#8 plain DSA private key
         * @param h hexadecimal string of PKCS#8 DSA private key
         */
        readPKCS8PubKeyHex(h: string): void;

        /**
         * read an ASN.1 hexadecimal string of X.509 DSA public key certificate
         * @param h hexadecimal string of X.509 DSA public key certificate
         * @param nthPKI nth index of publicKeyInfo. (DEFAULT: 6 for X509v3)
         */
        readCertPubKeyHex(h: string, nthPKI: number): void;
    }
}
