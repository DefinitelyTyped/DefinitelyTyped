declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP TimeStampResp ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * TimeStampResp ::= SEQUENCE  {
     *    status                  PKIStatusInfo,
     *    timeStampToken          TimeStampToken     OPTIONAL  }
     * ```
     */
    class TimeStampResp extends ASN1Object {
        constructor(params?: {
            status: {
                failinfo?: NameParam | IntegerParam;
                statstr?: ArrayParam<string>;
                status: NameParam;
            };
            tst: ASN1Object;
        });
    }
}
