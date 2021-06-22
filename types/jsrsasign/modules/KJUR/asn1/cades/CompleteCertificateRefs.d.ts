declare namespace jsrsasign.KJUR.asn1.cades {
    /**
     * class for RFC 5126 CAdES CompleteCertificateRefs attribute
     * @param params associative array of parameters
     * @description
     * ```
     * id-aa-ets-certificateRefs OBJECT IDENTIFIER =
     *    1.2.840.113549.1.9.16.2.21
     * CompleteCertificateRefs ::=  SEQUENCE OF OtherCertID
     * ```
     * @example
     * o = new KJUR.asn1.cades.CompleteCertificateRefs([certPEM1,certPEM2]);
     */
    class CompleteCertificateRefs extends cms.Attribute {
        constructor(params?: { length: number });

        /**
         * set value by array
         * @param a array of `KJUR.asn1.cades.OtherCertID` argument
         */
        setByArray(a: OtherCertID[]): void;
    }
}
