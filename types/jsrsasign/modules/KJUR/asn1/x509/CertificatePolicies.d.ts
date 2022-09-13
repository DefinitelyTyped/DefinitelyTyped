declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * CertificatePolicies ASN.1 structure class
     * @param params associative array of parameters
     * @since jsrsasign 8.0.23 asn1x509 1.1.12
     * @see KJUR.asn1.x509.CertificatePolicies
     * @see KJUR.asn1.x509.PolicyInformation
     * @see KJUR.asn1.x509.PolicyQualifierInfo
     * @see KJUR.asn1.x509.UserNotice
     * @see KJUR.asn1.x509.NoticeReference
     * @see KJUR.asn1.x509.DisplayText
     * @description
     * This class represents
     * <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.4">
     * CertificatePolicies extension defined in RFC 5280 4.2.1.4</a>.
     * <pre>
     * id-ce-certificatePolicies OBJECT IDENTIFIER ::=  { id-ce 32 }
     * CertificatePolicies ::= SEQUENCE SIZE (1..MAX) OF PolicyInformation
     * </pre>
     * Its constructor can have following parameters:
     * <ul>
     * <li>array - array of {@link KJUR.asn1.x509.PolicyInformation} parameter</li>
     * <li>critical - boolean: critical flag</li>
     * </ul>
     * NOTE: Returned JSON value format have been changed without
     * backward compatibility since jsrsasign 9.0.0 asn1x509 2.0.0.
     * @example
     * e1 = new KJUR.asn1.x509.CertificatePolicies({
     *   array: [
     *     { policyoid: "1.2.3.4.5",
     *       array: [
     *         { cps: "https://example.com/repository" },
     *         { unotice: {
     *           noticeref: { // CA SHOULD NOT use this by RFC
     *             org: {type: "ia5", str: "Sample Org"},
     *             noticenum: [{int: 5}, {hex: "01af"}]
     *           },
     *           exptext: {type: "ia5", str: "Sample Policy"}
     *         }}
     *       ]
     *     }
     *   ],
     *   critical: true
     * });
     */
    class CertificatePolicies extends Extension {
        constructor(params?: { array: any; critical: boolean });
    }
}
