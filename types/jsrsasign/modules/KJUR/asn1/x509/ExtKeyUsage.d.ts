declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * KeyUsage ASN.1 structure class
     * @param params associative array of parameters
     * @example
     * e1 = new KJUR.asn1.x509.ExtKeyUsage({
     *   critical: true,
     *   array: [
     *     {oid: '2.5.29.37.0'},  // anyExtendedKeyUsage
     *     {name: 'clientAuth'}
     *   ]
     * });
     * // id-ce-extKeyUsage OBJECT IDENTIFIER ::= { id-ce 37 }
     * // ExtKeyUsageSyntax ::= SEQUENCE SIZE (1..MAX) OF KeyPurposeId
     * // KeyPurposeId ::= OBJECT IDENTIFIER
     */
    class ExtKeyUsage extends Extension {
        constructor(params?: { array: Array<ObjectIdentifierParam | HexParam | NameParam> });
        setPurposeArray(purposeArray: Array<ObjectIdentifierParam | HexParam | NameParam>): void;
        getExtnValueHex(): string;
    }
}
