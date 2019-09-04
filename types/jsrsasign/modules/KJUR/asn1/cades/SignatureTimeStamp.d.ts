declare namespace jsrsasign.KJUR.asn1.cades {
    /**
     * class for RFC 5126 CAdES SignatureTimeStamp attribute
     * @param params associative array of parameters
     * @description
     * ```
     * id-aa-signatureTimeStampToken OBJECT IDENTIFIER ::=
     *    1.2.840.113549.1.9.16.2.14
     * SignatureTimeStampToken ::= TimeStampToken
     * ```
     */
    class SignatureTimeStamp extends cms.Attribute {
        constructor(params?: { res: string | ASN1Object; tst: string | ASN1Object });
    }
}
