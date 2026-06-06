declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP MessageImprint ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * MessageImprint ::= SEQUENCE  {
     *      hashAlgorithm                AlgorithmIdentifier,
     *      hashedMessage                OCTET STRING  }
     * ```
     * @example
     * o = new KJUR.asn1.tsp.MessageImprint({hashAlg: 'sha1',
     *                                       hashValue: '1f3dea...'});
     */
    class MessageImprint extends ASN1Object {
        constructor(params?: { hashAlg: string; hashValue: string });
        getEncodedHex(): string;
    }
}
