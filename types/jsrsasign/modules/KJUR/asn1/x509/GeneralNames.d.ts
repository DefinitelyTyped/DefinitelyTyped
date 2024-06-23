declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * GeneralNames ASN.1 structure class
     * @example
     * gns = new KJUR.asn1.x509.GeneralNames([{'uri': 'http://aaa.com/'}, {'uri': 'http://bbb.com/'}]);
     *
     * GeneralNames ::= SEQUENCE SIZE (1..MAX) OF GeneralName
     */
    class GeneralNames {
        constructor(paramsArray: UriParam[]);

        /**
         * set a array of `KJUR.asn1.x509.GeneralName` parameters
         * @param paramsArray Array of `KJUR.asn1.x509.GeneralNames`
         * @example
         * gns = new KJUR.asn1.x509.GeneralNames();
         * gns.setByParamArray([{uri: 'http://aaa.com/'}, {uri: 'http://bbb.com/'}]);
         */
        setByParamArray(paramsArray: GeneralNameParam[]): void;

        getEncodedHex(): string;
    }
}
