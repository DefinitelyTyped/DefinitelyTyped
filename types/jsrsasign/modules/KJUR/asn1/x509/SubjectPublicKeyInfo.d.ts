declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * SubjectPublicKeyInfo ASN.1 structure class
     * @param params parameter for subject public key
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - `RSAKey` object
     * - `KJUR.crypto.ECDSA` object
     * - `KJUR.crypto.DSA` object
     *
     * NOTE1: 'params' can be omitted.
     * NOTE2: DSA/ECDSA key object is also supported since asn1x509 1.0.6.
     *
     * @example
     * spki = new KJUR.asn1.x509.SubjectPublicKeyInfo(RSAKey_object);
     * spki = new KJUR.asn1.x509.SubjectPublicKeyInfo(KJURcryptoECDSA_object);
     * spki = new KJUR.asn1.x509.SubjectPublicKeyInfo(KJURcryptoDSA_object);
     */
    class SubjectPublicKeyInfo extends ASN1Object {
        constructor(params?: RSAKey | crypto.DSA | crypto.ECDSA);
        getASN1Object(): DERSequence;

        getEncodedHex(): string;

        /**
         * @param key `RSAKey`, `KJUR.crypto.ECDSA` or `KJUR.crypto.DSA` object
         * @example
         * spki = new KJUR.asn1.x509.SubjectPublicKeyInfo();
         * pubKey = KEYUTIL.getKey(PKCS8PUBKEYPEM);
         * spki.setPubKey(pubKey);
         */
        setPubKey(key: RSAKey | crypto.DSA | crypto.ECDSA): void;
    }
}
