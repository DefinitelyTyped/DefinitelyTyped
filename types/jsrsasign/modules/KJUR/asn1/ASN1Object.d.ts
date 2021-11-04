declare namespace jsrsasign.KJUR.asn1 {
    /** base class for ASN.1 DER encoder object */
    class ASN1Object {
        /** flag whether internal data was changed */
        isModified: string;

        /** hexadecimal string of ASN.1 TLV */
        hTLV: string;

        /** hexadecimal string of ASN.1 TLV tag(T) */
        hT: string;

        /** hexadecimal string of ASN.1 TLV length(L) */
        hL: string;

        /** hexadecimal string of ASN.1 TLV value(V) */
        hV: string;

        /**
         * get hexadecimal ASN.1 TLV length(L) bytes from TLV value(V)
         * @return hexadecimal string of ASN.1 TLV length(L)
         */
        getLengthHexFromValue(): string;

        /**
         * get hexadecimal string of ASN.1 TLV bytes
         * @return hexadecimal string of ASN.1 TLV
         */
        getEncodedHex(): string;

        /**
         * get hexadecimal string of ASN.1 TLV value(V) bytes
         * @return hexadecimal string of ASN.1 TLV value(V) bytes
         */
        getValueHex(): string;

        getFreshValueHex(): string;
    }
}
