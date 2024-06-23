declare namespace jsrsasign.KJUR.asn1.cades {
    /**
     * class for OtherCertID ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * OtherCertID ::= SEQUENCE {
     *    otherCertHash    OtherHash,
     *    issuerSerial     IssuerSerial OPTIONAL }
     * ```
     * @example
     * o = new KJUR.asn1.cades.OtherCertID(certPEM);
     * o = new KJUR.asn1.cades.OtherCertID({cert:certPEM, hasis: false});
     */
    class OtherCertID extends ASN1Object {
        constructor(params?: string | { hasis: boolean; cert: string });
        /**
         * set value by PEM string of certificate
         * @param certPEM PEM string of certificate
         * @description
         * This method will set value by a PEM string of a certificate.
         * This will add IssuerAndSerialNumber by default
         * which depends on hasIssuerSerial flag.
         */
        setByCertPEM(certPEM: string): void;

        getEncodedHex(): string;
    }
}
