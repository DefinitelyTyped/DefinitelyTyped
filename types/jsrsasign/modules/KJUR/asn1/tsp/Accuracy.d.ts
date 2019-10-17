declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP Accuracy ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * Accuracy ::= SEQUENCE {
     *       seconds        INTEGER              OPTIONAL,
     *       millis     [0] INTEGER  (1..999)    OPTIONAL,
     *       micros     [1] INTEGER  (1..999)    OPTIONAL  }
     * ```
     * @example
     * o = new KJUR.asn1.tsp.Accuracy({seconds: 1,
     *                                 millis: 500,
     *                                 micros: 500});
     */
    class Accuracy extends ASN1Object {
        constructor(params?: { seconds: number; millis: number; micros: number });
        getEncodedHex(): string;
    }
}
