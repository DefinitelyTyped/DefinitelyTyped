declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * class for CMS SigningCertificate attribute
     * @param params associative array of parameters
     * @description
     * ```
     * Attribute ::= SEQUENCE {
     *    type               OBJECT IDENTIFIER,
     *    values             AttributeSetValue }
     * AttributeSetValue ::= SET OF ANY
     * SigningCertificate ::= SEQUENCE {
     *    certs SEQUENCE OF ESSCertID,
     *    policies SEQUENCE OF PolicyInformation OPTIONAL }
     * ESSCertID ::= SEQUENCE {
     *    certHash Hash,
     *    issuerSerial IssuerSerial OPTIONAL }
     * IssuerSerial ::= SEQUENCE {
     *    issuer GeneralNames,
     *    serialNumber CertificateSerialNumber }
     * ```
     * @example
     * o = new KJUR.asn1.cms.SigningCertificate({array: [certPEM]});
     */
    class SigningCertificate extends Attribute {
        constructor(params?: ArrayParam<string>);
        setCerts(listPEM: string[]): void;
    }
}
