declare namespace jsrsasign.KJUR.asn1.cades {
    /**
     * class for OtherHashAlgAndValue ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * OtherHashAlgAndValue ::= SEQUENCE {
     *    hashAlgorithm   AlgorithmIdentifier,
     *    hashValue       OtherHashValue }
     * OtherHashValue ::= OCTET STRING
     * ```
     */
    class OtherHashAlgAndValue extends ASN1Object {
        constructor(params?: { alg: string; hash: string });
    }
}
