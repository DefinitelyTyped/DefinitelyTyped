declare namespace jsrsasign.KJUR.asn1.csr {
    /**
     * ASN.1 CertificationRequestInfo structure class
     * @param params associative array of parameters (ex. {})
     * @description
     * ```
     * // -- DEFINITION OF ASN.1 SYNTAX --
     * // CertificationRequestInfo ::= SEQUENCE {
     * //   version       INTEGER { v1(0) } (v1,...),
     * //   subject       Name,
     * //   subjectPKInfo SubjectPublicKeyInfo{{ PKInfoAlgorithms }},
     * //   attributes    [0] Attributes{{ CRIAttributes }} }
     * ```
     *
     * @example
     * csri = new KJUR.asn1.csr.CertificationRequestInfo();
     * csri.setSubjectByParam({'str': '/C=US/O=Test/CN=example.com'});
     * csri.setSubjectPublicKeyByGetKey(pubKeyObj);
     */
    class CertificationRequestInfo extends ASN1Object {
        constructor();

        _initialize(): void;

        /**
         * set subject name field by parameter
         * @param x500NameParam X500Name parameter
         * @description
         * @example
         * csri.setSubjectByParam({'str': '/C=US/CN=b'});
         * @see KJUR.asn1.x509.X500Name
         */
        setSubjectByParam(x500NameParam: StringParam): void;

        /**
         * set subject public key info by RSA/ECDSA/DSA key parameter
         * @param keyParam public key parameter which passed to `KEYUTIL.getKey` argument
         * @example
         * csri.setSubjectPublicKeyByGetKeyParam(certPEMString); // or
         * csri.setSubjectPublicKeyByGetKeyParam(pkcs8PublicKeyPEMString); // or
         * csir.setSubjectPublicKeyByGetKeyParam(kjurCryptoECDSAKeyObject); // et.al.
         * @see KJUR.asn1.x509.SubjectPublicKeyInfo
         * @see KEYUTIL.getKey
         */
        setSubjectPublicKeyByGetKey(
            keyParam: RSAKey | crypto.ECDSA | crypto.DSA | jws.JWS.JsonWebKey | { n: string; e: string } | string,
        ): void;

        /**
         * append X.509v3 extension to this object by name and parameters
         * @param name name of X.509v3 Extension object
         * @param extParams parameters as argument of Extension constructor.
         * @see KJUR.asn1.x509.Extension
         * @example
         * var o = new KJUR.asn1.csr.CertificationRequestInfo();
         * o.appendExtensionByName('BasicConstraints', {'cA':true, 'critical': true});
         * o.appendExtensionByName('KeyUsage', {'bin':'11'});
         * o.appendExtensionByName('CRLDistributionPoints', {uri: 'http://aaa.com/a.crl'});
         * o.appendExtensionByName('ExtKeyUsage', {array: [{name: 'clientAuth'}]});
         * o.appendExtensionByName('AuthorityKeyIdentifier', {kid: '1234ab..'});
         * o.appendExtensionByName('AuthorityInfoAccess', {array: [{accessMethod:{oid:...},accessLocation:{uri:...}}]});
         */
        appendExtensionByName(
            name: string,
            extParams:
                | { ca: boolean; critical: boolean }
                | BinParam
                | x509.UriParam
                | ArrayParam<{ name: string }>
                | { kid: string }
                | ArrayParam<{ accessMethod: { oid: string }; accessLocation: x509.UriParam }>,
        ): void;

        getEncodedHex(): string;
    }
}
