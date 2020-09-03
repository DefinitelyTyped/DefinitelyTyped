declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * class for IssuerAndSerialNumber ASN.1 structure for CMS
     * @param params associative array of parameters
     * @description
     * ```
     * IssuerAndSerialNumber ::= SEQUENCE {
     *    issuer Name,
     *    serialNumber CertificateSerialNumber }
     * CertificateSerialNumber ::= INTEGER
     * ```
     * @example
     * // specify by X500Name and DERInteger
     * o = new KJUR.asn1.cms.IssuerAndSerialNumber(
     *      {issuer: {str: '/C=US/O=T1'}, serial {int: 3}});
     * // specify by PEM certificate
     * o = new KJUR.asn1.cms.IssuerAndSerialNumber({cert: certPEM});
     * o = new KJUR.asn1.cms.IssuerAndSerialNumber(certPEM); // since 1.0.3
     */
    class IssuerAndSerialNumber extends ASN1Object {
        constructor(
            params?:
                | string
                | { cert: string }
                | {
                      issuer: StringParam;
                      serial: DERInteger | IntegerParam | BigIntegerParam | HexParam | number;
                  },
        );
        setByCertPEM(certPEM: string): void;
        getEncodedHex(): string;
    }
}
