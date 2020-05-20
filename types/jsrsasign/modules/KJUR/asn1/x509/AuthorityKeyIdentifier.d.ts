declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * AuthorityKeyIdentifier ASN.1 structure class
     * @param params associative array of parameters (ex. {'uri': 'http://a.com/', 'critical': true})
     * @description
     * ```
     * d-ce-authorityKeyIdentifier OBJECT IDENTIFIER ::=  { id-ce 35 }
     * AuthorityKeyIdentifier ::= SEQUENCE {
     *    keyIdentifier             [0] KeyIdentifier           OPTIONAL,
     *    authorityCertIssuer       [1] GeneralNames            OPTIONAL,
     *    authorityCertSerialNumber [2] CertificateSerialNumber OPTIONAL  }
     * KeyIdentifier ::= OCTET STRING
     * ```
     * @example
     * e1 = new KJUR.asn1.x509.AuthorityKeyIdentifier({
     *   critical: true,
     *   kid:    {hex: '89ab'},
     *   issuer: {str: '/C=US/CN=a'},
     *   sn:     {hex: '1234'}
     * });
     */
    class AuthorityKeyIdentifier extends Extension {
        constructor(params?: { critical?: boolean; kid: HexParam; issuer: StringParam; sn: HexParam });

        getExtnValueHex(): string;

        /**
         * set keyIdentifier value by DERInteger parameter
         * @param param array of `KJUR.asn1.DERInteger` parameter
         * @description
         * NOTE: Automatic keyIdentifier value calculation by an issuer
         * public key will be supported in future version.
         */
        setKIDByParam(param: Array<IntegerParam | BigIntegerParam | HexParam | number>): void;

        /**
         * set authorityCertIssuer value by X500Name parameter
         * @param param array of `KJUR.asn1.x509.X500Name` parameter
         * @description
         * NOTE: Automatic authorityCertIssuer name setting by an issuer
         * certificate will be supported in future version.
         */
        setCertIssuerByParam(param: Array<StringParam | X500NameParam>): void;

        /**
         * set authorityCertSerialNumber value by DERInteger parameter
         * @param param array of `KJUR.asn1.DERInteger` parameter
         * @description
         * NOTE: Automatic authorityCertSerialNumber setting by an issuer
         * certificate will be supported in future version.
         */
        setCertSNByParam(param?: Array<IntegerParam | BigIntegerParam | HexParam | number>): void;
    }
}
