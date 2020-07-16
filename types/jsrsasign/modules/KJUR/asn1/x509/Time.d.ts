declare namespace jsrsasign.KJUR.asn1 {
    /**
     * Time ASN.1 structure class
     * @param params associative array of parameters (ex. {'str': '130508235959Z'})
     * @example
     * var t1 = new KJUR.asn1.x509.Time{'str': '130508235959Z'} // UTCTime by default
     * var t2 = new KJUR.asn1.x509.Time{'type': 'gen',  'str': '20130508235959Z'} // GeneralizedTime
     */
    class Time extends ASN1Object {
        constructor(params?: StringParam & { type?: 'gen' });
        setTimeParams(timeParams: StringParam | HexParam | DateParam | string): void;

        getEncodedHex(): string;
    }
}
