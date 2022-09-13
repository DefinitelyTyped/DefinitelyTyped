declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * base Extension ASN.1 structure class
     * @param params associative array of parameters (ex. {'critical': true})
     * @example
     * ```
     * // Extension  ::=  SEQUENCE  {
     * //     extnID      OBJECT IDENTIFIER,
     * //     critical    BOOLEAN DEFAULT FALSE,
     * //     extnValue   OCTET STRING  }
     * ```
     */
    class Extension extends ASN1Object {
        constructor(params?: { critical: boolean });

        getEncodedHex(): string;

        /**
         * append X.509v3 extension to any specified array
         * @param name X.509v3 extension name
         * @param extParams associative array of extension parameters
         * @param a array to add specified extension
         * @see KJUR.asn1.x509.Extension
         * @description
         * This static function add a X.509v3 extension specified by name and extParams to
         * array 'a' so that 'a' will be an array of X.509v3 extension objects.
         * @example
         * var a = new Array();
         * KJUR.asn1.x509.Extension.appendByNameToArray("BasicConstraints", {'cA':true, 'critical': true}, a);
         * KJUR.asn1.x509.Extension.appendByNameToArray("KeyUsage", {'bin':'11'}, a);
         */
        static appendByNameToArray(
            name:
                | 'basicconstraints'
                | 'keyusage'
                | 'crldistributionpoints'
                | 'extkeyusage'
                | 'authoritykeyidentifier'
                | 'authorityinfoaccess'
                | 'subjectaltname'
                | 'issueraltname',
            extParams: Extension,
            a: any[],
        ): void;
    }
}
