declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * ASN.1 TBSCertificate structure class
     * @param params associative array of parameters (ex. {})
     * @example
     *  var o = new KJUR.asn1.x509.TBSCertificate();
     *  o.setSerialNumberByParam({'int': 4});
     *  o.setSignatureAlgByParam({'name': 'SHA1withRSA'});
     *  o.setIssuerByParam({'str': '/C=US/O=a'});
     *  o.setNotBeforeByParam({'str': '130504235959Z'});
     *  o.setNotAfterByParam({'str': '140504235959Z'});
     *  o.setSubjectByParam({'str': '/C=US/CN=b'});
     *  o.setSubjectPublicKey(rsaPubKey);
     *  o.appendExtension(new KJUR.asn1.x509.BasicConstraints({'cA':true}));
     *  o.appendExtension(new KJUR.asn1.x509.KeyUsage({'bin':'11'}));
     */
    class TBSCertificate extends ASN1Object {
        constructor();
        private _initialize(): void;

        /**
         * set serial number field by parameter
         * @param intParam DERInteger param
         * @example
         * tbsc.setSerialNumberByParam({'int': 3});
         */
        setSerialNumberByParam(intParam: IntegerParam): void;

        /**
         * set signature algorithm field by parameter
         * @param algIdParam AlgorithmIdentifier parameter
         * @example
         * tbsc.setSignatureAlgByParam({'name': 'SHA1withRSA'});
         */
        setSignatureAlgByParam(algIdParam: NameParam): void;

        /**
         * set issuer name field by parameter
         * @param x500NameParam X500Name parameter
         * @example
         * tbsc.setIssuerParam({'str': '/C=US/CN=b'});
         * @see KJUR.asn1.x509.X500Name
         */
        setIssuerByParam(x500NameParam: StringParam): void;

        /**
         * set notBefore field by parameter
         * @param timeParam Time parameter
         * @example
         * tbsc.setNotBeforeByParam({'str': '130508235959Z'});
         * @see KJUR.asn1.x509.Time
         */
        setNotBeforeByParam(timeParam: StringParam): void;

        /**
         * set notAfter field by parameter
         * @param timeParam Time parameter
         * @example
         * tbsc.setNotAfterByParam({'str': '130508235959Z'});
         * @see KJUR.asn1.x509.Time
         */
        setNotAfterByParam(timeParam: StringParam): void;

        /**
         * set subject name field by parameter
         * @param x500NameParam X500Name parameter
         * @example
         * tbsc.setSubjectParam({'str': '/C=US/CN=b'});
         * @see KJUR.asn1.x509.X500Name
         */
        setSubjectByParam(x500NameParam: StringParam): void;

        /**
         * set subject public key info field by key object
         * @param param `KJUR.asn1.x509.SubjectPublicKeyInfo` class constructor parameter
         * @example
         * tbsc.setSubjectPublicKey(keyobj);
         * @see KJUR.asn1.x509.SubjectPublicKeyInfo
         */
        setSubjectPublicKey(param?: RSAKey | crypto.DSA | crypto.ECDSA): void;

        /**
         * set subject public key info by RSA/ECDSA/DSA key parameter
         * @param keyParam public key parameter which passed to `KEYUTIL.getKey` argument
         * @example
         * tbsc.setSubjectPublicKeyByGetKeyParam(certPEMString); // or
         * tbsc.setSubjectPublicKeyByGetKeyParam(pkcs8PublicKeyPEMString); // or
         * tbsc.setSubjectPublicKeyByGetKeyParam(kjurCryptoECDSAKeyObject); // et.al.
         * @see KJUR.asn1.x509.SubjectPublicKeyInfo
         * @see KEYUTIL.getKey
         */
        setSubjectPublicKeyByGetKey(
            keyParam: RSAKey | crypto.ECDSA | crypto.DSA | jws.JWS.JsonWebKey | { n: string; e: string } | string,
        ): void;

        /**
         * append X.509v3 extension to this object
         * @param extObj X.509v3 Extension object
         * @example
         * tbsc.appendExtension(new KJUR.asn1.x509.BasicConstraints({'cA':true, 'critical': true}));
         * tbsc.appendExtension(new KJUR.asn1.x509.KeyUsage({'bin':'11'}));
         * @see KJUR.asn1.x509.Extension
         */
        appendExtension(extObj: Extension): void;

        /**
         * append X.509v3 extension to this object by name and parameters
         * @param name name of X.509v3 Extension object
         * @param extParams parameters as argument of Extension constructor.
         * @example
         * var o = new KJUR.asn1.x509.TBSCertificate();
         * o.appendExtensionByName('BasicConstraints', {'cA':true, 'critical': true});
         * o.appendExtensionByName('KeyUsage', {'bin':'11'});
         * o.appendExtensionByName('CRLDistributionPoints', {uri: 'http://aaa.com/a.crl'});
         * o.appendExtensionByName('ExtKeyUsage', {array: [{name: 'clientAuth'}]});
         * o.appendExtensionByName('AuthorityKeyIdentifier', {kid: '1234ab..'});
         * o.appendExtensionByName('AuthorityInfoAccess', {array: [{accessMethod:{oid:...},accessLocation:{uri:...}}]});
         * @see KJUR.asn1.x509.Extension
         */
        appendExtensionByName(name: string, extParams: Extension): void;

        getEncodedHex(): string;
    }
}
