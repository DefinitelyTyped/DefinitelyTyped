declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * CRLDistributionPoints ASN.1 structure class
     * @param params associative array of parameters (ex. {'uri': 'http://a.com/', 'critical': true})
     * @description
     * ```
     * id-ce-cRLDistributionPoints OBJECT IDENTIFIER ::=  { id-ce 31 }
     *
     * CRLDistributionPoints ::= SEQUENCE SIZE (1..MAX) OF DistributionPoint
     *
     * DistributionPoint ::= SEQUENCE {
     *      distributionPoint       [0]     DistributionPointName OPTIONAL,
     *      reasons                 [1]     ReasonFlags OPTIONAL,
     *      cRLIssuer               [2]     GeneralNames OPTIONAL }
     *
     * DistributionPointName ::= CHOICE {
     *      fullName                [0]     GeneralNames,
     *      nameRelativeToCRLIssuer [1]     RelativeDistinguishedName }
     *
     * ReasonFlags ::= BIT STRING {
     *      unused                  (0),
     *      keyCompromise           (1),
     *      cACompromise            (2),
     *      affiliationChanged      (3),
     *      superseded              (4),
     *      cessationOfOperation    (5),
     *      certificateHold         (6),
     *      privilegeWithdrawn      (7),
     *      aACompromise            (8) }
     * ```
     */
    class CRLDistributionPoints extends Extension {
        constructor(params?: { uri?: string; array?: ASN1Object[] });

        getExtnValueHex(): string;

        setByDPArray(dpArray: ASN1Object[]): void;

        setByOneURI(uri: string): void;
    }
}
