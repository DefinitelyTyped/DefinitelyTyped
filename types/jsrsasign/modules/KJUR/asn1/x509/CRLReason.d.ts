declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * CRLReason CRL entry extension ASN.1 structure class.
     * @param params
     * @description
     * This class represents ASN.1 structure for
     * CRLReason CRL entry extension defined in
     * <a href="https://tools.ietf.org/html/rfc5280#section-5.3.1">
     * RFC 5280 5.3.1</a>
     * <pre>
     * id-ce-cRLReasons OBJECT IDENTIFIER ::= { id-ce 21 }
     * -- reasonCode ::= { CRLReason }
     * CRLReason ::= ENUMERATED {
     *      unspecified             (0),
     *      keyCompromise           (1),
     *      cACompromise            (2),
     *      affiliationChanged      (3),
     *      superseded              (4),
     *      cessationOfOperation    (5),
     *      certificateHold         (6),
     *      removeFromCRL           (8),
     *      privilegeWithdrawn      (9),
     *      aACompromise           (10) }
     * </pre>
     * Constructor of this class may have following parameters:
     * - {String}extname - name "cRLReason". It is ignored in this class but required to use with {@link KJUR.asn1.x509.Extensions} class. (OPTION)
     * - {Integer}code - reasonCode value
     * - {Boolean}critical - critical flag. Generally false and not specified in this class.(OPTION)
     * @example
     * new KJUR.asn1.x509.CRLReason({extname:'cRLReason',code:4})
     */
    class cRLReason extends ASN1Object {
        constructor(params?: { extname?: string; code: number; critical?: boolean });
    }
}
