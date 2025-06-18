declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * class for CMS MessageDigest attribute
     * @param params associative array of parameters
     * @description
     * ```
     * Attribute ::= SEQUENCE {
     *    type               OBJECT IDENTIFIER,
     *    values             AttributeSetValue }
     * AttributeSetValue ::= SET OF ANY
     * MessageDigest ::= OCTET STRING
     * ```
     * @example
     * o = new KJUR.asn1.cms.MessageDigest({hex: 'a1a2a3a4...'});
     */
    class MessageDigest extends Attribute {
        constructor(params?: { hex: string });
    }
}
