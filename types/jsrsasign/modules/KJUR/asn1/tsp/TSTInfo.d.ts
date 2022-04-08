declare namespace jsrsasign.KJUR.asn1.tsp {
    /**
     * class for TSP TSTInfo ASN.1 object
     * @param params associative array of parameters
     * @description
     * ```
     * TSTInfo ::= SEQUENCE  {
     *    version         INTEGER  { v1(1) },
     *    policy          TSAPolicyId,
     *    messageImprint  MessageImprint,
     *    serialNumber    INTEGER, -- up to 160bit
     *    genTime         GeneralizedTime,
     *    accuracy        Accuracy                 OPTIONAL,
     *    ordering        BOOLEAN                  DEFAULT FALSE,
     *    nonce           INTEGER                  OPTIONAL,
     *    tsa             [0] GeneralName          OPTIONAL,
     *    extensions      [1] IMPLICIT Extensions  OPTIONAL   }
     * ```
     * @example
     * o = new KJUR.asn1.tsp.TSTInfo({
     *     policy:    '1.2.3.4.5',
     *     messageImprint: {hashAlg: 'sha256', hashMsgHex: '1abc...'},
     *     genTime:   {withMillis: true},     // OPTION
     *     accuracy:  {micros: 500},          // OPTION
     *     ordering:  true,                   // OPTION
     *     nonce:     {hex: '52fab1...'},     // OPTION
     *     tsa:       {str: '/C=US/O=TSA1'}   // OPTION
     * });
     */
    class TSTInfo extends ASN1Object {
        constructor(params: {
            accuracy?: { seconds: number; millis: number; micros: number };
            genTime?: StringParam | HexParam | DateParam | string;
            messageImprint: { hashAlg: string; hashMsgHex: string };
            nonce?: IntegerParam | BigIntegerParam | HexParam | number;
            ordering?: boolean;
            policy: string;
            serialNumber?: IntegerParam | BigIntegerParam | HexParam | number;
            tsa?: StringParam;
        });

        getEncodedHex(): string;
    }
}
