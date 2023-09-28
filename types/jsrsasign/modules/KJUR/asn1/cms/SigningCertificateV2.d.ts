declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * class for CMS SigningCertificateV2 attribute
     * @param params associative array of parameters
     * @description
     * ```
     * oid-signingCertificateV2 = 1.2.840.113549.1.9.16.2.47
     * Attribute ::= SEQUENCE {
     *    type               OBJECT IDENTIFIER,
     *    values             AttributeSetValue }
     * AttributeSetValue ::= SET OF ANY
     * SigningCertificateV2 ::=  SEQUENCE {
     *    certs        SEQUENCE OF ESSCertIDv2,
     *    policies     SEQUENCE OF PolicyInformation OPTIONAL }
     * ESSCertIDv2 ::=  SEQUENCE {
     *    hashAlgorithm           AlgorithmIdentifier
     *                            DEFAULT {algorithm id-sha256},
     *    certHash                Hash,
     *    issuerSerial            IssuerSerial OPTIONAL }
     * Hash ::= OCTET STRING
     * IssuerSerial ::= SEQUENCE {
     *    issuer                  GeneralNames,
     *    serialNumber            CertificateSerialNumber }
     * ```
     * @example
     * // hash algorithm is sha256 by default:
     * o = new KJUR.asn1.cms.SigningCertificateV2({array: [certPEM]});
     * o = new KJUR.asn1.cms.SigningCertificateV2({array: [certPEM],
     *                                             hashAlg: 'sha512'});
     */
    class SigningCertificateV2 extends Attribute {
        constructor(params?: ArrayParam<string> | { array: string[]; hashalg: string });
        setCerts(listPEM: string[], hashAlg: string): void;
    }
}
