declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * KeyUsage ASN.1 structure class
     * @param params associative array of parameters (ex. {'bin': '11', 'critical': true})
     */
    class KeyUsage extends Extension {
        constructor(params?: { bin: string; critical: boolean });
        getExtnValueHex(): string;
        setPurposeArray(purposeArray: Array<ObjectIdentifierParam | HexParam | NameParam>): void;
    }
}
