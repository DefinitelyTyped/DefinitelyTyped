declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP PKIFreeText ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * PKIFreeText ::= SEQUENCE {
     *    SIZE (1..MAX) OF UTF8String }
     * ```
     */
    class PKIFreeText extends ASN1Object {
        constructor(params?: ArrayParam<string>);
    }
}
