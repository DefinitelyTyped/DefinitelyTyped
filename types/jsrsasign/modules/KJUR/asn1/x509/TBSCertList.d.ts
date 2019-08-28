declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * ASN.1 TBSCertList structure class for CRL
     * @param params associative array of parameters (ex. {})
     * @example
     *  var o = new KJUR.asn1.x509.TBSCertList();
     *  o.setSignatureAlgByParam({'name': 'SHA1withRSA'});
     *  o.setIssuerByParam({'str': '/C=US/O=a'});
     *  o.setNotThisUpdateByParam({'str': '130504235959Z'});
     *  o.setNotNextUpdateByParam({'str': '140504235959Z'});
     *  o.addRevokedCert({'int': 4}, {'str':'130514235959Z'}));
     *  o.addRevokedCert({'hex': '0f34dd'}, {'str':'130514235959Z'}));
     *
     * // TBSCertList  ::=  SEQUENCE  {
     * //        version                 Version OPTIONAL,
     * //                                     -- if present, MUST be v2
     * //        signature               AlgorithmIdentifier,
     * //        issuer                  Name,
     * //        thisUpdate              Time,
     * //        nextUpdate              Time OPTIONAL,
     * //        revokedCertificates     SEQUENCE OF SEQUENCE  {
     * //             userCertificate         CertificateSerialNumber,
     * //             revocationDate          Time,
     * //             crlEntryExtensions      Extensions OPTIONAL
     * //                                      -- if present, version MUST be v2
     * //                                  }  OPTIONAL,
     * //        crlExtensions           [0]  EXPLICIT Extensions OPTIONAL
     */
    class TBSCertList extends ASN1Object {
        constructor();

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
         * set thisUpdate field by parameter
         * @param timeParam Time parameter
         * @example
         * tbsc.setThisUpdateByParam({'str': '130508235959Z'});
         * @see KJUR.asn1.x509.Time
         */
        setThisUpdateByParam(timeParam: StringParam): void;

        /**
         * set nextUpdate field by parameter
         * @param timeParam Time parameter
         * @example
         * tbsc.setNextUpdateByParam({'str': '130508235959Z'});
         * @see KJUR.asn1.x509.Time
         */
        setNextUpdateByParam(timeParam: StringParam): void;

        /**
         * add revoked certificate by parameter
         * @param snParam DERInteger parameter for certificate serial number
         * @param timeParam Time parameter for revocation date
         * @example
         * tbsc.addRevokedCert({'int': 3}, {'str': '130508235959Z'});
         * @see KJUR.asn1.x509.Time
         */
        addRevokedCert(snParam: IntegerParam, timeParam: StringParam): void;

        getEncodedHex(): string;
    }
}
