declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * BasicConstraints ASN.1 structure class
     * @param params associative array of parameters (ex. {'cA': true, 'critical': true})
     */
    class BasicConstraints extends Extension {
        constructor(params?: { cA: boolean; pathLen: number });
        getExtnValueHex(): string;
    }
}
