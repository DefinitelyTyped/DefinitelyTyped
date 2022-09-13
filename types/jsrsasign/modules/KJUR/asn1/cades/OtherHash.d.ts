declare namespace jsrsasign.KJUR.asn1.cades {
    /**
     * class for OtherHash ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * OtherHash ::= CHOICE {
     *    sha1Hash   OtherHashValue,  -- This contains a SHA-1 hash
     *    otherHash  OtherHashAlgAndValue}
     * OtherHashValue ::= OCTET STRING
     * ```
     * @example
     * o = new KJUR.asn1.cades.OtherHash("1234");
     * o = new KJUR.asn1.cades.OtherHash(certPEMStr); // default alg=sha256
     * o = new KJUR.asn1.cades.OtherHash({alg: 'sha256', hash: '1234'});
     * o = new KJUR.asn1.cades.OtherHash({alg: 'sha256', cert: certPEM});
     * o = new KJUR.asn1.cades.OtherHash({cert: certPEM});
     */
    class OtherHash extends ASN1Object {
        constructor(params?: string | { alg: string; hash: string } | { alg: string; cert: string } | { cert: string });
        /**
         * set value by PEM string of certificate
         * @param certPEM PEM string of certificate
         * @description
         * This method will set value by a PEM string of a certificate.
         * An algorithm used to hash certificate data will
         * be defined by 'alg' property and 'sha256' is default.
         */
        setByCertPEM(certPEM: string): void;
        getEncodedHex(): string;
    }
}
