declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP PKIFailureInfo ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * PKIFailureInfo ::= BIT STRING {
     *    badAlg                 (0),
     *    badRequest             (2),
     *    badDataFormat          (5),
     *    timeNotAvailable       (14),
     *    unacceptedPolicy       (15),
     *    unacceptedExtension    (16),
     *    addInfoNotAvailable    (17),
     *    systemFailure          (25) }
     * ```
     */
    class PKIFailureInfo extends ASN1Object {
        static readonly valueList: {
            badAlg: number;
            badRequest: number;
            badDataFormat: number;
            timeNotAvailable: number;
            unacceptedPolicy: number;
            unacceptedExtension: number;
            addInfoNotAvailable: number;
            systemFailure: number;
        };
        constructor(params?: NameParam | IntegerParam);
    }
}
