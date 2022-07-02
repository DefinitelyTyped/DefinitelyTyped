declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * class for ContentInfo ASN.1 structure for CMS
     * @param params associative array of parameters
     * @description
     * ```
     * ContentInfo ::= SEQUENCE {
     *    contentType ContentType,
     *    content [0] EXPLICIT ANY DEFINED BY contentType }
     * ContentType ::= OBJECT IDENTIFIER
     * ```
     * @example
     * a = [new KJUR.asn1.DERInteger({int: 1}),
     *      new KJUR.asn1.DERInteger({int: 2})];
     * seq = new KJUR.asn1.DERSequence({array: a});
     * o = new KJUR.asn1.cms.ContentInfo({type: 'data', obj: seq});
     */
    class ContentInfo extends ASN1Object {
        constructor(params?: TypeParam | ASN1ObjectParam);
        setContentType(params: string): void;
        getEncodedHex(): string;
    }
}
