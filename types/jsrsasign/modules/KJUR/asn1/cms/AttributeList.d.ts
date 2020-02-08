declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * class for Attributes ASN.1 structure for CMS
     * @param params associative array of parameters
     * @description
     * ```
     * Attributes ::= SET OF Attribute
     * Attribute ::= SEQUENCE {
     *    type               OBJECT IDENTIFIER,
     *    values             AttributeSetValue }
     * ```
     * @example
     * // specify by X500Name and DERInteger
     * o = new KJUR.asn1.cms.AttributeList({sorted: false}); // ASN.1 BER unsorted SET OF
     * o = new KJUR.asn1.cms.AttributeList();  // ASN.1 DER sorted by default
     * o.clear();                              // clear list of Attributes
     * n = o.length();                         // get number of Attribute
     * o.add(new KJUR.asn1.cms.SigningTime()); // add SigningTime attribute
     * hex = o.getEncodedHex();                // get hex encoded ASN.1 data
     */
    class AttributeList extends ASN1Object {
        constructor(params?: { sorted: boolean });
        add(item: Attribute): void;
        length(): number;
        clear(): void;
        getEncodedHex(): string;
    }
}
