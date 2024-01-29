declare namespace jsrsasign.KJUR.asn1.cades {
    namespace CAdESUtil {
        /**
         * parse CMS SignedData to add unsigned attributes
         * @param hex hexadecimal string of ContentInfo of CMS SignedData
         * @return associative array of parsed data
         * @description
         * This method will parse a hexadecimal string of
         * ContentInfo with CMS SignedData to add a attribute
         * to unsigned attributes field in a signerInfo field.
         * Parsed result will be an associative array which has
         * following properties:
         *
         * - version - hex of CMSVersion ASN.1 TLV
         * - algs - hex of DigestAlgorithms ASN.1 TLV
         * - encapcontent - hex of EncapContentInfo ASN.1 TLV
         * - certs - hex of Certificates ASN.1 TLV
         * - revs - hex of RevocationInfoChoices ASN.1 TLV
         * - si[] - array of SignerInfo properties
         * - obj - parsed KJUR.asn1.cms.SignedData object
         *
         * @example
         * info = KJUR.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned(beshex);
         * sd = info.obj;
         */
        function parseSignedDataForAddingUnsigned(hex: string): {
            version: string;
            algs: string;
            certs: string;
            revs: string;
            si: cms.SignerInfo[];
            obj: cms.SignedData;
        };

        /**
         * parse SignerInfo to add unsigned attributes
         * @param hex hexadecimal string of SignerInfo
         * @return associative array of parsed data
         * @description
         * This method will parse a hexadecimal string of
         * SignerInfo to add a attribute
         * to unsigned attributes field in a signerInfo field.
         * Parsed result will be an associative array which has
         * following properties:
         *
         * - version - hex TLV of version
         * - si - hex TLV of SignerIdentifier
         * - digalg - hex TLV of DigestAlgorithm
         * - sattrs - hex TLV of SignedAttributes
         * - sigalg - hex TLV of SignatureAlgorithm
         * - sig - hex TLV of signature
         * - sigval = hex V of signature
         * - obj - parsed KJUR.asn1.cms.SignerInfo object
         *
         * NOTE: Parsing of unsigned attributes will be provided in the
         * future version. That's way this version provides support
         * for CAdES-T and not for CAdES-C.
         */
        function parseSignerInfoForAddingUnsigned(
            hex: string,
            iSI: number,
            nth: number,
        ): {
            version: string;
            si: string;
            digalg: string;
            sattrs: string;
            sigalg: string;
            sigval: string;
            obj: cms.SignerInfo;
        };
    }
}
