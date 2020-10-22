declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * class for CMS ContentType attribute
     * @param params associative array of parameters
     * @description
     * ```
     * Attribute ::= SEQUENCE {
     *    type               OBJECT IDENTIFIER,
     *    values             AttributeSetValue }
     * AttributeSetValue ::= SET OF ANY
     * ContentType ::= OBJECT IDENTIFIER
     * ```
     * @example
     * o = new KJUR.asn1.cms.ContentType({name: 'data'});
     * o = new KJUR.asn1.cms.ContentType({oid: '1.2.840.113549.1.9.16.1.4'});
     */
    class ContentType extends Attribute {
        constructor(params?: { name: string } | { oid: string });
    }
}
