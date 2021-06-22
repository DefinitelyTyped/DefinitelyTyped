declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * AttributeTypeAndValue ASN.1 structure class
     * @param params associative array of parameters (ex. {'str': 'C=US'})
     * @see KJUR.asn1.x509.X500Name
     * @see KJUR.asn1.x509.RDN
     * @see KJUR.asn1.x509.AttributeTypeAndValue
     */
    class AttributeTypeAndValue extends ASN1Object {
        constructor(params: StringParam);

        setByString(attrTypeAndValueStr: string): void;

        setByAttrTypeAndValueStr(shortAttrType: string, valueStr: string): void;

        getValueObj(dsType: 'utf8', valueStr: string): DERUTF8String;
        getValueObj(dsType: 'prn', valueStr: string): DERPrintableString;
        getValueObj(dsType: 'tel', valueStr: string): DERTeletexString;
        getValueObj(dsType: 'ia5', valueStr: string): DERIA5String;

        getEncodedHex(): string;
    }
}
