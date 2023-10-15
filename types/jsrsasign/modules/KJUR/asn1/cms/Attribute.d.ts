declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * Attribute class for base of CMS attribute
     * @param params associative array of parameters
     * @description
     * ```
     * Attributes ::= SET OF Attribute
     * Attribute ::= SEQUENCE {
     *    type               OBJECT IDENTIFIER,
     *    values             AttributeSetValue }
     * AttributeSetValue ::= SET OF ANY
     * ```
     */
    class Attribute extends ASN1Object {
        constructor();
        getEncodedHex(): string;
    }
}
