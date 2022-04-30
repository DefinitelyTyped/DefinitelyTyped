declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * SubjectDirectoryAttributes ASN.1 structure class<br/>
     * name KJUR.asn1.x509.SubjectDirectoryAttributes
     * class SubjectDirectoryAttributes ASN.1 structure class
     * @param params associative array of parameters
     * extends KJUR.asn1.x509.Extension
     * @since jsrsasign 10.1.9 asn1x509 2.1.7
     * @description
     * This class provides X.509v3 SubjectDirectoryAttributes extension
     * defined in <a href="https://tools.ietf.org/html/rfc3739#section-3.3.2">
     * RFC 3739 Qualified Certificate Profile section 3.3.2</a>.
     * <pre>
     * SubjectDirectoryAttributes ::= Attributes
     * Attributes ::= SEQUENCE SIZE (1..MAX) OF Attribute
     * Attribute ::= SEQUENCE {
     *   type AttributeType
     *   values SET OF AttributeValue }
     * AttributeType ::= OBJECT IDENTIFIER
     * AttributeValue ::= ANY DEFINED BY AttributeType
     * </pre>
     * @example
     * e1 = new KJUR.asn1.x509.SubjectDirectoryAttributes({
     *   extname: "subjectDirectoryAttributes",
     *   array: [
     *     { attr: "dateOfBirth", str: "19701231230000Z" },
     *     { attr: "placeOfBirth", str: "Tokyo" },
     *     { attr: "gender", str: "F" },
     *     { attr: "countryOfCitizenship", str: "JP" },
     *     { attr: "countryOfResidence", str: "JP" }
     *   ]
     * });
     */
    class SubjectDirectoryAttributes {
        constructor(params?: { extname?: string; array?: any });
        getExtnValueHex(): string;
    }
}
