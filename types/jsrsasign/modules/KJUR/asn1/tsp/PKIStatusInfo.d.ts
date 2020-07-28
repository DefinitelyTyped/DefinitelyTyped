declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP PKIStatusInfo ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * PKIStatusInfo ::= SEQUENCE {
     *    status                  PKIStatus,
     *    statusString            PKIFreeText     OPTIONAL,
     *    failInfo                PKIFailureInfo  OPTIONAL  }
     * ```
     */
    class PKIStatusInfo extends ASN1Object {
        constructor(params?: { failinfo?: NameParam | IntegerParam; statstr?: ArrayParam<string>; status: NameParam });
    }
}
