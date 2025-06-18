declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * X.509 CRL class to sign and generate hex encoded CRL
     * @param params associative array of parameters (ex. {'tbsobj': obj, 'rsaprvkey': key})
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - tbsobj - specify `KJUR.asn1.x509.TBSCertList` object to be signed
     * - rsaprvkey - specify `RSAKey` object CA private key
     *
     * NOTE: 'params' can be omitted.
     * __EXAMPLE__
     * @example
     * var prvKey = new RSAKey(); // CA's private key
     * prvKey.readPrivateKeyFromASN1HexString("3080...");
     * var crl = new KJUR.asn1x509.CRL({'tbsobj': tbs, 'prvkeyobj': prvKey});
     * crl.sign(); // issue CRL by CA's private key
     * var hCRL = crl.getEncodedHex();
     *
     * // CertificateList  ::=  SEQUENCE  {
     * //     tbsCertList          TBSCertList,
     * //     signatureAlgorithm   AlgorithmIdentifier,
     * //     signatureValue       BIT STRING  }
     */
    class CRL extends ASN1Object {
        constructor(params?: { tbsobj: TBSCertList; rsaprvkey: RSAKey });

        /**
         * sign TBSCertList and set signature value internally
         * @example
         * var cert = new KJUR.asn1.x509.CRL({'tbsobj': tbs, 'prvkeyobj': prvKey});
         * cert.sign();
         */
        sign(): void;

        /**
         * get PEM formatted CRL string after signed.
         * @return PEM formatted string of CRL
         * @description
         * This method returns a string of PEM formatted CRL.
         * @example
         * crl = new KJUR.asn1.x509.CRL({...});
         * crl.getPEM() →
         * "-----BEGIN X509 CRL-----\r\n..."
         */
        getPEM(): string;
    }
}
