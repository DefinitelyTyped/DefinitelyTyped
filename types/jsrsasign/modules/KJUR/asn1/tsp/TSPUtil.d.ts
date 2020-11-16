declare namespace jsrsasign.KJUR.asn1.tsp {
    namespace TSPUtil {
        /**
         * generate TimeStampToken ASN.1 object specified by JSON parameters
         * @param param JSON parameter to generate TimeStampToken
         * @return object just generated
         * @description
         * @example
         */
        function newTimeStampToken(param?: {
            certs: string[];
            hashAlg: string;
            sigAlg: string;
            signerCert: string;
            signerPrvKey: string;
            tstInfo: TSTInfo;
        }): cms.SignedData;
    }

    /**
     * parse hexadecimal string of TimeStampReq
     * @param hexadecimal string of TimeStampReq
     * @return JSON object of parsed parameters
     * @description
     * This method parses a hexadecimal string of TimeStampReq
     * and returns parsed their fields:
     * @example
     * var json = KJUR.asn1.tsp.TSPUtil.parseTimeStampReq("302602...");
     * // resulted DUMP of above 'json':
     * {mi: {hashAlg: 'sha256',          // MessageImprint hashAlg
     *       hashValue: 'a1a2a3a4...'},  // MessageImprint hashValue
     *  policy: '1.2.3.4.5',             // tsaPolicy (OPTION)
     *  nonce: '9abcf318...',            // nonce (OPTION)
     *  certreq: true}                   // certReq (OPTION)
     */
    function parseTimeStampReq(
        reqHex: string,
    ): {
        mi: MessageImprint;
        policy?: string;
        nonce?: string;
        certreq?: boolean;
    };

    /**
     * parse hexadecimal string of MessageImprint
     * @param hexadecimal string of MessageImprint
     * @return JSON object of parsed parameters
     * @description
     * This method parses a hexadecimal string of MessageImprint
     * and returns parsed their fields:
     * @example
     * var json = KJUR.asn1.tsp.TSPUtil.parseMessageImprint("302602...");
     * // resulted DUMP of above 'json':
     * {hashAlg: 'sha256',          // MessageImprint hashAlg
     *  hashValue: 'a1a2a3a4...'}   // MessageImprint hashValue
     */
    function parseMessageImprint(miHex: string): MessageImprint;
}
