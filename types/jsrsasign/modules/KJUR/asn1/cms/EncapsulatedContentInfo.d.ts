declare namespace jsrsasign.KJUR.asn1.cms {
    /**
     * class for EncapsulatedContentInfo ASN.1 structure for CMS
     * @param params associative array of parameters
     * @description
     * ```
     * EncapsulatedContentInfo ::= SEQUENCE {
     *    eContentType ContentType,
     *    eContent [0] EXPLICIT OCTET STRING OPTIONAL }
     * ContentType ::= OBJECT IDENTIFIER
     * ```
     * @example
     * o = new KJUR.asn1.cms.EncapsulatedContentInfo();
     * o.setContentType('1.2.3.4.5');     // specify eContentType by OID
     * o.setContentType('data');          // specify eContentType by name
     * o.setContentValueHex('a1a2a4...'); // specify eContent data by hex string
     * o.setContentValueStr('apple');     // specify eContent data by UTF-8 string
     * // for detached contents (i.e. data not concluded in eContent)
     * o.isDetached = true;               // false as default
     */
    class EncapsulatedContentInfo extends ASN1Object {
        constructor(params?: 'string');
        setContentType(nameOrOid: string): void;
        setContentValue(params: HexParam | StringParam): void;
        setContentValueHex(valueHex: string): void;
        setContentValueStr(valueStr: string): void;
        getEncodedHex(): string;
    }
}
