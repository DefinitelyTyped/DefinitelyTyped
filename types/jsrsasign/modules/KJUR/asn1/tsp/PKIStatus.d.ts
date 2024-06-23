declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP PKIStatus ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * PKIStatus ::= INTEGER {
     *    granted                (0),
     *    grantedWithMods        (1),
     *    rejection              (2),
     *    waiting                (3),
     *    revocationWarning      (4),
     *    revocationNotification (5) }
     * ```
     */
    class PKIStatus extends ASN1Object {
        static readonly valueList: {
            granted: number;
            grantedWithMods: number;
            rejection: number;
            waiting: number;
            revocationWarning: number;
            revocationNotification: number;
        };
        constructor(params?: NameParam);
    }
}
