declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP TimeStampReq ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * TimeStampReq ::= SEQUENCE  {
     *    version          INTEGER  { v1(1) },
     *    messageImprint   MessageImprint,
     *    reqPolicy        TSAPolicyId               OPTIONAL,
     *    nonce            INTEGER                   OPTIONAL,
     *    certReq          BOOLEAN                   DEFAULT FALSE,
     *    extensions       [0] IMPLICIT Extensions   OPTIONAL  }
     * ```
     */
    class TimeStampReq extends ASN1Object {
        constructor(params?: {
            mi: MessageImprint;
            policy: ObjectIdentifierParam | HexParam | NameParam;
            nonce: IntegerParam | BigIntegerParam | HexParam | number;
            certreq: boolean;
        });

        setMessageImprint(params: MessageImprint): void;

        getEncodedHex(): string;
    }
}
